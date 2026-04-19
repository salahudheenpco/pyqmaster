import Link from "next/link";

const plans = [
  {
    name: "Starter",
    price: "Free",
    description:
      "For students who want to explore the platform and try the PYQ-first approach.",
    features: [
      "Access to selected demo PYQs",
      "Basic diagnostic flow",
      "Limited dashboard preview",
      "Intro explanation levels",
    ],
    cta: "Start Free",
    href: "/diagnostic",
    featured: false,
  },
  {
    name: "Pro",
    price: "₹999/mo",
    description:
      "For serious students who want structured PYQ practice, tracking, and deeper explanations.",
    features: [
      "Full PYQ Bank access",
      "All explanation depths",
      "Progress tracking dashboard",
      "Subject-wise performance insights",
      "Recommended study flow",
    ],
    cta: "Choose Pro",
    href: "/dashboard",
    featured: true,
  },
  {
    name: "Elite",
    price: "₹1999/mo",
    description:
      "For high-intensity preparation with advanced practice, deeper review, and more planning support.",
    features: [
      "Everything in Pro",
      "Advanced mixed PYQ sets",
      "Priority feature access",
      "Extra performance breakdowns",
      "Structured revision support",
    ],
    cta: "Choose Elite",
    href: "/programs",
    featured: false,
  },
];

export default function PricingPage() {
  return (
    <div className="min-h-screen bg-slate-950 text-white">
      <main className="mx-auto max-w-7xl px-6 py-12">
        <section className="max-w-4xl">
          <div className="inline-flex rounded-full border border-cyan-400/30 bg-cyan-400/10 px-4 py-1 text-sm font-medium text-cyan-300">
            Pricing
          </div>

          <h1 className="mt-4 text-4xl font-bold tracking-tight md:text-5xl">
            Plans built for different levels of exam preparation
          </h1>

          <p className="mt-4 text-lg leading-8 text-slate-300">
            Choose a plan based on how deeply you want to use PYQ practice,
            explanations, diagnostics, and performance tracking.
          </p>
        </section>

        <section className="mt-10 grid gap-6 lg:grid-cols-3">
          {plans.map((plan) => (
            <div
              key={plan.name}
              className={`rounded-[2rem] border p-8 shadow-2xl ${
                plan.featured
                  ? "border-cyan-400/30 bg-cyan-400/10"
                  : "border-white/10 bg-white/5"
              }`}
            >
              {plan.featured && (
                <div className="mb-4 inline-flex rounded-full border border-cyan-400/30 bg-cyan-400/20 px-3 py-1 text-xs font-semibold text-cyan-300">
                  Most Popular
                </div>
              )}

              <h2 className="text-2xl font-semibold">{plan.name}</h2>
              <div className="mt-3 text-4xl font-bold">{plan.price}</div>

              <p className="mt-4 leading-7 text-slate-300">{plan.description}</p>

              <div className="mt-6 space-y-3">
                {plan.features.map((feature) => (
                  <div
                    key={feature}
                    className="rounded-2xl border border-white/10 bg-slate-900/70 px-4 py-3 text-sm text-slate-200"
                  >
                    {feature}
                  </div>
                ))}
              </div>

              <Link
                href={plan.href}
                className={`mt-8 inline-block rounded-2xl px-5 py-3 text-sm font-semibold transition ${
                  plan.featured
                    ? "bg-cyan-400 text-slate-950 hover:scale-[1.02]"
                    : "border border-white/15 bg-white/5 text-white hover:bg-white/10"
                }`}
              >
                {plan.cta}
              </Link>
            </div>
          ))}
        </section>

        <section className="mt-10 rounded-[2rem] border border-white/10 bg-white/5 p-8 shadow-2xl">
          <div className="text-sm font-semibold uppercase tracking-[0.2em] text-cyan-300">
            Simple idea
          </div>

          <h2 className="mt-3 text-3xl font-bold">
            Start free, then upgrade when you want more depth
          </h2>

          <p className="mt-4 text-lg leading-8 text-slate-300">
            Students can begin with the free diagnostic and demo PYQ flow, then
            move into deeper practice, tracking, and structured programs as
            their preparation becomes more serious.
          </p>

          <div className="mt-8 flex flex-wrap gap-4">
            <Link
              href="/diagnostic"
              className="rounded-2xl bg-cyan-400 px-5 py-3 text-sm font-semibold text-slate-950 transition hover:scale-[1.02]"
            >
              Start Free Diagnostic
            </Link>

            <Link
              href="/programs"
              className="rounded-2xl border border-white/15 bg-white/5 px-5 py-3 text-sm font-medium text-white transition hover:bg-white/10"
            >
              View Programs
            </Link>
          </div>
        </section>
      </main>
    </div>
  );
}