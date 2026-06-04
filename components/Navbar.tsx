"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { Menu, X } from "lucide-react";
import { useState } from "react";

const navItems = [
  ["Home", "/"],
  ["About", "/about"],
  ["Resume", "/resume"],
  ["Skills", "/skills"],
  ["Projects", "/projects"],
  ["Certifications", "/certifications"],
  ["Blog", "/blog"],
  ["Contact", "/contact"]
];

export function Navbar() {
  const [open, setOpen] = useState(false);
  const pathname = usePathname();

  return (
    <header className="sticky top-0 z-50 border-b border-slate-200/80 bg-white/95 backdrop-blur">
      <nav className="container-page flex h-[60px] min-h-[60px] items-center justify-between" aria-label="Primary navigation">
        <Link href="/" className="flex items-center gap-3" onClick={() => setOpen(false)}>
          <span className="flex h-9 w-9 items-center justify-center rounded-lg bg-navy-900 text-xs font-bold text-white">DM</span>
          <span className="text-sm font-bold text-slate-950">Daud Mohamud</span>
        </Link>
        <div className="hidden items-center gap-0.5 lg:flex">
          {navItems.map(([label, href]) => {
            const active = href === "/" ? pathname === "/" : pathname.startsWith(href);
            return (
              <Link
                key={href}
                href={href}
                className={`rounded-full px-2.5 py-2 text-[13px] font-semibold transition ${
                  active ? "bg-navy-900 text-white" : "text-slate-700 hover:bg-slate-100 hover:text-slate-950"
                }`}
              >
                {label}
              </Link>
            );
          })}
          <Link href="/admin/login" className="ml-2 rounded-full border border-slate-300 px-3 py-2 text-[13px] font-semibold text-slate-700 hover:border-teal-500 hover:text-teal-700">
            Admin
          </Link>
        </div>
        <button
          type="button"
          className="inline-flex h-10 w-10 items-center justify-center rounded-xl border border-slate-300 text-slate-800 lg:hidden"
          aria-label="Toggle navigation menu"
          onClick={() => setOpen((value) => !value)}
        >
          {open ? <X size={20} /> : <Menu size={20} />}
        </button>
      </nav>
      {open ? (
        <div className="border-t border-slate-200 bg-white lg:hidden">
          <div className="container-page grid gap-2 py-4">
            {navItems.map(([label, href]) => (
              <Link key={href} href={href} className="rounded-xl px-3 py-3 text-sm font-semibold text-slate-700 hover:bg-slate-100" onClick={() => setOpen(false)}>
                {label}
              </Link>
            ))}
            <Link href="/admin/login" className="rounded-xl px-3 py-3 text-sm font-semibold text-teal-700 hover:bg-teal-50" onClick={() => setOpen(false)}>
              Admin Login
            </Link>
          </div>
        </div>
      ) : null}
    </header>
  );
}
