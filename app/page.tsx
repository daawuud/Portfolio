import Link from "next/link";
import { Award, BriefcaseBusiness, CheckCircle, Database, Sparkles, Users } from "lucide-react";
import { BlogCard } from "@/components/BlogCard";
import { CertificationCard } from "@/components/CertificationCard";
import { Hero } from "@/components/Hero";
import { ProjectCard } from "@/components/ProjectCard";
import { SectionTitle } from "@/components/SectionTitle";
import { StatCard } from "@/components/StatCard";
import { blogPosts } from "@/lib/data/blog";
import { certifications } from "@/lib/data/certifications";
import { projects } from "@/lib/data/projects";
import { skillCategories } from "@/lib/data/skills";

export default function HomePage() {
  const featuredProjects = projects.filter((project) => project.featured).slice(0, 3);
  const featuredCertifications = certifications.filter((certification) => certification.featured).slice(0, 3);

  return (
    <>
      <Hero />
      <section className="section-padding bg-white">
        <div className="container-page grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
          <StatCard icon={BriefcaseBusiness} value="15+" label="Years Technology Experience" />
          <StatCard icon={Database} value="ERP" label="Database & ERP Specialist" />
          <StatCard icon={Award} value="Google + IBM" label="Certified Data Analyst Training" />
          <StatCard icon={Sparkles} value="AI" label="AI-Assisted Web Developer" />
        </div>
      </section>
      <section className="section-padding">
        <div className="container-page">
          <SectionTitle eyebrow="Skills preview" title="Practical technology strengths for real business work" description="A blend of long-term technical operations experience and current data, web, cloud, and AI-assisted development skills." />
          <div className="mt-10 grid gap-5 md:grid-cols-2 lg:grid-cols-3">
            {skillCategories.slice(0, 6).map((category) => (
              <div key={category.name} className="card card-hover p-6">
                <h2 className="text-xl font-bold text-slate-950">{category.name}</h2>
                <p className="mt-3 text-sm leading-7 text-slate-600">{category.summary}</p>
                <div className="mt-5 flex flex-wrap gap-2">
                  {category.skills.slice(0, 5).map((skill) => (
                    <span key={skill.name} className="rounded-full bg-slate-100 px-3 py-1 text-xs font-semibold text-slate-700">{skill.name}</span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
      <section className="section-padding bg-white">
        <div className="container-page">
          <SectionTitle eyebrow="Featured projects" title="Employer-ready portfolio projects" description="Projects that connect data, ERP, community technology, business systems, and modern web development." />
          <div className="mt-10 grid gap-7 lg:grid-cols-3">
            {featuredProjects.map((project) => <ProjectCard key={project.slug} project={project} />)}
          </div>
          <Link href="/projects" className="button-primary mt-8">View all projects</Link>
        </div>
      </section>
      <section className="section-padding">
        <div className="container-page">
          <SectionTitle eyebrow="Certifications" title="Google, IBM, cloud, and AI learning proof" description="A focused certification path across data analysis, SQL, Python, dashboards, cloud readiness, and AI tools." />
          <div className="mt-10 grid gap-6 md:grid-cols-3">
            {featuredCertifications.map((certification) => <CertificationCard key={certification.title} certification={certification} />)}
          </div>
        </div>
      </section>
      <section className="section-padding bg-navy-950 text-white">
        <div className="container-page grid gap-10 lg:grid-cols-[0.9fr_1.1fr]">
          <SectionTitle tone="dark" eyebrow="Why hire me?" title="I connect business problems with practical technical solutions" description="My background includes database operations, data analysis, ERP support, VoIP systems, technical troubleshooting, and modern web development learning." />
          <div className="grid gap-4 sm:grid-cols-2">
            {["Data-driven problem solver", "Database and ERP experience", "Strong technical troubleshooting", "Business and community project experience"].map((item) => (
              <div key={item} className="rounded-2xl border border-white/10 bg-white/10 p-5">
                <CheckCircle className="text-teal-300" size={22} />
                <p className="mt-4 font-semibold">{item}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
      <section className="section-padding bg-white">
        <div className="container-page">
          <SectionTitle eyebrow="Learning journal" title="Recent professional learning notes" />
          <div className="mt-10 grid gap-6 md:grid-cols-3">
            {blogPosts.slice(0, 3).map((post) => <BlogCard key={post.slug} post={post} />)}
          </div>
        </div>
      </section>
      <section className="section-padding">
        <div className="container-page">
          <div className="rounded-3xl bg-gradient-to-br from-navy-900 to-teal-700 p-8 text-white sm:p-10">
            <Users size={34} className="text-teal-200" />
            <h2 className="mt-5 max-w-3xl text-3xl font-bold tracking-tight sm:text-4xl">Looking for a practical data, database, ERP, or technical support professional?</h2>
            <p className="mt-4 max-w-2xl text-slate-200">I am available for employer conversations, project discussions, and professional networking.</p>
            <Link href="/contact" className="button-secondary mt-7 border-white/20 bg-white text-navy-900 hover:bg-teal-50">Contact Me</Link>
          </div>
        </div>
      </section>
    </>
  );
}
