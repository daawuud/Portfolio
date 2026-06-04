export type Certification = {
  title: string;
  issuer: string;
  provider: "Google" | "IBM" | "Other";
  category: string;
  completionDate?: string;
  description: string;
  skills: string[];
  credentialType: string;
  featured?: boolean;
};

const google = [
  "Foundations: Data, Data, Everywhere",
  "Ask Questions to Make Data-Driven Decisions",
  "Prepare Data for Exploration",
  "Process Data from Dirty to Clean",
  "Analyze Data to Answer Questions",
  "Share Data Through the Art of Visualization",
  "Data Analysis with R Programming",
  "Google Data Analytics Capstone: Complete a Case Study",
  "Google Data Analytics Professional Certificate"
];

const ibm = [
  "Introduction to Data Analytics",
  "Excel Basics for Data Analysis",
  "Data Visualization and Dashboards with Excel and Cognos",
  "Python for Data Science, AI & Development",
  "Python Project for Data Science",
  "Databases and SQL for Data Science with Python",
  "Data Analysis with Python",
  "Data Visualization with Python",
  "IBM Data Analyst Capstone Project",
  "Generative AI: Enhance Your Data Analytics Career",
  "Data Analyst Career Guide and Interview Preparation",
  "IBM Data Analyst Professional Certificate"
];

const other = [
  "Microsoft Azure AI Fundamentals Professional Certificate",
  "AWS Solutions Architect",
  "NPower Junior Data Analyst",
  "AI Mastery: ChatGPT",
  "AI Mastery: MidJourney",
  "AI Mastery: Jasper AI",
  "AI Mastery: DALL-E"
];

export const certifications: Certification[] = [
  ...google.map((title) => ({
    title,
    issuer: "Google",
    provider: "Google" as const,
    category: "Data Analytics",
    credentialType: title.includes("Professional") ? "Professional Certificate" : "Course Certificate",
    skills: ["Data lifecycle", "Spreadsheets", "SQL concepts", "R programming", "Visualization", "Case study"],
    description: title.includes("Professional")
      ? "Complete Google Data Analytics credential covering the data analysis process, cleaning, visualization, R, and capstone-style case study work."
      : "Google Data Analytics course completion focused on practical analyst workflows and employer-ready data thinking.",
    featured: title.includes("Professional")
  })),
  ...ibm.map((title) => ({
    title,
    issuer: "IBM",
    provider: "IBM" as const,
    category: "Data Analytics",
    credentialType: title.includes("Professional") ? "Professional Certificate" : "Course Certificate",
    skills: ["Excel", "SQL", "Python", "Pandas", "Cognos", "Dashboards", "Capstone"],
    description: title.includes("Professional")
      ? "Complete IBM Data Analyst credential covering Excel, SQL, Python, Cognos dashboards, visualization, and capstone project preparation."
      : "IBM Data Analyst course completion focused on applied analytics tools, reporting, and hands-on portfolio preparation.",
    featured: title.includes("Professional")
  })),
  ...other.map((title) => ({
    title,
    issuer: title.includes("AWS") ? "AWS" : title.includes("Azure") ? "Microsoft" : title.includes("NPower") ? "NPower" : "AI Mastery",
    provider: "Other" as const,
    category: title.includes("AI") || title.includes("ChatGPT") || title.includes("DALL-E") ? "AI" : "Cloud and Career Development",
    credentialType: "Certificate",
    skills: title.includes("AWS")
      ? ["Cloud architecture", "AWS services", "Solution design"]
      : title.includes("Azure")
        ? ["Azure AI", "Machine learning concepts", "Responsible AI"]
        : title.includes("NPower")
          ? ["Career readiness", "Data analysis", "Professional development"]
          : ["AI productivity", "Prompting", "Creative workflows"],
    description: "Additional professional learning supporting cloud, AI, data analysis, and modern business technology skills.",
    featured: title.includes("Azure") || title.includes("AWS") || title.includes("NPower")
  }))
];
