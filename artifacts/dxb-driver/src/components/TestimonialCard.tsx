import { Star } from "lucide-react";

interface TestimonialCardProps {
  name: string;
  city: string;
  rating: number;
  review: string;
}

export function TestimonialCard({ name, city, rating, review }: TestimonialCardProps) {
  return (
    <div
      className="bg-card border border-white/5 p-8 md:p-10 flex flex-col hover:border-primary/20 transition-colors duration-500"
      data-testid={`card-testimonial-${name.toLowerCase().replace(/\s+/g, "-")}`}
    >
      <div className="flex items-center gap-1 mb-6">
        {Array.from({ length: 5 }).map((_, i) => (
          <Star
            key={i}
            className={`w-3.5 h-3.5 ${i < rating ? "fill-primary text-primary" : "text-muted-foreground/30"}`}
          />
        ))}
      </div>
      <p className="text-foreground/80 leading-relaxed text-sm mb-8 flex-grow italic font-serif text-base">
        "{review}"
      </p>
      <div className="border-t border-white/5 pt-6">
        <p className="text-foreground font-semibold text-sm tracking-wide">{name}</p>
        <p className="text-muted-foreground text-xs uppercase tracking-widest mt-1">{city}</p>
      </div>
    </div>
  );
}
