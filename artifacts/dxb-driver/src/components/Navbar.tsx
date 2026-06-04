import { Link, useLocation } from "wouter";
import { useState, useEffect, useRef } from "react";
import { Menu, X, Globe, ChevronDown } from "lucide-react";
import { CTAButton } from "./CTAButton";
import { motion, AnimatePresence } from "framer-motion";
import { useLanguage } from "@/context/LanguageContext";

export function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [langOpen, setLangOpen] = useState(false);
  const [location] = useLocation();
  const { t, lang, setLang } = useLanguage();
  const langRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    setIsOpen(false);
  }, [location]);

  useEffect(() => {
    const handleClick = (e: MouseEvent) => {
      if (langRef.current && !langRef.current.contains(e.target as Node)) {
        setLangOpen(false);
      }
    };
    document.addEventListener("mousedown", handleClick);
    return () => document.removeEventListener("mousedown", handleClick);
  }, []);

  const navLinks = [
    { href: "/services", label: t.nav.services },
    { href: "/why-choose-us", label: t.nav.whyUs },
    { href: "/pricing", label: t.nav.pricing },
    { href: "/about", label: t.nav.about },
    { href: "/faq", label: t.nav.faq },
  ];

  const langOptions: { value: "en" | "es"; flag: string; label: string }[] = [
    { value: "en", flag: "🇬🇧", label: "English" },
    { value: "es", flag: "🇪🇸", label: "Español" },
  ];

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        isScrolled
          ? "bg-background/95 backdrop-blur-md border-b border-white/5 py-4"
          : "bg-transparent py-6"
      }`}
    >
      <div className="container mx-auto px-6 md:px-12 flex items-center justify-between">
        <Link href="/" className="flex items-center gap-2" data-testid="link-home">
          <span className="font-serif text-2xl tracking-[0.3em] font-bold text-primary transition-all duration-500">
            DXB DRIVER
          </span>
        </Link>

        {/* Desktop Nav */}
        <nav className="hidden md:flex items-center gap-8">
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className={`text-sm uppercase tracking-widest transition-colors duration-300 hover:text-primary relative py-2 ${
                location === link.href ? "text-primary" : "text-muted-foreground"
              }`}
              data-testid={`link-nav-${link.href.replace("/", "")}`}
            >
              {link.label}
              {location === link.href && (
                <span className="absolute bottom-0 left-0 right-0 h-px bg-primary" />
              )}
            </Link>
          ))}

          {/* Language Switcher — Desktop */}
          <div ref={langRef} className="relative">
            <button
              onClick={() => setLangOpen(!langOpen)}
              className="flex items-center gap-1.5 text-muted-foreground hover:text-primary transition-colors text-sm uppercase tracking-widest py-2 border border-white/10 px-3 hover:border-primary/30"
              aria-label="Change language"
            >
              <Globe className="w-3.5 h-3.5" />
              <span>{lang === "en" ? "EN" : "ES"}</span>
              <ChevronDown
                className={`w-3 h-3 transition-transform duration-200 ${langOpen ? "rotate-180" : ""}`}
              />
            </button>
            <AnimatePresence>
              {langOpen && (
                <motion.div
                  initial={{ opacity: 0, y: -8 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -8 }}
                  transition={{ duration: 0.18 }}
                  className="absolute right-0 top-full mt-2 bg-card border border-white/10 shadow-2xl shadow-black/40 min-w-[130px] z-50"
                >
                  {langOptions.map((opt) => (
                    <button
                      key={opt.value}
                      onClick={() => { setLang(opt.value); setLangOpen(false); }}
                      className={`flex items-center gap-2.5 w-full px-4 py-3 text-sm text-left transition-colors hover:bg-white/5 ${
                        lang === opt.value ? "text-primary" : "text-muted-foreground"
                      }`}
                    >
                      <span>{opt.flag}</span>
                      <span className="uppercase tracking-widest text-xs">{opt.label}</span>
                      {lang === opt.value && (
                        <span className="ml-auto w-1.5 h-1.5 rounded-full bg-primary" />
                      )}
                    </button>
                  ))}
                </motion.div>
              )}
            </AnimatePresence>
          </div>

          <div className="ml-2">
            <Link href="/contact" data-testid="link-nav-book">
              <CTAButton variant="filled">{t.nav.bookNow}</CTAButton>
            </Link>
          </div>
        </nav>

        {/* Mobile Toggle */}
        <button
          className="md:hidden text-foreground hover:text-primary transition-colors p-2"
          onClick={() => setIsOpen(true)}
          data-testid="button-mobile-menu"
          aria-label="Open menu"
        >
          <Menu className="w-6 h-6" />
        </button>
      </div>

      {/* Mobile Menu Overlay */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ x: "100%" }}
            animate={{ x: 0 }}
            exit={{ x: "100%" }}
            transition={{ type: "spring", stiffness: 300, damping: 35 }}
            className="fixed inset-0 bg-background/98 backdrop-blur-xl z-50 flex flex-col px-6 py-8 md:hidden"
          >
            <div className="absolute left-0 top-0 bottom-0 w-px bg-gradient-to-b from-transparent via-primary/40 to-transparent" />
            <div className="flex justify-between items-center mb-12">
              <span className="font-serif text-2xl tracking-[0.3em] font-bold text-primary">
                DXB DRIVER
              </span>
              <button
                onClick={() => setIsOpen(false)}
                className="text-foreground hover:text-primary p-2 transition-colors"
                data-testid="button-close-menu"
                aria-label="Close menu"
              >
                <X className="w-8 h-8" />
              </button>
            </div>

            <nav className="flex flex-col gap-8 text-center flex-grow justify-center pb-20">
              {navLinks.map((link, i) => (
                <motion.div
                  key={link.href}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.1 * i, duration: 0.4 }}
                >
                  <Link
                    href={link.href}
                    className={`text-2xl font-serif tracking-wider ${
                      location === link.href ? "text-primary" : "text-foreground"
                    }`}
                  >
                    {link.label}
                  </Link>
                </motion.div>
              ))}

              {/* Language Switcher — Mobile */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.45, duration: 0.4 }}
                className="flex items-center justify-center gap-4 pt-2"
              >
                {langOptions.map((opt) => (
                  <button
                    key={opt.value}
                    onClick={() => setLang(opt.value)}
                    className={`flex items-center gap-2 px-4 py-2 border text-sm uppercase tracking-widest transition-all ${
                      lang === opt.value
                        ? "border-primary text-primary"
                        : "border-white/15 text-muted-foreground"
                    }`}
                  >
                    <span>{opt.flag}</span>
                    <span>{opt.label}</span>
                  </button>
                ))}
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.55, duration: 0.4 }}
                className="mt-4"
              >
                <Link href="/contact">
                  <CTAButton variant="filled" className="w-full text-lg py-4">
                    {t.nav.bookNow}
                  </CTAButton>
                </Link>
              </motion.div>
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
