import { SiWhatsapp } from "react-icons/si";
import { motion } from "framer-motion";

export function FloatingWhatsApp() {
  return (
    <div className="fixed bottom-8 right-8 z-50" data-testid="link-floating-whatsapp">
      {/* Ripple pulse rings — 2 layered rings that expand outward */}
      <span className="absolute inset-0 rounded-full bg-[#25D366]/30 animate-ping" style={{ animationDuration: '2s' }} />
      <span className="absolute inset-[-6px] rounded-full bg-[#25D366]/15 animate-ping" style={{ animationDuration: '2s', animationDelay: '0.4s' }} />
      
      {/* Main button with subtle float animation */}
      <motion.a
        href="https://wa.me/971528730883?text=Hi%20DXB%20Driver!%20I%20need%20a%20ride.%0AFrom%3A%20%0ATo%3A%20%0ADate%20%26%20Time%3A%20%0AVehicle%3A%20%0ANotes%3A%20..."
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