import { SiWhatsapp } from "react-icons/si";

export function FloatingWhatsApp() {
  return (
    <a
      href="https://wa.me/971501234567"
      target="_blank"
      rel="noreferrer"
      className="fixed bottom-6 right-6 z-50 bg-[#25D366] text-white p-4 rounded-full shadow-2xl hover:scale-110 transition-transform duration-300 flex items-center justify-center"
      aria-label="Contact on WhatsApp"
      data-testid="link-floating-whatsapp"
    >
      <SiWhatsapp className="w-7 h-7" />
    </a>
  );
}
