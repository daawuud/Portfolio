import Link from "next/link";
import { Github, Linkedin, Mail, MapPin, Phone } from "lucide-react";

export function Footer() {
  return (
    <footer className="bg-navy-950 text-white">
      <div className="container-page grid gap-10 py-12 md:grid-cols-[1.2fr_1fr_1fr]">
        <div>
          <div className="flex items-center gap-3">
            <span className="flex h-11 w-11 items-center justify-center rounded-xl bg-teal-500 font-bold">DM</span>
            <div>
              <p className="font-bold">Daud Mohamud</p>
              <p className="text-sm text-slate-300">Data Analyst & Technology Professional</p>
            </div>
          </div>
          <p className="mt-5 max-w-md text-sm leading-7 text-slate-300">
            Edmonton-based technology professional specializing in data analysis, database systems, ERP workflows, technical support, and AI-assisted web development.
          </p>
        </div>
        <div>
          <h2 className="text-sm font-semibold uppercase tracking-widest text-teal-300">Contact</h2>
          <ul className="mt-4 space-y-3 text-sm text-slate-300">
            <li className="flex gap-3"><Mail size={18} /> daud.mohamed.badiyow@gmail.com</li>
            <li className="flex gap-3"><Phone size={18} /> 289.887.2268</li>
            <li className="flex gap-3"><MapPin size={18} /> Edmonton, Alberta, Canada</li>
          </ul>
        </div>
        <div>
          <h2 className="text-sm font-semibold uppercase tracking-widest text-teal-300">Links</h2>
          <div className="mt-4 flex flex-wrap gap-3">
            <Link href="https://linkedin.com/in/dm889" className="button-secondary border-white/20 bg-white/10 text-white hover:bg-white hover:text-navy-900">
              <Linkedin size={18} /> LinkedIn
            </Link>
            <Link href="#" className="button-secondary border-white/20 bg-white/10 text-white hover:bg-white hover:text-navy-900">
              <Github size={18} /> GitHub
            </Link>
          </div>
        </div>
      </div>
      <div className="border-t border-white/10 py-5 text-center text-sm text-slate-400">Copyright 2026 Daud Mohamud. All rights reserved.</div>
    </footer>
  );
}
