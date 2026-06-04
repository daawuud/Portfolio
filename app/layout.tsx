import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { Footer } from "@/components/Footer";
import { Navbar } from "@/components/Navbar";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  metadataBase: new URL("https://daud-mohamud-portfolio.vercel.app"),
  title: {
    default: "Daud Mohamud | Data Analyst & Technology Professional",
    template: "%s | Daud Mohamud"
  },
  description:
    "Professional portfolio of Daud Mohamud, a technology professional in Edmonton specializing in data analysis, database systems, ERP solutions, technical support, and AI-assisted web development.",
  openGraph: {
    title: "Daud Mohamud | Data Analyst & Technology Professional",
    description:
      "Data analysis, database systems, ERP solutions, technical support, and AI-assisted web development portfolio.",
    type: "website",
    locale: "en_CA"
  },
  robots: {
    index: true,
    follow: true
  }
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <Navbar />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
