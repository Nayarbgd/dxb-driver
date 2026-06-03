import { ButtonHTMLAttributes, ReactNode, useState } from "react";
import { cn } from "@/lib/utils";
import { motion, AnimatePresence } from "framer-motion";

interface CTAButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: "filled" | "outline";
  children: ReactNode;
  className?: string;
}

export function CTAButton({ variant = "filled", children, className, ...props }: CTAButtonProps) {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <motion.div
      onHoverStart={() => setIsHovered(true)}
      onHoverEnd={() => setIsHovered(false)}
      whileHover={
        variant === "filled"
          ? { scale: 1.02, boxShadow: "0 0 30px rgba(201,168,76,0.35)" }
          : { scale: 1.01 }
      }
      whileTap={{ scale: 0.98 }}
      transition={{ duration: 0.18, ease: "easeOut" }}
      className="inline-block"
    >
      <button
        className={cn(
          "px-8 py-3 uppercase tracking-widest text-xs font-semibold transition-colors duration-300 disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center gap-2",
          variant === "filled"
            ? "bg-primary text-primary-foreground hover:bg-primary/90"
            : "bg-transparent border border-primary text-primary hover:bg-primary/10",
          className
        )}
        {...props}
      >
        <span>{children}</span>
        {variant === "filled" && (
          <AnimatePresence>
            {isHovered && (
              <motion.span
                initial={{ opacity: 0, x: -6 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -6 }}
                transition={{ duration: 0.15 }}
                className="inline-flex"
                aria-hidden="true"
              >
                →
              </motion.span>
            )}
          </AnimatePresence>
        )}
      </button>
    </motion.div>
  );
}
