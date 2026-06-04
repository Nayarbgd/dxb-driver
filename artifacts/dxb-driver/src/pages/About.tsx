import { motion } from "framer-motion";
import { SEOHead } from "@/components/SEOHead";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { SectionTitle } from "@/components/SectionTitle";
import { CTAButton } from "@/components/CTAButton";
import { Shield, Clock, Star, MapPin } from "lucide-react";
import { Link } from "wouter";
import { useLanguage } from "@/context/LanguageContext";

const valueIcons = [
  <Clock className="w-6 h-6" />,
  <Shield className="w-6 h-6" />,
  <Star className="w-6 h-6" />,
  <MapPin className="w-6 h-6" />,
];

export default function About() {
  const { t, waLink } = useLanguage();

  return (
    <div className="bg-background text-foreground overflow-x-hidden">
      <SEOHead
        title="About DXB Driver | Luxury Chauffeur Service Dubai"
        description="Learn about DXB Driver – Dubai's premier private chauffeur. RTA licensed fleet, 5,000+ journeys, 4.97 average rating. Driven by excellence, every ride."
        canonical="https://dxbdriver.com/about"
      />
      <Navbar />

      {/* HERO */}
      <section className="pt-40 pb-24 md:pt-48 md:pb-32 border-b border-white/5" data-testid="section-about-hero">
        <div className="container mx-auto px-6 md:px-12 max-w-4xl">
          <motion.span
            className="block text-primary text-xs uppercase tracking-[0.4em] mb-6"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.4 }}
          >
            {t.about.pageBadge}
          </motion.span>
          <motion.h1
            className="font-serif text-3xl sm:text-4xl md:text-5xl lg:text-7xl text-foreground leading-tight"
            initial={{ opacity: 0, y: 14 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.1 }}
          >
            {t.about.hero.title[0]}
            <br />
            {t.about.hero.title[1]}{" "}
            <span className="text-primary">{t.about.hero.title[2]}</span>
            <br />
            {t.about.hero.title[3]}
            <br />
            {t.about.hero.title[4]}
          </motion.h1>
        </div>
      </section>

      {/* STORY */}
      <section className="py-28 md:py-36 border-b border-white/5" data-testid="section-about-story">
        <div className="container mx-auto px-6 md:px-12">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-20 items-start">
            <motion.div
              initial={{ opacity: 0, x: -18 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, amount: 0.06 }}
              transition={{ duration: 0.5 }}
            >
              <SectionTitle subtitle={t.about.story.subtitle} title={t.about.story.title} />
              <div className="space-y-6 text-muted-foreground leading-relaxed">
                {t.about.story.paragraphs.map((p, i) => (
                  <p key={i}>{p}</p>
                ))}
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 18 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, amount: 0.06 }}
              transition={{ duration: 0.5 }}
              className="space-y-0 border border-white/10"
            >
              {t.about.stats.map((stat, i) => (
                <div
                  key={i}
                  className={`p-8 md:p-10 ${i < 3 ? "border-b border-white/10" : ""} bg-card`}
                  data-testid={`stat-about-${i}`}
                >
                  <p className="font-serif text-5xl text-primary mb-2">{stat.number}</p>
                  <p className="text-muted-foreground text-sm uppercase tracking-widest">{stat.label}</p>
                </div>
              ))}
            </motion.div>
          </div>
        </div>
      </section>

      {/* CINEMATIC INTERLUDE */}
      <section
        className="relative py-32 overflow-hidden"
        role="img"
        aria-label="Luxury sedan at night — the DXB Driver standard of excellence"
        style={{
          backgroundImage: "url('https://images.unsplash.com/photo-1555215695-3004980ad54e?auto=format&fit=crop&w=1920&q=80')",
          backgroundSize: "cover",
          backgroundPosition: "center 60%",
          backgroundAttachment: "fixed",
        }}
      >
        <div className="absolute inset-0 bg-background/88" />
        <div className="relative z-10 container mx-auto px-6 md:px-12 text-center max-w-3xl">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.06 }}
            transition={{ duration: 0.55 }}
          >
            <div className="w-px h-16 bg-gradient-to-b from-transparent via-primary to-transparent mx-auto mb-10" />
            <p className="font-serif text-3xl md:text-4xl text-foreground leading-relaxed italic">
              {t.about.quote}
            </p>
            <div className="w-px h-16 bg-gradient-to-b from-primary via-primary/20 to-transparent mx-auto mt-10" />
          </motion.div>
        </div>
      </section>

      {/* VALUES */}
      <section className="py-28 md:py-36 bg-card border-b border-white/5" data-testid="section-about-values">
        <div className="container mx-auto px-6 md:px-12">
          <motion.div
            initial={{ opacity: 0, y: 14 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.06 }}
            transition={{ duration: 0.45 }}
          >
            <SectionTitle subtitle={t.about.values.subtitle} title={t.about.values.title} centered />
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-0 border border-white/5">
            {t.about.values.items.map((value, i) => (
              <motion.div
                key={i}
                className={`p-8 md:p-12 ${i % 2 === 0 ? "md:border-r" : ""} ${i < 2 ? "border-b" : ""} border-white/5`}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.06 }}
                transition={{ duration: 0.6, delay: i * 0.1 }}
                data-testid={`card-value-${i}`}
              >
                <div className="text-primary mb-6">{valueIcons[i]}</div>
                <h3 className="font-serif text-2xl text-foreground mb-4">{value.title}</h3>
                <p className="text-muted-foreground leading-relaxed text-sm">{value.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CHAUFFEURS */}
      <section className="py-28 md:py-36 border-b border-white/5" data-testid="section-about-drivers">
        <div className="container mx-auto px-6 md:px-12 max-w-3xl">
          <motion.div
            initial={{ opacity: 0, y: 14 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.06 }}
            transition={{ duration: 0.45 }}
          >
            <SectionTitle subtitle={t.about.drivers.subtitle} title={t.about.drivers.title} />
          </motion.div>

          <div className="space-y-8 text-muted-foreground leading-relaxed">
            {t.about.drivers.paragraphs.map((p, i) => (
              <p key={i}>{p}</p>
            ))}
            <div className="border-l-2 border-primary pl-6 py-2 my-10">
              <p className="font-serif text-xl text-foreground leading-relaxed italic">
                {t.about.drivers.blockquote}
              </p>
              <p className="text-muted-foreground text-xs uppercase tracking-widest mt-4">
                {t.about.drivers.attribution}
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-32 md:py-40" data-testid="section-about-cta">
        <div className="container mx-auto px-6 md:px-12 text-center">
          <motion.div
            initial={{ opacity: 0, y: 14 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.06 }}
            transition={{ duration: 0.5 }}
          >
            <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl text-foreground mb-8">
              {t.about.cta.title}
              <br />
              <span className="text-primary">{t.about.cta.titleGold}</span>
            </h2>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a href={waLink} target="_blank" rel="noreferrer" data-testid="link-about-whatsapp">
                <CTAButton variant="filled" className="px-12 py-4">{t.about.cta.book}</CTAButton>
              </a>
              <Link href="/contact" data-testid="link-about-contact">
                <CTAButton variant="outline" className="px-12 py-4">{t.about.cta.contact}</CTAButton>
              </Link>
            </div>
          </motion.div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
