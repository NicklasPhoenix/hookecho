import { WaitlistForm } from "@/components/WaitlistForm";

const highlights = [
  {
    title: "Receipt vault",
    description:
      "Scan or forward receipts and keep every warranty in one calm, searchable place.",
  },
  {
    title: "Expiry radar",
    description:
      "We track timelines and nudge you before warranties or returns expire.",
  },
  {
    title: "Claim kits",
    description:
      "One tap gives you a clean claim bundle with receipt, serial, and steps.",
  },
];

const claimKit = [
  "Receipt + purchase date",
  "Serial number + model",
  "Store policy link",
  "Claim checklist",
];

const features = [
  {
    title: "Auto warranty dates",
    description: "We parse purchase dates and calculate timelines for you.",
  },
  {
    title: "Serial + model storage",
    description: "Save serials, order IDs, and proof of purchase in one place.",
  },
  {
    title: "Claim-ready exports",
    description: "One tap gives you a PDF bundle with everything needed.",
  },
  {
    title: "Return window alerts",
    description: "Never miss short return windows again.",
  },
  {
    title: "Family sharing",
    description: "Keep the whole household organized in a shared wallet.",
  },
  {
    title: "Store policy shortcuts",
    description: "Quick links to warranty and return policies by store.",
  },
];

const categories = [
  "Electronics",
  "Appliances",
  "Furniture",
  "Baby gear",
  "Tools",
  "Jewelry",
];

const steps = [
  {
    title: "Add a purchase",
    description: "Snap a receipt or paste a product link. Done in 30 seconds.",
  },
  {
    title: "We organize it",
    description: "Warranty Wallet calculates expiry dates and stores proof.",
  },
  {
    title: "Claim fast",
    description: "Get a reminder + claim kit before it’s too late.",
  },
];

const pricing = [
  {
    name: "Free",
    price: "$0",
    note: "forever",
    features: ["10 items", "Basic reminders", "Receipt vault"],
  },
  {
    name: "Plus",
    price: "$5",
    note: "per month",
    features: ["Unlimited items", "Priority reminders", "Claim exports"],
    highlight: true,
  },
  {
    name: "Family",
    price: "$8",
    note: "per month",
    features: ["Up to 5 people", "Shared wallet", "Bulk import"],
  },
];

const faqs = [
  {
    q: "Do I need to connect email?",
    a: "No. You can forward receipts or upload manually. Email sync is optional.",
  },
  {
    q: "What data do you store?",
    a: "Only what you add: receipts, product info, warranty dates, and notes.",
  },
  {
    q: "Does this work in the EU?",
    a: "Yes — we start with EU warranty timelines and add store policies next.",
  },
  {
    q: "Can I export my data?",
    a: "Yes. One tap exports a PDF or CSV claim bundle.",
  },
];

