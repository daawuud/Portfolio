import type { Metadata } from "next";
import Link from "next/link";
import { CheckCircle, Github, Linkedin, Mail, MapPin, Phone } from "lucide-react";
import { ContactForm } from "@/components/ContactForm";
import { SectionTitle } from "@/components/SectionTitle";
import { getPublicSettings } from "@/lib/data/supabaseContent";

export const metadata: Metadata = {
  title: "Contact",
  description: "Contact Daud Mohamud for data analysis, database systems, ERP, technical support, and web project conversations."
};

export default async function ContactPage() {
  const settings = await getPublicSettings();
  const email = settings.footer_email || "daud.mohamed.badiyow@gmail.com";
  const phone = settings.footer_phone || "289.887.2268";
  const location = settings.footer_location || "Edmonton, Alberta, Canada";
  const linkedinUrl = settings.footer_linkedin_url || settings.linkedin_url || "https://linkedin.com/in/dm889";
  const githubUrl = settings.footer_github_url || settings.github_url || "";
  const linkedinLabel = linkedinUrl.replace(/^https?:\/\//, "");

  return (
    <>
      <section className="bg-white py-14">
        <div className="container-page">
          <SectionTitle eyebrow="Contact" title="Let’s talk about data, systems, support, or web projects" description="Use the form for job opportunities, client conversations, project collaboration, or professional networking." />
        </div>
      </section>
      <section className="section-padding">
        <div className="container-page grid gap-8 lg:grid-cols-[0.85fr_1.15fr]">
          <div className="space-y-6">
            <div className="card p-6">
              <h2 className="text-xl font-bold text-slate-950">Contact details</h2>
              <div className="mt-6 space-y-4 text-sm text-slate-700">
                <p className="flex gap-3"><Mail size={18} className="shrink-0 text-teal-700" /> {email}</p>
                <p className="flex gap-3"><Phone size={18} className="shrink-0 text-teal-700" /> {phone}</p>
                <p className="flex gap-3"><MapPin size={18} className="shrink-0 text-teal-700" /> {location}</p>
                <Link href={linkedinUrl} className="flex gap-3 font-semibold text-teal-700 hover:text-teal-600"><Linkedin size={18} className="shrink-0" /> {linkedinLabel}</Link>
                {githubUrl ? (
                  <Link href={githubUrl} className="flex gap-3 font-semibold text-teal-700 hover:text-teal-600"><Github size={18} className="shrink-0" /> GitHub</Link>
                ) : (
                  <p className="flex gap-3 font-semibold text-teal-700"><Github size={18} className="shrink-0" /> GitHub profile link coming soon</p>
                )}
              </div>
            </div>
            <div className="card bg-navy-950 p-6 text-white">
              <h2 className="text-xl font-bold">Best fit conversations</h2>
              <div className="mt-5 space-y-3 text-sm leading-6 text-slate-300">
                {["Data analyst and database roles", "ERP, Odoo, and business systems support", "Technical support and troubleshooting roles", "Community or small business web projects"].map((item) => (
                  <p key={item} className="flex gap-3"><CheckCircle size={18} className="shrink-0 text-teal-300" /> {item}</p>
                ))}
              </div>
            </div>
          </div>
          <ContactForm />
        </div>
      </section>
    </>
  );
}
