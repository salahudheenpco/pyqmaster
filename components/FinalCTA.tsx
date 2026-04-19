import Link from "next/link";

export default function FinalCTA() {
  return (
    <section className="border-t border-white/10 bg-slate-950">
      <div className="mx-auto max-w-7xl px-6 py-20">
        <div className="rounded-[2rem] border border-cyan-400/20 bg-gradient-to-br from-cyan-400/10 via-white/5 to-slate-900 p-8 shadow-2xl md:p-12">
          <div className="max-w-4xl">
            <div className="inline-flex rounded-full border border-cyan-400/30 bg-cyan-400/10 px-4 py-1 text-sm font-medium text-cyan-300">
              Ready to begin?
            </div>

            <h2 className="mt-4 text-3xl font-bold tracking-tight text-white md:text-5xl">
              Start with a diagnostic, then move into the right PYQ path
            </h2>

            <p className="mt-4 text-lg leading-8 text-slate-300">
              PYQMaster is built to help students stop preparing randomly. Start
              by identifying your level, then move into focused question
              practice, explanation depth, and a program path that fits your
              stage.
            </p>

            <div className="mt-8 flex flex-wrap gap-4">
              <Link
                href="/diagnostic"
                className="rounded-2xl bg-cyan-400 px-6 py-3 text-sm font-semibold text-slate-950 transition hover:scale-[1.02]"
              >
                Start Free Diagnostic
              </Link>

              <Link
                href="/pyq-bank"
                className="rounded-2xl border border-white/15 bg-white/5 px-6 py-3 text-sm font-medium text-white transition hover:bg-white/10"
              >
                Explore PYQ Bank
              </Link>

              <Link
                href="/programs"
                className="rounded-2xl border border-white/15 bg-white/5 px-6 py-3 text-sm font-medium text-white transition hover:bg-white/10"
              >
                View Programs
              </Link>
            </div>
          </div>

          <div className="mt-10 grid gap-4 md:grid-cols-3">
            <div className="rounded-3xl border border-white/10 bg-slate-900/70 p-5">
              <div className="text-sm font-semibold text-cyan-300">
                Start Smart
              </div>
              <p className="mt-3 text-sm leading-6 text-slate-300">
                Use the diagnostic to understand where you stand before diving
                into large amounts of practice.
              </p>
            </div>

            <div className="rounded-3xl border border-white/10 bg-slate-900/70 p-5">
              <div className="text-sm font-semibold text-cyan-300">
                Practice Better
              </div>
              <p className="mt-3 text-sm leading-6 text-slate-300">
                Solve chapter-wise and exam-focused PYQs instead of studying in
                an unstructured way.
              </p>
            </div>

            <div className="rounded-3xl border border-white/10 bg-slate-900/70 p-5">
              <div className="text-sm font-semibold text-cyan-300">
                Improve Faster
              </div>
              <p className="mt-3 text-sm leading-6 text-slate-300">
                Use explanation depth and repeated review to fix weak topics
                more effectively.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}