import { AdminHeader } from "@/components/AdminHeader";
import { AdminSidebar } from "@/components/AdminSidebar";
import { BlogCreateForm, BlogEditForm } from "@/components/AdminForms";
import { getBlogPostRows } from "@/lib/admin/queries";

export default async function AdminBlogPage() {
  const blogPosts = await getBlogPostRows();

  return (
    <section className="section-padding">
      <div className="container-page grid gap-8 lg:grid-cols-[280px_1fr]">
        <AdminSidebar />
        <div>
          <AdminHeader title="Manage blog posts" description="Create, edit, publish, unpublish, and delete learning journal posts through Supabase." />
          <BlogCreateForm />
          <div className="mt-8 grid gap-4">
            {blogPosts.length ? blogPosts.map((post) => <BlogEditForm key={post.id} post={post} />) : (
              <div className="card p-8 text-center text-slate-600">No Supabase blog posts yet. Use the form above to create one.</div>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
