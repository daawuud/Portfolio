export type Project = {
  title: string;
  slug: string;
  description: string;
  tools: string[];
  status: string;
  featured?: boolean;
  githubUrl?: string;
  liveUrl?: string;
  overview: string;
  problem: string;
  goal: string;
  solution: string;
  features: string[];
  challenges: string;
  learned: string;
  value: string;
  improvements: string[];
};

export const projects: Project[] = [
  {
    title: "Personal Portfolio Website",
    slug: "personal-portfolio-website",
    description:
      "A modern employer-facing portfolio built with Next.js, TypeScript, Tailwind CSS, Supabase, GitHub, Vercel, and Codex.",
    tools: ["Next.js", "React", "TypeScript", "Tailwind CSS", "Supabase", "GitHub", "Vercel", "Codex"],
    status: "In Development",
    featured: true,
    githubUrl: "#",
    liveUrl: "#",
    overview: "A professional portfolio designed to present resume, certifications, skills, projects, and contact options in one employer-ready experience.",
    problem: "Recruiters need a fast way to understand Daud's technical background, project direction, and current skills.",
    goal: "Create a polished site that works as a resume companion, project hub, and professional contact channel.",
    solution: "Build a responsive Next.js portfolio with structured content, project case studies, certification cards, and Supabase-ready contact storage.",
    features: ["Responsive App Router pages", "Local data fallback", "Supabase-ready contact form", "Project case study pages"],
    challenges: "Balancing a broad career history with concise employer-focused messaging.",
    learned: "A portfolio works best when it connects experience, proof, and next-step contact options clearly.",
    value: "Gives recruiters and clients a practical overview of Daud's technical strengths and current learning path.",
    improvements: ["Attach live resume PDF", "Add real project screenshots", "Connect admin editing to Supabase"]
  },
  {
    title: "Edmonton Disability Community Hub Website",
    slug: "edmonton-disability-community-hub",
    description:
      "A community support website for Edmonton Disability Community Hub, organizing disability resources, membership information, services, benefits, and contact options.",
    tools: ["Next.js", "Supabase", "React", "Tailwind CSS", "GitHub", "Vercel"],
    status: "In Development",
    featured: true,
    githubUrl: "#",
    liveUrl: "#",
    overview: "A community-centered web platform for disability support information and membership workflows.",
    problem: "Community members need accessible, organized information about services, benefits, and support options.",
    goal: "Create a clear digital hub that reduces confusion and improves access to community resources.",
    solution: "Use a modern Next.js and Supabase stack to organize content, forms, and membership data.",
    features: ["Resource sections", "Membership information", "Contact workflows", "CMS-ready content structure"],
    challenges: "Making complex support information easy to scan for many audiences.",
    learned: "Community websites need accessibility, trust, and content clarity as much as visual polish.",
    value: "Helps connect people with practical information and support pathways.",
    improvements: ["Add multilingual content", "Add resource search", "Add secure member dashboard"]
  },
  {
    title: "Sava Scents Catalog Website",
    slug: "sava-scents-catalog",
    description:
      "A business catalog website for a scent marketing company showing products, categories, descriptions, images, and contact/order options.",
    tools: ["React", "Next.js", "Tailwind CSS", "Supabase", "GitHub", "Vercel"],
    status: "Planned / In Development",
    featured: true,
    githubUrl: "#",
    liveUrl: "#",
    overview: "A product catalog and lead-generation site for a scent marketing business.",
    problem: "Customers need a clean way to browse scent products and request information.",
    goal: "Present products clearly while making contact and ordering simple.",
    solution: "Build a responsive catalog with categories, product cards, and Supabase-backed inquiries.",
    features: ["Product categories", "Image-ready product cards", "Inquiry CTA", "Admin-ready catalog data"],
    challenges: "Designing a catalog that feels premium without slowing down product discovery.",
    learned: "Good catalog pages need structured content and strong visual hierarchy.",
    value: "Supports sales conversations and gives the business a professional digital presence.",
    improvements: ["Add product images", "Add order requests", "Add inventory integration"]
  },
  {
    title: "Odoo ERP Business System",
    slug: "odoo-erp-business-system",
    description:
      "A business operations system using Odoo ERP to manage sales, inventory, purchasing, accounting workflows, reporting, and traceability.",
    tools: ["Odoo ERP", "PostgreSQL", "Accounting", "Inventory", "Sales", "Purchase"],
    status: "Active Learning / Business Project",
    githubUrl: "#",
    liveUrl: "#",
    overview: "An ERP workflow project focused on practical business operations and reporting.",
    problem: "Small businesses often manage sales, stock, and accounting in disconnected systems.",
    goal: "Use Odoo to centralize operational workflows and improve traceability.",
    solution: "Configure ERP modules, data policies, reports, and PostgreSQL-backed business records.",
    features: ["Sales workflows", "Inventory tracking", "Purchase workflows", "Accounting readiness"],
    challenges: "Mapping real business processes into clean ERP flows.",
    learned: "ERP success depends on process clarity before software configuration.",
    value: "Improves operational visibility and reduces manual record keeping.",
    improvements: ["Add custom reports", "Automate reconciliations", "Document implementation steps"]
  },
  {
    title: "Data Analysis Portfolio Project",
    slug: "data-analysis-portfolio-project",
    description:
      "A data analysis project showing data cleaning, SQL queries, Python analysis, visualization, reporting, and dashboard preparation.",
    tools: ["Python", "Pandas", "NumPy", "SQL", "Excel", "Power BI", "IBM Cognos"],
    status: "Portfolio Project",
    githubUrl: "#",
    liveUrl: "#",
    overview: "A practical data analysis case study demonstrating the full path from raw data to business insights.",
    problem: "Employers need to see applied data skills, not just course certificates.",
    goal: "Show data cleaning, querying, analysis, visualization, and reporting in one portfolio project.",
    solution: "Build a documented analysis workflow using Python, SQL, Excel, and dashboard tools.",
    features: ["Data cleaning", "SQL exploration", "Python notebook analysis", "Dashboard-ready summaries"],
    challenges: "Choosing a dataset that clearly supports business questions.",
    learned: "Strong analysis depends on clean questions, clean data, and clear communication.",
    value: "Provides evidence of applied data analyst skills.",
    improvements: ["Publish notebook", "Add dashboard screenshots", "Include business recommendations"]
  },
  {
    title: "Canadian Citizenship Exam Practice App",
    slug: "canadian-citizenship-exam-practice-app",
    description:
      "A learning and self-test web application to help users prepare for the Canadian citizenship exam through questions, memorization tools, and progress tracking.",
    tools: ["Next.js", "React", "Supabase", "Tailwind CSS"],
    status: "Planned",
    githubUrl: "#",
    liveUrl: "#",
    overview: "A study app concept for practicing Canadian citizenship exam questions.",
    problem: "Learners need focused practice, progress feedback, and repeatable study sessions.",
    goal: "Create a simple app that makes exam preparation structured and trackable.",
    solution: "Use Next.js and Supabase to store questions, attempts, progress, and review history.",
    features: ["Practice questions", "Progress tracking", "Review mode", "Question categories"],
    challenges: "Keeping learning flows simple while supporting useful tracking.",
    learned: "Education apps need repetition, feedback, and low-friction navigation.",
    value: "Supports newcomers preparing for an important civic milestone.",
    improvements: ["Add user accounts", "Add spaced repetition", "Add multilingual support"]
  }
];

export function getProjectBySlug(slug: string) {
  return projects.find((project) => project.slug === slug);
}
