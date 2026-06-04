import { createContext, useContext, useState, useEffect, type ReactNode } from "react";
import { translations, getWaLink, type Lang, type Translations } from "@/i18n/translations";

interface LanguageContextType {
  lang: Lang;
  setLang: (lang: Lang) => void;
  t: Translations;
  waLink: string;
}

const LanguageContext = createContext<LanguageContextType | null>(null);

export function LanguageProvider({ children }: { children: ReactNode }) {
  const [lang, setLangState] = useState<Lang>(() => {
    const stored = localStorage.getItem("dxb-lang");
    return stored === "es" ? "es" : "en";
  });

  const setLang = (newLang: Lang) => {
    setLangState(newLang);
    localStorage.setItem("dxb-lang", newLang);
  };

  useEffect(() => {
    document.documentElement.lang = lang;
    document.title =
      lang === "es"
        ? "DXB Driver | Chófer Privado en Dubái — Precio Fijo, Inglés y Español"
        : "DXB Driver | Private Chauffeur Dubai — Fixed Price, Airport Transfers";

    const metaDesc = document.querySelector('meta[name="description"]');
    if (metaDesc) {
      metaDesc.setAttribute(
        "content",
        lang === "es"
          ? "Servicio de chófer privado en Dubái. Traslados al aeropuerto, viajes por la ciudad y entre emiratos. Conductores en inglés y español. Precio fijo, sin sorpresas."
          : "Private chauffeur service in Dubai. Airport transfers, city rides and inter-emirate travel. English and Spanish-speaking drivers. Fixed pricing, no surprises."
      );
    }

    const setHreflang = (hreflang: string, href: string) => {
      let link = document.querySelector(`link[hreflang="${hreflang}"]`);
      if (!link) {
        link = document.createElement("link");
        link.setAttribute("rel", "alternate");
        link.setAttribute("hreflang", hreflang);
        document.head.appendChild(link);
      }
      link.setAttribute("href", href);
    };
    const base = window.location.origin;
    setHreflang("en", base);
    setHreflang("es", `${base}?lang=es`);
  }, [lang]);

  return (
    <LanguageContext.Provider
      value={{ lang, setLang, t: translations[lang], waLink: getWaLink(lang) }}
    >
      {children}
    </LanguageContext.Provider>
  );
}

export function useLanguage(): LanguageContextType {
  const ctx = useContext(LanguageContext);
  if (!ctx) throw new Error("useLanguage must be used within LanguageProvider");
  return ctx;
}
