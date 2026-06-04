import Link from "next/link";
import { ArrowRight } from "lucide-react";
import type { BlogPost } from "@/lib/data/blog";

export function BlogCard({ post }: { post: BlogPost }) {
  return (
    <article className="card card-hover p-6">
      <div className="flex flex-wrap gap-2 text-xs font-semibold uppercase tracking-widest text-teal-600">
        <span>{post.category}</span>
        <span aria-hidden="true">/</span>
        <time dateTime={post.date}>{post.date}</time>
      </div>
      <h2 className="mt-4 text-xl font-bold text-slate-950">{post.title}</h2>
      <p className="mt-3 text-sm leading-7 text-slate-600">{post.excerpt}</p>
      <Link href={`/blog/${post.slug}`} className="mt-6 inline-flex items-center gap-2 text-sm font-bold text-teal-700 hover:text-teal-600">
        Read more <ArrowRight size={16} />
      </Link>
    </article>
  );
}
