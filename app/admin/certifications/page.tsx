import { AdminHeader } from "@/components/AdminHeader";
import { AdminSidebar } from "@/components/AdminSidebar";
import { certifications } from "@/lib/data/certifications";

export default function AdminCertificationsPage() {
  return (
    <section className="section-padding">
      <div className="container-page grid gap-8 lg:grid-cols-[280px_1fr]">
        <AdminSidebar />
        <div>
          <AdminHeader title="Manage certifications" description="Upload certificate images, edit metadata, and feature selected credentials after Supabase Storage is configured." />
          <div className="grid gap-4">
            {certifications.slice(0, 12).map((certification) => (
              <div key={certification.title} className="card p-5">
                <h2 className="font-bold text-slate-950">{certification.title}</h2>
                <p className="mt-1 text-sm text-slate-600">{certification.issuer} · {certification.category}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
