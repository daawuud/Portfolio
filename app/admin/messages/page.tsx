import { AdminHeader } from "@/components/AdminHeader";
import { AdminSidebar } from "@/components/AdminSidebar";

export default function AdminMessagesPage() {
  return (
    <section className="section-padding">
      <div className="container-page grid gap-8 lg:grid-cols-[280px_1fr]">
        <AdminSidebar />
        <div>
          <AdminHeader title="Contact messages" description="Messages submitted through the contact form will appear here after Supabase is connected." />
          <div className="card p-8 text-center text-slate-600">No local messages. Connect Supabase and use the contact_messages table to view submissions.</div>
        </div>
      </div>
    </section>
  );
}
