import { Award, Download, Eye } from "lucide-react";
import type { Certification } from "@/lib/data/certifications";

export function CertificationCard({ certification }: { certification: Certification }) {
  return (
    <article className="card card-hover p-5">
      <div className="flex items-start gap-4">
        <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-blue-50 text-blue-700">
          <Award size={22} />
        </div>
        <div>
          <p className="text-xs font-semibold uppercase tracking-widest text-teal-600">{certification.provider}</p>
          <h2 className="mt-2 text-lg font-bold leading-7 text-slate-950">{certification.title}</h2>
          <p className="mt-2 text-sm font-medium text-slate-600">{certification.issuer} · {certification.credentialType}</p>
        </div>
      </div>
      <div className="mt-5 rounded-xl border border-slate-200 bg-slate-50 p-4">
        <p className="text-xs font-bold uppercase tracking-widest text-slate-500">Focus areas</p>
        <div className="mt-3 flex flex-wrap gap-2">
          {certification.skills.slice(0, 5).map((skill) => (
            <span key={skill} className="rounded-full bg-white px-3 py-1 text-xs font-semibold text-slate-700 shadow-sm">{skill}</span>
          ))}
        </div>
      </div>
      <p className="mt-4 text-sm leading-6 text-slate-600">{certification.description}</p>
      <div className="mt-5 flex gap-3">
        <button type="button" className="button-secondary px-4 py-2" aria-label={`Preview ${certification.title}`}>
          <Eye size={16} /> View
        </button>
        <button type="button" className="button-secondary px-4 py-2" aria-label={`Download ${certification.title}`}>
          <Download size={16} /> Download
        </button>
      </div>
    </article>
  );
}
