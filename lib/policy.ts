export type PolicyResult = {
  returnWindowDays?: number;
  warrantyMonths?: number;
  // human-facing sources; show in UI.
  sources: string[];
  disclaimer: string;
};

const DISCLAIMER =
  "Not legal advice. These are general defaults; retailer policies and local rules can differ.";

export function getPolicyDefaults(countryCode: string): PolicyResult {
  const c = countryCode.trim().toUpperCase();

  // We keep it intentionally conservative: defaults + a source string.
  if (c === "UK" || c === "GB") {
    return {
      // UK return windows are retailer-specific; keep undefined.
      warrantyMonths: undefined,
      sources: [
        "UK Consumer Rights Act 2015 (limitation period commonly up to 6 years; 5 in Scotland)",
      ],
      disclaimer: DISCLAIMER,
    };
  }

  // EU (and EEA-ish) defaults.
  return {
    returnWindowDays: 14,
    warrantyMonths: 24,
    sources: [
      "EU Consumer Rights Directive (14‑day online cooling‑off) — default",
      "EU Sale of Goods Directive (2‑year legal guarantee) — default",
    ],
    disclaimer: DISCLAIMER,
  };
}

export type SuggestedReminder = {
  kind: "return-window" | "warranty-expiry";
  remindAt: Date;
  channel: "email" | "push";
};

export function suggestReminders(args: {
  countryCode: string;
  purchaseDate: Date;
  channels: Array<"email" | "push">;
}): { reminders: SuggestedReminder[]; policy: PolicyResult } {
  const policy = getPolicyDefaults(args.countryCode);
  const reminders: SuggestedReminder[] = [];

  const purchase = args.purchaseDate;

  const addDays = (d: Date, days: number) => {
    const out = new Date(d);
    out.setDate(out.getDate() + days);
    return out;
  };
  const addMonths = (d: Date, months: number) => {
    const out = new Date(d);
    out.setMonth(out.getMonth() + months);
    return out;
  };

  const makeForChannels = (kind: SuggestedReminder["kind"], remindAt: Date) => {
    for (const ch of args.channels) reminders.push({ kind, remindAt, channel: ch });
  };

  if (typeof policy.returnWindowDays === "number") {
    // Nudge 2 days before window ends.
    makeForChannels(
      "return-window",
      addDays(purchase, Math.max(0, policy.returnWindowDays - 2))
    );
  }

  if (typeof policy.warrantyMonths === "number") {
    // Nudge 30 days before expiry.
    const expiry = addMonths(purchase, policy.warrantyMonths);
    makeForChannels("warranty-expiry", addDays(expiry, -30));
  }

  return { reminders, policy };
}
