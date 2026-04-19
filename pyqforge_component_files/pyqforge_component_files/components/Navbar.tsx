export default function Navbar() {
  return (
    <header className="sticky top-0 z-30 border-b border-slate-200 bg-white/90 backdrop-blur">
      <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4">
        <div>
          <div className="text-xl font-bold tracking-tight">PYQ Forge</div>
          <div className="text-xs text-slate-500">
            Entrance exam prep through strategic PYQ solving
          </div>
        </div>

        <nav className="hidden gap-6 text-sm md:flex">
          <a href="#how-it-works" className="hover:text-slate-600">
            How it works
          </a>
          <a href="#segments" className="hover:text-slate-600">
            Programs
          </a>
          <a href="#levels" className="hover:text-slate-600">
            Explanation Levels
          </a>
          <a href="#features" className="hover:text-slate-600">
            Features
          </a>
          <a href="#dashboard" className="hover:text-slate-600">
            Dashboard
          </a>
        </nav>

        <div className="flex gap-3">
          <a
            href="#features"
            className="rounded-2xl border border-slate-300 px-4 py-2 text-sm font-medium shadow-sm hover:bg-slate-50"
          >
            Explore PYQ Bank
          </a>
          <a
            href="#dashboard"
            className="rounded-2xl bg-slate-900 px-4 py-2 text-sm font-medium text-white shadow-sm hover:bg-slate-800"
          >
            Start Free Diagnostic
          </a>
        </div>
      </div>
    </header>
  );
}
