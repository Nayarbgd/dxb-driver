interface SectionTitleProps {
  title: string;
  subtitle: string;
  centered?: boolean;
}

export function SectionTitle({ title, subtitle, centered = false }: SectionTitleProps) {
  return (
    <div className={`mb-16 ${centered ? "text-center flex flex-col items-center" : "flex flex-col items-start"}`}>
      <span className="block w-10 h-px bg-primary mb-4" />
      <span className="block text-primary text-xs uppercase tracking-[0.35em] mb-4 font-semibold">
        {subtitle}
      </span>
      <h2 className="text-4xl md:text-5xl font-serif text-foreground leading-[1.1]">
        {title}
      </h2>
    </div>
  );
}
