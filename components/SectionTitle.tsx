type SectionTitleProps = {
  eyebrow?: string;
  title: string;
  description?: string;
  align?: "left" | "center";
  tone?: "light" | "dark";
};

export function SectionTitle({ eyebrow, title, description, align = "left", tone = "light" }: SectionTitleProps) {
  const titleColor = tone === "dark" ? "text-white" : "text-slate-950";
  const descriptionColor = tone === "dark" ? "text-slate-300" : "text-slate-600";
  const eyebrowColor = tone === "dark" ? "text-teal-300" : "text-teal-700";

  return (
    <div className={align === "center" ? "mx-auto max-w-3xl text-center" : "max-w-3xl"}>
      {eyebrow ? <p className={`text-sm font-bold uppercase tracking-widest ${eyebrowColor}`}>{eyebrow}</p> : null}
      <h2 className={`mt-3 text-3xl font-bold tracking-tight sm:text-4xl ${titleColor}`}>{title}</h2>
      {description ? <p className={`mt-4 text-lg leading-8 ${descriptionColor}`}>{description}</p> : null}
    </div>
  );
}
