import Link from "next/link";
import type { Project } from "@/lib/data/projects";
import { ArrowRight, ExternalLink, Github } from "lucide-react";

export function ProjectCard({ project }: { project: Project }) {
  return (
    <article className="card card-hover overflow-hidden">
      <div className="flex aspect-[16/9] items-center justify-center bg-gradient-to-br from-navy-900 via-navy-700 to-teal-600 p-8 text-center text-white">
        <div>
          <p className="text-sm font-semibold uppercase tracking-widest text-teal-100">Project Preview</p>
          <h2 className="mt-3 text-2xl font-bold">{project.title}</h2>
        </div>
      </div>
      <div className="p-6">
        <div className="flex flex-wrap items-center gap-2">
          <span className="rounded-full bg-teal-50 px-3 py-1 text-xs font-semibold text-teal-700">{project.status}</span>
        </div>
        <p className="mt-4 text-sm leading-7 text-slate-600">{project.description}</p>
        <div className="mt-5 flex flex-wrap gap-2">
          {project.tools.slice(0, 6).map((tool) => (
            <span key={tool} className="rounded-full bg-slate-100 px-3 py-1 text-xs font-medium text-slate-700">{tool}</span>
          ))}
        </div>
        <div className="mt-6 flex flex-wrap gap-3">
          <Link href={`/projects/${project.slug}`} className="button-primary">
            View case study <ArrowRight size={16} />
          </Link>
          <Link href={project.githubUrl ?? "#"} className="button-secondary" aria-label={`${project.title} GitHub link`}>
            <Github size={16} />
          </Link>
          <Link href={project.liveUrl ?? "#"} className="button-secondary" aria-label={`${project.title} live demo link`}>
            <ExternalLink size={16} />
          </Link>
        </div>
      </div>
    </article>
  );
}
