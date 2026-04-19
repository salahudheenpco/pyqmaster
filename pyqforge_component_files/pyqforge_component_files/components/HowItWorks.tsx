export default function HowItWorks() {
  const steps = [
    [
      "1",
      "Attempt the Question",
      "Solve PYQs by exam, chapter, topic, or difficulty.",
    ],
    [
      "2",
      "See the Right Explanation",
      "Choose concise, balanced, or detailed reasoning.",
    ],
    [
      "3",
      "Fix the Concept Gap",
      "Open concept refreshers, formulas, and trap notes.",
    ],
    [
      "4",
      "Practice Similar Patterns",
      "Strengthen retention through related PYQ clusters.",
    ],
    [
      "5",
      "Track Improvement",
      "Use analytics to improve speed, accuracy, and chapter mastery.",
    ],
  ];

  return (
    <section id="how-it-works" className="mx-auto max-w-7xl px-6 py-20">
      <div className="max-w-2xl">
        <div className="text-sm font-semibold uppercase tracking-[0.2em] text-slate-500">
          How it works
        </div>
        <h2 className="mt-3 text-3xl font-bold tracking-tight md:text-4xl">
          A better way to prepare using PYQs
        </h2>
        <p className="mt-4 text-slate-600">
          Instead of solving randomly, students move through a guided loop that
          builds speed, clarity, and retention.
        </p>
      </div>

      <div className="mt-10 grid gap-5 md:grid-cols-5">
        {steps.map(([num, title, desc]) => (
          <div
            key={title}
            className="rounded-3xl border border-slate-200 bg-white p-6 shadow-sm"
          >
            <div className="text-sm font-semibold text-slate-500">
              Step {num}
            </div>
            <div className="mt-2 text-lg font-semibold">{title}</div>
            <div className="mt-3 text-sm leading-6 text-slate-600">{desc}</div>
          </div>
        ))}
      </div>
    </section>
  );
}
