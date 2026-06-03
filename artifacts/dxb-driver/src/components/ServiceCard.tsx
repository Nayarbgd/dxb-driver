import { ReactNode } from "react";
import { CTAButton } from "./CTAButton";
import { Link } from "wouter";

interface ServiceCardProps {
  title: string;
  description: string;
  icon?: ReactNode;
  href?: string;
}

export function ServiceCard({ title, description, icon, href = "/contact" }: ServiceCardProps) {
  return (
    <div className="bg-surface border border-white/5 p-8 md:p-12 hover:border-primary/30 transition-colors duration-500 group flex flex-col h-full">
      {icon && <div className="text-primary mb-8 opacity-80 group-hover:opacity-100 transition-opacity">{icon}</div>}
      <h3 className="font-serif text-3xl mb-4 text-foreground">{title}</h3>
      <p className="text-muted-foreground leading-relaxed mb-8 flex-grow">
        {description}
      </p>
      <Link href={href} className="mt-auto self-start">
        <CTAButton variant="outline" className="text-[10px] px-6 py-2">Discover</CTAButton>
      </Link>
    </div>
  );
}
