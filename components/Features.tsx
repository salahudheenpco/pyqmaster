export default function Features() {
  const features = [
    {
      title: "Chapter-wise PYQ Bank",
      description:
        "Browse questions by exam, subject, chapter, year, and topic so practice stays structured and relevant.",
    },
    {
      title: "Adaptive Explanation Levels",
      description:
        "Use quick, standard, or deep explanations depending on whether you want revision speed or concept rebuilding.",
    },
    {
      title: "Diagnostic Starting Point",
      description:
        "Students can begin with a simple diagnostic flow to identify their current stage and weak areas.",
    },
    {
      title: "Practice + Analysis Loop",
      description:
        "The platform is designed around repeated practice, mistake review, and concept strengthening.",
    },
    {
      title: "Student-Specific Programs",
      description:
        "Different preparation tracks are planned for ongoing 11th, ongoing 12th, fresh 12th pass-outs, and repeaters.",
    },
    {
      title: "Focused Dashboard Experience",
      description:
        "A central dashboard connects PYQ practice, diagnostics, programs, and planning into one system.",
    },
  ];

  return (
    <section id="features" className="border-t border-white/10 bg-slate-950">
      <div className="mx-auto max-w-7xl px-6 py-20">
        <div className="max-w-3xl">
          <div className="inline-flex rounded-full border border-cyan-400/30 bg-cyan-400/10 px-4 py-1 text-sm font-medium text-cyan-300">
            Features
          </div>

          <h2 className="mt-4 text-3xl font-bold tracking-tight text-white md:text-5xl">
            Built for serious, structured exam preparation
          </h2>

          <p className="mt-4 text-lg leading-8 text-slate-300">
            PYQMaster is not just a question list. It is meant to become a
            focused preparation system where students can practice, understand,
            analyze, and improve with direction.
          </p>
        </div>

        <div className="mt-10 grid gap-6 md:grid-cols-2 xl:grid-cols-3">
          {features.map((feature) => (
            <div
              key={feature.title}
              className="rounded-[2rem] border border-white/10 bg-white/5 p-8 shadow-2xl"
            >
              <h3 className="text-2xl font-semibold text-white">
                {feature.title}
              </h3>

              <p className="mt-4 leading-7 text-slate-300">
                {feature.description}
              </p>
            </div>
          ))}
        </div>

        <div className="mt-10 rounded-[2rem] border border-white/10 bg-white/5 p-8 shadow-2xl">
          <div className="grid gap-6 md:grid-cols-3">
            <div>
              <div className="text-sm font-semibold uppercase tracking-[0.2em] text-cyan-300">
                Learn
              </div>
              <div className="mt-3 text-2xl font-semibold text-white">
                Understand the concept
              </div>
              <p className="mt-3 leading-7 text-slate-300">
                Move from raw question practice into real concept clarity
                through explanation depth and structured review.
              </p>
            </div>

            <div>
              <div className="text-sm font-semibold uppercase tracking-[0.2em] text-cyan-300">
                Practice
              </div>
              <div className="mt-3 text-2xl font-semibold text-white">
                Solve relevant PYQs
              </div>
              <p className="mt-3 leading-7 text-slate-300">
                Keep preparation closely tied to exam reality by using previous
                year question patterns and targeted sets.
              </p>
            </div>

            <div>
              <div className="text-sm font-semibold uppercase tracking-[0.2em] text-cyan-300">
                Improve
              </div>
              <div className="mt-3 text-2xl font-semibold text-white">
                Fix weak areas faster
              </div>
              <p className="mt-3 leading-7 text-slate-300">
                Use diagnostics, patterns in mistakes, and repeated focused
                practice to improve where it matters most.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}