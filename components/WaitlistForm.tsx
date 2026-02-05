"use client";

import { useState } from "react";

const volumeOptions = [
  "0-100 / day",
  "100-1k / day",
  "1k-10k / day",
  "10k+ / day",
];

const stackOptions = [
  "Node.js",
  "Python",
  "Ruby",
  "Go",
  "PHP",
  "Other",
];

type Status = "idle" | "loading" | "success" | "error";

export function WaitlistForm({ source = "hero" }: { source?: string }) {
  const [status, setStatus] = useState<Status>("idle");
  const [message, setMessage] = useState<string>("");

  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setStatus("loading");
    setMessage("");

    const formData = new FormData(event.currentTarget);
    const payload = {
      email: String(formData.get("email") || ""),
      company: String(formData.get("company") || ""),
      volume: String(formData.get("volume") || ""),
      stack: String(formData.get("stack") || ""),
      pain: String(formData.get("pain") || ""),
      source,
    };

    try {
      const response = await fetch("/api/waitlist", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(payload),
      });

      if (!response.ok) {
        const data = await response.json().catch(() => ({}));
        throw new Error(data?.error || "Something went wrong");
      }

      setStatus("success");
      setMessage("You’re on the list. We’ll reach out soon.");
      event.currentTarget.reset();
    } catch (error) {
      setStatus("error");
      setMessage(
        error instanceof Error ? error.message : "Something went wrong"
      );
    }
  };

  return (
    <form className="space-y-4" onSubmit={handleSubmit}>
      <div className="grid gap-4 md:grid-cols-2">
        <label className="space-y-2 text-sm text-slate-300">
          <span>Email *</span>
          <input
            type="email"
            name="email"
            required
            placeholder="you@company.com"
            className="w-full rounded-xl border border-slate-700 bg-slate-900/70 px-4 py-3 text-sm text-white placeholder:text-slate-500 focus:border-cyan-400 focus:outline-none"
            disabled={status === "loading"}
          />
        </label>
        <label className="space-y-2 text-sm text-slate-300">
          <span>Company</span>
          <input
            type="text"
            name="company"
            placeholder="Acme Inc."
            className="w-full rounded-xl border border-slate-700 bg-slate-900/70 px-4 py-3 text-sm text-white placeholder:text-slate-500 focus:border-cyan-400 focus:outline-none"
            disabled={status === "loading"}
          />
        </label>
      </div>

      <div className="grid gap-4 md:grid-cols-2">
        <label className="space-y-2 text-sm text-slate-300">
          <span>Webhook volume</span>
          <select
            name="volume"
            className="w-full rounded-xl border border-slate-700 bg-slate-900/70 px-4 py-3 text-sm text-white focus:border-cyan-400 focus:outline-none"
            disabled={status === "loading"}
            defaultValue=""
          >
            <option value="" disabled>
              Select volume
            </option>
            {volumeOptions.map((option) => (
              <option key={option} value={option}>
                {option}
              </option>
            ))}
          </select>
        </label>
        <label className="space-y-2 text-sm text-slate-300">
          <span>Stack</span>
          <select
            name="stack"
            className="w-full rounded-xl border border-slate-700 bg-slate-900/70 px-4 py-3 text-sm text-white focus:border-cyan-400 focus:outline-none"
            disabled={status === "loading"}
            defaultValue=""
          >
            <option value="" disabled>
              Select stack
            </option>
            {stackOptions.map((option) => (
              <option key={option} value={option}>
                {option}
              </option>
            ))}
          </select>
        </label>
      </div>

      <label className="space-y-2 text-sm text-slate-300">
        <span>Biggest pain</span>
        <textarea
          name="pain"
          rows={3}
          placeholder="Flaky retries, debugging failures, missing payloads..."
          className="w-full rounded-xl border border-slate-700 bg-slate-900/70 px-4 py-3 text-sm text-white placeholder:text-slate-500 focus:border-cyan-400 focus:outline-none"
          disabled={status === "loading"}
        />
      </label>

      <button
        type="submit"
        className="w-full rounded-full bg-white px-6 py-3 text-sm font-semibold text-slate-950 transition hover:bg-slate-200 disabled:cursor-not-allowed disabled:opacity-60"
        disabled={status === "loading" || status === "success"}
      >
        {status === "loading" ? "Submitting..." : "Join the waitlist"}
      </button>

      {message && (
        <div
          className={`rounded-xl border px-4 py-3 text-sm ${
            status === "success"
              ? "border-emerald-500/40 bg-emerald-500/10 text-emerald-200"
              : "border-rose-500/40 bg-rose-500/10 text-rose-200"
          }`}
        >
          {message}
        </div>
      )}

      <p className="text-xs text-slate-500">
        No spam. Early access only. Unsubscribe anytime.
      </p>
    </form>
  );
}
