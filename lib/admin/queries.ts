import { getSupabaseServerClient } from "@/lib/supabase/server";

export type AdminProjectRow = {
  id: string;
  title: string;
  slug: string;
  description: string;
  tools: string[] | null;
  status: string | null;
  image_url: string | null;
  github_url: string | null;
  live_url: string | null;
  case_study: string | null;
  featured: boolean | null;
  created_at: string | null;
};

export type AdminCertificationRow = {
  id: string;
  title: string;
  issuer: string;
  category: string | null;
  provider: string | null;
  completion_date: string | null;
  description: string | null;
  image_url: string | null;
  certificate_url: string | null;
  featured: boolean | null;
  created_at: string | null;
};

export type AdminBlogPostRow = {
  id: string;
  title: string;
  slug: string;
  excerpt: string | null;
  content: string | null;
  category: string | null;
  published: boolean | null;
  created_at: string | null;
};

export type AdminContactMessageRow = {
  id: string;
  full_name: string;
  email: string;
  company: string | null;
  subject: string;
  message: string;
  created_at: string | null;
  status: string | null;
};

export type AdminSettingRow = {
  id: string;
  key: string;
  value: string | null;
  updated_at: string | null;
};

export async function getAdminSupabase() {
  return getSupabaseServerClient();
}

export async function getProjectsRows() {
  const supabase = await getAdminSupabase();
  if (!supabase) return [];
  const { data } = await supabase.from("projects").select("*").order("created_at", { ascending: false });
  return (data ?? []) as AdminProjectRow[];
}

export async function getCertificationRows() {
  const supabase = await getAdminSupabase();
  if (!supabase) return [];
  const { data } = await supabase.from("certifications").select("*").order("created_at", { ascending: false });
  return (data ?? []) as AdminCertificationRow[];
}

export async function getBlogPostRows() {
  const supabase = await getAdminSupabase();
  if (!supabase) return [];
  const { data } = await supabase.from("blog_posts").select("*").order("created_at", { ascending: false });
  return (data ?? []) as AdminBlogPostRow[];
}

export async function getContactMessageRows() {
  const supabase = await getAdminSupabase();
  if (!supabase) return [];
  const { data } = await supabase.from("contact_messages").select("*").order("created_at", { ascending: false });
  return (data ?? []) as AdminContactMessageRow[];
}

export async function getSettingRows() {
  const supabase = await getAdminSupabase();
  if (!supabase) return [];
  const { data } = await supabase.from("site_settings").select("*").order("key", { ascending: true });
  return (data ?? []) as AdminSettingRow[];
}
