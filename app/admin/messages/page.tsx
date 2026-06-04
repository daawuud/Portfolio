import { AdminHeader } from "@/components/AdminHeader";
import { AdminSidebar } from "@/components/AdminSidebar";
import { MessageCard } from "@/components/AdminForms";
import { getContactMessageRows } from "@/lib/admin/queries";

export default async function AdminMessagesPage() {
  const messages = await getContactMessageRows();

  return (
    <section className="section-padding">
      <div className="container-page grid gap-8 lg:grid-cols-[280px_1fr]">
        <AdminSidebar />
        <div>
          <AdminHeader title="Contact messages" description="View messages submitted through the public contact form, update their status, or delete old messages." />
          <div className="grid gap-4">
            {messages.length ? messages.map((message) => <MessageCard key={message.id} message={message} />) : (
              <div className="card p-8 text-center text-slate-600">No contact messages yet.</div>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
