"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";

const navLinks = [
  { label: "Home", href: "/" },
  { label: "About", href: "/about" },
  { label: "Programs", href: "/programs" },
  { label: "Pricing", href: "/pricing" },
  { label: "PYQ Bank", href: "/pyq-bank" },
  { label: "Diagnostic", href: "/diagnostic" },
  { label: "Dashboard", href: "/dashboard" },
];

export default function Navbar() {
  const pathname = usePathname();
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 border-b border-white/10 bg-slate-950">
      <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4">
        <Link href="/" className="flex items-center gap-3">
          <div className="rounded-2xl border border-cyan-400/20 bg-cyan-400/10 px-3 py-2 text-sm font-bold text-cyan-300">
            PYQ
          </div>

          <div>
            <div className="text-lg font-bold text-white">PYQ Forge</div>
            <div className="text-xs text-slate-400">
              Entrance Exam Preparation
            </div>
          </div>
        </Link>

        <nav className="hidden items-center gap-2 md:flex">
          {navLinks.map((link) => {
            const isActive = pathname === link.href;

            return (
              <Link
                key={link.href}
                href={link.href}
                className={`rounded-2xl px-4 py-2 text-sm font-medium transition ${
                  isActive
                    ? "bg-cyan-400 text-slate-950"
                    : "border border-white/10 bg-white/5 text-white hover:bg-white/10"
                }`}
              >
                {link.label}
              </Link>
            );
          })}
        </nav>

        <button
          type="button"
          onClick={() => setMenuOpen((prev) => !prev)}
          className="rounded-2xl border border-white/10 bg-white/5 px-4 py-2 text-sm font-medium text-white transition hover:bg-white/10 md:hidden"
        >
          Menu
        </button>
      </div>

      {menuOpen && (
        <div className="border-t border-white/10 bg-slate-950 md:hidden">
          <div className="mx-auto flex max-w-7xl flex-col gap-2 px-6 py-4">
            {navLinks.map((link) => {
              const isActive = pathname === link.href;

              return (
                <Link
                  key={link.href}
                  href={link.href}
                  onClick={() => setMenuOpen(false)}
                  className={`rounded-2xl px-4 py-3 text-sm font-medium transition ${
                    isActive
                      ? "bg-cyan-400 text-slate-950"
                      : "border border-white/10 bg-white/5 text-white hover:bg-white/10"
                  }`}
                >
                  {link.label}
                </Link>
              );
            })}
          </div>
        </div>
      )}
    </header>
  );
}