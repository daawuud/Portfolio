"use client";

import { Search } from "lucide-react";
import { useMemo, useState } from "react";
import { CertificationCard } from "@/components/CertificationCard";
import type { Certification } from "@/lib/data/certifications";

export function CertificationExplorer({ certifications }: { certifications: Certification[] }) {
  const [query, setQuery] = useState("");
  const [provider, setProvider] = useState("All");
  const [category, setCategory] = useState("All");

  const providers = ["All", ...Array.from(new Set(certifications.map((certification) => certification.provider)))];
  const categories = ["All", ...Array.from(new Set(certifications.map((certification) => certification.category)))];

  const filtered = useMemo(() => {
    return certifications.filter((certification) => {
      const matchesQuery = `${certification.title} ${certification.issuer} ${certification.category}`.toLowerCase().includes(query.toLowerCase());
      const matchesProvider = provider === "All" || certification.provider === provider;
      const matchesCategory = category === "All" || certification.category === category;
      return matchesQuery && matchesProvider && matchesCategory;
    });
  }, [certifications, query, provider, category]);

  return (
    <div>
      <div className="card mb-8 grid gap-4 p-5 lg:grid-cols-[1fr_180px_240px]">
        <label className="relative block">
          <span className="sr-only">Search certification</span>
          <Search className="pointer-events-none absolute left-4 top-1/2 -translate-y-1/2 text-slate-400" size={18} />
          <input
            value={query}
            onChange={(event) => setQuery(event.target.value)}
            placeholder="Search certifications"
            className="w-full rounded-xl border border-slate-300 py-3 pl-11 pr-4 outline-none focus:border-teal-500 focus:ring-2 focus:ring-teal-100"
          />
        </label>
        <label className="grid gap-1 text-xs font-semibold uppercase tracking-widest text-slate-500">
          Provider
          <select value={provider} onChange={(event) => setProvider(event.target.value)} className="rounded-xl border border-slate-300 px-4 py-3 text-sm font-medium normal-case tracking-normal text-slate-800 outline-none focus:border-teal-500">
            {providers.map((item) => <option key={item}>{item}</option>)}
          </select>
        </label>
        <label className="grid gap-1 text-xs font-semibold uppercase tracking-widest text-slate-500">
          Category
          <select value={category} onChange={(event) => setCategory(event.target.value)} className="rounded-xl border border-slate-300 px-4 py-3 text-sm font-medium normal-case tracking-normal text-slate-800 outline-none focus:border-teal-500">
            {categories.map((item) => <option key={item}>{item}</option>)}
          </select>
        </label>
      </div>
      <p className="mb-6 text-sm font-semibold text-slate-600">{filtered.length} of {certifications.length} certifications shown</p>
      <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-3">
        {filtered.map((certification) => <CertificationCard key={`${certification.provider}-${certification.title}`} certification={certification} />)}
      </div>
    </div>
  );
}
