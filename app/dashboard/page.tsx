import Link from "next/link";

const subjects = [
  {
    name: "Physics",
    desc: "Chapter-wise PYQs, formulas, diagnostics, and focused practice sets.",
  },
  {
    name: "Chemistry",
    desc: "Organic, inorganic, physical chemistry, and exam-oriented revision.",
  },
  {
    name: "Mathematics",
    desc: "Topic practice, speed drills, and solved PYQ-based improvement.",
  },
];

const quickActions = [
  {
    title: "Explore PYQ Bank",
    href: "/pyq-bank",
    desc: "Browse previous year questions by exam, subject, topic, and year.",
  },
  {
    title: "Start Free Diagnostic",
    href: "/diagnostic",
    desc: "Identify your level, weak areas, and best starting plan.",
  },
  {
    title: "View Student Programs",
    href: "/programs",
    desc: "See the learning tracks designed for different student stages.",
  },
  {
    title: "See Pricing",
    href: "/pricing",
    desc: "Check available plans and how students can access the platform.",
  },
];

export default function DashboardPage() {
  return (
    <main className="min-h-screen bg-slate-950 text-white">
      <section className="mx-auto max-w-7xl px-6 py-10">
        <div className="mb-10 flex flex-col gap-4 rounded-3xl border border-white/10 bg-white/5 p-8 shadow-2xl">
          <span className="w-fit rounded-full border border-cyan-400/30 bg-cyan-400/10 px-4 py-1 text-sm text-cyan-300">
            Welcome to PYQ Forge
          </span>

          <h1 className="text-4xl font-bold tracking-tight sm:text-5xl">
            Your exam preparation dashboard
          </h1>

          <p className="max-w-2xl text-base text-slate-300 sm:text-lg">
            Practice smarter with previous year questions, free diagnostic tools,
            student programs, and focused exam preparation paths.
          </p>

          <div className="mt-2 flex flex-wrap gap-4">
            <Link
              href="/pyq-bank"
              className="rounded-2xl bg-cyan-400 px-6 py-3 font-semibold text-slate-950 transition hover:scale-[1.02]"
            >
              Explore PYQ Bank
            </Link>

            <Link
              href="/diagnostic"
              className="rounded-2xl border border-white/15 bg-white/5 px-6 py-3 font-semibold text-white transition hover:bg-white/10"
            >
              Start Free Diagnostic
            </Link>
          </div>
        </div>

        <section className="mb-10">
          <div className="mb-5 flex items-center justify-between">
            <h2 className="text-2xl font-semibold">Subjects</h2>
            <span className="text-sm text-slate-400">
              Pick where you want to begin
            </span>
          </div>

          <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-3">
            {subjects.map((subject) => (
              <div
                key={subject.name}
                className="rounded-3xl border border-white/10 bg-white/5 p-6 transition hover:-translate-y-1 hover:bg-white/[0.07]"
              >
                <h3 className="mb-2 text-xl font-semibold">{subject.name}</h3>
                <p className="mb-5 text-slate-300">{subject.desc}</p>

                <Link
                  href={{
                    pathname: "/pyq-bank",
                    query: { subject: subject.name },
                  }}
                  className="inline-block rounded-xl border border-cyan-400/30 bg-cyan-400/10 px-4 py-2 text-sm font-medium text-cyan-300 hover:bg-cyan-400/20"
                >
                  Open {subject.name}
                </Link>
              </div>
            ))}
          </div>
        </section>

        <section>
          <div className="mb-5 flex items-center justify-between">
            <h2 className="text-2xl font-semibold">Quick actions</h2>
          </div>

          <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-4">
            {quickActions.map((item) => (
              <Link
                key={item.title}
                href={item.href}
                className="rounded-3xl border border-white/10 bg-gradient-to-br from-white/8 to-white/4 p-6 transition hover:-translate-y-1 hover:border-cyan-400/30"
              >
                <h3 className="mb-2 text-lg font-semibold">{item.title}</h3>
                <p className="text-slate-300">{item.desc}</p>
              </Link>
            ))}
          </div>
        </section>
      </section>
    </main>
  );
}