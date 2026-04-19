export default function Features() {
  const features = [
    "Searchable PYQ repository by exam, year, chapter, and topic",
    "Interactive solving interface with hints, retry, and bookmarks",
    "Explanation selector with 3 depth levels",
    "Concept refreshers, formulas, and trap notes linked to each PYQ",
    "Personalized dashboard with speed, accuracy, and weak-topic tracking",
    "Revision center for mistakes, saved questions, and due reviews",
    "Mock tests with post-test analytics",
    "Adaptive recommendations for what to solve next",
  ];

  return (
    <section id="features" className="bg-white">
      <div className="mx-auto max-w-7xl px-6 py-20">
        <div className="grid gap-10 lg:grid-cols-[1.1fr_0.9fr]">
          <div>
            <div className="text-sm font-semibold uppercase tracking-[0.2em] text-slate-500">
              Feature stack
            </div>
            <h2 className="mt-3 text-3xl font-bold tracking-tight md:text-4xl">
              Everything needed around a single question
            </h2>
            <p className="mt-4 max-w-2xl text-slate-600">
              One PYQ should not be just a question and answer. It should become
              a full learning unit with explanations, revision support,
              strategy, and analytics.
            </p>

            <div className="mt-8 grid gap-4 md:grid-cols-2">
              {features.map((feature) => (
                <div
                  key={feature}
                  className="rounded-3xl border border-slate-200 bg-slate-50 p-5 text-sm leading-6 text-slate-700 shadow-sm"
                >
                  {feature}
                </div>
              ))}
            </div>
          </div>

          <div className="rounded-[2rem] border border-slate-200 bg-slate-50 p-5 shadow-sm">
            <div className="rounded-[1.5rem] border border-slate-200 bg-white p-5 shadow-sm">
              <div className="flex items-center justify-between">
                <div>
                  <div className="text-sm font-semibold">
                    Sample PYQ Experience
                  </div>
                  <div className="mt-1 text-xs text-slate-500">
                    Physics • Kinematics • JEE Main 2023
                  </div>
                </div>

                <div className="rounded-full bg-slate-100 px-3 py-1 text-xs font-medium">
                  Medium
                </div>
              </div>

              <div className="mt-5 rounded-2xl bg-slate-50 p-4 text-sm leading-7 text-slate-700">
                A particle starts from rest and moves with uniform acceleration.
                Find the distance covered in the third second.
              </div>

              <div className="mt-5 grid gap-3 text-sm">
                {["A) a/2", "B) 3a/2", "C) 5a/2", "D) 7a/2"].map((opt) => (
                  <button
                    key={opt}
                    className="rounded-2xl border border-slate-200 bg-white px-4 py-3 text-left hover:bg-slate-50"
                  >
                    {opt}
                  </button>
                ))}
              </div>

              <div className="mt-5 grid gap-3 md:grid-cols-3">
                {["Concise", "Balanced", "Detailed"].map((tab, idx) => (
                  <div
                    key={tab}
                    className={`rounded-2xl px-4 py-3 text-center text-sm font-semibold ${
                      idx === 1
                        ? "bg-slate-900 text-white"
                        : "border border-slate-200 bg-white text-slate-700"
                    }`}
                  >
                    {tab}
                  </div>
                ))}
              </div>

              <div className="mt-5 rounded-2xl bg-slate-50 p-4 text-sm leading-6 text-slate-700">
                Since the question asks for distance covered in the third
                second, use the formula for distance covered in the nth second:
                sₙ = u + a/2 (2n − 1). Here u = 0 and n = 3, so s₃ = a/2 × 5 =
                5a/2.
              </div>

              <div className="mt-5 grid gap-3 md:grid-cols-2">
                <div className="rounded-2xl border border-slate-200 bg-white p-4">
                  <div className="text-xs font-semibold uppercase tracking-wide text-slate-500">
                    Concept refresher
                  </div>
                  <div className="mt-2 text-sm font-medium">
                    Distance in nth second
                  </div>
                  <div className="mt-2 text-sm text-slate-600">
                    Formula, derivation, and when to use it instead of full
                    displacement equations.
                  </div>
                </div>

                <div className="rounded-2xl border border-slate-200 bg-white p-4">
                  <div className="text-xs font-semibold uppercase tracking-wide text-slate-500">
                    Strategy box
                  </div>
                  <div className="mt-2 text-sm text-slate-600">
                    When a question directly mentions “nth second,” do not start
                    with the full motion equation unless the options force it.
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
