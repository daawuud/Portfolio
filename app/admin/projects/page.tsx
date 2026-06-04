import { AdminHeader } from "@/components/AdminHeader";
import { AdminSidebar } from "@/components/AdminSidebar";
import { ProjectCreateForm, ProjectEditForm } from "@/components/AdminForms";
import { importStarterProjects } from "@/app/admin/actions";
import { getProjectsRows } from "@/lib/admin/queries";

export default async function AdminProjectsPage() {
  const projects = await getProjectsRows();

  return (
    <section className="section-padding">
      <div className="container-page grid gap-8 lg:grid-cols-[280px_1fr]">
        <AdminSidebar />
        <div>
          <AdminHeader title="Manage projects" description="Create, edit, feature, link, and delete portfolio projects stored in the Supabase projects table." />
          <div className="card mb-6 flex flex-col gap-4 p-5 sm:flex-row sm:items-center sm:justify-between">
            <div>
              <h2 className="font-bold text-slate-950">Starter project import</h2>
              <p className="mt-1 text-sm text-slate-600">Add or refresh all projects currently shown on the public frontend into Supabase so you can edit them here.</p>
            </div>
            <form action={importStarterProjects}>
              <button type="submit" className="button-secondary whitespace-nowrap">Import starter projects</button>
            </form>
          </div>
          <ProjectCreateForm />
          <div className="mt-8 grid gap-4">
            {projects.length ? projects.map((project) => <ProjectEditForm key={project.id} project={project} />) : (
              <div className="card p-8 text-center text-slate-600">No Supabase projects yet. Use the form above to create the first project.</div>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
