import { motion } from "framer-motion";
import { Check, Car } from "lucide-react";
import { SEOHead } from "@/components/SEOHead";
import { Link } from "wouter";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { SectionTitle } from "@/components/SectionTitle";
import { CTAButton } from "@/components/CTAButton";
import { useLanguage } from "@/context/LanguageContext";

const baseAirport = ["AED 100", "AED 180", "AED 350"];
const baseCity = ["AED 80", "AED 150", "AED 280"];
const featured = [false, true, false];

export default function Pricing() {
  const { t, waLink } = useLanguage();

  return (
    <div className="bg-background text-foreground overflow-x-hidden">
      <SEOHead
        title="Dubai Chauffeur Pricing | Fixed Rates, No Surge | DXB Driver"
        description="Transparent fixed pricing for Dubai chauffeur services. Economy, Business & Premium classes. No surge pricing, ever. View rates and book your ride today."
        canonical="https://dxbdriver.com/pricing"
      />
      <Navbar />

      {/* HERO */}
      <section className="pt-40 pb-24 md:pt-48 md:pb-32 border-b border-white/5" data-testid="section-pricing-hero">
        <div className="container mx-auto px-6 md:px-12">
          <motion.span
            className="block text-primary text-xs uppercase tracking-[0.4em] mb-6"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.4 }}
          >
            {t.pricing.pageBadge}
          </motion.span>
          <motion.h1
            className="font-serif text-3xl sm:text-4xl md:text-5xl lg:text-7xl text-foreground leading-tight max-w-3xl"
            initial={{ opacity: 0, y: 14 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.1 }}
          >
            {t.pricing.hero.title}
            <br />
            <span className="text-primary">{t.pricing.hero.titleGold}</span>
          </motion.h1>
          <motion.p
            className="text-muted-foreground text-lg mt-8 max-w-xl leading-relaxed"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.2 }}
          >
            {t.pricing.hero.subtitle}
          </motion.p>
        </div>
      </section>

      {/* PRICING TIERS */}
      <section className="py-28 md:py-36" data-testid="section-pricing-tiers">
        <div className="container mx-auto px-6 md:px-12">
          <motion.div
            initial={{ opacity: 0, y: 14 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.06 }}
            transition={{ duration: 0.45 }}
          >
            <SectionTitle subtitle={t.pricing.tiers.subtitle} title={t.pricing.tiers.title} centered />
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {t.pricing.tierData.map((plan, i) => (
              <motion.div
                key={i}
                className={`relative border flex flex-col ${featured[i] ? "border-primary/40 bg-card" : "border-white/10"}`}
                initial={{ opacity: 0, y: 14 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.06 }}
                transition={{ duration: 0.6, delay: i * 0.1 }}
                data-testid={`card-pricing-${plan.tier.toLowerCase()}`}
              >
                {featured[i] && (
                  <>
                    <div className="absolute top-0 left-0 right-0 h-px bg-primary" />
                    <span className="absolute -top-3 left-1/2 -translate-x-1/2 bg-primary text-primary-foreground text-[10px] uppercase tracking-widest px-3 py-1 font-semibold">
                      {t.pricing.mostPopular}
                    </span>
                  </>
                )}

                <div className="p-8 md:p-10 flex-grow">
                  <div className="flex items-center gap-3 mb-8">
                    <Car className="w-5 h-5 text-primary/70" />
                    <span className="text-xs uppercase tracking-[0.3em] text-muted-foreground">{plan.tier}</span>
                  </div>

                  <h3 className="font-serif text-3xl text-foreground mb-2">{plan.tier} {t.pricing.labels.class}</h3>
                  <p className="text-muted-foreground text-sm mb-2">{plan.tagline}</p>
                  <p className="text-muted-foreground text-xs mb-8 uppercase tracking-wider">{plan.vehicle}</p>

                  <div className="border-t border-b border-white/5 py-6 mb-8 grid grid-cols-2 gap-4">
                    <div>
                      <p className="text-muted-foreground text-xs uppercase tracking-wider mb-1">{t.pricing.labels.airport}</p>
                      <p className="font-serif text-2xl text-foreground">{baseAirport[i]}</p>
                      <p className="text-muted-foreground text-xs mt-1">{t.pricing.labels.baseRate}</p>
                    </div>
                    <div>
                      <p className="text-muted-foreground text-xs uppercase tracking-wider mb-1">{t.pricing.labels.cityRide}</p>
                      <p className="font-serif text-2xl text-foreground">{baseCity[i]}</p>
                      <p className="text-muted-foreground text-xs mt-1">{t.pricing.labels.baseRate}</p>
                    </div>
                  </div>

                  <ul className="space-y-3 mb-8">
                    {plan.features.map((feature, fi) => (
                      <li key={fi} className="flex items-start gap-3 text-sm text-muted-foreground">
                        <Check className="w-4 h-4 text-primary mt-0.5 flex-shrink-0" />
                        {feature}
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="p-8 md:px-10 md:pb-10 pt-0">
                  <a href={waLink} target="_blank" rel="noreferrer" data-testid={`link-book-${plan.tier.toLowerCase()}`}>
                    <CTAButton variant={featured[i] ? "filled" : "outline"} className="w-full justify-center text-center">
                      {plan.cta}
                    </CTAButton>
                  </a>
                </div>
              </motion.div>
            ))}
          </div>

          <motion.p
            className="text-center text-muted-foreground text-xs mt-8 tracking-wide"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true, amount: 0.06 }}
            transition={{ duration: 0.5, delay: 0.4 }}
          >
            {t.pricing.rateNote}
          </motion.p>
        </div>
      </section>

      {/* INTER-EMIRATE TABLE */}
      <section className="py-28 md:py-36 bg-card border-y border-white/5" data-testid="section-pricing-routes">
        <div className="container mx-auto px-6 md:px-12">
          <motion.div
            initial={{ opacity: 0, y: 14 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.06 }}
            transition={{ duration: 0.45 }}
          >
            <SectionTitle subtitle={t.pricing.routes.subtitle} title={t.pricing.routes.title} />
          </motion.div>

          <div className="overflow-x-auto -mx-6 md:mx-0 px-6 md:px-0">
          <div className="border border-white/10 overflow-hidden min-w-[480px]">
            <motion.div
              className="grid grid-cols-4 border-b border-white/10 bg-background/40"
              initial={{ opacity: 0, y: -8 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.06 }}
              transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
            >
              {t.pricing.routeHeaders.map((h) => (
                <div key={h} className="p-4 md:p-6">
                  <span className="text-xs uppercase tracking-widest text-muted-foreground font-semibold">{h}</span>
                </div>
              ))}
            </motion.div>
            {[
              { route: "Dubai → Abu Dhabi", eco: "AED 250", bus: "AED 400", pre: "AED 700" },
              { route: "Dubai → Sharjah", eco: "AED 120", bus: "AED 200", pre: "AED 350" },
              { route: "Dubai → Ajman", eco: "AED 150", bus: "AED 250", pre: "AED 420" },
              { route: "Dubai → RAK", eco: "AED 320", bus: "AED 520", pre: "AED 900" },
              { route: "Dubai → Fujairah", eco: "AED 280", bus: "AED 450", pre: "AED 800" },
            ].map((row, i) => (
              <motion.div
                key={i}
                className="grid grid-cols-4 border-b border-white/5 last:border-b-0 hover:bg-background/20 transition-colors"
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true, amount: 0.06 }}
                transition={{ duration: 0.4, delay: i * 0.07 }}
                data-testid={`row-route-${i}`}
              >
                <div className="p-4 md:p-6"><span className="text-sm text-foreground font-serif">{row.route}</span></div>
                <div className="p-4 md:p-6"><span className="text-sm text-muted-foreground">{row.eco}</span></div>
                <div className="p-4 md:p-6"><span className="text-sm text-primary">{row.bus}</span></div>
                <div className="p-4 md:p-6"><span className="text-sm text-muted-foreground">{row.pre}</span></div>
              </motion.div>
            ))}
          </div>
          </div>
          <p className="text-muted-foreground text-xs mt-6 tracking-wide">{t.pricing.routeNote}</p>
        </div>
      </section>

      {/* CTA */}
      <section className="py-32 md:py-40" data-testid="section-pricing-cta">
        <div className="container mx-auto px-6 md:px-12 text-center">
          <motion.div
            initial={{ opacity: 0, y: 14 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.06 }}
            transition={{ duration: 0.5 }}
          >
            <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl text-foreground mb-8">
              {t.pricing.cta.title}
              <br />
              <span className="text-primary">{t.pricing.cta.titleGold}</span>
            </h2>
            <p className="text-muted-foreground max-w-lg mx-auto mb-10 leading-relaxed">
              {t.pricing.cta.body}
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a href={waLink} target="_blank" rel="noreferrer" data-testid="link-pricing-whatsapp">
                <CTAButton variant="filled" className="px-12 py-4">{t.pricing.cta.whatsapp}</CTAButton>
              </a>
              <Link href="/contact" data-testid="link-pricing-contact">
                <CTAButton variant="outline" className="px-12 py-4">{t.pricing.cta.quote}</CTAButton>
              </Link>
            </div>
          </motion.div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
