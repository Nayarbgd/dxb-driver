import { SiWhatsapp } from "react-icons/si";
import { motion, AnimatePresence } from "framer-motion";
import { useLanguage } from "@/context/LanguageContext";
import { useMobileMenu } from "@/context/MobileMenuContext";

export function FloatingWhatsApp() {
  const { waLink } = useLanguage();
  const { isMenuOpen } = useMobileMenu();

  return (
    <AnimatePresence>
      {!isMenuOpen && (
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          exit={{ opacity: 0, scale: 0.8 }}
          transition={{ duration: 0.2 }}
          className="fixed bottom-6 right-5 md:bottom-8 md:right-8 z-50"
          data-testid="link-floating-whatsapp"
        >
          <span className="absolute inset-0 rounded-full bg-[#25D366]/30 animate-ping" style={{ animationDuration: "2.5s" }} />
          <motion.a
            href={waLink}
            target="_blank"
            rel="noreferrer"
            aria-label="Contact on WhatsApp"
            animate={{ y: [0, -5, 0] }}
            transition={{ duration: 3.5, repeat: Infinity, ease: "easeInOut" }}
            whileTap={{ scale: 0.95 }}
            className="relative flex items-center justify-center w-14 h-14 rounded-full bg-[#25D366] text-white shadow-[0_8px_32px_rgba(37,211,102,0.35)] transition-shadow duration-300"
          >
            <SiWhatsapp className="w-7 h-7" />
          </motion.a>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
