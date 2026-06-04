import { Link } from "wouter";
import { SEOHead } from "@/components/SEOHead";
import { motion, useAnimation } from "framer-motion";
import { useEffect } from "react";
import { Plane, MapPin, Route, Star, Car, CheckCircle2 } from "lucide-react";
import { CTAButton } from "@/components/CTAButton";
import { SectionTitle } from "@/components/SectionTitle";
import { ServiceCard } from "@/components/ServiceCard";
import { TestimonialCard } from "@/components/TestimonialCard";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { cn } from "@/lib/utils";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { useLanguage } from "@/context/LanguageContext";

const fadeUp = {
  hidden: { opacity: 0, y: 16 },
  visible: (i = 0) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.45, delay: i * 0.08, ease: [0.22, 1, 0.36, 1] as [number, number, number, number] },
  }),
};

export default function Home() {
  const { t, waLink, lang } = useLanguage();
  return (
    <>
      <SEOHead
        title="Private Chauffeur Service Dubai | DXB Driver"
        description="Dubai's premier private chauffeur. Fixed rates, airport transfers, city rides & inter-emirate travel. RTA licensed, 24/7 available. Book on WhatsApp."
        canonical="https://dxbdriver.com/"
      />
      <HomeContent t={t} waLink={waLink} lang={lang} />
    </>
  );
}

