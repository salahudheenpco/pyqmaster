export default function ExplanationLevels() {
  const explanationLevels = [
    {
      title: "Above Average Students",
      subtitle: "Fast, concise reasoning",
      points: [
        "Quick steps and direct concept application",
        "Shortcut insights and exam-time strategy",
        "Minimal theory, maximum solving speed",
      ],
    },
    {
      title: "Average Students",
      subtitle: "Balanced speed and clarity",
      points: [
        "Clear intermediate reasoning",
        "Why the method works",
        "Best for improving consistency and confidence",
      ],
    },
    {
      title: "Below Average Students",
      subtitle: "Detailed concept building",
      points: [
        "Step-by-step explanations from basics",
        "Theory recap and intuitive understanding",
        "Strong support for weak Class 11 foundations",
      ],
    },
  ];

  return (
    <section id="levels" className="bg-slate-900 text-white">
      <div className="mx-auto max-w-7xl px-6 py-20">
        <div className="max-w-2xl">
          <div className="text-sm font-semibold uppercase tracking-[0.2em] text-slate-400">
            Explanation levels
          </div>
          <h2 className="mt-3 text-3xl font-bold tracking-tight md:text-4xl">
            Not every student needs the same solution
          </h2>
          <p className="mt-4 text-slate-300">
            Every PYQ can be explained at three different depths so students get
            exactly the support they need.
          </p>
        </div>

        <div className="mt-10 grid gap-6 md:grid-cols-3">
          {explanationLevels.map((level) => (
            <div
              key={level.title}
              className="rounded-3xl border border-slate-700 bg-slate-800 p-6 shadow-sm"
            >
              <div className="text-lg font-semibold">{level.title}</div>
              <div className="mt-2 text-sm text-slate-300">
                {level.subtitle}
              </div>

              <ul className="mt-5 space-y-3 text-sm text-slate-200">
                {level.points.map((point) => (
                  <li
                    key={point}
                    className="rounded-2xl bg-slate-700/40 px-3 py-3"
                  >
                    {point}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
