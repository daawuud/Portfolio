import type { SkillCategory } from "@/lib/data/skills";

export function SkillCard({ category }: { category: SkillCategory }) {
  return (
    <article className="card p-6">
      <h2 className="text-xl font-bold text-slate-950">{category.name}</h2>
      <p className="mt-2 text-sm leading-6 text-slate-600">{category.summary}</p>
      <div className="mt-6 space-y-4">
        {category.skills.map((skill) => (
          <div key={skill.name}>
            <div className="flex items-center justify-between gap-4 text-sm">
              <span className="font-semibold text-slate-800">{skill.name}</span>
              <span className="text-slate-500">{skill.level}%</span>
            </div>
            <div className="mt-2 h-2 rounded-full bg-slate-100">
              <div className="h-2 rounded-full bg-gradient-to-r from-teal-500 to-blue-500" style={{ width: `${skill.level}%` }} />
            </div>
          </div>
        ))}
      </div>
    </article>
  );
}
