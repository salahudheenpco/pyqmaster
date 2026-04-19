export default function Hero() {
  const exams = ["JEE Main", "JEE Advanced", "BITSAT", "NEET", "CUET"];

  const stats = [
    { label: "PYQ-first preparation", value: "100%" },
    { label: "Explanation depths", value: "3" },
    { label: "Student tracks", value: "4" },
    { label: "Key exams covered", value: "5+" },
  ];

  return (
    <>
      <section className="mx-auto grid max-w-7xl gap-10 px-6 py-16 md:grid-cols-2 md:py-24">
        <div className="flex flex-col justify-center">
          <div className="mb-4 inline-flex w-fit rounded-full border border-slate-200 bg-white px-3 py-1 text-xs font-medium text-slate-600 shadow-sm">
            For JEE, BITSAT, NEET and more
          </div>

          <h1 className="max-w-2xl text-4xl font-bold tracking-tight md:text-6xl">
            Master entrance exams through {" "}
            <span className="underline decoration-slate-300 underline-offset-8">
              Previous Year Questions
            </span>
          </h1>

          <p className="mt-5 max-w-xl text-lg leading-8 text-slate-600">
            A PYQ-first platform that adapts explanations to student level,
            tracks weaknesses, and turns every question into a full learning
            loop.
          </p>

          <div className="mt-8 flex flex-wrap gap-4">
            <a
              href="#dashboard"
              className="rounded-2xl bg-slate-900 px-5 py-3 text-sm font-semibold text-white shadow-lg hover:bg-slate-800"
            >
              Start Free Diagnostic
            </a>
            <a
              href="#features"
              className="rounded-2xl border border-slate-300 bg-white px-5 py-3 text-sm font-semibold shadow-sm hover:bg-slate-50"
            >
              Try a Demo Question
            </a>
          </div>

          <div className="mt-8 flex flex-wrap gap-2 text-sm text-slate-500">
            {exams.map((exam) => (
              <span
                key={exam}
                className="rounded-full border border-slate-200 bg-white px-3 py-1 shadow-sm"
              >
                {exam}
              </span>
            ))}
          </div>
        </div>

        <div className="grid gap-4 md:grid-cols-2">
          {stats.map((stat) => (
            <div
              key={stat.label}
              className="rounded-3xl border border-slate-200 bg-white p-6 shadow-sm"
            >
              <div className="text-3xl font-bold">{stat.value}</div>
              <div className="mt-2 text-sm text-slate-600">{stat.label}</div>
            </div>
          ))}

          <div className="rounded-3xl border border-slate-200 bg-white p-6 shadow-sm md:col-span-2">
            <div className="mb-3 text-sm font-semibold text-slate-900">
              Learning loop
            </div>

            <div className="grid gap-3 text-sm text-slate-600 md:grid-cols-5">
              {[
                "Attempt PYQ",
                "Analyze mistake",
                "Choose explanation depth",
                "Revise concept",
                "Retry similar PYQs",
              ].map((step) => (
                <div
                  key={step}
                  className="rounded-2xl bg-slate-50 px-3 py-4 text-center font-medium"
                >
                  {step}
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="border-y border-slate-200 bg-white">
        <div className="mx-auto max-w-7xl px-6 py-5">
          <div className="flex flex-wrap items-center gap-3 text-sm text-slate-600">
            <span className="font-semibold text-slate-900">
              Prepare smarter for:
            </span>
            {exams.map((exam) => (
              <span key={exam}>{exam}</span>
            ))}
            <span className="ml-auto text-slate-500">
              Chapter-wise PYQs • Topic analytics • Level-based explanations
            </span>
          </div>
        </div>
      </section>
    </>
  );
}
