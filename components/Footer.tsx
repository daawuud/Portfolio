import Link from "next/link";
import { Github, Linkedin, Mail, MapPin, Phone } from "lucide-react";

export type FooterSettings = {
  footer_name?: string;
  footer_title?: string;
  footer_description?: string;
  footer_email?: string;
  footer_phone?: string;
  footer_location?: string;
  footer_linkedin_url?: string;
  footer_github_url?: string;
  footer_copyright?: string;
};

export function Footer({ settings = {} }: { settings?: FooterSettings }) {
  const name = settings.footer_name || "Daud Mohamud";
  const title = settings.footer_title || "Data Analyst & Technology Professional";
  const description =
    settings.footer_description ||
    "Edmonton-based technology professional specializing in data analysis, database systems, ERP workflows, technical support, and AI-assisted web development.";
  const email = settings.footer_email || "daud.mohamed.badiyow@gmail.com";
  const phone = settings.footer_phone || "289.887.2268";
  const location = settings.footer_location || "Edmonton, Alberta, Canada";
  const linkedinUrl = settings.footer_linkedin_url || "https://linkedin.com/in/dm889";
  const githubUrl = settings.footer_github_url || "#";
  const copyright = settings.footer_copyright || "Copyright 2026 Daud Mohamud. All rights reserved.";
  const initials = name
    .split(" ")
    .filter(Boolean)
    .slice(0, 2)
    .map((part) => part[0])
    .join("")
    .toUpperCase() || "DM";

  return (
    <footer className="bg-navy-950 text-white">
      <div className="container-page grid gap-10 py-12 md:grid-cols-[1.2fr_1fr_1fr]">
        <div>
          <div className="flex items-center gap-3">
            <span className="flex h-11 w-11 items-center justify-center rounded-xl bg-teal-500 font-bold">{initials}</span>
            <div>
              <p className="font-bold">{name}</p>
              <p className="text-sm text-slate-300">{title}</p>
            </div>
          </div>
          <p className="mt-5 max-w-md text-sm leading-7 text-slate-300">
            {description}
          </p>
        </div>
        <div>
          <h2 className="text-sm font-semibold uppercase tracking-widest text-teal-300">Contact</h2>
          <ul className="mt-4 space-y-3 text-sm text-slate-300">
            <li className="flex gap-3"><Mail size={18} /> {email}</li>
            <li className="flex gap-3"><Phone size={18} /> {phone}</li>
            <li className="flex gap-3"><MapPin size={18} /> {location}</li>
          </ul>
        </div>
        <div>
          <h2 className="text-sm font-semibold uppercase tracking-widest text-teal-300">Links</h2>
          <div className="mt-4 flex flex-wrap gap-3">
            <Link href={linkedinUrl} className="button-secondary border-white/20 bg-white/10 text-white hover:bg-white hover:text-navy-900">
              <Linkedin size={18} /> LinkedIn
            </Link>
            <Link href={githubUrl} className="button-secondary border-white/20 bg-white/10 text-white hover:bg-white hover:text-navy-900">
              <Github size={18} /> GitHub
            </Link>
          </div>
        </div>
      </div>
      <div className="border-t border-white/10 py-5 text-center text-sm text-slate-400">{copyright}</div>
    </footer>
  );
}
