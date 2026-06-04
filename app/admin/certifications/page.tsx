import { AdminHeader } from "@/components/AdminHeader";
import { AdminSidebar } from "@/components/AdminSidebar";
import { CertificationCreateForm, CertificationEditForm } from "@/components/AdminForms";
import { importStarterCertifications } from "@/app/admin/actions";
import { getCertificationRows } from "@/lib/admin/queries";

export default async function AdminCertificationsPage() {
  const certifications = await getCertificationRows();

  return (
    <section className="section-padding">
      <div className="container-page grid gap-8 lg:grid-cols-[280px_1fr]">
        <AdminSidebar />
        <div>
          <AdminHeader title="Manage certifications" description="Create, edit, feature, link, and delete certification records stored in Supabase." />
          <div className="card mb-6 flex flex-col gap-4 p-5 sm:flex-row sm:items-center sm:justify-between">
            <div>
              <h2 className="font-bold text-slate-950">Starter certification import</h2>
              <p className="mt-1 text-sm text-slate-600">Add or refresh all certifications currently shown on the public frontend into Supabase so you can edit them here.</p>
            </div>
            <form action={importStarterCertifications}>
              <button type="submit" className="button-secondary whitespace-nowrap">Import starter certifications</button>
            </form>
          </div>
          <CertificationCreateForm />
          <div className="mt-8 grid gap-4">
            {certifications.length ? certifications.map((certification) => <CertificationEditForm key={certification.id} certification={certification} />) : (
              <div className="card p-8 text-center text-slate-600">No Supabase certifications yet. Use the form above to add one.</div>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
