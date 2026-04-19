import Link from "next/link";

const links = [
  { label: "Home", href: "/" },
  { label: "About", href: "/about" },
  { label: "Programs", href: "/programs" },
  { label: "Pricing", href: "/pricing" },
  { label: "PYQ Bank", href: "/pyq-bank" },
  { label: "Diagnostic", href: "/diagnostic" },
  { label: "Dashboard", href: "/dashboard" },
];

export default function Footer() {
  return (
    <footer className="border-t border-white/10 bg-slate-950">
      <div className="mx-auto max-w-7xl px-6 py-12">
        <div className="grid gap-10 md:grid-cols-[1.2fr_0.8fr]">
          <div>
            <div className="flex items-center gap-3">
              <div className="rounded-2xl border border-cyan-400/20 bg-cyan-400/10 px-3 py-2 text-sm font-bold text-cyan-300">
                PYQ
              </div>
              <div>
                <div className="text-lg font-bold text-white">PYQMaster</div>
                <div className="text-sm text-slate-400">
                  Entrance Exam Preparation
                </div>
              </div>
            </div>

            <p className="mt-4 max-w-2xl leading-7 text-slate-300">
              A PYQ-first exam prep platform designed to help students practice
              with direction, learn through explanation depth, and improve with
              more structure.
            </p>
          </div>

          <div>
            <div className="text-sm font-semibold uppercase tracking-[0.2em] text-cyan-300">
              Navigation
            </div>

            <div className="mt-4 flex flex-wrap gap-3">
              {links.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  className="rounded-2xl border border-white/10 bg-white/5 px-4 py-2 text-sm text-white transition hover:bg-white/10"
                >
                  {link.label}
                </Link>
              ))}
            </div>
          </div>
        </div>

        <div className="mt-10 border-t border-white/10 pt-6 text-sm text-slate-400">
          © 2026 PYQMaster. Built for focused exam preparation.
        </div>
      </div>
    </footer>
  );
}