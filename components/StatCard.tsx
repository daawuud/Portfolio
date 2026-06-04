import type { LucideIcon } from "lucide-react";

type StatCardProps = {
  label: string;
  value: string;
  icon: LucideIcon;
};

export function StatCard({ label, value, icon: Icon }: StatCardProps) {
  return (
    <div className="card card-hover p-6">
      <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-teal-50 text-teal-700">
        <Icon size={22} />
      </div>
      <p className="mt-5 text-2xl font-bold text-slate-950">{value}</p>
      <p className="mt-2 text-sm leading-6 text-slate-600">{label}</p>
    </div>
  );
}
