import { motion } from "framer-motion";
import { Link } from "wouter";
import {
  UserCheck,
  Car,
  CalendarClock,
  PlaneTakeoff,
  Briefcase,
  Plane,
  Globe,
  Users,
  CheckCircle2,
  DollarSign,
  Languages,
  MapPin,
} from "lucide-react";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { SectionTitle } from "@/components/SectionTitle";
import { CTAButton } from "@/components/CTAButton";
import { useLanguage } from "@/context/LanguageContext";

const fadeUp = {
  hidden: { opacity: 0, y: 40 },
  visible: (i = 0) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.7, delay: i * 0.1, ease: [0.22, 1, 0.36, 1] as [number, number, number, number] },
  }),
};

const diffIcons = [
  <UserCheck className="w-6 h-6" />,
  <DollarSign className="w-6 h-6" />,
  <CalendarClock className="w-6 h-6" />,
  <PlaneTakeoff className="w-6 h-6" />,
  <Languages className="w-6 h-6" />,
  <MapPin className="w-6 h-6" />,
];

const audienceIcons = [
  <Briefcase className="w-8 h-8" />,
  <Plane className="w-8 h-8" />,
  <Globe className="w-8 h-8" />,
  <Users className="w-8 h-8" />,
];

export default function WhyChooseUs() {
  const { t, waLink } = useLanguage();

  return (
    <div className="bg-background text-foreground overflow-x-hidden">
      <Navbar />

      {/* HERO */}
      <section className="pt-40 pb-28 md:pt-48 md:pb-36 border-b border-white/5" data-testid="section-why-hero">
        <div className="container mx-auto px-6 md:px-12">
          <motion.span
            className="block text-primary text-xs uppercase tracking-[0.4em] mb-6"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.6 }}
          >
            {t.why.pageBadge}
          </motion.span>
          <motion.h1
            className="font-serif text-3xl sm:text-4xl md:text-5xl lg:text-7xl text-foreground leading-tight max-w-3xl"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.1 }}
          >
            {t.why.hero.title}
            <br />
            <span className="text-primary">{t.why.hero.titleGold}</span>
          </motion.h1>
          <motion.p
            className="text-muted-foreground text-lg mt-8 max-w-xl leading-relaxed"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.2 }}
          >
            {t.why.hero.subtitle}
          </motion.p>
          <motion.div
            className="flex flex-col sm:flex-row gap-4 mt-10"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.35 }}
          >
            <a href={waLink} target="_blank" rel="noreferrer" data-testid="link-why-whatsapp" className="w-full sm:w-auto">
              <CTAButton variant="filled" className="px-10 py-4 w-full sm:w-auto justify-center">{t.why.hero.cta1}</CTAButton>
            </a>
            <a href={waLink} target="_blank" rel="noreferrer" className="w-full sm:w-auto">
              <CTAButton variant="outline" className="px-10 py-4 w-full sm:w-auto justify-center">{t.why.hero.cta2}</CTAButton>
            </a>
          </motion.div>
        </div>
      </section>

      {/* WHY CLIENTS CHOOSE DXB DRIVER */}
      <section className="py-28 md:py-36 border-b border-white/5" data-testid="section-why-clients">
        <div className="container mx-auto px-6 md:px-12">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-10 md:gap-20 items-start max-w-5xl">
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={fadeUp}
            >
              <SectionTitle subtitle={t.why.whyClients.subtitle} title={t.why.whyClients.title} />
              <div className="space-y-6 text-muted-foreground leading-relaxed mt-6">
                <p>{t.why.whyClients.body1}</p>
                <p className="text-foreground font-medium">{t.why.whyClients.body2}</p>
                <p>{t.why.whyClients.body3}</p>
              </div>
            </motion.div>

            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={{ hidden: { opacity: 0, x: 30 }, visible: { opacity: 1, x: 0, transition: { duration: 0.7 } } }}
              className="border border-white/8 bg-card p-8 md:p-10"
            >
              <ul className="space-y-5">
                {t.why.whyClients.bullets.map((b, i) => (
                  <li key={i} className="flex items-start gap-4 text-muted-foreground">
                    <CheckCircle2 className="w-4 h-4 text-primary mt-0.5 flex-shrink-0" />
                    <span className="text-sm leading-relaxed">{b}</span>
                  </li>
                ))}
              </ul>
              <p className="text-muted-foreground text-sm leading-relaxed mt-6 pt-6 border-t border-white/5 font-serif italic">
                {t.why.whyClients.closing}
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* BUILT AROUND RELIABILITY */}
      <section className="py-28 md:py-36 bg-card border-b border-white/5" data-testid="section-why-reliability">
        <div className="container mx-auto px-6 md:px-12 max-w-3xl">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
          >
            <SectionTitle subtitle={t.why.reliability.subtitle} title={t.why.reliability.title} />
          </motion.div>
          <div className="space-y-6 text-muted-foreground leading-relaxed">
            {t.why.reliability.body.map((p, i) => (
              <p key={i}>{p}</p>
            ))}
          </div>
          <motion.div
            className="mt-12 border-l-2 border-primary pl-6 py-2"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <p className="font-serif text-xl text-foreground leading-relaxed italic">
              {t.why.reliability.quote}
            </p>
          </motion.div>
        </div>
      </section>

      {/* WHO WE SERVE */}
      <section className="py-28 md:py-36 border-b border-white/5" data-testid="section-why-audience">
        <div className="container mx-auto px-6 md:px-12">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
          >
            <SectionTitle subtitle={t.why.audience.subtitle} title={t.why.audience.title} centered />
          </motion.div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-0 border border-white/5">
            {(() => {
              const audienceBorders = [
                "border-b border-white/5 sm:border-r lg:border-b-0",
                "border-b border-white/5 lg:border-r lg:border-b-0",
                "border-b border-white/5 sm:border-b-0 sm:border-r lg:border-b-0",
                "",
              ];
              return t.why.audience.items.map((item, i) => (
              <motion.div
                key={i}
                className={`p-8 md:p-10 ${audienceBorders[i]}`}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: i * 0.1 }}
                data-testid={`card-audience-${i}`}
              >
                <div className="text-primary mb-6">{audienceIcons[i]}</div>
                <h3 className="font-serif text-xl text-foreground mb-3">{item.title}</h3>
                <p className="text-muted-foreground text-sm leading-relaxed">{item.body}</p>
              </motion.div>
            ));
            })()}
          </div>
        </div>
      </section>

      {/* DIFFERENTIATORS */}
      <section className="py-28 md:py-36 bg-card border-b border-white/5" data-testid="section-why-differentiators">
        <div className="container mx-auto px-6 md:px-12">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
          >
            <SectionTitle subtitle={t.why.differentiators.subtitle} title={t.why.differentiators.title} centered />
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-0 border border-white/5">
            {(() => {
              const diffBorders = [
                "border-b border-white/5 md:border-r",
                "border-b border-white/5 lg:border-r",
                "border-b border-white/5 md:border-r",
                "border-b border-white/5 md:border-r lg:border-r lg:border-b-0",
                "border-b border-white/5 md:border-b-0 md:border-r lg:border-r lg:border-b-0",
                "md:border-b-0 lg:border-b-0",
              ];
              return t.why.differentiators.items.map((item, i) => (
              <motion.div
                key={i}
                className={`p-8 md:p-10 ${diffBorders[i]}`}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: (i % 3) * 0.1 }}
                data-testid={`card-diff-${i}`}
              >
                <div className="text-primary mb-5">{diffIcons[i]}</div>
                <h3 className="font-serif text-xl text-foreground mb-3">{item.title}</h3>
                <p className="text-muted-foreground text-sm leading-relaxed">{item.body}</p>
              </motion.div>
            ));
            })()}
          </div>
        </div>
      </section>

      {/* PROCESS */}
      <section className="py-28 md:py-36 border-b border-white/5" data-testid="section-why-process">
        <div className="container mx-auto px-6 md:px-12">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
          >
            <SectionTitle subtitle={t.why.process.subtitle} title={t.why.process.title} centered />
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-12 md:gap-0 relative">
            <div className="hidden md:block absolute top-[5rem] left-[16.67%] right-[16.67%] h-px bg-gradient-to-r from-transparent via-primary/35 to-transparent" />
            {t.why.process.steps.map((step, i) => (
              <motion.div
                key={i}
                className="text-center px-8"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: i * 0.15 }}
                data-testid={`step-why-${i + 1}`}
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

      {/* MORE THAN JUST ANOTHER RIDE APP */}
      <section className="py-28 md:py-36 border-b border-white/5" data-testid="section-why-vs-apps">
        <div className="container mx-auto px-6 md:px-12">
          <motion.div
            className="text-center mb-16"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
          >
            <span className="block text-primary text-xs uppercase tracking-[0.4em] mb-5">{t.why.vsApps.subtitle}</span>
            <h2 className="font-serif text-4xl md:text-5xl text-foreground leading-tight max-w-2xl mx-auto">
              {t.why.vsApps.title}
              <br />
              <span className="text-primary">{t.why.vsApps.titleGold}</span>
            </h2>
            <p className="text-muted-foreground text-lg leading-relaxed max-w-2xl mx-auto mt-6">
              {t.why.vsApps.body}
            </p>
          </motion.div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 max-w-5xl mx-auto">
            <motion.div
              className="border border-white/8 bg-card p-8 md:p-10"
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7 }}
            >
              <h3 className="font-serif text-xl text-muted-foreground/70 mb-8 pb-6 border-b border-white/5">
                {t.why.vsApps.appTitle}
              </h3>
              <ul className="space-y-4">
                {t.why.vsApps.appItems.map((item, i) => (
                  <li key={i} className="flex items-start gap-3 text-sm text-muted-foreground/60">
                    <span className="text-white/15 mt-0.5 shrink-0 text-base leading-none">—</span>
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </motion.div>

            <motion.div
              className="border border-primary/25 bg-card p-8 md:p-10 relative overflow-hidden"
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7, delay: 0.1 }}
            >
              <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-primary/50 to-transparent" />
              <h3 className="font-serif text-xl text-primary mb-8 pb-6 border-b border-primary/10">
                {t.why.vsApps.dxbTitle}
              </h3>
              <ul className="space-y-4">
                {t.why.vsApps.dxbItems.map((item, i) => (
                  <li key={i} className="flex items-start gap-3 text-sm">
                    <CheckCircle2 className="w-4 h-4 text-primary mt-0.5 shrink-0" />
                    <span className="text-foreground/80">{item}</span>
                  </li>
                ))}
              </ul>
            </motion.div>
          </div>

          <motion.p
            className="text-center text-muted-foreground/70 text-sm mt-10 font-serif italic max-w-2xl mx-auto"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.3 }}
          >
            {t.why.vsApps.footnote}
          </motion.p>
        </div>
      </section>

      {/* PHILOSOPHY */}
      <section className="py-28 md:py-36 border-b border-white/5 bg-card" data-testid="section-why-philosophy">
        <div className="container mx-auto px-6 md:px-12 max-w-3xl text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <span className="block text-primary text-xs uppercase tracking-[0.4em] mb-8">{t.why.philosophy.subtitle}</span>
            <div className="w-px h-12 bg-gradient-to-b from-transparent via-primary/50 to-transparent mx-auto mb-10" />
            <h2 className="font-serif text-4xl md:text-5xl text-foreground leading-tight mb-8">
              {t.why.philosophy.title}
            </h2>
            <div className="space-y-6 text-muted-foreground leading-relaxed text-lg">
              {t.why.philosophy.body.map((p, i) => (
                <p key={i} className={i === 1 ? "whitespace-pre-line" : ""}>{p}</p>
              ))}
            </div>
            <p className="font-serif text-xl text-primary mt-10 italic">{t.why.philosophy.quote}</p>
            <div className="w-px h-12 bg-gradient-to-b from-primary/50 via-primary/20 to-transparent mx-auto mt-10" />
          </motion.div>
        </div>
      </section>

      {/* FINAL CTA */}
      <section className="py-32 md:py-40" data-testid="section-why-cta">
        <div className="container mx-auto px-6 md:px-12 text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <span className="block text-primary text-xs uppercase tracking-[0.4em] mb-6">{t.why.finalCTA.subtitle}</span>
            <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl text-foreground mb-6 leading-tight">
              {t.why.finalCTA.title}
            </h2>
            <p className="text-muted-foreground max-w-lg mx-auto mb-10 leading-relaxed">
              {t.why.finalCTA.body}
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link href="/contact" data-testid="link-why-book">
                <CTAButton variant="filled" className="px-12 py-4">{t.why.finalCTA.cta1}</CTAButton>
              </Link>
              <a href={waLink} target="_blank" rel="noreferrer" data-testid="link-why-whatsapp-cta">
                <CTAButton variant="outline" className="px-12 py-4">{t.why.finalCTA.cta2}</CTAButton>
              </a>
            </div>
          </motion.div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
