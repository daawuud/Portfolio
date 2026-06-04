import type { Metadata } from "next";
import { BarChart3, Database, ExternalLink, ServerCog } from "lucide-react";
import { ProjectCard } from "@/components/ProjectCard";
import { SectionTitle } from "@/components/SectionTitle";
import { getPublicProjects } from "@/lib/data/supabaseContent";

export const metadata: Metadata = {
  title: "Projects",
  description: "Employer-ready portfolio projects by Daud Mohamud across web, data, ERP, community technology, and business systems."
};

export default async function ProjectsPage() {
  const projects = await getPublicProjects();
  const projectFocus = [
    { label: "Data and analytics", icon: BarChart3, detail: "SQL, Python, Excel, dashboards, and reporting workflows." },
    { label: "Database and ERP", icon: Database, detail: "PostgreSQL, Odoo ERP, business process support, and backup readiness." },
    { label: "Modern web delivery", icon: ServerCog, detail: "Next.js, Supabase, GitHub, Vercel, and responsive implementation." }
  ];

  return (
    <>
      <section className="bg-white py-14">
        <div className="container-page">
          <SectionTitle eyebrow="Projects" title="Portfolio projects with business and community value" description="Each project includes tools, status, and a case study path covering the problem, solution, features, challenges, learning, and future improvements." />
          <div className="mt-8 grid gap-5 md:grid-cols-3">
            {projectFocus.map(({ label, icon: Icon, detail }) => (
              <article key={label} className="card p-5">
                <Icon className="text-teal-700" size={24} />
                <h2 className="mt-4 text-lg font-bold text-slate-950">{label}</h2>
                <p className="mt-2 text-sm leading-6 text-slate-600">{detail}</p>
              </article>
            ))}
          </div>
        </div>
      </section>
      <section className="section-padding">
        <div className="container-page">
          <div className="mb-8 flex flex-col gap-4 md:flex-row md:items-end md:justify-between">
            <div>
              <p className="text-sm font-bold uppercase tracking-widest text-teal-700">Case studies</p>
              <h2 className="mt-3 text-3xl font-bold tracking-tight text-slate-950">Selected work and planned portfolio builds</h2>
            </div>
            <a href="https://github.com" className="button-secondary w-fit">
              GitHub placeholder <ExternalLink size={16} />
            </a>
          </div>
          <div className="grid gap-7 lg:grid-cols-2 xl:grid-cols-3">
            {projects.map((project) => <ProjectCard key={project.slug} project={project} />)}
          </div>
        </div>
      </section>
    </>
  );
}
