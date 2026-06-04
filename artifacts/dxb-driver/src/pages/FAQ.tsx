import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronDown } from "lucide-react";
import { Link } from "wouter";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { FloatingWhatsApp } from "@/components/FloatingWhatsApp";
import { CTAButton } from "@/components/CTAButton";
import { useLanguage } from "@/context/LanguageContext";

function FAQItem({ q, a, index }: { q: string; a: string; index: number }) {
  const [open, setOpen] = useState(false);

  return (
    <motion.div
      className="border-b border-white/5"
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.4, delay: index * 0.04 }}
    >
      <button
        className="w-full flex items-center justify-between gap-4 py-6 text-left group"
        onClick={() => setOpen(!open)}
        data-testid={`faq-toggle-${index}`}
      >
        <span className="font-serif text-lg text-foreground group-hover:text-primary transition-colors leading-snug">
          {q}
        </span>
        <ChevronDown
          className={`w-4 h-4 text-primary flex-shrink-0 transition-transform duration-300 ${open ? "rotate-180" : ""}`}
        />
      </button>
      <AnimatePresence initial={false}>
        {open && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.3, ease: "easeInOut" }}
            className="overflow-hidden"
          >
            <p className="text-muted-foreground text-sm leading-relaxed pb-6 pr-4 md:pr-8">{a}</p>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.div>
  );
}

export default function FAQ() {
  const { t, waLink } = useLanguage();

  return (
    <div className="bg-background text-foreground overflow-x-hidden">
      <Navbar />

      {/* HERO */}
      <section className="pt-40 pb-24 md:pt-48 md:pb-32 border-b border-white/5" data-testid="section-faq-hero">
        <div className="container mx-auto px-6 md:px-12">
          <motion.span
            className="block text-primary text-xs uppercase tracking-[0.4em] mb-6"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.6 }}
          >
            {t.faq.pageBadge}
          </motion.span>
          <motion.h1
            className="font-serif text-3xl sm:text-4xl md:text-5xl lg:text-7xl text-foreground leading-tight max-w-3xl"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.1 }}
          >
            {t.faq.hero.title}
            <br />
            <span className="text-primary">{t.faq.hero.titleGold}</span>
          </motion.h1>
          <motion.p
            className="text-muted-foreground text-lg mt-8 max-w-xl leading-relaxed"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.2 }}
          >
            {t.faq.hero.subtitle}
          </motion.p>
        </div>
      </section>

      {/* FAQ CATEGORIES */}
      <section className="py-28 md:py-36" data-testid="section-faq-list">
        <div className="container mx-auto px-6 md:px-12 max-w-4xl">
          <div className="space-y-20">
            {t.faq.categories.map((cat, ci) => (
              <motion.div
                key={ci}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
                data-testid={`faq-category-${ci}`}
              >
                <div className="flex items-center gap-4 mb-8">
                  <span className="text-primary text-xs uppercase tracking-[0.4em]">
                    {String(ci + 1).padStart(2, "0")}
                  </span>
                  <div className="w-px h-4 bg-primary/30" />
                  <h2 className="font-serif text-2xl text-foreground">{cat.category}</h2>
                </div>
                <div className="border-t border-white/5">
                  {cat.items.map((item, ii) => (
                    <FAQItem key={ii} q={item.q} a={item.a} index={ci * 10 + ii} />
                  ))}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CONTACT CTA */}
      <section className="py-28 md:py-36 bg-card border-t border-white/5" data-testid="section-faq-cta">
        <div className="container mx-auto px-6 md:px-12 text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <span className="block text-primary text-xs uppercase tracking-[0.4em] mb-6">
              {t.faq.contact.subtitle}
            </span>
            <h2 className="font-serif text-4xl md:text-5xl text-foreground mb-6">
              {t.faq.contact.title}
            </h2>
            <p className="text-muted-foreground max-w-md mx-auto mb-10 leading-relaxed">
              {t.faq.contact.body}
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a href={waLink} target="_blank" rel="noreferrer" data-testid="link-faq-whatsapp">
                <CTAButton variant="filled" className="px-10 py-4">{t.faq.contact.whatsapp}</CTAButton>
              </a>
              <Link href="/contact" data-testid="link-faq-contact">
                <CTAButton variant="outline" className="px-10 py-4">{t.faq.contact.form}</CTAButton>
              </Link>
            </div>
          </motion.div>
        </div>
      </section>

      <Footer />
      <FloatingWhatsApp />
    </div>
  );
}
