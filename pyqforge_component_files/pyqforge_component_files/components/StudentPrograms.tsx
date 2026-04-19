export default function StudentPrograms() {
  const tracks = [
    {
      title: "11th Graders",
      badge: "Foundation Mode",
      desc: "Build concepts chapter by chapter with guided PYQ practice and confidence tracking.",
    },
    {
      title: "12th Graders",
      badge: "Board + Entrance Mode",
      desc: "Balance syllabus coverage, advanced problem solving, and exam-specific speed work.",
    },
    {
      title: "Crash Program",
      badge: "Rank Booster",
      desc: "Focus on high-yield PYQs, rapid revision, and daily sprint-based progress.",
    },
    {
      title: "Repeater Batch",
      badge: "Mastery Mode",
      desc: "Repair conceptual gaps with deep diagnostics, detailed explanations, and mistake analysis.",
    },
  ];

  return (
    <section id="segments" className="mx-auto max-w-7xl px-6 py-20">
      <div className="max-w-2xl">
        <div className="text-sm font-semibold uppercase tracking-[0.2em] text-slate-500">
          Student programs
        </div>
        <h2 className="mt-3 text-3xl font-bold tracking-tight md:text-4xl">
          Built for every stage of preparation
        </h2>
        <p className="mt-4 text-slate-600">
          The platform adapts the dashboard, recommendations, and study flow to
          match the student’s current stage.
        </p>
      </div>

      <div className="mt-10 grid gap-6 md:grid-cols-2 xl:grid-cols-4">
        {tracks.map((track) => (
          <div
            key={track.title}
            className="rounded-3xl border border-slate-200 bg-white p-6 shadow-sm"
          >
            <div className="inline-flex rounded-full bg-slate-100 px-3 py-1 text-xs font-semibold text-slate-700">
              {track.badge}
            </div>

            <div className="mt-4 text-xl font-semibold">{track.title}</div>

            <p className="mt-3 text-sm leading-6 text-slate-600">
              {track.desc}
            </p>

            <a
              href="#dashboard"
              className="mt-6 inline-block rounded-2xl border border-slate-300 px-4 py-2 text-sm font-medium hover:bg-slate-50"
            >
              View track
            </a>
          </div>
        ))}
      </div>
    </section>
  );
}
