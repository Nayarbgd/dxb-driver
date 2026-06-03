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
      className="bg-card border border-white/5 p-8 md:p-10 flex flex-col hover:border-primary/20 transition-colors duration-500 h-full relative"
      data-testid={`card-testimonial-${name.toLowerCase().replace(/\s+/g, "-")}`}
    >
      <span className="absolute top-6 left-6 font-serif text-primary/20 text-6xl leading-none">"</span>
      <div className="flex items-center gap-1 mb-6 relative z-10 mt-6">
        {Array.from({ length: 5 }).map((_, i) => (
          <Star
            key={i}
            className={`w-4 h-4 ${i < rating ? "fill-primary text-primary" : "text-muted-foreground/30"}`}
          />
        ))}
      </div>
      <p className="text-foreground/80 leading-relaxed mb-8 flex-grow italic font-serif text-base relative z-10">
        {review}
      </p>
      <div className="border-t border-white/5 pt-6 flex items-center gap-4">
        <div className="w-9 h-9 rounded-full border border-primary/30 flex items-center justify-center text-primary/60 font-serif flex-shrink-0">
          {name.charAt(0).toUpperCase()}
        </div>
        <div>
          <p className="text-foreground font-semibold font-serif text-base tracking-wider">{name}</p>
          <p className="text-muted-foreground text-xs uppercase tracking-widest mt-1">{city}</p>
        </div>
      </div>
    </div>
  );
}
