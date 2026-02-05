import { WaitlistForm } from "@/components/WaitlistForm";

const highlights = [
  {
    title: "Receipt vault",
    description: "Scan or forward receipts and keep every warranty in one place.",
  },
  {
    title: "Expiry reminders",
    description: "We alert you before warranties or return windows expire.",
  },
  {
    title: "Claim playbooks",
    description: "Step-by-step checklists so claims are fast and painless.",
  },
];

const features = [
  {
    title: "Auto warranty dates",
    description: "We parse purchase dates and calculate warranty timelines for you.",
  },
  {
    title: "Serial + model storage",
    description: "Save serial numbers, order IDs, and proof of purchase.",
  },
  {
    title: "Easy claim exports",
    description: "One tap to export a PDF with everything a retailer asks for.",
  },
  {
    title: "Family sharing",
    description: "Keep the whole household organized in one shared wallet.",
  },
  {
    title: "Private by default",
    description: "No bank access. No card data. You control what’s saved.",
  },
  {
    title: "Store policy shortcuts",
    description: "Quick links to warranty and return policies by store.",
  },
];

const steps = [
  {
    title: "Add a purchase",
    description: "Scan a receipt, forward an email, or add a product manually.",
  },
  {
    title: "We organize it",
    description: "Warranty Wallet tracks expiry, return windows, and proof.",
  },
  {
    title: "Claim with confidence",
    description: "When something breaks, you’ll have everything ready.",
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
    a: "Only what you add: receipt images, product info, and warranty dates.",
  },
  {
    q: "Does this work in the EU?",
    a: "Yes — we’ll start with EU warranty timelines and add store policies.",
  },
  {
    q: "Can I export my data?",
    a: "Yes. One tap exports a PDF or CSV of your warranty info.",
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
                Every warranty in one place
              </div>
            </div>
          </div>
          <nav className="hidden items-center gap-6 text-sm text-slate-600 md:flex">
            <a className="hover:text-slate-900" href="#features">
              Features
            </a>
            <a className="hover:text-slate-900" href="#how-it-works">
              How it works
            </a>
            <a className="hover:text-slate-900" href="#pricing">
              Pricing
            </a>
            <a className="hover:text-slate-900" href="#faq">
              FAQ
            </a>
          </nav>
          <a
            className="rounded-full bg-indigo-600 px-4 py-2 text-sm font-semibold text-white shadow-sm transition hover:bg-indigo-700"
            href="#waitlist"
          >
            Join waitlist
          </a>
        </div>
      </header>

      <main>
        <section className="relative overflow-hidden">
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,_rgba(56,189,248,0.18),_transparent_60%)]" />
          <div className="relative mx-auto flex w-full max-w-6xl flex-col gap-12 px-6 pb-20 pt-16 lg:flex-row lg:items-center">
            <div className="flex-1">
              <div className="mb-4 inline-flex items-center gap-2 rounded-full bg-indigo-50 px-4 py-1 text-xs font-semibold uppercase tracking-[0.2em] text-indigo-600">
                Warranty tracking
              </div>
              <h1 className="text-4xl font-semibold leading-tight text-slate-900 sm:text-5xl">
                Never lose a warranty again.
              </h1>
              <p className="mt-5 max-w-xl text-lg text-slate-600">
                Warranty Wallet keeps every receipt, serial, and expiry date in
                one clean place — and reminds you before it’s too late.
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
                  href="#how-it-works"
                >
                  See how it works
                </a>
              </div>
              <div className="mt-6 flex items-center gap-6 text-xs text-slate-500">
                <span>Never miss expiry reminders</span>
                <span>Built for EU warranty rules</span>
              </div>
            </div>

            <div className="flex-1">
              <div className="rounded-3xl border border-slate-200 bg-white p-6 shadow-xl">
                <div className="flex items-center justify-between text-xs text-slate-500">
                  <span>Warranty card</span>
                  <span className="rounded-full bg-indigo-50 px-2 py-1 text-indigo-600">
                    Active
                  </span>
                </div>
                <div className="mt-4 rounded-2xl border border-slate-200 bg-slate-50 p-4 text-xs text-slate-600">
                  <div className="flex items-center justify-between">
                    <span className="font-semibold text-slate-900">
                      Dyson V15 Detect
                    </span>
                    <span>Ends in 14 months</span>
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
                  <div className="text-xs text-slate-500">Claim checklist</div>
                  <div className="mt-2 text-sm font-semibold text-slate-900">
                    1. Warranty card · 2. Receipt · 3. Serial number
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

        <section id="features" className="mx-auto w-full max-w-6xl px-6 py-16">
          <div className="flex flex-col gap-3">
            <div className="text-xs uppercase tracking-[0.3em] text-indigo-600">
              Features
            </div>
            <h2 className="text-3xl font-semibold text-slate-900">
              Clean, calm, and always ready.
            </h2>
            <p className="max-w-2xl text-slate-600">
              Warranty Wallet is built for people who want the confidence of
              knowing they can claim when something breaks.
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
