"use server";

import { revalidatePath } from "next/cache";
import { redirect } from "next/navigation";
import { getSupabaseServerClient } from "@/lib/supabase/server";
import { certifications } from "@/lib/data/certifications";
import { projects } from "@/lib/data/projects";

function text(formData: FormData, key: string) {
  return String(formData.get(key) ?? "").trim();
}

function nullableText(formData: FormData, key: string) {
  const value = text(formData, key);
  return value.length ? value : null;
}

function checkbox(formData: FormData, key: string) {
  return formData.get(key) === "on";
}

function commaList(value: string) {
  return value
    .split(",")
    .map((item) => item.trim())
    .filter(Boolean);
}

function slugify(value: string) {
  return value
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/^-+|-+$/g, "");
}

async function requireAdmin() {
  const supabase = await getSupabaseServerClient();

  if (!supabase) {
    throw new Error("Supabase environment variables are not configured.");
  }

  const {
    data: { user },
    error
  } = await supabase.auth.getUser();

  if (error || !user) {
    redirect("/admin/login");
  }

  return supabase;
}

export async function createProject(formData: FormData) {
  const supabase = await requireAdmin();
  const title = text(formData, "title");
  const slug = text(formData, "slug") || slugify(title);

  await supabase.from("projects").insert({
    title,
    slug,
    description: text(formData, "description"),
    tools: commaList(text(formData, "tools")),
    status: nullableText(formData, "status"),
    image_url: nullableText(formData, "image_url"),
    github_url: nullableText(formData, "github_url"),
    live_url: nullableText(formData, "live_url"),
    case_study: nullableText(formData, "case_study"),
    featured: checkbox(formData, "featured")
  }).throwOnError();

  revalidatePath("/");
  revalidatePath("/projects");
  revalidatePath("/admin/projects");
}

export async function updateProject(formData: FormData) {
  const supabase = await requireAdmin();
  const id = text(formData, "id");
  const title = text(formData, "title");
  const slug = text(formData, "slug") || slugify(title);

  await supabase.from("projects").update({
    title,
    slug,
    description: text(formData, "description"),
    tools: commaList(text(formData, "tools")),
    status: nullableText(formData, "status"),
    image_url: nullableText(formData, "image_url"),
    github_url: nullableText(formData, "github_url"),
    live_url: nullableText(formData, "live_url"),
    case_study: nullableText(formData, "case_study"),
    featured: checkbox(formData, "featured")
  }).eq("id", id).throwOnError();

  revalidatePath("/");
  revalidatePath("/projects");
  revalidatePath("/admin/projects");
}

export async function deleteProject(formData: FormData) {
  const supabase = await requireAdmin();
  await supabase.from("projects").delete().eq("id", text(formData, "id")).throwOnError();
  revalidatePath("/");
  revalidatePath("/projects");
  revalidatePath("/admin/projects");
}

export async function importStarterProjects() {
  const supabase = await requireAdmin();

  await supabase.from("projects").upsert(
    projects.map((project) => ({
      title: project.title,
      slug: project.slug,
      description: project.description,
      tools: project.tools,
      status: project.status,
      image_url: null,
      github_url: project.githubUrl === "#" ? null : project.githubUrl,
      live_url: project.liveUrl === "#" ? null : project.liveUrl,
      case_study: [
        `Overview: ${project.overview}`,
        `Problem: ${project.problem}`,
        `Goal: ${project.goal}`,
        `Solution: ${project.solution}`,
        `Features: ${project.features.join(", ")}`,
        `Challenges: ${project.challenges}`,
        `What I learned: ${project.learned}`,
        `Value: ${project.value}`,
        `Future improvements: ${project.improvements.join(", ")}`
      ].join("\n\n"),
      featured: Boolean(project.featured)
    })),
    { onConflict: "slug" }
  ).throwOnError();

  revalidatePath("/");
  revalidatePath("/projects");
  revalidatePath("/admin/projects");
}

export async function createCertification(formData: FormData) {
  const supabase = await requireAdmin();

  await supabase.from("certifications").insert({
    title: text(formData, "title"),
    issuer: text(formData, "issuer"),
    category: nullableText(formData, "category"),
    provider: nullableText(formData, "provider"),
    completion_date: nullableText(formData, "completion_date"),
    description: nullableText(formData, "description"),
    image_url: nullableText(formData, "image_url"),
    certificate_url: nullableText(formData, "certificate_url"),
    featured: checkbox(formData, "featured")
  }).throwOnError();

  revalidatePath("/");
  revalidatePath("/certifications");
  revalidatePath("/admin/certifications");
}

