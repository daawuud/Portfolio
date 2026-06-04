import { getPublicSupabaseClient } from "@/lib/supabase/public";
import { blogPosts, type BlogPost } from "@/lib/data/blog";
import { certifications, type Certification } from "@/lib/data/certifications";
import { projects, type Project } from "@/lib/data/projects";

type ProjectRow = {
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
};

type CertificationRow = {
  title: string;
  issuer: string;
  category: string | null;
  provider: string | null;
  completion_date: string | null;
  description: string | null;
  image_url: string | null;
  certificate_url: string | null;
  featured: boolean | null;
};

type BlogRow = {
  title: string;
  slug: string;
  excerpt: string | null;
  content: string | null;
  category: string | null;
  published: boolean | null;
  created_at: string | null;
};

type SettingRow = {
  key: string;
  value: string | null;
};

function normalizeProvider(provider: string | null): Certification["provider"] {
  if (provider === "Google" || provider === "IBM") return provider;
  return "Other";
}

function certificationSkills(provider: Certification["provider"], category: string | null) {
  if (provider === "Google") return ["Data lifecycle", "Spreadsheets", "Visualization", "R", "Case study"];
  if (provider === "IBM") return ["Excel", "SQL", "Python", "Cognos", "Dashboards"];
  if ((category ?? "").toLowerCase().includes("cloud")) return ["Cloud concepts", "Solution design", "Technical readiness"];
  return ["AI productivity", "Prompting", "Business workflows"];
}

function mapProject(row: ProjectRow): Project {
  const caseStudy = row.case_study ?? row.description;
  return {
    title: row.title,
    slug: row.slug,
    description: row.description,
    tools: row.tools ?? [],
    status: row.status ?? "Portfolio Project",
    featured: Boolean(row.featured),
    githubUrl: row.github_url ?? "#",
    liveUrl: row.live_url ?? "#",
    overview: caseStudy,
    problem: "This project addresses a practical business, data, community, or technology workflow need.",
    goal: "Create a clear, maintainable solution that demonstrates applied technical judgment.",
    solution: caseStudy,
    features: row.tools?.slice(0, 5) ?? ["Supabase-managed content"],
    challenges: "Keeping the solution clear, usable, and ready to improve over time.",
    learned: "Good technical work connects user needs, maintainable systems, and clear communication.",
    value: "Adds portfolio evidence of practical technology, analysis, and business systems capability.",
    improvements: ["Add screenshots", "Expand case study details", "Connect live demo and GitHub links"]
  };
}

function mapCertification(row: CertificationRow): Certification {
  const provider = normalizeProvider(row.provider);
  return {
    title: row.title,
    issuer: row.issuer,
    provider,
    category: row.category ?? "Professional Development",
    completionDate: row.completion_date ?? undefined,
    description: row.description ?? "Professional learning credential supporting Daud's data, cloud, AI, and technology portfolio.",
    credentialType: row.title.toLowerCase().includes("professional") ? "Professional Certificate" : "Certificate",
    skills: certificationSkills(provider, row.category),
    featured: Boolean(row.featured)
  };
}

function mapBlogPost(row: BlogRow): BlogPost {
  return {
    title: row.title,
    slug: row.slug,
    date: row.created_at?.slice(0, 10) ?? new Date().toISOString().slice(0, 10),
    category: row.category ?? "Learning Journal",
    excerpt: row.excerpt ?? "",
    content: (row.content ?? row.excerpt ?? "").split(/\n{2,}/).filter(Boolean)
  };
}

export async function getPublicProjects() {
  const supabase = getPublicSupabaseClient();
  if (!supabase) return projects;
  const { data, error } = await supabase.from("projects").select("*").order("created_at", { ascending: false });
  if (error || !data?.length) return projects;
  return (data as ProjectRow[]).map(mapProject);
}

export async function getPublicProjectBySlug(slug: string) {
  const allProjects = await getPublicProjects();
  return allProjects.find((project) => project.slug === slug);
}

export async function getPublicCertifications() {
  const supabase = getPublicSupabaseClient();
  if (!supabase) return certifications;
  const { data, error } = await supabase.from("certifications").select("*").order("created_at", { ascending: false });
  if (error || !data?.length) return certifications;
  return (data as CertificationRow[]).map(mapCertification);
}

export async function getPublicBlogPosts() {
  const supabase = getPublicSupabaseClient();
  if (!supabase) return blogPosts;
  const { data, error } = await supabase.from("blog_posts").select("*").eq("published", true).order("created_at", { ascending: false });
  if (error || !data?.length) return blogPosts;
  return (data as BlogRow[]).map(mapBlogPost);
}

export async function getPublicBlogPostBySlug(slug: string) {
  const posts = await getPublicBlogPosts();
  return posts.find((post) => post.slug === slug);
}

export async function getPublicSettings() {
  const supabase = getPublicSupabaseClient();
  if (!supabase) return {};
  const { data, error } = await supabase.from("site_settings").select("key,value");
  if (error || !data?.length) return {};

  return (data as SettingRow[]).reduce<Record<string, string>>((settings, row) => {
    if (row.value) settings[row.key] = row.value;
    return settings;
  }, {});
}
