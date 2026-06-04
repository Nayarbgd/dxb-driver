import { SiWhatsapp } from "react-icons/si";
import { motion } from "framer-motion";
import { useLanguage } from "@/context/LanguageContext";

export function FloatingWhatsApp() {
  const { waLink } = useLanguage();

  return (
    <div className="fixed bottom-8 right-8 z-50" data-testid="link-floating-whatsapp">
      <span className="absolute inset-0 rounded-full bg-[#25D366]/30 animate-ping" style={{ animationDuration: "2s" }} />
      <span className="absolute inset-[-6px] rounded-full bg-[#25D366]/15 animate-ping" style={{ animationDuration: "2s", animationDelay: "0.4s" }} />

      <motion.a
        href={waLink}
        target="_blank"
        rel="noreferrer"
        aria-label="Contact on WhatsApp"
        animate={{ y: [0, -6, 0] }}
        transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.95 }}
        className="relative flex items-center justify-center w-14 h-14 rounded-full bg-[#25D366] text-white shadow-[0_8px_32px_rgba(37,211,102,0.35)] hover:shadow-[0_12px_40px_rgba(37,211,102,0.5)] transition-shadow duration-300"
      >
        <SiWhatsapp className="w-7 h-7" />
      </motion.a>
    </div>
  );
}
