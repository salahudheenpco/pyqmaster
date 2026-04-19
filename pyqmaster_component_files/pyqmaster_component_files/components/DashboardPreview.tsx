export default function DashboardPreview() {
  const metricCards = [
    ["Accuracy", "78%"],
    ["Average Speed", "1m 42s"],
    ["Revision Due", "14 questions"],
  ];

  const subjectAccuracy = [
    ["Physics", "84%"],
    ["Chemistry", "76%"],
    ["Mathematics", "65%"],
  ];

  const priorities = [
    "Solve 15 Algebra PYQs",
    "Revise Electrostatics formulas",
    "Retry 5 incorrect mechanics questions",
    "Take 30-minute speed drill",
  ];

  const weakTopics = [
    "Permutations & Combinations",
    "Current Electricity",
    "Ionic Equilibrium",
  ];

  return (
    <section id="dashboard" className="mx-auto max-w-7xl px-6 py-20">
      <div className="max-w-2xl">
        <div className="text-sm font-semibold uppercase tracking-[0.2em] text-slate-500">
          Personalized dashboard
        </div>
        <h2 className="mt-3 text-3xl font-bold tracking-tight md:text-4xl">
          Preparation that is clearly mapped
        </h2>
        <p className="mt-4 text-slate-600">
          Students should know what to solve today, which topics are weak, what
          needs revision, and how close they are to readiness.
        </p>
      </div>

      <div className="mt-10 grid gap-6 lg:grid-cols-[1.2fr_0.8fr]">
        <div className="rounded-[2rem] border border-slate-200 bg-white p-6 shadow-sm">
          <div className="grid gap-4 md:grid-cols-3">
            {metricCards.map(([label, value]) => (
              <div key={label} className="rounded-3xl bg-slate-50 p-5">
                <div className="text-sm text-slate-500">{label}</div>
                <div className="mt-2 text-2xl font-bold">{value}</div>
              </div>
            ))}
          </div>

          <div className="mt-6 grid gap-4 md:grid-cols-2">
            <div className="rounded-3xl border border-slate-200 p-5">
              <div className="text-sm font-semibold">Subject-wise accuracy</div>

              <div className="mt-4 space-y-4">
                {subjectAccuracy.map(([sub, val]) => (
                  <div key={sub}>
                    <div className="mb-2 flex justify-between text-sm">
                      <span>{sub}</span>
                      <span className="text-slate-500">{val}</span>
                    </div>
                    <div className="h-3 rounded-full bg-slate-100">
                      <div
                        className="h-3 rounded-full bg-slate-900"
                        style={{ width: val }}
                      />
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div className="rounded-3xl border border-slate-200 p-5">
              <div className="text-sm font-semibold">Today’s priorities</div>

              <div className="mt-4 space-y-3 text-sm text-slate-600">
                {priorities.map((item) => (
                  <div key={item} className="rounded-2xl bg-slate-50 px-4 py-3">
                    {item}
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>

        <div className="space-y-6">
          <div className="rounded-3xl border border-slate-200 bg-white p-6 shadow-sm">
            <div className="text-sm font-semibold">Weak topic alerts</div>

            <div className="mt-4 space-y-3 text-sm">
              {weakTopics.map((topic) => (
                <div
                  key={topic}
                  className="rounded-2xl bg-slate-50 px-4 py-3 text-slate-700"
                >
                  {topic}
                </div>
              ))}
            </div>
          </div>

          <div className="rounded-3xl border border-slate-200 bg-white p-6 shadow-sm">
            <div className="text-sm font-semibold">Recommended next action</div>
            <p className="mt-3 text-sm leading-6 text-slate-600">
              You are accurate in Physics but slow in Maths. Prioritize
              medium-difficulty algebra PYQs with balanced explanations for the
              next 3 days.
            </p>
            <button className="mt-5 rounded-2xl bg-slate-900 px-4 py-2 text-sm font-semibold text-white hover:bg-slate-800">
              Start recommended set
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
