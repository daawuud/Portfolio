import { AdminHeader } from "@/components/AdminHeader";
import { AdminSidebar } from "@/components/AdminSidebar";

export default function AdminSettingsPage() {
  return (
    <section className="section-padding">
      <div className="container-page grid gap-8 lg:grid-cols-[280px_1fr]">
        <AdminSidebar />
        <div>
          <AdminHeader title="Site settings" description="Update homepage headline, social links, and basic content through the site_settings table after Supabase is configured." />
          <div className="card grid gap-4 p-6">
            {["Homepage headline", "Professional subtitle", "LinkedIn URL", "GitHub URL", "Resume file path"].map((label) => (
              <label key={label} className="grid gap-2 text-sm font-semibold text-slate-800">
                {label}
                <input className="rounded-xl border border-slate-300 px-4 py-3 outline-none focus:border-teal-500 focus:ring-2 focus:ring-teal-100" placeholder="Supabase setting value" />
              </label>
            ))}
            <button className="button-primary w-fit" type="button">Save settings preview</button>
          </div>
        </div>
      </div>
    </section>
  );
}
