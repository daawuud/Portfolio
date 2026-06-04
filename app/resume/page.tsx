import type { Metadata } from "next";
import Link from "next/link";
import { Download, Mail, MapPin, Phone } from "lucide-react";
import { ResumeTimeline } from "@/components/ResumeTimeline";
import { SectionTitle } from "@/components/SectionTitle";
import { coreCompetencies, resumeCertifications, resumeHighlights, resumeProfile, resumeSummary } from "@/lib/data/resume";

export const metadata: Metadata = {
  title: "Resume",
  description: "Resume of Daud Mohamud, including technology, database, data analysis, ERP, and technical support experience."
};

export default function ResumePage() {
  return (
    <>
      <section className="bg-navy-950 py-14 text-white">
        <div className="container-page">
          <div className="flex flex-col gap-6 md:flex-row md:items-end md:justify-between">
            <SectionTitle tone="dark" eyebrow="Resume" title="Daud Mohamud" description="Technology Professional · Data Analyst · Database & ERP Systems Specialist" />
            <Link href="/resume/Daud-Mohamud-Resume.pdf" className="button-secondary shrink-0 border-white/20 bg-white text-navy-900 hover:bg-teal-50">
              <Download size={18} /> Download Resume
            </Link>
          </div>
          <div className="mt-8 grid gap-4 text-sm text-slate-200 sm:grid-cols-3">
            <p className="flex items-center gap-2"><MapPin size={17} className="text-teal-300" /> {resumeProfile.location}</p>
            <p className="flex items-center gap-2"><Mail size={17} className="text-teal-300" /> {resumeProfile.email}</p>
            <p className="flex items-center gap-2"><Phone size={17} className="text-teal-300" /> {resumeProfile.phone}</p>
          </div>
        </div>
      </section>
      <section className="section-padding">
        <div className="container-page grid gap-8 lg:grid-cols-[0.72fr_1.28fr]">
          <aside className="space-y-6">
            <div className="card p-6">
              <h2 className="text-xl font-bold text-slate-950">Professional summary</h2>
              <p className="mt-4 text-sm leading-7 text-slate-600">{resumeSummary}</p>
            </div>
            <div className="card p-6">
              <h2 className="text-xl font-bold text-slate-950">Target roles</h2>
              <div className="mt-4 flex flex-wrap gap-2">
                {resumeProfile.targetRoles.map((role) => (
                  <span key={role} className="rounded-full bg-navy-50 px-3 py-1.5 text-xs font-bold text-navy-800">{role}</span>
                ))}
              </div>
            </div>
            <div className="card p-6">
              <h2 className="text-xl font-bold text-slate-950">Core competencies</h2>
              <ul className="mt-4 space-y-2 text-sm leading-6 text-slate-600">
                {coreCompetencies.map((item) => <li key={item}>- {item}</li>)}
              </ul>
            </div>
          </aside>
          <div>
            <div className="card mb-8 p-6">
              <h2 className="text-xl font-bold text-slate-950">Resume highlights</h2>
              <div className="mt-4 grid gap-3">
                {resumeHighlights.map((highlight) => (
                  <p key={highlight} className="rounded-xl bg-teal-50 px-4 py-3 text-sm font-semibold leading-6 text-teal-900">{highlight}</p>
                ))}
              </div>
            </div>
            <ResumeTimeline />
            <div className="card mt-8 p-6">
              <h2 className="text-xl font-bold text-slate-950">Education and Certifications</h2>
              <div className="mt-5 flex flex-wrap gap-3">
                {resumeCertifications.map((item) => (
                  <span key={item} className="rounded-full bg-teal-50 px-4 py-2 text-sm font-semibold text-teal-800">{item}</span>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
