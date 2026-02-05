import { WaitlistForm } from "@/components/WaitlistForm";

const features = [
  {
    title: "Replay any webhook",
    description:
      "Capture real production payloads and replay them to staging or localhost with one click.",
  },
  {
    title: "Diff payload versions",
    description:
      "See exactly what changed between webhook versions with structured JSON diffs.",
  },
  {
    title: "Signature control",
    description:
      "Toggle signatures on/off, swap secrets, and override headers safely.",
  },
  {
    title: "Auto-generate tests",
    description:
      "Turn real payloads into contract tests so breaking changes never sneak in again.",
  },
  {
    title: "Searchable history",
    description:
      "Filter by provider, status, or header to find the payload you need instantly.",
  },
  {
    title: "Team ready",
    description:
      "Share payloads, notes, and replays with the people who debug with you.",
  },
];

const steps = [
  {
    title: "Capture",
    description:
      "Send webhooks to HookEcho’s secure endpoint or proxy. We store headers, body, and timing.",
  },
  {
    title: "Replay",
    description:
      "Choose a target URL, tweak headers/body, and replay with signature on/off.",
  },
  {
    title: "Lock the contract",
    description:
      "Generate tests from real traffic and keep integrations stable over time.",
  },
];

const useCases = [
  "Debug production failures faster",
  "Validate breaking changes before release",
  "QA third-party integrations with real payloads",
  "Build regression tests from real traffic",
];

const faqs = [
  {
    q: "Is this a proxy or a webhook inbox?",
    a: "Both. You can forward webhooks directly to HookEcho or put it in front as a proxy.",
  },
  {
    q: "Does HookEcho store secrets?",
    a: "Secrets are optional. You can replay without signatures, or store one per endpoint.",
  },
  {
    q: "Which providers are supported?",
    a: "Any provider that sends webhooks. Stripe, GitHub, Slack, and custom sources all work.",
  },
  {
    q: "Can I self-host?",
    a: "Early access is hosted only. Self-hosting will be a paid option later.",
  },
];

const pricing = [
  {
    name: "Solo",
    price: "$19",
    note: "per month",
    features: ["1 workspace", "10k events / month", "Replay + diffs"],
  },
  {
    name: "Team",
    price: "$49",
    note: "per seat",
    features: [
      "Unlimited events",
      "Team sharing",
      "Contract test generator",
    ],
    highlight: true,
  },
  {
    name: "Enterprise",
    price: "Custom",
    note: "annual",
    features: ["SLA", "Audit logs", "Self-hosted"],
  },
];

