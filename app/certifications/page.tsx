import type { Metadata } from "next";
import { Award, BookOpenCheck, Cloud, LineChart } from "lucide-react";
import { CertificationExplorer } from "@/components/CertificationExplorer";
import { SectionTitle } from "@/components/SectionTitle";
import { certifications } from "@/lib/data/certifications";

export const metadata: Metadata = {
  title: "Certifications",
  description: "Google Data Analytics, IBM Data Analyst, cloud, AI, and career development certifications by Daud Mohamud."
};

export default function CertificationsPage() {
  const googleCount = certifications.filter((certification) => certification.provider === "Google").length;
  const ibmCount = certifications.filter((certification) => certification.provider === "IBM").length;
  const otherCount = certifications.filter((certification) => certification.provider === "Other").length;

  return (
    <>
      <section className="bg-navy-950 py-14 text-white">
        <div className="container-page">
          <SectionTitle tone="dark" eyebrow="Certifications" title="Professional certificates across data analytics, cloud, and AI" description="A real credential library covering Google Data Analytics, IBM Data Analyst, Azure AI, AWS, NPower, and AI productivity learning." />
          <div className="mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
            <div className="rounded-xl border border-white/10 bg-white/10 p-5"><Award className="text-teal-300" /><p className="mt-4 text-3xl font-bold">{certifications.length}</p><p className="mt-1 text-sm text-slate-300">Total certificates</p></div>
            <div className="rounded-xl border border-white/10 bg-white/10 p-5"><LineChart className="text-teal-300" /><p className="mt-4 text-3xl font-bold">{googleCount}</p><p className="mt-1 text-sm text-slate-300">Google Analytics credentials</p></div>
            <div className="rounded-xl border border-white/10 bg-white/10 p-5"><BookOpenCheck className="text-teal-300" /><p className="mt-4 text-3xl font-bold">{ibmCount}</p><p className="mt-1 text-sm text-slate-300">IBM Analyst credentials</p></div>
            <div className="rounded-xl border border-white/10 bg-white/10 p-5"><Cloud className="text-teal-300" /><p className="mt-4 text-3xl font-bold">{otherCount}</p><p className="mt-1 text-sm text-slate-300">Cloud, AI, and career credentials</p></div>
          </div>
        </div>
      </section>
      <section className="section-padding">
        <div className="container-page">
          <div className="mb-8 max-w-3xl">
            <p className="text-sm font-bold uppercase tracking-widest text-teal-700">Credential explorer</p>
            <h2 className="mt-3 text-3xl font-bold tracking-tight text-slate-950">Search by certificate, provider, or focus area</h2>
            <p className="mt-4 text-lg leading-8 text-slate-600">Certificate files can be added later under public/certificates and connected to each card when the PDFs or images are available.</p>
          </div>
          <CertificationExplorer certifications={certifications} />
        </div>
      </section>
    </>
  );
}
