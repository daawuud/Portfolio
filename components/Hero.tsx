import Link from "next/link";
import { ArrowRight, Download, Mail } from "lucide-react";

export function Hero() {
  return (
    <section className="relative overflow-hidden bg-navy-950 text-white">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,rgba(20,184,166,0.28),transparent_35%),linear-gradient(135deg,rgba(10,36,61,1),rgba(6,25,44,1))]" />
      <div className="container-page relative grid min-h-[620px] items-center gap-12 py-16 lg:grid-cols-[1.15fr_0.85fr]">
        <div>
          <p className="text-sm font-semibold uppercase tracking-widest text-teal-300">Daud Mohamud · Edmonton, Alberta</p>
          <h1 className="mt-5 max-w-4xl text-4xl font-bold tracking-tight sm:text-5xl lg:text-6xl">
            Technology Professional, Data Analyst & Database Systems Specialist
          </h1>
          <p className="mt-6 max-w-3xl text-lg leading-8 text-slate-300">
            Experienced technology professional with over 15 years in database management, data analysis, ERP systems, technical support, and AI-assisted web development. Skilled in SQL, Python, PostgreSQL, Odoo ERP, cloud systems, and modern portfolio/web application development.
          </p>
          <div className="mt-8 flex flex-wrap gap-3">
            <Link href="/resume" className="button-primary">
              View Resume <ArrowRight size={18} />
            </Link>
            <Link href="/projects" className="button-secondary border-white/20 bg-white/10 text-white hover:bg-white hover:text-navy-900">
              Explore Projects
            </Link>
            <Link href="/contact" className="button-secondary border-white/20 bg-white/10 text-white hover:bg-white hover:text-navy-900">
              <Mail size={18} /> Contact Me
            </Link>
            <Link href="/resume/Daud-Mohamud-Resume.pdf" className="button-secondary border-white/20 bg-white/10 text-white hover:bg-white hover:text-navy-900">
              <Download size={18} /> Download Resume
            </Link>
          </div>
        </div>
        <div className="rounded-3xl border border-white/10 bg-white/10 p-6 shadow-2xl backdrop-blur">
          <div className="rounded-2xl bg-white p-6 text-slate-950">
            <p className="eyebrow">Professional Focus</p>
            <div className="mt-5 grid gap-3">
              {["Data Analyst", "Database & ERP Systems Specialist", "Technical Support Engineer", "Business Systems Consultant", "AI-Assisted Web Development Learner"].map((item) => (
                <div key={item} className="rounded-2xl border border-slate-200 bg-slate-50 p-4 font-semibold text-slate-800">
                  {item}
                </div>
              ))}
            </div>
            <div className="mt-6 rounded-2xl bg-navy-950 p-5 text-white">
              <p className="text-sm text-slate-300">Ready for</p>
              <p className="mt-1 text-xl font-bold">Data, database, ERP, support, and business technology roles.</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
