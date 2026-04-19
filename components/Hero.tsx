import Link from "next/link";

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
          <div className="mb-4 inline-flex w-fit rounded-full border border-cyan-400/30 bg-cyan-400/10 px-3 py-1 text-xs font-medium text-cyan-300 shadow-sm">
            For JEE, BITSAT, NEET and more
          </div>

          <h1 className="max-w-2xl text-4xl font-bold tracking-tight text-white md:text-6xl">
            Master entrance exams through{" "}
            <span className="underline decoration-cyan-400/40 underline-offset-8">
              Previous Year Questions
            </span>
          </h1>

          <p className="mt-5 max-w-xl text-lg leading-8 text-slate-300">
            A PYQ-first platform that adapts explanations to student level,
            tracks weaknesses, and turns every question into a full learning
            loop.
          </p>

          <div className="mt-8 flex flex-wrap gap-4">
            <Link
              href="/diagnostic"
              className="rounded-2xl bg-cyan-400 px-5 py-3 text-sm font-semibold text-slate-950 shadow-lg transition hover:scale-[1.02]"
            >
              Start Free Diagnostic
            </Link>

            <Link
              href="/pyq-bank"
              className="rounded-2xl border border-white/15 bg-white/5 px-5 py-3 text-sm font-semibold text-white shadow-sm transition hover:bg-white/10"
            >
              Try a Demo Question
            </Link>
          </div>

          <div className="mt-8 flex flex-wrap gap-2 text-sm text-slate-400">
            {exams.map((exam) => (
              <span
                key={exam}
                className="rounded-full border border-white/10 bg-white/5 px-3 py-1 text-slate-300 shadow-sm"
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
              className="rounded-3xl border border-white/10 bg-white/5 p-6 shadow-2xl"
            >
              <div className="text-3xl font-bold text-white">{stat.value}</div>
              <div className="mt-2 text-sm text-slate-300">{stat.label}</div>
            </div>
          ))}

          <div className="rounded-3xl border border-white/10 bg-white/5 p-6 shadow-2xl md:col-span-2">
            <div className="mb-3 text-sm font-semibold text-cyan-300">
              Learning loop
            </div>

            <div className="grid gap-3 text-sm text-slate-300 md:grid-cols-5">
              {[
                "Attempt PYQ",
                "Analyze mistake",
                "Choose explanation depth",
                "Revise concept",
                "Retry similar PYQs",
              ].map((step) => (
                <div
                  key={step}
                  className="rounded-2xl border border-white/10 bg-slate-900/70 px-3 py-4 text-center font-medium"
                >
                  {step}
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="border-y border-white/10 bg-slate-950">
        <div className="mx-auto max-w-7xl px-6 py-5">
          <div className="flex flex-wrap items-center gap-3 text-sm text-slate-400">
            <span className="font-semibold text-white">
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