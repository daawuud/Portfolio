import { AdminHeader } from "@/components/AdminHeader";
import { AdminSidebar } from "@/components/AdminSidebar";
import { SettingForm } from "@/components/AdminForms";
import { getSettingRows } from "@/lib/admin/queries";

const defaultSettings = [
  { id: "homepage_headline", key: "homepage_headline", value: "Technology Professional, Data Analyst & Database Systems Specialist", updated_at: null },
  { id: "professional_subtitle", key: "professional_subtitle", value: "I build practical data, database, ERP, and web solutions using SQL, Python, Odoo, cloud tools, and AI-assisted development workflows.", updated_at: null },
  { id: "linkedin_url", key: "linkedin_url", value: "https://linkedin.com/in/dm889", updated_at: null },
  { id: "github_url", key: "github_url", value: "", updated_at: null },
  { id: "resume_file_path", key: "resume_file_path", value: "/resume/Daud-Mohamud-Resume.pdf", updated_at: null },
  { id: "profile_image_url", key: "profile_image_url", value: "/profile/daud-profile.jpeg", updated_at: null },
  { id: "footer_name", key: "footer_name", value: "Daud Mohamud", updated_at: null },
  { id: "footer_title", key: "footer_title", value: "Data Analyst & Technology Professional", updated_at: null },
  { id: "footer_description", key: "footer_description", value: "Edmonton-based technology professional specializing in data analysis, database systems, ERP workflows, technical support, and AI-assisted web development.", updated_at: null },
  { id: "footer_email", key: "footer_email", value: "daud.mohamed.badiyow@gmail.com", updated_at: null },
  { id: "footer_phone", key: "footer_phone", value: "289.887.2268", updated_at: null },
  { id: "footer_location", key: "footer_location", value: "Edmonton, Alberta, Canada", updated_at: null },
  { id: "footer_linkedin_url", key: "footer_linkedin_url", value: "https://linkedin.com/in/dm889", updated_at: null },
  { id: "footer_github_url", key: "footer_github_url", value: "", updated_at: null },
  { id: "footer_copyright", key: "footer_copyright", value: "Copyright 2026 Daud Mohamud. All rights reserved.", updated_at: null }
];

export default async function AdminSettingsPage() {
  const settings = await getSettingRows();
  const existingKeys = new Set(settings.map((setting) => setting.key));
  const rows = [...settings, ...defaultSettings.filter((setting) => !existingKeys.has(setting.key))];

  return (
    <section className="section-padding">
      <div className="container-page grid gap-8 lg:grid-cols-[280px_1fr]">
        <AdminSidebar />
        <div>
          <AdminHeader title="Site settings" description="Save homepage, social, and file path settings into the site_settings table." />
          <div className="grid gap-4">
            {rows.map((setting) => <SettingForm key={setting.key} setting={setting} />)}
            <SettingForm setting={{ id: "new", key: "", value: "", updated_at: null }} />
          </div>
        </div>
      </div>
    </section>
  );
}
