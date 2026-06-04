import type { Metadata } from "next";
import { SectionTitle } from "@/components/SectionTitle";
import { SkillCard } from "@/components/SkillCard";
import { skillCategories } from "@/lib/data/skills";

export const metadata: Metadata = {
  title: "Skills",
  description: "Data analysis, database systems, ERP, web development, cloud support, and AI automation skills."
};

export default function SkillsPage() {
  return (
    <section className="section-padding">
      <div className="container-page">
        <SectionTitle eyebrow="Skills" title="A practical skill set for data, systems, support, and modern web projects" description="Organized by the categories employers and clients naturally scan for: data, databases, ERP, web, cloud support, and AI productivity." />
        <div className="mt-10 grid gap-6 lg:grid-cols-2">
          {skillCategories.map((category) => <SkillCard key={category.name} category={category} />)}
        </div>
      </div>
    </section>
  );
}
