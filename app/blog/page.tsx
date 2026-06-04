import type { Metadata } from "next";
import { BlogCard } from "@/components/BlogCard";
import { SectionTitle } from "@/components/SectionTitle";
import { blogPosts } from "@/lib/data/blog";

export const metadata: Metadata = {
  title: "Blog",
  description: "Daud Mohamud learning journal on data analytics, ERP, AI-assisted development, and community technology projects."
};

export default function BlogPage() {
  return (
    <section className="section-padding">
      <div className="container-page">
        <SectionTitle eyebrow="Blog" title="Learning journal and professional notes" description="Short reflections on analytics, ERP systems, AI tools, web development, and community technology work." />
        <div className="mt-10 grid gap-6 md:grid-cols-2 xl:grid-cols-3">
          {blogPosts.map((post) => <BlogCard key={post.slug} post={post} />)}
        </div>
      </div>
    </section>
  );
}
