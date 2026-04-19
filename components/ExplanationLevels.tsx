export default function ExplanationLevels() {
  const levels = [
    {
      title: "Quick",
      subtitle: "For fast revision",
      description:
        "Short and direct explanations for students who already know the concept and just want the method or answer logic quickly.",
      points: [
        "Minimal theory",
        "Direct solving steps",
        "Best for quick revision",
      ],
    },
    {
      title: "Standard",
      subtitle: "For balanced learning",
      description:
        "A balanced explanation style for students who want enough detail to understand the method clearly without making it too long.",
      points: [
        "Clear concept + method",
        "Step-by-step solution",
        "Best for regular practice",
      ],
      featured: true,
    },
    {
      title: "Deep",
      subtitle: "For concept rebuilding",
      description:
        "Detailed beginner-friendly explanations that start from the fundamentals and help students who need stronger conceptual clarity.",
      points: [
        "Basic theory first",
        "Detailed guided steps",
        "Best for weaker topics",
      ],
    },
  ];

  return (
    <section
      id="explanation-levels"
      className="border-t border-white/10 bg-slate-950"
    >
      <div className="mx-auto max-w-7xl px-6 py-20">
        <div className="max-w-3xl">
          <div className="inline-flex rounded-full border border-cyan-400/30 bg-cyan-400/10 px-4 py-1 text-sm font-medium text-cyan-300">
            Explanation Levels
          </div>

          <h2 className="mt-4 text-3xl font-bold tracking-tight text-white md:text-5xl">
            Learn at the depth that matches your current level
          </h2>

          <p className="mt-4 text-lg leading-8 text-slate-300">
            Not every student needs the same explanation. PYQ Forge lets
            students learn through different explanation depths so they can move
            faster where they are strong and slow down where they need clarity.
          </p>
        </div>

        <div className="mt-10 grid gap-6 lg:grid-cols-3">
          {levels.map((level) => (
            <div
              key={level.title}
              className={`rounded-[2rem] border p-8 shadow-2xl ${
                level.featured
                  ? "border-cyan-400/30 bg-cyan-400/10"
                  : "border-white/10 bg-white/5"
              }`}
            >
              {level.featured && (
                <div className="mb-4 inline-flex rounded-full border border-cyan-400/30 bg-cyan-400/20 px-3 py-1 text-xs font-semibold text-cyan-300">
                  Most Balanced
                </div>
              )}

              <div className="text-sm font-semibold uppercase tracking-[0.2em] text-cyan-300">
                {level.subtitle}
              </div>

              <h3 className="mt-3 text-3xl font-bold text-white">
                {level.title}
              </h3>

              <p className="mt-4 leading-7 text-slate-300">
                {level.description}
              </p>

              <div className="mt-6 space-y-3">
                {level.points.map((point) => (
                  <div
                    key={point}
                    className="rounded-2xl border border-white/10 bg-slate-900/70 px-4 py-3 text-sm text-slate-200"
                  >
                    {point}
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>

        <div className="mt-10 rounded-[2rem] border border-white/10 bg-white/5 p-8 shadow-2xl">
          <div className="text-sm font-semibold uppercase tracking-[0.2em] text-cyan-300">
            Why this matters
          </div>

          <h3 className="mt-3 text-3xl font-bold text-white">
            Strong students and struggling students should not be forced into
            the same explanation style
          </h3>

          <p className="mt-4 text-lg leading-8 text-slate-300">
            A student revising quickly may only need the method. Another student
            may need the concept explained from the basics. These levels make
            the platform more realistic, more useful, and more personalized.
          </p>
        </div>
      </div>
    </section>
  );
}