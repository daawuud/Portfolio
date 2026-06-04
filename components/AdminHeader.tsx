export function AdminHeader({ title, description }: { title: string; description: string }) {
  return (
    <div className="mb-8 rounded-3xl bg-navy-950 p-8 text-white">
      <p className="text-sm font-semibold uppercase tracking-widest text-teal-300">Admin dashboard</p>
      <h1 className="mt-3 text-3xl font-bold">{title}</h1>
      <p className="mt-3 max-w-3xl text-slate-300">{description}</p>
    </div>
  );
}
