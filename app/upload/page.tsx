"use client";

import { useMemo, useState } from "react";

// pdfjs-dist in Next: we use the legacy build and set workerSrc from CDN.
import * as pdfjsLib from "pdfjs-dist/legacy/build/pdf.mjs";

import Tesseract from "tesseract.js";

type ExtractResult = {
  extractedText: string;
  filename?: string;
  mimeType?: string;
};

function isoDateOnly(d: Date) {
  return d.toISOString().slice(0, 10);
}

async function extractFromImage(file: File): Promise<ExtractResult> {
  const { data } = await Tesseract.recognize(file, "eng");
  return { extractedText: data.text ?? "", filename: file.name, mimeType: file.type };
}

async function extractFromPdf(file: File): Promise<ExtractResult> {
  // Use CDN worker to avoid bundling pain for MVP.
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  (pdfjsLib as any).GlobalWorkerOptions.workerSrc =
    "https://cdn.jsdelivr.net/npm/pdfjs-dist@4.10.38/legacy/build/pdf.worker.min.mjs";

  const buffer = await file.arrayBuffer();
  const pdf = await pdfjsLib.getDocument({ data: buffer }).promise;

  // Try text layer first (fast).
  let text = "";
  const page = await pdf.getPage(1);
  const content = await page.getTextContent();
  text = content.items
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    .map((it: any) => (typeof it.str === "string" ? it.str : ""))
    .join(" ")
    .trim();

  if (text) {
    return { extractedText: text, filename: file.name, mimeType: file.type };
  }

  // Fallback: render page 1 and OCR it.
  const viewport = page.getViewport({ scale: 2 });
  const canvas = document.createElement("canvas");
  const ctx = canvas.getContext("2d");
  if (!ctx) throw new Error("no_canvas_context");
  canvas.width = viewport.width;
  canvas.height = viewport.height;

  await page.render({ canvasContext: ctx, viewport }).promise;

  const blob: Blob = await new Promise((resolve) =>
    canvas.toBlob((b) => resolve(b ?? new Blob()), "image/png")
  );

  const { data } = await Tesseract.recognize(blob, "eng");

  return {
    extractedText: data.text ?? "",
    filename: file.name,
    mimeType: file.type,
  };
}

