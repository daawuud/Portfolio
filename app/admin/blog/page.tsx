import { AdminHeader } from "@/components/AdminHeader";
import { AdminSidebar } from "@/components/AdminSidebar";
import { blogPosts } from "@/lib/data/blog";

export default function AdminBlogPage() {
  return (
    <section className="section-padding">
      <div className="container-page grid gap-8 lg:grid-cols-[280px_1fr]">
        <AdminSidebar />
        <div>
          <AdminHeader title="Manage blog posts" description="Create learning journal posts, drafts, and published articles through the blog_posts table." />
          <div className="grid gap-4">
            {blogPosts.map((post) => (
              <div key={post.slug} className="card p-5">
                <h2 className="font-bold text-slate-950">{post.title}</h2>
                <p className="mt-1 text-sm text-slate-600">{post.category} · {post.date}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
