import Link from "next/link";
import type { LucideIcon } from "lucide-react";
import { BarChart3, FileText, FolderKanban, Mail, Settings, Shield, Trophy } from "lucide-react";

const adminLinks: { label: string; href: string; icon: LucideIcon }[] = [
  { label: "Dashboard", href: "/admin/dashboard", icon: BarChart3 },
  { label: "Projects", href: "/admin/projects", icon: FolderKanban },
  { label: "Certifications", href: "/admin/certifications", icon: Trophy },
  { label: "Blog", href: "/admin/blog", icon: FileText },
  { label: "Messages", href: "/admin/messages", icon: Mail },
  { label: "Settings", href: "/admin/settings", icon: Settings }
];

export function AdminSidebar() {
  return (
    <aside className="card p-4">
      <div className="mb-5 flex items-center gap-3 px-2">
        <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-navy-900 text-white">
          <Shield size={20} />
        </div>
        <div>
          <p className="font-bold text-slate-950">Admin</p>
          <p className="text-xs text-slate-500">Supabase-ready CMS</p>
        </div>
      </div>
      <nav className="grid gap-1" aria-label="Admin navigation">
        {adminLinks.map(({ label, href, icon: Icon }) => (
          <Link key={href} href={href} className="flex items-center gap-3 rounded-xl px-3 py-3 text-sm font-semibold text-slate-700 hover:bg-slate-100">
            <Icon size={18} /> {label}
          </Link>
        ))}
      </nav>
    </aside>
  );
}