export async function updateCertification(formData: FormData) {
  const supabase = await requireAdmin();

  await supabase.from("certifications").update({
    title: text(formData, "title"),
    issuer: text(formData, "issuer"),
    category: nullableText(formData, "category"),
    provider: nullableText(formData, "provider"),
    completion_date: nullableText(formData, "completion_date"),
    description: nullableText(formData, "description"),
    image_url: nullableText(formData, "image_url"),
    certificate_url: nullableText(formData, "certificate_url"),
    featured: checkbox(formData, "featured")
  }).eq("id", text(formData, "id")).throwOnError();

  revalidatePath("/");
  revalidatePath("/certifications");
  revalidatePath("/admin/certifications");
}

export async function deleteCertification(formData: FormData) {
  const supabase = await requireAdmin();
  await supabase.from("certifications").delete().eq("id", text(formData, "id")).throwOnError();
  revalidatePath("/");
  revalidatePath("/certifications");
  revalidatePath("/admin/certifications");
}

export async function importStarterCertifications() {
  const supabase = await requireAdmin();
  const { data: existingRows } = await supabase.from("certifications").select("id,title");
  const existingByTitle = new Map((existingRows ?? []).map((row) => [row.title as string, row.id as string]));

  for (const certification of certifications) {
    const payload = {
      title: certification.title,
      issuer: certification.issuer,
      category: certification.category,
      provider: certification.provider,
      completion_date: certification.completionDate ?? null,
      description: `${certification.description} Focus areas: ${certification.skills.join(", ")}.`,
      image_url: null,
      certificate_url: null,
      featured: Boolean(certification.featured)
    };

    const existingId = existingByTitle.get(certification.title);

    if (existingId) {
      await supabase.from("certifications").update(payload).eq("id", existingId).throwOnError();
    } else {
      await supabase.from("certifications").insert(payload).throwOnError();
    }
  }

  revalidatePath("/");
  revalidatePath("/certifications");
  revalidatePath("/admin/certifications");
}

export async function createBlogPost(formData: FormData) {
  const supabase = await requireAdmin();
  const title = text(formData, "title");
  const slug = text(formData, "slug") || slugify(title);

  await supabase.from("blog_posts").insert({
    title,
    slug,
    excerpt: nullableText(formData, "excerpt"),
    content: nullableText(formData, "content"),
    category: nullableText(formData, "category"),
    published: checkbox(formData, "published")
  }).throwOnError();

  revalidatePath("/");
  revalidatePath("/blog");
  revalidatePath("/admin/blog");
}

export async function updateBlogPost(formData: FormData) {
  const supabase = await requireAdmin();
  const title = text(formData, "title");
  const slug = text(formData, "slug") || slugify(title);

  await supabase.from("blog_posts").update({
    title,
    slug,
    excerpt: nullableText(formData, "excerpt"),
    content: nullableText(formData, "content"),
    category: nullableText(formData, "category"),
    published: checkbox(formData, "published")
  }).eq("id", text(formData, "id")).throwOnError();

  revalidatePath("/");
  revalidatePath("/blog");
  revalidatePath("/admin/blog");
}

export async function deleteBlogPost(formData: FormData) {
  const supabase = await requireAdmin();
  await supabase.from("blog_posts").delete().eq("id", text(formData, "id")).throwOnError();
  revalidatePath("/");
  revalidatePath("/blog");
  revalidatePath("/admin/blog");
}

export async function updateMessageStatus(formData: FormData) {
  const supabase = await requireAdmin();
  await supabase.from("contact_messages").update({ status: text(formData, "status") }).eq("id", text(formData, "id")).throwOnError();
  revalidatePath("/admin/messages");
}

export async function deleteMessage(formData: FormData) {
  const supabase = await requireAdmin();
  await supabase.from("contact_messages").delete().eq("id", text(formData, "id")).throwOnError();
  revalidatePath("/admin/messages");
}

export async function saveSetting(formData: FormData) {
  const supabase = await requireAdmin();
  const key = text(formData, "key");
  const value = text(formData, "value");

  await supabase.from("site_settings").upsert({ key, value, updated_at: new Date().toISOString() }, { onConflict: "key" }).throwOnError();

  revalidatePath("/");
  revalidatePath("/admin/settings");
}
