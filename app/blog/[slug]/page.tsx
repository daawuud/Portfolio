import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { ArrowLeft } from "lucide-react";
import { blogPosts, getBlogPostBySlug } from "@/lib/data/blog";

type BlogPageProps = {
  params: Promise<{ slug: string }>;
};

export function generateStaticParams() {
  return blogPosts.map((post) => ({ slug: post.slug }));
}

export async function generateMetadata({ params }: BlogPageProps): Promise<Metadata> {
  const { slug } = await params;
  const post = getBlogPostBySlug(slug);
  return {
    title: post?.title ?? "Blog Post",
    description: post?.excerpt
  };
}

export default async function BlogPostPage({ params }: BlogPageProps) {
  const { slug } = await params;
  const post = getBlogPostBySlug(slug);

  if (!post) {
    notFound();
  }

  return (
    <article className="section-padding bg-white">
      <div className="container-page max-w-4xl">
        <Link href="/blog" className="mb-8 inline-flex items-center gap-2 text-sm font-bold text-teal-700 hover:text-teal-600">
          <ArrowLeft size={16} /> Back to blog
        </Link>
        <p className="eyebrow">{post.category}</p>
        <h1 className="mt-4 text-4xl font-bold tracking-tight text-slate-950 sm:text-5xl">{post.title}</h1>
        <time className="mt-4 block text-sm font-semibold text-slate-500" dateTime={post.date}>{post.date}</time>
        <div className="mt-8 space-y-6 text-lg leading-8 text-slate-600">
          {post.content.map((paragraph) => <p key={paragraph}>{paragraph}</p>)}
        </div>
      </div>
    </article>
  );
}