export default function Home() {
  return (
    <div className="bg-slate-950 text-slate-100">
      <header className="border-b border-slate-800/60">
        <div className="mx-auto flex w-full max-w-6xl items-center justify-between px-6 py-6">
          <div className="flex items-center gap-3">
            <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-gradient-to-br from-cyan-400 to-indigo-500 text-sm font-bold text-slate-950">
              HE
            </div>
            <div>
              <div className="text-sm uppercase tracking-[0.2em] text-slate-400">
                HookEcho
              </div>
              <div className="text-xs text-slate-500">
                Webhook Replay + Contract Tests
              </div>
            </div>
          </div>
          <nav className="hidden items-center gap-6 text-sm text-slate-300 md:flex">
            <a className="hover:text-white" href="#features">
              Features
            </a>
            <a className="hover:text-white" href="#how-it-works">
              How it works
            </a>
            <a className="hover:text-white" href="#pricing">
              Pricing
            </a>
            <a className="hover:text-white" href="#faq">
              FAQ
            </a>
          </nav>
          <a
            className="rounded-full border border-slate-700 px-4 py-2 text-sm text-slate-200 transition hover:border-slate-500 hover:text-white"
            href="#waitlist"
          >
            Join waitlist
          </a>
        </div>
      </header>

      <main>
        <section className="relative overflow-hidden">
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,_rgba(59,130,246,0.15),_transparent_60%)]" />
          <div className="relative mx-auto flex w-full max-w-6xl flex-col gap-12 px-6 py-20 lg:flex-row lg:items-center">
            <div className="flex-1">
              <div className="mb-4 inline-flex items-center gap-2 rounded-full border border-slate-800 bg-slate-900/50 px-4 py-2 text-xs uppercase tracking-[0.2em] text-slate-400">
                Webhook Replay + Contract Tests
              </div>
              <h1 className="text-4xl font-semibold leading-tight text-white sm:text-5xl">
                Fix webhook failures in minutes, not hours.
              </h1>
              <p className="mt-5 max-w-xl text-lg text-slate-300">
                Capture real payloads, replay them safely, diff versions, and
                auto-generate tests that keep integrations stable.
              </p>
              <div className="mt-8 flex flex-wrap gap-4">
                <a
                  className="rounded-full bg-white px-6 py-3 text-sm font-semibold text-slate-950 transition hover:bg-slate-200"
                  href="#waitlist"
                >
                  Join the waitlist
                </a>
                <a
                  className="rounded-full border border-slate-700 px-6 py-3 text-sm text-slate-200 transition hover:border-slate-500"
                  href="#features"
                >
                  See how it works
                </a>
              </div>
              <div className="mt-6 text-xs text-slate-500">
                Works with Stripe, GitHub, Slack, Shopify, and custom providers.
              </div>
            </div>

            <div className="flex-1">
              <div className="rounded-3xl border border-slate-800 bg-slate-900/60 p-6 shadow-2xl shadow-slate-950">
                <div className="flex items-center justify-between text-xs text-slate-400">
                  <span>Replay request</span>
                  <span className="rounded-full bg-emerald-500/20 px-2 py-1 text-emerald-300">
                    Success
                  </span>
                </div>
                <div className="mt-4 rounded-2xl border border-slate-800 bg-slate-950/70 p-4 text-xs text-slate-300">
                  <div className="flex items-center justify-between">
                    <span className="font-semibold">POST /webhooks/stripe</span>
                    <span className="text-slate-500">2s ago</span>
                  </div>
                  <pre className="mt-3 overflow-hidden text-[11px] text-slate-400">
{`{
  "id": "evt_123",
  "type": "invoice.payment_failed",
  "data": { "object": { "amount_due": 1200 } }
}`}
                  </pre>
                </div>
                <div className="mt-4 grid gap-3 sm:grid-cols-2">
                  <div className="rounded-2xl border border-slate-800 bg-slate-950/70 p-4">
                    <div className="text-xs text-slate-500">Signature</div>
                    <div className="mt-2 text-sm text-white">Enabled</div>
                  </div>
                  <div className="rounded-2xl border border-slate-800 bg-slate-950/70 p-4">
                    <div className="text-xs text-slate-500">Target</div>
                    <div className="mt-2 text-sm text-white">
                      http://localhost:3000
                    </div>
                  </div>
                </div>
                <div className="mt-4 rounded-2xl border border-slate-800 bg-gradient-to-br from-slate-900 to-slate-950 p-4">
                  <div className="text-xs text-slate-500">Diff summary</div>
                  <div className="mt-2 text-sm text-white">
                    2 fields changed · amount_due + retry_count
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section id="features" className="mx-auto w-full max-w-6xl px-6 py-16">
          <div className="flex flex-col gap-3">
            <div className="text-xs uppercase tracking-[0.3em] text-slate-500">
              Features
            </div>
            <h2 className="text-3xl font-semibold text-white">
              Everything you need to debug webhooks fast.
            </h2>
            <p className="max-w-2xl text-slate-400">
              Capture, replay, compare, and lock in contracts without having to
              hack together fragile scripts.
            </p>
          </div>
          <div className="mt-10 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {features.map((feature) => (
              <div
                key={feature.title}
                className="rounded-2xl border border-slate-800 bg-slate-900/50 p-6"
              >
                <div className="text-lg font-semibold text-white">
                  {feature.title}
                </div>
                <div className="mt-2 text-sm text-slate-400">
                  {feature.description}
                </div>
              </div>
            ))}
          </div>
        </section>

        <section
          id="how-it-works"
          className="mx-auto w-full max-w-6xl px-6 py-16"
        >
          <div className="grid gap-10 lg:grid-cols-[1.2fr_1fr]">
            <div>
              <div className="text-xs uppercase tracking-[0.3em] text-slate-500">
                How it works
              </div>
              <h2 className="mt-3 text-3xl font-semibold text-white">
                Capture → Replay → Test
              </h2>
              <p className="mt-4 max-w-xl text-slate-400">
                HookEcho plugs into your existing webhook pipeline and gives you
                the tools to reproduce issues and keep integrations stable.
              </p>
              <ul className="mt-6 space-y-3 text-sm text-slate-300">
                {useCases.map((item) => (
                  <li key={item} className="flex items-center gap-3">
                    <span className="flex h-6 w-6 items-center justify-center rounded-full bg-emerald-500/20 text-emerald-300">
                      ✓
                    </span>
                    {item}
                  </li>
                ))}
              </ul>
            </div>
            <div className="space-y-4">
              {steps.map((step, index) => (
                <div
                  key={step.title}
                  className="rounded-2xl border border-slate-800 bg-slate-900/50 p-6"
                >
                  <div className="text-xs text-slate-500">
                    Step {index + 1}
                  </div>
                  <div className="mt-2 text-lg font-semibold text-white">
                    {step.title}
                  </div>
                  <div className="mt-2 text-sm text-slate-400">
                    {step.description}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section id="pricing" className="mx-auto w-full max-w-6xl px-6 py-16">
          <div className="flex flex-col gap-3">
            <div className="text-xs uppercase tracking-[0.3em] text-slate-500">
              Pricing
            </div>
            <h2 className="text-3xl font-semibold text-white">
              Early access pricing that grows with you.
            </h2>
            <p className="max-w-2xl text-slate-400">
              Lock in early access and help shape the roadmap.
            </p>
          </div>
          <div className="mt-10 grid gap-6 lg:grid-cols-3">
            {pricing.map((plan) => (
              <div
                key={plan.name}
                className={`rounded-2xl border p-6 ${
                  plan.highlight
                    ? "border-cyan-400/60 bg-gradient-to-br from-slate-900 to-slate-950"
                    : "border-slate-800 bg-slate-900/50"
                }`}
              >
                <div className="text-sm uppercase tracking-[0.2em] text-slate-400">
                  {plan.name}
                </div>
                <div className="mt-4 text-3xl font-semibold text-white">
                  {plan.price}
                  <span className="ml-2 text-sm text-slate-400">{plan.note}</span>
                </div>
                <ul className="mt-4 space-y-2 text-sm text-slate-300">
                  {plan.features.map((feature) => (
                    <li key={feature} className="flex items-center gap-2">
                      <span className="text-emerald-300">✓</span>
                      {feature}
                    </li>
                  ))}
                </ul>
                <a
                  className="mt-6 inline-flex w-full items-center justify-center rounded-full bg-white px-4 py-2 text-sm font-semibold text-slate-950 transition hover:bg-slate-200"
                  href="#waitlist"
                >
                  Join waitlist
                </a>
              </div>
            ))}
          </div>
        </section>

        <section id="faq" className="mx-auto w-full max-w-6xl px-6 py-16">
          <div className="grid gap-10 lg:grid-cols-[1fr_1.2fr]">
            <div>
              <div className="text-xs uppercase tracking-[0.3em] text-slate-500">
                FAQ
              </div>
              <h2 className="mt-3 text-3xl font-semibold text-white">
                Common questions
              </h2>
              <p className="mt-4 text-slate-400">
                Want a feature? Join the waitlist and tell us what you need.
              </p>
            </div>
            <div className="space-y-4">
              {faqs.map((faq) => (
                <div
                  key={faq.q}
                  className="rounded-2xl border border-slate-800 bg-slate-900/50 p-6"
                >
                  <div className="text-base font-semibold text-white">
                    {faq.q}
                  </div>
                  <div className="mt-2 text-sm text-slate-400">{faq.a}</div>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section
          id="waitlist"
          className="mx-auto w-full max-w-6xl px-6 pb-20"
        >
          <div className="rounded-3xl border border-slate-800 bg-gradient-to-br from-slate-900 to-slate-950 p-10">
            <div className="grid gap-10 lg:grid-cols-[1.1fr_1fr]">
              <div>
                <div className="text-xs uppercase tracking-[0.3em] text-slate-500">
                  Early access
                </div>
                <h2 className="mt-3 text-3xl font-semibold text-white">
                  Get invited first.
                </h2>
                <p className="mt-4 text-slate-400">
                  Join the waitlist to get early access pricing, private beta
                  invites, and roadmap input.
                </p>
                <ul className="mt-6 space-y-3 text-sm text-slate-300">
                  <li className="flex items-center gap-3">
                    <span className="text-emerald-300">✓</span>
                    Priority access to closed beta
                  </li>
                  <li className="flex items-center gap-3">
                    <span className="text-emerald-300">✓</span>
                    Lock in early access pricing
                  </li>
                  <li className="flex items-center gap-3">
                    <span className="text-emerald-300">✓</span>
                    Influence feature roadmap
                  </li>
                </ul>
              </div>
              <WaitlistForm source="footer" />
            </div>
          </div>
        </section>
      </main>

      <footer className="border-t border-slate-800/60">
        <div className="mx-auto flex w-full max-w-6xl flex-col items-center justify-between gap-4 px-6 py-8 text-xs text-slate-500 md:flex-row">
          <div>© {new Date().getFullYear()} HookEcho. All rights reserved.</div>
          <div>Built for teams tired of webhook chaos.</div>
        </div>
      </footer>
    </div>
  );
}
