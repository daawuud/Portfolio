import { experience } from "@/lib/data/resume";

export function ResumeTimeline() {
  return (
    <div className="space-y-6">
      {experience.map((item) => (
        <article key={`${item.company}-${item.dates}`} className="card p-6">
          <div className="flex flex-col gap-2 md:flex-row md:items-start md:justify-between">
            <div>
              <h2 className="text-xl font-bold text-slate-950">{item.role}</h2>
              <p className="mt-1 font-semibold text-teal-700">{item.company}</p>
              <p className="text-sm text-slate-500">{item.location}</p>
            </div>
            <p className="rounded-full bg-navy-50 px-4 py-2 text-sm font-semibold text-navy-800">{item.dates}</p>
          </div>
          <ul className="mt-5 space-y-3 text-sm leading-7 text-slate-600">
            {item.responsibilities.map((responsibility) => (
              <li key={responsibility} className="flex gap-3">
                <span className="mt-2 h-2 w-2 shrink-0 rounded-full bg-teal-500" />
                <span>{responsibility}</span>
              </li>
            ))}
          </ul>
        </article>
      ))}
    </div>
  );
}