export default function UploadPage() {
  const [status, setStatus] = useState<string>("");
  const [extracted, setExtracted] = useState<ExtractResult | null>(null);

  const [name, setName] = useState("");
  const [retailer, setRetailer] = useState("");
  const [purchaseDate, setPurchaseDate] = useState(isoDateOnly(new Date()));
  const [countryCode, setCountryCode] = useState("DE");

  const canSubmit = useMemo(() => {
    return Boolean(name.trim() && purchaseDate && countryCode.trim());
  }, [name, purchaseDate, countryCode]);

  async function onPick(file: File) {
    setStatus("Extracting…");
    setExtracted(null);

    try {
      if (file.type === "application/pdf" || file.name.toLowerCase().endsWith(".pdf")) {
        setExtracted(await extractFromPdf(file));
      } else {
        setExtracted(await extractFromImage(file));
      }

      setStatus("Extracted. Please confirm details.");
    } catch (e) {
      setStatus(e instanceof Error ? e.message : "extract_failed");
    }
  }

  async function onSubmit() {
    if (!extracted) return;
    setStatus("Saving…");

    const res = await fetch("/api/items", {
      method: "POST",
      headers: { "content-type": "application/json" },
      body: JSON.stringify({
        name,
        retailer,
        purchaseDate,
        countryCode,
        extractedText: extracted.extractedText,
        filename: extracted.filename,
        mimeType: extracted.mimeType,
        channels: ["email", "push"],
      }),
    });

    const json = (await res.json().catch(() => null)) as { ok?: boolean; itemId?: number; error?: string } | null;

    if (!res.ok || !json?.ok) {
      setStatus(json?.error ?? "save_failed");
      return;
    }

    setStatus(`Saved item #${json.itemId}. Reminders scheduled.`);
  }

  async function enablePush() {
    setStatus("Enabling push…");
    try {
      if (!("serviceWorker" in navigator)) {
        setStatus("Service workers not supported in this browser.");
        return;
      }

      const reg = await navigator.serviceWorker.register("/sw.js");

      // Note: Real push requires VAPID public key + web-push. This is just wiring.
      // eslint-disable-next-line @typescript-eslint/no-explicit-any
      const sub = await (reg.pushManager as any).subscribe?.({ userVisibleOnly: true });
      if (!sub) {
        setStatus(
          "Push subscription not available yet (TODO: VAPID/public key). For iOS: Add to Home Screen first."
        );
        return;
      }

      await fetch("/api/push/subscribe", {
        method: "POST",
        headers: { "content-type": "application/json" },
        body: JSON.stringify({ subscription: sub }),
      });

      setStatus("Push subscription stored.");
    } catch (e) {
      setStatus(e instanceof Error ? e.message : "push_enable_failed");
    }
  }

  return (
    <div className="mx-auto w-full max-w-2xl px-6 py-10">
      <h1 className="text-2xl font-semibold text-slate-900">Add a receipt</h1>
      <p className="mt-2 text-sm text-slate-600">
        MVP (B): Push + Email only. Upload a PDF/JPG/PNG, we extract text locally, then you confirm.
      </p>

      <div className="mt-6 rounded-2xl border border-slate-200 bg-white p-5">
        <label className="text-sm font-medium text-slate-800">Receipt file</label>
        <input
          className="mt-2 block w-full text-sm"
          type="file"
          accept="application/pdf,image/png,image/jpeg"
          onChange={(e) => {
            const f = e.target.files?.[0];
            if (f) void onPick(f);
          }}
        />

        <div className="mt-4 grid grid-cols-1 gap-4 sm:grid-cols-2">
          <div>
            <label className="text-sm font-medium text-slate-800">Item name</label>
            <input
              className="mt-1 w-full rounded-xl border border-slate-200 px-3 py-2 text-sm"
              value={name}
              onChange={(e) => setName(e.target.value)}
              placeholder="e.g. AirPods Pro"
            />
          </div>
          <div>
            <label className="text-sm font-medium text-slate-800">Retailer</label>
            <input
              className="mt-1 w-full rounded-xl border border-slate-200 px-3 py-2 text-sm"
              value={retailer}
              onChange={(e) => setRetailer(e.target.value)}
              placeholder="e.g. Amazon"
            />
          </div>
          <div>
            <label className="text-sm font-medium text-slate-800">Purchase date</label>
            <input
              className="mt-1 w-full rounded-xl border border-slate-200 px-3 py-2 text-sm"
              type="date"
              value={purchaseDate}
              onChange={(e) => setPurchaseDate(e.target.value)}
            />
          </div>
          <div>
            <label className="text-sm font-medium text-slate-800">Country</label>
            <input
              className="mt-1 w-full rounded-xl border border-slate-200 px-3 py-2 text-sm"
              value={countryCode}
              onChange={(e) => setCountryCode(e.target.value.toUpperCase())}
              placeholder="DE / UK"
            />
          </div>
        </div>

        <div className="mt-4 flex flex-wrap gap-3">
          <button
            className="rounded-full bg-slate-900 px-4 py-2 text-sm font-semibold text-white disabled:opacity-40"
            onClick={() => void onSubmit()}
            disabled={!extracted || !canSubmit}
          >
            Save item
          </button>
          <button
            className="rounded-full border border-slate-200 bg-white px-4 py-2 text-sm font-semibold text-slate-800"
            onClick={() => void enablePush()}
          >
            Enable push (skeleton)
          </button>
        </div>

        {status ? (
          <div className="mt-4 text-sm text-slate-700">{status}</div>
        ) : null}

        {extracted?.extractedText ? (
          <details className="mt-4">
            <summary className="cursor-pointer text-sm font-medium text-slate-800">
              Extracted text (preview)
            </summary>
            <pre className="mt-2 max-h-64 overflow-auto rounded-xl bg-slate-950 p-3 text-xs text-slate-100">
              {extracted.extractedText}
            </pre>
          </details>
        ) : null}
      </div>

      <div className="mt-6 text-xs text-slate-500">
        iOS note: Push requires &quot;Add to Home Screen&quot;. Email sending is console-only for now.
      </div>
    </div>
  );
}
