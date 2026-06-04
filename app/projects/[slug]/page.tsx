import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { ArrowLeft } from "lucide-react";
import { getProjectBySlug, projects } from "@/lib/data/projects";

type ProjectPageProps = {
  params: Promise<{ slug: string }>;
};

export function generateStaticParams() {
  return projects.map((project) => ({ slug: project.slug }));
}

export async function generateMetadata({ params }: ProjectPageProps): Promise<Metadata> {
  const { slug } = await params;
  const project = getProjectBySlug(slug);
  return {
    title: project?.title ?? "Project",
    description: project?.description
  };
}

export default async function ProjectCaseStudyPage({ params }: ProjectPageProps) {
  const { slug } = await params;
  const project = getProjectBySlug(slug);

  if (!project) {
    notFound();
  }

  const sections = [
    ["Problem", project.problem],
    ["Goal", project.goal],
    ["Solution", project.solution],
    ["Challenges", project.challenges],
    ["What I learned", project.learned],
    ["Business or community value", project.value]
  ];

  return (
    <section className="section-padding">
      <div className="container-page">
        <Link href="/projects" className="mb-8 inline-flex items-center gap-2 text-sm font-bold text-teal-700 hover:text-teal-600">
          <ArrowLeft size={16} /> Back to projects
        </Link>
        <div className="rounded-3xl bg-navy-950 p-8 text-white sm:p-10">
          <p className="text-sm font-semibold uppercase tracking-widest text-teal-300">{project.status}</p>
          <h1 className="mt-4 max-w-4xl text-4xl font-bold tracking-tight sm:text-5xl">{project.title}</h1>
          <p className="mt-5 max-w-3xl text-lg leading-8 text-slate-300">{project.overview}</p>
          <div className="mt-7 flex flex-wrap gap-2">
            {project.tools.map((tool) => <span key={tool} className="rounded-full bg-white/10 px-3 py-1 text-xs font-semibold text-white">{tool}</span>)}
          </div>
        </div>
        <div className="mt-8 grid gap-6 lg:grid-cols-2">
          {sections.map(([title, content]) => (
            <article key={title} className="card p-6">
              <h2 className="text-xl font-bold text-slate-950">{title}</h2>
              <p className="mt-3 text-sm leading-7 text-slate-600">{content}</p>
            </article>
          ))}
        </div>
        <div className="card mt-6 p-6">
          <h2 className="text-xl font-bold text-slate-950">Main features</h2>
          <div className="mt-4 flex flex-wrap gap-3">
            {project.features.map((feature) => <span key={feature} className="rounded-full bg-teal-50 px-4 py-2 text-sm font-semibold text-teal-800">{feature}</span>)}
          </div>
        </div>
        <div className="card mt-6 p-6">
          <h2 className="text-xl font-bold text-slate-950">Screenshots placeholder</h2>
          <div className="mt-4 flex min-h-64 items-center justify-center rounded-2xl border border-dashed border-slate-300 bg-slate-50 text-slate-500">Project screenshots will be added in public/projects/</div>
        </div>
        <div className="card mt-6 p-6">
          <h2 className="text-xl font-bold text-slate-950">Future improvements</h2>
          <ul className="mt-4 space-y-2 text-sm leading-7 text-slate-600">
            {project.improvements.map((item) => <li key={item}>- {item}</li>)}
          </ul>
        </div>
      </div>
    </section>
  );
}
