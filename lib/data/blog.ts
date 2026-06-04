export type BlogPost = {
  title: string;
  slug: string;
  date: string;
  category: string;
  excerpt: string;
  content: string[];
};

export const blogPosts: BlogPost[] = [
  {
    title: "My Journey Building a Portfolio Website with Codex",
    slug: "journey-building-portfolio-with-codex",
    date: "2026-06-03",
    category: "AI-Assisted Development",
    excerpt: "How AI-assisted development can help turn professional experience into a polished portfolio.",
    content: ["This project combines my technical background with a modern web stack.", "Codex helps accelerate structure, content organization, and implementation while I stay focused on business goals."]
  },
  {
    title: "What I Learned from Google Data Analytics",
    slug: "google-data-analytics-lessons",
    date: "2026-05-24",
    category: "Data Analytics",
    excerpt: "Key lessons from the Google Data Analytics program, from asking better questions to visualizing results.",
    content: ["The program reinforced the importance of asking clear business questions.", "It also connected data cleaning, visualization, and case-study communication into a practical workflow."]
  },
  {
    title: "What I Learned from IBM Data Analyst Certification",
    slug: "ibm-data-analyst-lessons",
    date: "2026-05-18",
    category: "Data Analytics",
    excerpt: "A reflection on SQL, Python, Excel, Cognos, and capstone-based analyst preparation.",
    content: ["IBM's program gave me a stronger practical path across SQL, Excel, Python, and dashboards.", "The capstone structure helps translate tools into portfolio-ready evidence."]
  },
  {
    title: "How I Use Odoo ERP for Business Operations",
    slug: "odoo-erp-business-operations",
    date: "2026-05-10",
    category: "ERP Systems",
    excerpt: "A practical look at Odoo workflows for sales, inventory, purchasing, and accounting.",
    content: ["Odoo helps connect business operations in one place.", "The most important work is mapping the process before configuring modules."]
  },
  {
    title: "How AI Tools Can Help Small Businesses",
    slug: "ai-tools-small-businesses",
    date: "2026-05-02",
    category: "AI",
    excerpt: "Ways AI tools can support writing, operations, support, analysis, and internal productivity.",
    content: ["AI tools can help small businesses create content, organize information, and automate repetitive work.", "The best results come when AI is paired with clear business judgment."]
  },
  {
    title: "Building Technology Projects for Community Support",
    slug: "technology-projects-community-support",
    date: "2026-04-25",
    category: "Community Technology",
    excerpt: "Why community technology projects need accessibility, clarity, and practical workflows.",
    content: ["Community projects succeed when people can find what they need quickly.", "Technology should reduce friction, not create a new barrier."]
  },
  {
    title: "Learning GitHub, Vercel, Supabase, and Next.js",
    slug: "learning-github-vercel-supabase-nextjs",
    date: "2026-04-18",
    category: "Web Development",
    excerpt: "How modern tools fit together for building and deploying professional web applications.",
    content: ["GitHub, Vercel, Supabase, and Next.js form a practical stack for modern web projects.", "Together they support source control, deployment, data, auth, and application structure."]
  }
];

export function getBlogPostBySlug(slug: string) {
  return blogPosts.find((post) => post.slug === slug);
}
