import { SiWhatsapp } from "react-icons/si";
import { Link } from "wouter";
import { useState, useEffect } from "react";

export function MobileCTABar() {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 768);
    };
    checkMobile();
    window.addEventListener("resize", checkMobile);
    return () => window.removeEventListener("resize", checkMobile);
  }, []);

  if (!isMobile) return null;

  return (
    <div
      className="md:hidden fixed bottom-0 left-0 right-0 z-40 bg-card/95 backdrop-blur-md border-t border-white/10 shadow-[0_-4px_20px_rgba(0,0,0,0.6)] pb-4"
      data-testid="bar-mobile-cta"
    >
      <div className="flex w-full">
        <a
          href="https://wa.me/971501234567"
          target="_blank"
          rel="noreferrer"
          className="flex-1 bg-[#25D366] text-white flex items-center justify-center gap-2 py-4 px-2 font-semibold text-sm uppercase tracking-wider"
        >
          <SiWhatsapp className="w-5 h-5" />
          <span>Book on WhatsApp</span>
        </a>
        <Link
          href="/contact"
          className="flex-1 bg-transparent border-t-0 border-r-0 border-b-0 border-l border-white/10 flex items-center justify-center py-4 px-2 font-semibold text-sm uppercase tracking-wider text-primary"
        >
          Get a Quote
        </Link>
      </div>
    </div>
  );
}
