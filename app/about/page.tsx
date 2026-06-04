import type { Metadata } from "next";
import type { LucideIcon } from "lucide-react";
import { Brain, Database, LifeBuoy, LineChart, Rocket } from "lucide-react";
import { SectionTitle } from "@/components/SectionTitle";

export const metadata: Metadata = {
  title: "About",
  description: "About Daud Mohamud, an Edmonton technology professional with experience in data, databases, ERP, and technical support."
};

const values: { label: string; icon: LucideIcon }[] = [
  { label: "Data-driven problem solver", icon: LineChart },
  { label: "Database and ERP experience", icon: Database },
  { label: "Strong technical troubleshooting", icon: LifeBuoy },
  { label: "Business and community project experience", icon: Brain },
  { label: "Continuous learner in AI and web development", icon: Rocket }
];

export default function AboutPage() {
  return (
    <section className="section-padding bg-white">
      <div className="container-page">
        <SectionTitle eyebrow="About" title="A technology professional with business systems depth and modern web momentum" />
        <div className="mt-10 grid gap-10 lg:grid-cols-[1fr_0.9fr]">
          <div className="space-y-6 text-lg leading-8 text-slate-600">
            <p>Daud Mohamud is an experienced technology professional based in Edmonton, Alberta, Canada. He has over 15 years of experience in database management, data analysis, enterprise resource planning systems, technical support, VoIP platforms, network systems, and business technology solutions.</p>
            <p>His background includes designing and managing customer databases, developing data policies, writing SQL scripts, supporting ERP systems such as Odoo, troubleshooting technical systems, and helping organizations improve workflows through technology.</p>
            <p>He is currently building modern AI-assisted web projects using Codex, React, Next.js, GitHub, Vercel, and Supabase. His goal is to combine real-world business experience with modern data analysis, AI, and web development skills.</p>
          </div>
          <div className="grid gap-4">
            {values.map(({ label, icon: Icon }) => (
              <div key={label} className="card card-hover flex items-center gap-4 p-5">
                <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-teal-50 text-teal-700">
                  <Icon size={22} />
                </div>
                <p className="font-bold text-slate-900">{label}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
