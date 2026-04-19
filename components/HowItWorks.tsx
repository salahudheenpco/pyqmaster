export default function HowItWorks() {
  const steps = [
    {
      title: "Pick your exam and subject",
      description:
        "Start with JEE, BITSAT, NEET, or other target exams, then move into the subject and chapter you want to improve.",
    },
    {
      title: "Practice real PYQ-style questions",
      description:
        "Solve question sets in a structured way instead of random practice, so your learning stays exam-focused.",
    },
    {
      title: "Choose explanation depth",
      description:
        "Read quick, standard, or deep explanations depending on your current level and how much support you need.",
    },
    {
      title: "Track weak areas and improve",
      description:
        "Use diagnostics, patterns in mistakes, and repeated practice to strengthen the topics that matter most.",
    },
  ];

  return (
    <section
      id="how-it-works"
      className="border-t border-white/10 bg-slate-950"
    >
      <div className="mx-auto max-w-7xl px-6 py-20">
        <div className="max-w-3xl">
          <div className="inline-flex rounded-full border border-cyan-400/30 bg-cyan-400/10 px-4 py-1 text-sm font-medium text-cyan-300">
            How it works
          </div>

          <h2 className="mt-4 text-3xl font-bold tracking-tight text-white md:text-5xl">
            A simple preparation flow built around PYQs
          </h2>

          <p className="mt-4 text-lg leading-8 text-slate-300">
            PYQ Forge is designed to make preparation more focused. Instead of
            jumping randomly between topics, students move through a clear loop
            of practice, explanation, review, and improvement.
          </p>
        </div>

        <div className="mt-10 grid gap-6 md:grid-cols-2 xl:grid-cols-4">
          {steps.map((step, index) => (
            <div
              key={step.title}
              className="rounded-[2rem] border border-white/10 bg-white/5 p-6 shadow-2xl"
            >
              <div className="inline-flex rounded-full border border-cyan-400/20 bg-cyan-400/10 px-3 py-1 text-xs font-semibold text-cyan-300">
                Step {index + 1}
              </div>

              <h3 className="mt-4 text-xl font-semibold text-white">
                {step.title}
              </h3>

              <p className="mt-3 leading-7 text-slate-300">
                {step.description}
              </p>
            </div>
          ))}
        </div>

        <div className="mt-10 rounded-[2rem] border border-white/10 bg-white/5 p-8 shadow-2xl">
          <div className="grid gap-6 md:grid-cols-3">
            <div>
              <div className="text-sm font-semibold uppercase tracking-[0.2em] text-cyan-300">
                Step 1
              </div>
              <div className="mt-3 text-2xl font-semibold text-white">
                Practice
              </div>
              <p className="mt-3 leading-7 text-slate-300">
                Start with chapter-wise or exam-wise PYQs and test how well you
                actually understand the concept.
              </p>
            </div>

            <div>
              <div className="text-sm font-semibold uppercase tracking-[0.2em] text-cyan-300">
                Step 2
              </div>
              <div className="mt-3 text-2xl font-semibold text-white">
                Understand
              </div>
              <p className="mt-3 leading-7 text-slate-300">
                Use explanation depth levels to learn in a way that matches your
                speed, clarity, and revision needs.
              </p>
            </div>

            <div>
              <div className="text-sm font-semibold uppercase tracking-[0.2em] text-cyan-300">
                Step 3
              </div>
              <div className="mt-3 text-2xl font-semibold text-white">
                Improve
              </div>
              <p className="mt-3 leading-7 text-slate-300">
                Track mistakes, revisit weak chapters, and keep building
                confidence through repeated targeted practice.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}