export default function StudentPrograms() {
  const programs = [
    {
      title: "Ongoing 11th Graders",
      subtitle: "Foundation + habit building",
      description:
        "For students who are still in Class 11 and want to build strong basics early using chapter-wise PYQs, concept clarity, and structured practice.",
      highlights: [
        "Strong focus on fundamentals",
        "Early PYQ exposure without overload",
        "Weak-topic tracking from the start",
        "Balanced pace for long-term preparation",
      ],
    },
    {
      title: "Ongoing 12th Graders",
      subtitle: "Advanced practice + exam strategy",
      description:
        "For students in Class 12 who already know the syllabus direction and now need stronger question-solving ability, revision discipline, and exam-oriented planning.",
      highlights: [
        "More advanced PYQ solving",
        "Faster revision cycles",
        "Exam-pattern familiarity",
        "Focused performance improvement",
      ],
    },
    {
      title: "12th Just Completed",
      subtitle: "Crash reinforcement phase",
      description:
        "For students who just completed Class 12 and want a short, intense improvement cycle using diagnostics, PYQ sets, and revision-focused study plans.",
      highlights: [
        "Fast correction of weak areas",
        "High-value chapter prioritization",
        "Timed PYQ practice",
        "Short-term score-focused planning",
      ],
    },
    {
      title: "12th Completed / Repeaters",
      subtitle: "Deep rebuild + score maximization",
      description:
        "For repeaters who want to rebuild concepts properly, fix long-standing mistakes, and push toward stronger exam performance with disciplined practice.",
      highlights: [
        "Gap analysis and rebuild strategy",
        "Deeper explanations where needed",
        "Mixed-difficulty PYQ training",
        "Longer-term improvement structure",
      ],
    },
  ];

  return (
    <section
      id="student-programs"
      className="border-t border-white/10 bg-slate-950"
    >
      <div className="mx-auto max-w-7xl px-6 py-20">
        <div className="max-w-3xl">
          <div className="inline-flex rounded-full border border-cyan-400/30 bg-cyan-400/10 px-4 py-1 text-sm font-medium text-cyan-300">
            Student Programs
          </div>

          <h2 className="mt-4 text-3xl font-bold tracking-tight text-white md:text-5xl">
            Different preparation paths for different student stages
          </h2>

          <p className="mt-4 text-lg leading-8 text-slate-300">
            PYQ Forge is designed around the idea that not every student should
            follow the same program. Students at different stages need different
            pacing, explanation depth, and practice intensity.
          </p>
        </div>

        <div className="mt-10 grid gap-6 lg:grid-cols-2">
          {programs.map((program) => (
            <div
              key={program.title}
              className="rounded-[2rem] border border-white/10 bg-white/5 p-8 shadow-2xl"
            >
              <div className="text-sm font-semibold uppercase tracking-[0.2em] text-cyan-300">
                {program.subtitle}
              </div>

              <h3 className="mt-3 text-2xl font-semibold text-white">
                {program.title}
              </h3>

              <p className="mt-4 leading-7 text-slate-300">
                {program.description}
              </p>

              <div className="mt-6 space-y-3">
                {program.highlights.map((item) => (
                  <div
                    key={item}
                    className="rounded-2xl border border-white/10 bg-slate-900/70 px-4 py-3 text-sm text-slate-200"
                  >
                    {item}
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>

        <div className="mt-10 rounded-[2rem] border border-white/10 bg-white/5 p-8 shadow-2xl">
          <div className="text-sm font-semibold uppercase tracking-[0.2em] text-cyan-300">
            Program logic
          </div>

          <h3 className="mt-3 text-3xl font-bold text-white">
            Same exams, different student needs
          </h3>

          <p className="mt-4 text-lg leading-8 text-slate-300">
            Two students preparing for the same exam may need completely
            different flows. One may need basics and slower clarity, while
            another may need faster revision and advanced PYQ drilling. These
            programs make that difference visible.
          </p>
        </div>
      </div>
    </section>
  );
}