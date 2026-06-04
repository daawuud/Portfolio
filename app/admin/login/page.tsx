import type { Metadata } from "next";
import { LoginForm } from "@/components/LoginForm";

export const metadata: Metadata = {
  title: "Admin Login",
  description: "Portfolio admin login."
};

export default function AdminLoginPage() {
  return (
    <section className="section-padding">
      <div className="container-page max-w-lg">
        <div className="card p-6">
          <p className="eyebrow">Admin Login</p>
          <h1 className="mt-3 text-3xl font-bold text-slate-950">Sign in to manage content</h1>
          <p className="mt-3 text-sm leading-6 text-slate-600">Connect Supabase Auth credentials to enable live authentication. The dashboard pages are structured and ready for authenticated CMS workflows.</p>
          <LoginForm />
        </div>
      </div>
    </section>
  );
}
