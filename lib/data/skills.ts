export type SkillCategory = {
  name: string;
  summary: string;
  skills: { name: string; level: number }[];
};

export const skillCategories: SkillCategory[] = [
  {
    name: "Data Analysis",
    summary: "Cleaning, querying, analyzing, visualizing, and reporting business data.",
    skills: [
      { name: "Excel", level: 88 },
      { name: "SQL", level: 90 },
      { name: "Python", level: 78 },
      { name: "Pandas", level: 74 },
      { name: "NumPy", level: 70 },
      { name: "Data cleaning", level: 86 },
      { name: "Data visualization", level: 78 },
      { name: "Reporting", level: 84 },
      { name: "Dashboards", level: 76 },
      { name: "IBM Cognos", level: 72 },
      { name: "Power BI readiness", level: 70 }
    ]
  },
  {
    name: "Database Systems",
    summary: "Designing, maintaining, securing, and improving relational database systems.",
    skills: [
      { name: "PostgreSQL", level: 86 },
      { name: "MySQL", level: 84 },
      { name: "MS SQL Server", level: 78 },
      { name: "MS Access", level: 80 },
      { name: "Database design", level: 88 },
      { name: "Data backup and recovery", level: 84 },
      { name: "Stored procedures", level: 80 },
      { name: "Triggers", level: 78 },
      { name: "Data policies and standards", level: 82 }
    ]
  },
  {
    name: "ERP and Business Systems",
    summary: "Supporting business operations through ERP workflows and process improvement.",
    skills: [
      { name: "Odoo ERP", level: 84 },
      { name: "Inventory workflows", level: 82 },
      { name: "Sales workflows", level: 80 },
      { name: "Purchase workflows", level: 78 },
      { name: "Accounting workflows", level: 74 },
      { name: "Business process improvement", level: 86 },
      { name: "ERP troubleshooting", level: 84 }
    ]
  },
  {
    name: "Web Development",
    summary: "Building responsive web applications with modern React and deployment tools.",
    skills: [
      { name: "HTML", level: 86 },
      { name: "CSS", level: 82 },
      { name: "JavaScript", level: 78 },
      { name: "React", level: 76 },
      { name: "Next.js", level: 76 },
      { name: "TypeScript", level: 72 },
      { name: "Tailwind CSS", level: 78 },
      { name: "Supabase", level: 74 },
      { name: "GitHub", level: 76 },
      { name: "Vercel", level: 76 },
      { name: "Responsive web design", level: 82 }
    ]
  },
  {
    name: "Cloud and Technical Support",
    summary: "Troubleshooting infrastructure, network systems, cloud services, and user-facing issues.",
    skills: [
      { name: "Microsoft Azure", level: 72 },
      { name: "AWS", level: 70 },
      { name: "Linux Server", level: 80 },
      { name: "Windows Server", level: 78 },
      { name: "VoIP", level: 88 },
      { name: "VPN", level: 76 },
      { name: "Firewalls", level: 74 },
      { name: "Cloud services integration", level: 72 },
      { name: "Technical troubleshooting", level: 90 }
    ]
  },
  {
    name: "AI and Automation",
    summary: "Using AI tools to speed up practical web, data, and business workflows.",
    skills: [
      { name: "Codex workflows", level: 78 },
      { name: "ChatGPT", level: 82 },
      { name: "AI-assisted coding", level: 78 },
      { name: "Prompt engineering", level: 76 },
      { name: "AI tools for business productivity", level: 80 }
    ]
  }
];
