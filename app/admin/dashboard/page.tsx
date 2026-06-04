import { AdminHeader } from "@/components/AdminHeader";
import { AdminSidebar } from "@/components/AdminSidebar";
import { getBlogPostRows, getCertificationRows, getContactMessageRows, getProjectsRows, getSettingRows } from "@/lib/admin/queries";

export default async function AdminDashboardPage() {
  const [projects, certifications, blogPosts, messages, settings] = await Promise.all([
    getProjectsRows(),
    getCertificationRows(),
    getBlogPostRows(),
    getContactMessageRows(),
    getSettingRows()
  ]);

  const stats: { label: string; value: string | number }[] = [
    { label: "Projects", value: projects.length },
    { label: "Certifications", value: certifications.length },
    { label: "Blog posts", value: blogPosts.length },
    { label: "Contact messages", value: messages.length },
    { label: "Settings", value: settings.length }
  ];

  return (
    <section className="section-padding">
      <div className="container-page grid gap-8 lg:grid-cols-[280px_1fr]">
        <AdminSidebar />
        <div>
          <AdminHeader title="Portfolio content overview" description="Live Supabase dashboard for managing projects, certifications, blog posts, contact messages, and site settings." />
          <div className="grid gap-5 sm:grid-cols-2 xl:grid-cols-4">
            {stats.map(({ label, value }) => (
              <div key={label} className="card p-5">
                <p className="text-3xl font-bold text-slate-950">{value}</p>
                <p className="mt-1 text-sm text-slate-600">{label}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
