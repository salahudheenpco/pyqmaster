export default function FinalCTA() {
  return (
    <section className="bg-slate-900 text-white">
      <div className="mx-auto max-w-7xl px-6 py-20 text-center">
        <div className="mx-auto max-w-3xl">
          <div className="text-sm font-semibold uppercase tracking-[0.2em] text-slate-400">
            Final call to action
          </div>

          <h2 className="mt-3 text-3xl font-bold tracking-tight md:text-5xl">
            Stop solving randomly. Start improving strategically.
          </h2>

          <p className="mt-5 text-lg leading-8 text-slate-300">
            Use previous year questions the right way with personalized
            explanations, concept-linked revision, and focused performance
            analytics.
          </p>

          <div className="mt-8 flex flex-wrap justify-center gap-4">
            <a
              href="#dashboard"
              className="rounded-2xl bg-white px-5 py-3 text-sm font-semibold text-slate-900 shadow-sm hover:bg-slate-100"
            >
              Start Free Diagnostic
            </a>
            <a
              href="#segments"
              className="rounded-2xl border border-slate-600 px-5 py-3 text-sm font-semibold text-white hover:bg-slate-800"
            >
              Explore Plans
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