export default function Home() {
  return (
    <div className="bg-[#f8fafc] text-slate-900">
      <header className="border-b border-slate-200 bg-white/80 backdrop-blur">
        <div className="mx-auto flex w-full max-w-6xl items-center justify-between px-6 py-5">
          <div className="flex items-center gap-3">
            <div className="flex h-10 w-10 items-center justify-center rounded-2xl bg-gradient-to-br from-indigo-500 to-sky-400 text-sm font-bold text-white">
              WW
            </div>
            <div>
              <div className="text-sm font-semibold text-slate-900">
                Warranty Wallet
              </div>
              <div className="text-xs text-slate-500">
                Every warranty, always ready
              </div>
            </div>
          </div>
          <nav className="hidden items-center gap-6 text-sm text-slate-600 md:flex">
            <a className="hover:text-slate-900" href="#features">
              Features
            </a>
            <a className="hover:text-slate-900" href="#claim-kit">
              Claim kit
            </a>
            <a className="hover:text-slate-900" href="#pricing">
              Pricing
            </a>
            <a className="hover:text-slate-900" href="#faq">
              FAQ
            </a>
          </nav>
          <div className="flex items-center gap-3">
            <a
              className="rounded-full bg-indigo-600 px-4 py-2 text-sm font-semibold text-white shadow-sm transition hover:bg-indigo-700"
              href="#waitlist"
            >
              Join waitlist
            </a>
            <a
              className="rounded-full border border-slate-200 bg-white px-4 py-2 text-sm font-semibold text-slate-700 transition hover:border-slate-300"
              href="/upload"
            >
              Try MVP
            </a>
          </div>
        </div>
      </header>

      <main>
        <section className="relative overflow-hidden">
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,_rgba(56,189,248,0.18),_transparent_60%)]" />
          <div className="relative mx-auto flex w-full max-w-6xl flex-col gap-12 px-6 pb-20 pt-16 lg:flex-row lg:items-center">
            <div className="flex-1">
              <div className="mb-4 inline-flex items-center gap-2 rounded-full bg-indigo-50 px-4 py-1 text-xs font-semibold uppercase tracking-[0.2em] text-indigo-600">
                warranty tracking
              </div>
              <h1 className="text-4xl font-semibold leading-tight text-slate-900 sm:text-5xl">
                Receipts shouldn’t be treasure hunts.
              </h1>
              <p className="mt-5 max-w-xl text-lg text-slate-600">
                Warranty Wallet turns receipts into clean, claim-ready cards and
                reminds you before time runs out.
              </p>
              <div className="mt-8 flex flex-wrap gap-4">
                <a
                  className="rounded-full bg-indigo-600 px-6 py-3 text-sm font-semibold text-white shadow-sm transition hover:bg-indigo-700"
                  href="#waitlist"
                >
                  Join the waitlist
                </a>
                <a
                  className="rounded-full border border-slate-200 bg-white px-6 py-3 text-sm font-semibold text-slate-700 transition hover:border-slate-300"
                  href="#claim-kit"
                >
                  See a claim kit
                </a>
              </div>
              <div className="mt-6 flex flex-wrap items-center gap-4 text-xs text-slate-500">
                <span>EU warranty timelines baked in</span>
                <span>No bank access</span>
                <span>Add in 30 seconds</span>
              </div>
            </div>

            <div className="flex-1">
              <div className="rounded-3xl border border-slate-200 bg-white p-6 shadow-xl">
                <div className="flex items-center justify-between text-xs text-slate-500">
                  <span>Warranty card</span>
                  <span className="rounded-full bg-indigo-50 px-2 py-1 text-indigo-600">
                    14 months left
                  </span>
                </div>
                <div className="mt-4 rounded-2xl border border-slate-200 bg-slate-50 p-4 text-xs text-slate-600">
                  <div className="flex items-center justify-between">
                    <span className="font-semibold text-slate-900">
                      Dyson V15 Detect
                    </span>
                    <span>Active</span>
                  </div>
                  <pre className="mt-3 overflow-hidden text-[11px] text-slate-500">
{`Purchase: 12 Apr 2026
Store: MediaMarkt
Serial: DY-V15-2219`}
                  </pre>
                </div>
                <div className="mt-4 grid gap-3 sm:grid-cols-2">
                  <div className="rounded-2xl border border-slate-200 bg-white p-4">
                    <div className="text-xs text-slate-500">Claim status</div>
                    <div className="mt-2 text-sm font-semibold text-slate-900">
                      Ready
                    </div>
                  </div>
                  <div className="rounded-2xl border border-slate-200 bg-white p-4">
                    <div className="text-xs text-slate-500">Receipt</div>
                    <div className="mt-2 text-sm font-semibold text-slate-900">
                      Stored
                    </div>
                  </div>
                </div>
                <div className="mt-4 rounded-2xl border border-slate-200 bg-gradient-to-br from-indigo-50 to-sky-50 p-4">
                  <div className="text-xs text-slate-500">Next reminder</div>
                  <div className="mt-2 text-sm font-semibold text-slate-900">
                    60 days before expiry
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="mx-auto w-full max-w-6xl px-6 pb-10">
          <div className="grid gap-6 md:grid-cols-3">
            {highlights.map((item) => (
              <div
                key={item.title}
                className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm"
              >
                <div className="text-lg font-semibold text-slate-900">
                  {item.title}
                </div>
                <div className="mt-2 text-sm text-slate-600">
                  {item.description}
                </div>
              </div>
            ))}
          </div>
        </section>

        <section className="mx-auto w-full max-w-6xl px-6 py-12">
          <div className="rounded-3xl border border-slate-200 bg-white p-8 shadow-sm lg:p-12">
            <div className="grid gap-8 lg:grid-cols-[1.1fr_1fr]">
              <div>
                <div className="text-xs uppercase tracking-[0.3em] text-indigo-600">
                  The reality
                </div>
                <h2 className="mt-3 text-3xl font-semibold text-slate-900">
                  Most warranty claims fail because of missing proof.
                </h2>
                <p className="mt-4 text-slate-600">
                  Receipts get lost. Serial numbers vanish. Deadlines sneak up.
                  Warranty Wallet keeps everything ready before you need it.
                </p>
              </div>
              <div className="space-y-3 text-sm text-slate-600">
                <div className="rounded-2xl border border-slate-200 bg-slate-50 p-4">
                  Day 0 → you buy something expensive
                </div>
                <div className="rounded-2xl border border-slate-200 bg-slate-50 p-4">
                  Month 16 → it breaks and you start digging
                </div>
                <div className="rounded-2xl border border-slate-200 bg-slate-50 p-4">
                  Month 18 → claim denied (missing proof)
                </div>
              </div>
            </div>
          </div>
        </section>

        <section id="claim-kit" className="mx-auto w-full max-w-6xl px-6 py-12">
          <div className="grid gap-10 lg:grid-cols-[1fr_1.2fr]">
            <div>
              <div className="text-xs uppercase tracking-[0.3em] text-indigo-600">
                Claim kit
              </div>
              <h2 className="mt-3 text-3xl font-semibold text-slate-900">
                Everything you need in one clean bundle.
              </h2>
              <p className="mt-4 text-slate-600">
                When something fails, we surface the proof, the policy, and the
                exact steps to claim — without chaos.
              </p>
              <ul className="mt-6 space-y-3 text-sm text-slate-600">
                {claimKit.map((item) => (
                  <li key={item} className="flex items-center gap-3">
                    <span className="flex h-6 w-6 items-center justify-center rounded-full bg-indigo-50 text-indigo-600">
                      ✓
                    </span>
                    {item}
                  </li>
                ))}
              </ul>
            </div>
            <div className="rounded-3xl border border-slate-200 bg-white p-6 shadow-sm">
              <div className="flex items-center justify-between text-xs text-slate-500">
                <span>Claim bundle</span>
                <span className="rounded-full bg-indigo-50 px-2 py-1 text-indigo-600">
                  PDF ready
                </span>
              </div>
              <div className="mt-4 space-y-3">
                <div className="rounded-2xl border border-slate-200 bg-slate-50 p-4">
                  Receipt.pdf
                </div>
                <div className="rounded-2xl border border-slate-200 bg-slate-50 p-4">
                  Serial: DY-V15-2219
                </div>
                <div className="rounded-2xl border border-slate-200 bg-slate-50 p-4">
                  Policy link + claim steps
                </div>
              </div>
              <button className="mt-5 w-full rounded-full bg-indigo-600 px-4 py-3 text-sm font-semibold text-white">
                Download claim kit
              </button>
            </div>
          </div>
        </section>

        <section id="features" className="mx-auto w-full max-w-6xl px-6 py-16">
          <div className="flex flex-col gap-3">
            <div className="text-xs uppercase tracking-[0.3em] text-indigo-600">
              Features
            </div>
            <h2 className="text-3xl font-semibold text-slate-900">
              Built for real life.
            </h2>
            <p className="max-w-2xl text-slate-600">
              Simple tracking, calm reminders, and proof ready when you need it.
            </p>
          </div>
          <div className="mt-10 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {features.map((feature) => (
              <div
                key={feature.title}
                className="rounded-2xl border border-slate-200 bg-white p-6"
              >
                <div className="text-lg font-semibold text-slate-900">
                  {feature.title}
                </div>
                <div className="mt-2 text-sm text-slate-600">
                  {feature.description}
                </div>
              </div>
            ))}
          </div>
        </section>

        <section className="mx-auto w-full max-w-6xl px-6 pb-10">
          <div className="rounded-3xl border border-slate-200 bg-white p-8 shadow-sm">
            <div className="grid gap-8 lg:grid-cols-[1fr_1.2fr]">
              <div>
                <div className="text-xs uppercase tracking-[0.3em] text-indigo-600">
                  What we track
                </div>
                <h2 className="mt-3 text-3xl font-semibold text-slate-900">
                  The stuff that actually breaks.
                </h2>
                <p className="mt-4 text-slate-600">
                  Start with your most valuable items. We’ll handle the rest.
                </p>
              </div>
              <div className="grid gap-3 sm:grid-cols-2">
                {categories.map((category) => (
                  <div
                    key={category}
                    className="rounded-2xl border border-slate-200 bg-slate-50 px-4 py-3 text-sm text-slate-700"
                  >
                    {category}
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        <section
          id="how-it-works"
          className="mx-auto w-full max-w-6xl px-6 py-16"
        >
          <div className="grid gap-10 lg:grid-cols-[1.2fr_1fr]">
            <div>
              <div className="text-xs uppercase tracking-[0.3em] text-indigo-600">
                How it works
              </div>
              <h2 className="mt-3 text-3xl font-semibold text-slate-900">
                Add it once. Keep it forever.
              </h2>
              <p className="mt-4 max-w-xl text-slate-600">
                No more digging through inboxes or paper folders. Warranty Wallet
                keeps everything ready when you need it.
              </p>
              <ul className="mt-6 space-y-3 text-sm text-slate-600">
                <li className="flex items-center gap-3">
                  <span className="flex h-6 w-6 items-center justify-center rounded-full bg-indigo-50 text-indigo-600">
                    ✓
                  </span>
                  Store warranties for electronics, appliances, and more
                </li>
                <li className="flex items-center gap-3">
                  <span className="flex h-6 w-6 items-center justify-center rounded-full bg-indigo-50 text-indigo-600">
                    ✓
                  </span>
                  Get reminders before warranties and returns expire
                </li>
                <li className="flex items-center gap-3">
                  <span className="flex h-6 w-6 items-center justify-center rounded-full bg-indigo-50 text-indigo-600">
                    ✓
                  </span>
                  Export a clean claim bundle in seconds
                </li>
              </ul>
            </div>
            <div className="space-y-4">
              {steps.map((step, index) => (
                <div
                  key={step.title}
                  className="rounded-2xl border border-slate-200 bg-white p-6"
                >
                  <div className="text-xs text-indigo-600">Step {index + 1}</div>
                  <div className="mt-2 text-lg font-semibold text-slate-900">
                    {step.title}
                  </div>
                  <div className="mt-2 text-sm text-slate-600">
                    {step.description}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section id="pricing" className="mx-auto w-full max-w-6xl px-6 py-16">
          <div className="flex flex-col gap-3">
            <div className="text-xs uppercase tracking-[0.3em] text-indigo-600">
              Pricing
            </div>
            <h2 className="text-3xl font-semibold text-slate-900">
              Simple plans for peace of mind.
            </h2>
            <p className="max-w-2xl text-slate-600">
              One successful claim pays for the year. That’s the idea.
            </p>
          </div>
          <div className="mt-10 grid gap-6 lg:grid-cols-3">
            {pricing.map((plan) => (
              <div
                key={plan.name}
                className={`rounded-2xl border p-6 ${
                  plan.highlight
                    ? "border-indigo-300 bg-white shadow-lg"
                    : "border-slate-200 bg-white"
                }`}
              >
                <div className="text-sm uppercase tracking-[0.2em] text-slate-500">
                  {plan.name}
                </div>
                <div className="mt-4 text-3xl font-semibold text-slate-900">
                  {plan.price}
                  <span className="ml-2 text-sm text-slate-500">{plan.note}</span>
                </div>
                <ul className="mt-4 space-y-2 text-sm text-slate-600">
                  {plan.features.map((feature) => (
                    <li key={feature} className="flex items-center gap-2">
                      <span className="text-indigo-600">✓</span>
                      {feature}
                    </li>
                  ))}
                </ul>
                <a
                  className="mt-6 inline-flex w-full items-center justify-center rounded-full bg-indigo-600 px-4 py-2 text-sm font-semibold text-white transition hover:bg-indigo-700"
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
              <div className="text-xs uppercase tracking-[0.3em] text-indigo-600">
                FAQ
              </div>
              <h2 className="mt-3 text-3xl font-semibold text-slate-900">
                Common questions
              </h2>
              <p className="mt-4 text-slate-600">
                Tell us your favorite stores and we’ll prioritize them.
              </p>
            </div>
            <div className="space-y-4">
              {faqs.map((faq) => (
                <div
                  key={faq.q}
                  className="rounded-2xl border border-slate-200 bg-white p-6"
                >
                  <div className="text-base font-semibold text-slate-900">
                    {faq.q}
                  </div>
                  <div className="mt-2 text-sm text-slate-600">{faq.a}</div>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section
          id="waitlist"
          className="mx-auto w-full max-w-6xl px-6 pb-20"
        >
          <div className="rounded-3xl border border-slate-200 bg-white p-10 shadow-lg">
            <div className="grid gap-10 lg:grid-cols-[1.1fr_1fr]">
              <div>
                <div className="text-xs uppercase tracking-[0.3em] text-indigo-600">
                  Early access
                </div>
                <h2 className="mt-3 text-3xl font-semibold text-slate-900">
                  Never miss another warranty.
                </h2>
                <p className="mt-4 text-slate-600">
                  Join the waitlist for early access, beta invites, and priority
                  support for your favorite stores.
                </p>
                <ul className="mt-6 space-y-3 text-sm text-slate-600">
                  <li className="flex items-center gap-3">
                    <span className="text-indigo-600">✓</span>
                    Early access to warranty reminders
                  </li>
                  <li className="flex items-center gap-3">
                    <span className="text-indigo-600">✓</span>
                    Store request priority
                  </li>
                  <li className="flex items-center gap-3">
                    <span className="text-indigo-600">✓</span>
                    Founding member pricing
                  </li>
                </ul>
              </div>
              <WaitlistForm source="footer" />
            </div>
          </div>
        </section>
      </main>

      <footer className="border-t border-slate-200 bg-white">
        <div className="mx-auto flex w-full max-w-6xl flex-col items-center justify-between gap-4 px-6 py-8 text-xs text-slate-500 md:flex-row">
          <div>© {new Date().getFullYear()} Warranty Wallet. All rights reserved.</div>
          <div>Every warranty, always ready.</div>
        </div>
      </footer>
    </div>
  );
}
