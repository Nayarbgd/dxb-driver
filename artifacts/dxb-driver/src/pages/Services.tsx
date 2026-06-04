import { motion } from "framer-motion";
import { CheckCircle2 } from "lucide-react";
import { Link } from "wouter";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { FloatingWhatsApp } from "@/components/FloatingWhatsApp";
import { CTAButton } from "@/components/CTAButton";
import { useLanguage } from "@/context/LanguageContext";

export default function Services() {
  const { t, waLink } = useLanguage();

  return (
    <div className="bg-background text-foreground overflow-x-hidden">
      <Navbar />

      {/* HERO */}
      <section className="pt-40 pb-24 md:pt-48 md:pb-32 border-b border-white/5" data-testid="section-services-hero">
        <div className="container mx-auto px-6 md:px-12">
          <motion.span
            className="block text-primary text-xs uppercase tracking-[0.4em] mb-6"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.6 }}
          >
            {t.services.pageBadge}
          </motion.span>
          <motion.h1
            className="font-serif text-5xl md:text-6xl lg:text-7xl text-foreground leading-tight max-w-3xl"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.1 }}
          >
            {t.services.hero.title}
            <br />
            <span className="text-primary">{t.services.hero.titleGold}</span>
          </motion.h1>
          <motion.p
            className="text-muted-foreground text-lg mt-8 max-w-xl leading-relaxed"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.2 }}
          >
            {t.services.hero.subtitle}
          </motion.p>
        </div>
      </section>

      {/* AIRPORT TRANSFERS */}
      <section className="py-28 md:py-36 border-b border-white/5" data-testid="section-service-airport">
        <div className="container mx-auto px-6 md:px-12">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-10 md:gap-20 items-start">
            <motion.div
              initial={{ opacity: 0, x: -40 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
            >
              <span className="block text-primary text-xs uppercase tracking-[0.3em] mb-6">{t.services.airport.badge}</span>
              <h2 className="font-serif text-4xl md:text-5xl text-foreground mb-6 leading-tight">
                {t.services.airport.title}
              </h2>
              <p className="text-muted-foreground leading-relaxed mb-8 text-base">
                {t.services.airport.desc}
              </p>
              <ul className="space-y-4 mb-10">
                {t.services.airport.features.map((item) => (
                  <li key={item} className="flex items-start gap-3 text-sm text-muted-foreground">
                    <CheckCircle2 className="w-4 h-4 text-primary mt-0.5 flex-shrink-0" />
                    {item}
                  </li>
                ))}
              </ul>
              <a href={waLink} target="_blank" rel="noreferrer" data-testid="link-book-airport">
                <CTAButton variant="filled" className="px-10 py-4">{t.services.airport.cta}</CTAButton>
              </a>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 40 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="space-y-0"
            >
              <div
                className="w-full aspect-[4/3] bg-card relative overflow-hidden"
                style={{
                  backgroundImage: "url('https://res.cloudinary.com/djepsudop/image/upload/v1780529871/Gemini_Generated_Image_k3cdkmk3cdkmk3cd_whaze7.png')",
                  backgroundSize: "cover",
                  backgroundPosition: "left center",
                }}
              >
                <div className="absolute inset-0 bg-gradient-to-t from-background/80 to-transparent" />

              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* CITY RIDES */}
      <section className="py-28 md:py-36 border-b border-white/5 bg-card" data-testid="section-service-city">
        <div className="container mx-auto px-6 md:px-12">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-10 md:gap-20 items-start">
            <motion.div
              className="order-2 md:order-1"
              initial={{ opacity: 0, x: -40 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
            >
              <div
                className="w-full aspect-[4/3] relative overflow-hidden"
                style={{
                  backgroundImage: "url('https://res.cloudinary.com/djepsudop/image/upload/v1780529912/Gemini_Generated_Image_xhp52wxhp52wxhp5_jbox4j.png')",
                  backgroundSize: "cover",
                  backgroundPosition: "left center",
                }}
              >
                <div className="absolute inset-0 bg-gradient-to-t from-background/60 to-transparent" />
              </div>
            </motion.div>

            <motion.div
              className="order-1 md:order-2"
              initial={{ opacity: 0, x: 40 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
            >
              <span className="block text-primary text-xs uppercase tracking-[0.3em] mb-6">{t.services.city.badge}</span>
              <h2 className="font-serif text-4xl md:text-5xl text-foreground mb-6 leading-tight">
                {t.services.city.title}
              </h2>
              <p className="text-muted-foreground leading-relaxed mb-8 text-base">
                {t.services.city.desc}
              </p>
              <ul className="space-y-4 mb-10">
                {t.services.city.features.map((item) => (
                  <li key={item} className="flex items-start gap-3 text-sm text-muted-foreground">
                    <CheckCircle2 className="w-4 h-4 text-primary mt-0.5 flex-shrink-0" />
                    {item}
                  </li>
                ))}
              </ul>
              <a href={waLink} target="_blank" rel="noreferrer" data-testid="link-book-city">
                <CTAButton variant="filled" className="px-10 py-4">{t.services.city.cta}</CTAButton>
              </a>
            </motion.div>
          </div>
        </div>
      </section>

      {/* INTER-EMIRATE */}
      <section className="py-28 md:py-36 border-b border-white/5" data-testid="section-service-emirate">
        <div className="container mx-auto px-6 md:px-12">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-10 md:gap-20 items-start">
            <motion.div
              initial={{ opacity: 0, x: -40 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
            >
              <span className="block text-primary text-xs uppercase tracking-[0.3em] mb-6">{t.services.emirate.badge}</span>
              <h2 className="font-serif text-4xl md:text-5xl text-foreground mb-6 leading-tight">
                {t.services.emirate.title}
              </h2>
              <p className="text-muted-foreground leading-relaxed mb-8 text-base">
                {t.services.emirate.desc}
              </p>
              <ul className="space-y-4 mb-10">
                {t.services.emirate.features.map((item) => (
                  <li key={item} className="flex items-start gap-3 text-sm text-muted-foreground">
                    <CheckCircle2 className="w-4 h-4 text-primary mt-0.5 flex-shrink-0" />
                    {item}
                  </li>
                ))}
              </ul>
              <a href={waLink} target="_blank" rel="noreferrer" data-testid="link-book-emirate">
                <CTAButton variant="filled" className="px-10 py-4">{t.services.emirate.cta}</CTAButton>
              </a>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 40 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
            >
              <div
                className="w-full aspect-[4/3] relative overflow-hidden"
                style={{
                  backgroundImage: "url('https://res.cloudinary.com/djepsudop/image/upload/v1780529876/Gemini_Generated_Image_momdenmomdenmomd_rv9qgd.png')",
                  backgroundSize: "cover",
                  backgroundPosition: "left center",
                }}
              >
                <div className="absolute inset-0 bg-gradient-to-t from-background/60 to-transparent" />
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* FINAL CTA */}
      <section className="py-32 md:py-40" data-testid="section-services-cta">
        <div className="container mx-auto px-6 md:px-12 text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <span className="block text-primary text-xs uppercase tracking-[0.4em] mb-6">{t.services.cta.subtitle}</span>
            <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl text-foreground mb-8">
              {t.services.cta.title}
              <br />
              <span className="text-primary">{t.services.cta.titleGold}</span>
            </h2>
            <p className="text-muted-foreground max-w-lg mx-auto mb-10 leading-relaxed">{t.services.cta.body}</p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a href={waLink} target="_blank" rel="noreferrer" data-testid="link-services-whatsapp">
                <CTAButton variant="filled" className="px-12 py-4">{t.mobileCTA.bookWhatsapp}</CTAButton>
              </a>
              <Link href="/contact" data-testid="link-services-contact">
                <CTAButton variant="outline" className="px-12 py-4">{t.mobileCTA.getQuote}</CTAButton>
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
