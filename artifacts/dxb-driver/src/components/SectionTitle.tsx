interface SectionTitleProps {
  title: string;
  subtitle: string;
  centered?: boolean;
}

export function SectionTitle({ title, subtitle, centered = false }: SectionTitleProps) {
  return (
    <div className={`mb-16 ${centered ? "text-center" : ""}`}>
      <span className="block text-primary text-xs uppercase tracking-[0.3em] mb-4 font-semibold">
        {subtitle}
      </span>
      <h2 className="text-4xl md:text-5xl font-serif text-foreground leading-tight">
        {title}
      </h2>
    </div>
  );
}