function HomeContent({ t, waLink, lang }: ReturnType<typeof useLanguage>) {

  const heroDesktopCtrl = useAnimation();
  const heroMobileCtrl = useAnimation();

  useEffect(() => {
    const runHero = (ctrl: ReturnType<typeof useAnimation>) => {
      ctrl
        .start({
          opacity: 1,
          filter: "brightness(1)",
          scale: 1,
          transition: { duration: 2.6, ease: [0.16, 1, 0.3, 1] },
        })
        .then(() => {
          ctrl.start({
            scale: [1, 1.016, 1],
            transition: { duration: 28, ease: "easeInOut", repeat: Infinity, repeatType: "loop" },
          });
        });
    };
    runHero(heroDesktopCtrl);
    runHero(heroMobileCtrl);
  }, [heroDesktopCtrl, heroMobileCtrl]);

  const faqPreview = [
    t.faq.categories[0].items[1],
    t.faq.categories[2].items[0],
    t.faq.categories[1].items[0],
    t.faq.categories[2].items[3],
  ];

  const fleetCards = [
    {
      tier: t.pricing.tierData[0].tier,
      vehicle: t.pricing.tierData[0].vehicle,
      features: t.pricing.tierData[0].features.slice(0, 4),
      price: "AED 80",
      color: "border-white/10",
      featured: false,
    },
    {
      tier: t.pricing.tierData[1].tier,
      vehicle: t.pricing.tierData[1].vehicle,
      features: t.pricing.tierData[1].features.slice(0, 4),
      price: "AED 150",
      color: "border-primary/40",
      featured: true,
    },
    {
      tier: t.pricing.tierData[2].tier,
      vehicle: t.pricing.tierData[2].vehicle,
      features: t.pricing.tierData[2].features.slice(0, 4),
      price: "AED 280",
      color: "border-white/10",
      featured: false,
    },
  ];

  const viewPricing = lang === "es" ? "Ver Precios" : "View Pricing";
  const fromLabel = lang === "es" ? "desde" : "from";
  const tripLabel = lang === "es" ? "viaje" : "trip";
  const orLabel = lang === "es" ? "o" : "or";
  const ratingLine =
    lang === "es"
      ? "4.97 promedio · más de 200 viajes valorados"
      : "4.97 average · 200+ journeys rated";
  const viewAllFaq = lang === "es" ? "Ver Todas las Preguntas" : "View All Questions";
  const beginJourney = lang === "es" ? "Comience Su Viaje" : "Begin Your Journey";
  const finalTitle1 = lang === "es" ? "Listo Para Llegar" : "Ready to Arrive";
  const finalTitle2 = lang === "es" ? "en Silencio?" : "in Silence?";
  const finalSub = lang === "es" ? "Un mensaje. Su conductor está organizado. Sin apps, sin tarifas variables, sin incertidumbre." : "One message. Your driver is arranged. No apps, no surges, no uncertainty.";
  const availableNote = lang === "es" ? "Disponible ahora · Respuesta en 15 minutos" : "Available now · Response within 15 minutes";

  return (
    <div className="bg-background text-foreground overflow-x-hidden">
      <Navbar />

      {/* HERO */}
      <section
        className="relative min-h-screen flex items-end pt-24 md:pt-28 pb-24 md:pb-32"
        data-testid="section-hero"
        style={{ background: "#0A0A0A" }}
      >
        {/* Desktop hero image */}
        <div className="absolute inset-0 z-0 hidden md:block overflow-hidden">
          <motion.div
            animate={heroDesktopCtrl}
            initial={{ opacity: 0, filter: "brightness(0.22)", scale: 1.06 }}
            className="absolute inset-0"
            role="img"
            aria-label="Luxury chauffeur service in Dubai — professional driver opening car door at night"
            style={{
              backgroundImage: "url('https://res.cloudinary.com/djepsudop/image/upload/v1780517410/11_rqt4kf.png')",
              backgroundSize: "cover",
              backgroundPosition: "center 40%",
              backgroundRepeat: "no-repeat",
              willChange: "transform, opacity, filter",
            }}
          />
        </div>
        {/* Mobile hero image — 9:16 vertical */}
        <div className="absolute inset-0 z-0 block md:hidden overflow-hidden">
          <motion.div
            animate={heroMobileCtrl}
            initial={{ opacity: 0, filter: "brightness(0.22)", scale: 1.06 }}
            className="absolute inset-0"
            role="img"
            aria-label="Luxury chauffeur service in Dubai — private driver with luxury vehicle"
            style={{
              backgroundImage: "url('https://res.cloudinary.com/djepsudop/image/upload/v1780555769/43444_b0pley.png')",
              backgroundSize: "cover",
              backgroundPosition: "center 30%",
              backgroundRepeat: "no-repeat",
              willChange: "transform, opacity, filter",
            }}
          />
        </div>
        <div className="absolute inset-0 z-[1]" style={{ background: "linear-gradient(105deg, rgba(10,10,10,0.96) 0%, rgba(10,10,10,0.85) 45%, rgba(10,10,10,0.60) 100%)" }} />
        <div className="absolute inset-0 z-[1]" style={{ background: "linear-gradient(to top, rgba(10,10,10,1) 0%, rgba(10,10,10,0) 50%)" }} />
        <div
          className="absolute inset-0 opacity-[0.04] z-[2]"
          style={{
            backgroundImage: "linear-gradient(to right, #C9A84C 1px, transparent 1px), linear-gradient(to bottom, #C9A84C 1px, transparent 1px)",
            backgroundSize: "80px 80px",
          }}
        />
        <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-primary/60 to-transparent z-[2]" />

        <div className="container mx-auto px-6 md:px-12 relative z-10">
          <div className="max-w-4xl">
            <h1 className="font-serif text-[2.8rem] sm:text-6xl md:text-7xl lg:text-8xl xl:text-9xl leading-[0.9] text-foreground mb-8">
              <div className="overflow-hidden">
                <motion.div
                  initial={{ y: "100%" }}
                  animate={{ y: 0 }}
                  transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] as [number, number, number, number], delay: 0.1 }}
                >
                  {t.home.title[0]}
                </motion.div>
              </div>
              <div className="overflow-hidden">
                <motion.div
                  initial={{ y: "100%" }}
                  animate={{ y: 0 }}
                  transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] as [number, number, number, number], delay: 0.15 }}
                >
                  <span className="text-primary">{t.home.title[1]}</span>
                </motion.div>
              </div>
              <div className="overflow-hidden">
                <motion.div
                  initial={{ y: "100%" }}
                  animate={{ y: 0 }}
                  transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] as [number, number, number, number], delay: 0.2 }}
                >
                  {t.home.title[2]}
                </motion.div>
              </div>
            </h1>

            <motion.p
              className="text-muted-foreground text-lg md:text-xl max-w-lg mb-8 leading-relaxed"
              initial="hidden"
              animate="visible"
              custom={2}
              variants={fadeUp}
            >
              {t.home.subtitle}
            </motion.p>

            <motion.div className="flex items-center gap-3 my-8" initial="hidden" animate="visible" custom={2} variants={fadeUp}>
              <span className="w-8 h-px bg-primary/40" />
              <span className="w-1 h-1 bg-primary/60 rounded-full" />
              <span className="w-8 h-px bg-primary/40" />
            </motion.div>

            <motion.div
              className="flex flex-col sm:flex-row gap-4 items-center"
              initial="hidden"
              animate="visible"
              custom={3}
              variants={fadeUp}
            >
              <a href={waLink} target="_blank" rel="noreferrer" data-testid="link-hero-whatsapp" className="w-full sm:w-auto">
                <CTAButton variant="filled" className="w-full sm:w-auto px-10 py-4 text-sm">
                  {t.mobileCTA.bookWhatsapp}
                </CTAButton>
              </a>
              <span className="text-muted-foreground/40 text-xs italic font-serif mx-2">{orLabel}</span>
              <Link href="/contact" data-testid="link-hero-quote" className="w-full sm:w-auto">
                <CTAButton variant="outline" className="w-full sm:w-auto px-10 py-4 text-sm">
                  {t.mobileCTA.getQuote}
                </CTAButton>
              </Link>
            </motion.div>

            <motion.p
              className="text-muted-foreground/50 text-xs mt-6 uppercase tracking-widest"
              initial="hidden"
              animate="visible"
              custom={4}
              variants={fadeUp}
            >
              {t.home.smallBadge}
            </motion.p>
          </div>
        </div>
        <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-background to-transparent" />
      </section>

      {/* TRUST BAR */}
      <section className="border-y border-white/5 bg-card py-6" data-testid="section-trust">
        <div className="container mx-auto px-6 md:px-12">
          <div className="flex flex-wrap items-center divide-y md:divide-y-0 md:divide-x divide-white/5 -mx-0">
            {t.home.trustBar.map((item, i) => (
              <motion.div
                key={i}
                className="flex items-center gap-3 px-4 py-2 w-full sm:w-1/2 lg:w-auto lg:flex-1 justify-center lg:justify-start"
                data-testid={`badge-trust-${i}`}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.08 * (i + 1), duration: 0.5 }}
              >
                <span className="text-primary flex-shrink-0"><CheckCircle2 className="w-4 h-4" /></span>
                <div>
                  <span className="text-xs uppercase tracking-widest text-foreground/90 font-semibold block leading-tight">{item.label}</span>
                  <span className="text-[10px] text-muted-foreground/55 uppercase tracking-wider">{item.sub}</span>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* SERVICES OVERVIEW */}
      <section className="py-28 md:py-36" data-testid="section-services">
        <div className="container mx-auto px-6 md:px-12">
          <motion.div
            initial={{ opacity: 0, y: 14 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.06 }}
            transition={{ duration: 0.45 }}
          >
            <SectionTitle subtitle={t.home.services.subtitle} title={t.home.services.title} centered />
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-0 border border-white/5">
            {[
              { icon: <Plane className="w-8 h-8" />, title: t.home.services.airport.name, description: t.home.services.airport.desc, href: "/services" },
              { icon: <MapPin className="w-8 h-8" />, title: t.home.services.city.name, description: t.home.services.city.desc, href: "/services" },
              { icon: <Route className="w-8 h-8" />, title: t.home.services.emirate.name, description: t.home.services.emirate.desc, href: "/services" },
            ].map((service, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 14 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.06 }}
                transition={{ duration: 0.6, delay: i * 0.1 }}
                className={i < 2 ? "md:border-r border-white/5" : ""}
              >
                <ServiceCard icon={service.icon} title={service.title} description={service.description} href={service.href} />
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* HOW IT WORKS */}
      <section className="py-28 md:py-36 bg-card border-y border-white/5" data-testid="section-how-it-works">
        <div className="container mx-auto px-6 md:px-12">
          <motion.div
            initial={{ opacity: 0, y: 14 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.06 }}
            transition={{ duration: 0.45 }}
          >
            <SectionTitle subtitle={t.home.howItWorks.subtitle} title={t.home.howItWorks.title} centered />
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-12 md:gap-0 relative">
            <div className="hidden md:block absolute top-[4.75rem] left-[16.67%] right-[16.67%] h-px bg-gradient-to-r from-transparent via-primary/35 to-transparent" />
            {t.home.howItWorks.steps.map((step, i) => (
              <motion.div
                key={i}
                className="text-center px-8 relative"
                initial={{ opacity: 0, y: 14 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.06 }}
                transition={{ duration: 0.6, delay: i * 0.15 }}
                data-testid={`step-how-${i + 1}`}
              >
                <div className="inline-block mb-8">
                  <span className="font-serif text-7xl text-primary/20 leading-none">{step.number}</span>
                </div>
                <h3 className="font-serif text-2xl mb-4 text-foreground">{step.title}</h3>
                <p className="text-muted-foreground text-sm leading-relaxed">{step.body}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* FLEET PREVIEW */}
      <section className="py-28 md:py-36" data-testid="section-fleet">
        <div className="container mx-auto px-6 md:px-12">
          <motion.div
            initial={{ opacity: 0, y: 14 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.06 }}
            transition={{ duration: 0.45 }}
          >
            <SectionTitle subtitle={lang === "es" ? "La Flota" : "The Fleet"} title={lang === "es" ? "Cada Vehículo. Cada Estándar." : "Every Vehicle. Every Standard."} />
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {fleetCards.map((fleet, i) => (
              <motion.div
                key={i}
                className={`border ${fleet.color} p-8 md:p-10 pt-12 md:pt-14 relative transition-colors duration-300 ${fleet.featured ? "bg-card" : "hover:border-primary/50"}`}
                initial={{ opacity: 0, y: 14 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.06 }}
                whileHover={{ y: -4 }}
                transition={{ duration: 0.6, delay: i * 0.1 }}
                data-testid={`card-fleet-${fleet.tier.toLowerCase()}`}
              >
                {fleet.featured && <div className="absolute -top-px left-0 right-0 h-px bg-primary" />}
                {fleet.featured && (
                  <span className="absolute -top-3 left-1/2 -translate-x-1/2 bg-primary text-primary-foreground text-[10px] uppercase tracking-widest px-3 py-1 font-semibold">
                    {t.pricing.mostPopular}
                  </span>
                )}
                <div className={cn("w-full h-px mb-8", fleet.featured ? "bg-gradient-to-r from-transparent via-primary to-transparent" : "bg-gradient-to-r from-transparent via-white/10 to-transparent")} />
                <div className="flex items-center justify-between mb-8">
                  <div className="flex items-center gap-4">
                    <Car className="w-6 h-6 text-primary opacity-70" />
                    <span className="text-xs uppercase tracking-[0.3em] text-muted-foreground font-semibold">{fleet.tier}</span>
                  </div>
                </div>
                <h3 className="font-serif text-2xl mb-1 text-foreground">{fleet.tier} {t.pricing.labels.class}</h3>
                <p className="text-muted-foreground text-sm mb-2">{fleet.vehicle}</p>
                <p className="text-primary text-xs uppercase tracking-wider mb-8">{fromLabel} {fleet.price} / {tripLabel}</p>
                <ul className="space-y-3 mb-8">
                  {fleet.features.map((f, fi) => (
                    <li key={fi} className="flex items-center gap-3 text-sm text-muted-foreground">
                      <span className="w-1 h-1 bg-primary rounded-full flex-shrink-0" />
                      {f}
                    </li>
                  ))}
                </ul>
                <Link href="/pricing" data-testid={`link-fleet-pricing-${fleet.tier.toLowerCase()}`}>
                  <CTAButton variant={fleet.featured ? "filled" : "outline"} className="w-full justify-center text-center">
                    {viewPricing}
                  </CTAButton>
                </Link>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* TESTIMONIALS */}
      <section className="py-28 md:py-36 bg-card border-y border-white/5" data-testid="section-testimonials">
        <div className="container mx-auto px-6 md:px-12">
          <motion.div
            initial={{ opacity: 0, y: 14 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.06 }}
            transition={{ duration: 0.45 }}
          >
            <SectionTitle subtitle={t.home.testimonials.subtitle} title={t.home.testimonials.title} centered />
          </motion.div>

          <motion.div
            className="flex items-center gap-3 mb-12 justify-center"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true, amount: 0.06 }}
          >
            <div className="flex items-center gap-1">
              {[1, 2, 3, 4, 5].map((_, i) => (
                <Star key={i} className="w-4 h-4 fill-primary text-primary" />
              ))}
            </div>
            <span className="text-muted-foreground text-sm">{ratingLine}</span>
          </motion.div>

          <motion.div
            className="grid grid-cols-1 md:grid-cols-3 gap-0 border border-white/5"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.06 }}
            variants={{ hidden: {}, visible: { transition: { staggerChildren: 0.1 } } }}
          >
            {[
              { name: "James Whitfield", city: "London, UK", rating: 5, review: "Arrived at 2am on a delayed flight. Driver was waiting, signboard ready. Not a single moment of uncertainty. This is how transfers should work everywhere." },
              { name: "Aisha Al-Rasheed", city: "Riyadh, KSA", rating: 5, review: "I've used every transfer service in Dubai. DXB Driver is the only one that makes me feel like a guest, not a passenger. The S-Class was immaculate." },
              { name: "Marcus Chen", city: "Singapore", rating: 5, review: "Used for a week of business meetings across Dubai and Abu Dhabi. Always on time, always professional. Worth every dirham." },
            ].map((testimonial, i) => (
              <motion.div
                key={i}
                variants={{ hidden: { opacity: 0, y: 14 }, visible: { opacity: 1, y: 0, transition: { duration: 0.6 } } }}
                className={i < 2 ? "md:border-r border-white/5" : ""}
              >
                <TestimonialCard {...testimonial} />
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* FAQ PREVIEW */}
      <section className="py-28 md:py-36" data-testid="section-faq-preview">
        <div className="container mx-auto px-6 md:px-12 max-w-3xl">
          <motion.div
            initial={{ opacity: 0, y: 14 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.06 }}
            transition={{ duration: 0.45 }}
          >
            <SectionTitle subtitle={t.home.faqSection.subtitle} title={t.home.faqSection.title} centered />
          </motion.div>

          <Accordion type="single" collapsible className="space-y-0">
            {faqPreview.map((faq, i) => (
              <AccordionItem
                key={i}
                value={`faq-${i}`}
                className="border-b border-white/5 py-2"
                data-testid={`faq-item-${i}`}
              >
                <AccordionTrigger className="text-foreground text-left font-serif text-lg hover:text-primary hover:no-underline transition-colors py-5">
                  {faq.q}
                </AccordionTrigger>
                <AccordionContent className="text-muted-foreground text-sm leading-relaxed pb-6">
                  {faq.a}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>

          <motion.div
            className="text-center mt-12"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true, amount: 0.06 }}
            transition={{ duration: 0.5 }}
          >
            <Link href="/faq" data-testid="link-view-all-faq">
              <CTAButton variant="outline">{viewAllFaq}</CTAButton>
            </Link>
          </motion.div>
        </div>
      </section>

      {/* FINAL CTA */}
      <section
        className="py-36 md:py-48 border-t border-white/5 relative overflow-hidden"
        data-testid="section-final-cta"
        style={{ background: "radial-gradient(ellipse at center, #111827 0%, #0A0A0A 70%)" }}
      >
        <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-primary/40 to-transparent" />
        <div className="container mx-auto px-6 md:px-12 text-center relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 14 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.06 }}
            transition={{ duration: 0.5 }}
          >
            <div className="w-16 h-px bg-primary mx-auto mb-8" />
            <span className="block text-primary text-xs uppercase tracking-[0.4em] mb-8">{beginJourney}</span>
            <h2 className="font-serif text-4xl sm:text-5xl md:text-6xl lg:text-7xl text-foreground mb-8 leading-tight">
              {finalTitle1}
              <br />
              <span className="text-primary">{finalTitle2}</span>
            </h2>
            <p className="text-muted-foreground max-w-xl mx-auto mb-12 text-lg leading-relaxed">{finalSub}</p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a href={waLink} target="_blank" rel="noreferrer" data-testid="link-cta-whatsapp">
                <CTAButton variant="filled" className="px-12 py-4 text-sm w-full sm:w-auto">
                  {t.mobileCTA.bookWhatsapp}
                </CTAButton>
              </a>
              <Link href="/contact" data-testid="link-cta-contact">
                <CTAButton variant="outline" className="px-12 py-4 text-sm w-full sm:w-auto">
                  {t.mobileCTA.getQuote}
                </CTAButton>
              </Link>
            </div>
            <p className="text-muted-foreground/40 text-xs mt-8 uppercase tracking-[0.3em]">{availableNote}</p>
          </motion.div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
