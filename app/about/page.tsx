import Link from "next/link";

const pillars = [
  {
    title: "PYQ-First Learning",
    description:
      "We focus on previous year questions as the main learning engine, so students prepare in a more exam-relevant way.",
  },
  {
    title: "Explanation Depths",
    description:
      "Students can learn at different explanation levels depending on their current confidence, speed, and understanding.",
  },
  {
    title: "Student Programs",
    description:
      "Different preparation tracks are designed for different student stages, from foundation building to serious exam revision.",
  },
  {
    title: "Weakness Tracking",
    description:
      "The platform is designed to help students identify weak topics and take action instead of studying randomly.",
  },
];

export default function AboutPage() {
  return (
    <div className="min-h-screen bg-slate-950 text-white">
      <main className="mx-auto max-w-7xl px-6 py-12">
        <section className="max-w-4xl">
          <div className="inline-flex rounded-full border border-cyan-400/30 bg-cyan-400/10 px-4 py-1 text-sm font-medium text-cyan-300">
            About PYQ Forge
          </div>

          <h1 className="mt-4 text-4xl font-bold tracking-tight md:text-5xl">
            A smarter exam prep platform built around previous year questions
          </h1>

          <p className="mt-4 text-lg leading-8 text-slate-300">
            PYQ Forge is designed to help students prepare for entrance exams
            like JEE, BITSAT, NEET, and similar tests using a more focused,
            practical, and exam-oriented approach.
          </p>

          <p className="mt-4 text-lg leading-8 text-slate-300">
            Instead of studying everything in a random way, students can use
            PYQs, explanation-level customization, diagnostics, dashboards, and
            structured programs to understand exactly where they stand and what
            to do next.
          </p>
        </section>

        <section className="mt-10 grid gap-6 md:grid-cols-2">
          {pillars.map((pillar) => (
            <div
              key={pillar.title}
              className="rounded-[2rem] border border-white/10 bg-white/5 p-8 shadow-2xl"
            >
              <h2 className="text-2xl font-semibold">{pillar.title}</h2>
              <p className="mt-4 leading-7 text-slate-300">
                {pillar.description}
              </p>
            </div>
          ))}
        </section>

        <section className="mt-10 rounded-[2rem] border border-white/10 bg-white/5 p-8 shadow-2xl">
          <div className="text-sm font-semibold uppercase tracking-[0.2em] text-cyan-300">
            Why this matters
          </div>

          <h2 className="mt-3 text-3xl font-bold">
            The goal is not just more studying — it is better studying
          </h2>

          <p className="mt-4 text-lg leading-8 text-slate-300">
            Many students spend a lot of time studying without knowing whether
            they are improving in the right direction. PYQ Forge aims to reduce
            that confusion by connecting practice, explanations, analysis, and
            planning into one flow.
          </p>

          <div className="mt-8 flex flex-wrap gap-4">
            <Link
              href="/pyq-bank"
              className="rounded-2xl bg-cyan-400 px-5 py-3 text-sm font-semibold text-slate-950 transition hover:scale-[1.02]"
            >
              Explore PYQ Bank
            </Link>

            <Link
              href="/diagnostic"
              className="rounded-2xl border border-white/15 bg-white/5 px-5 py-3 text-sm font-medium text-white transition hover:bg-white/10"
            >
              Start Free Diagnostic
            </Link>
          </div>
        </section>
      </main>
    </div>
  );
}