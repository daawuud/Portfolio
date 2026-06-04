import { AdminHeader } from "@/components/AdminHeader";
import { AdminSidebar } from "@/components/AdminSidebar";
import { projects } from "@/lib/data/projects";

export default function AdminProjectsPage() {
  return (
    <section className="section-padding">
      <div className="container-page grid gap-8 lg:grid-cols-[280px_1fr]">
        <AdminSidebar />
        <div>
          <AdminHeader title="Manage projects" description="Add, edit, delete, and publish projects through Supabase once live CMS wiring is enabled." />
          <div className="grid gap-4">
            {projects.map((project) => (
              <div key={project.slug} className="card p-5">
                <div className="flex flex-col gap-2 sm:flex-row sm:items-center sm:justify-between">
                  <div>
                    <h2 className="font-bold text-slate-950">{project.title}</h2>
                    <p className="text-sm text-slate-600">{project.status}</p>
                  </div>
                  <span className="rounded-full bg-teal-50 px-3 py-1 text-xs font-semibold text-teal-800">Local fallback</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
