import { ButtonHTMLAttributes, ReactNode } from "react";
import { cn } from "@/lib/utils";

interface CTAButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: "filled" | "outline";
  children: ReactNode;
  className?: string;
}

export function CTAButton({ variant = "filled", children, className, ...props }: CTAButtonProps) {
  return (
    <button
      className={cn(
        "px-8 py-3 uppercase tracking-widest text-xs font-semibold transition-all duration-300 disabled:opacity-50 disabled:cursor-not-allowed",
        variant === "filled" 
          ? "bg-primary text-primary-foreground hover:bg-primary/90 hover:shadow-[0_0_20px_rgba(201,168,76,0.3)]"
          : "bg-transparent border border-primary text-primary hover:bg-primary/10",
        className
      )}
      {...props}
    >
      {children}
    </button>
  );
}
