import Link from "next/link";

const dashboardCards = [
  {
    title: "Weakest Subject",
    value: "Physics",
    description: "Mechanics and electricity need the most focused revision.",
  },
  {
    title: "Recommended Next Step",
    value: "Start a Diagnostic",
    description: "Identify current level before entering full chapter practice.",
  },
  {
    title: "Best Practice Mode",
    value: "Chapter-wise PYQs",
    description: "Use structured practice instead of random mixed question solving.",
  },
];

const activity = [
  "Completed 12 PYQs from Kinematics",
  "Switched explanation depth to Deep",
  "Reviewed mistakes from Electrostatics",
  "Opened recommended Mathematics set",
];

export default function DashboardPreview() {
  return (
    <section
      id="dashboard-preview"
      className="border-t border-white/10 bg-slate-950"
    >
      <div className="mx-auto max-w-7xl px-6 py-20">
        <div className="max-w-3xl">
          <div className="inline-flex rounded-full border border-cyan-400/30 bg-cyan-400/10 px-4 py-1 text-sm font-medium text-cyan-300">
            Dashboard Preview
          </div>

          <h2 className="mt-4 text-3xl font-bold tracking-tight text-white md:text-5xl">
            One place to connect practice, diagnostics, and improvement
          </h2>

          <p className="mt-4 text-lg leading-8 text-slate-300">
            The dashboard is where students can understand what to do next
            instead of guessing. It connects their weak areas, recommended
            actions, practice direction, and progress signals into one view.
          </p>
        </div>

        <div className="mt-10 grid gap-6 lg:grid-cols-[1.3fr_0.7fr]">
          <div className="rounded-[2rem] border border-white/10 bg-white/5 p-8 shadow-2xl">
            <div className="flex flex-wrap items-center justify-between gap-4">
              <div>
                <div className="text-sm font-semibold uppercase tracking-[0.2em] text-cyan-300">
                  Student Dashboard
                </div>
                <h3 className="mt-3 text-3xl font-bold text-white">
                  Today’s Focus
                </h3>
              </div>

              <span className="rounded-full border border-emerald-400/20 bg-emerald-400/10 px-4 py-2 text-sm font-medium text-emerald-300">
                On Track
              </span>
            </div>

            <div className="mt-8 grid gap-4 md:grid-cols-3">
              {dashboardCards.map((card) => (
                <div
                  key={card.title}
                  className="rounded-3xl border border-white/10 bg-slate-900/70 p-5"
                >
                  <div className="text-sm font-semibold text-slate-400">
                    {card.title}
                  </div>
                  <div className="mt-2 text-xl font-semibold text-white">
                    {card.value}
                  </div>
                  <p className="mt-3 text-sm leading-6 text-slate-300">
                    {card.description}
                  </p>
                </div>
              ))}
            </div>

            <div className="mt-8 rounded-3xl border border-white/10 bg-slate-900/70 p-6">
              <div className="text-sm font-semibold uppercase tracking-[0.2em] text-cyan-300">
                Suggested Study Flow
              </div>

              <div className="mt-5 grid gap-3 md:grid-cols-4">
                {[
                  "Take Diagnostic",
                  "Identify Weak Topic",
                  "Practice PYQs",
                  "Review Explanations",
                ].map((step) => (
                  <div
                    key={step}
                    className="rounded-2xl border border-white/10 bg-white/5 px-4 py-4 text-center text-sm font-medium text-slate-200"
                  >
                    {step}
                  </div>
                ))}
              </div>
            </div>

            <div className="mt-8 flex flex-wrap gap-4">
              <Link
                href="/dashboard"
                className="rounded-2xl bg-cyan-400 px-5 py-3 text-sm font-semibold text-slate-950 transition hover:scale-[1.02]"
              >
                Open Dashboard
              </Link>

              <Link
                href="/diagnostic"
                className="rounded-2xl border border-white/15 bg-white/5 px-5 py-3 text-sm font-medium text-white transition hover:bg-white/10"
              >
                Start Free Diagnostic
              </Link>
            </div>
          </div>

          <div className="rounded-[2rem] border border-white/10 bg-white/5 p-8 shadow-2xl">
            <div className="text-sm font-semibold uppercase tracking-[0.2em] text-cyan-300">
              Recent Activity
            </div>

            <h3 className="mt-3 text-2xl font-bold text-white">
              What a student might see
            </h3>

            <div className="mt-6 space-y-3">
              {activity.map((item) => (
                <div
                  key={item}
                  className="rounded-2xl border border-white/10 bg-slate-900/70 px-4 py-4 text-sm text-slate-300"
                >
                  {item}
                </div>
              ))}
            </div>

            <div className="mt-8 rounded-3xl border border-white/10 bg-slate-900/70 p-5">
              <div className="text-sm font-semibold text-slate-400">
                Why this matters
              </div>
              <p className="mt-3 leading-7 text-slate-300">
                A good dashboard reduces confusion. Instead of wondering what to
                study next, the student gets a clearer direction based on weak
                areas and recent practice.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}