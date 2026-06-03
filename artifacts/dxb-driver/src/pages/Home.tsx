import { Link } from "wouter";
import { motion } from "framer-motion";
import { Plane, MapPin, Route, Clock, Shield, Star, Car } from "lucide-react";
import { SiWhatsapp } from "react-icons/si";
import { CTAButton } from "@/components/CTAButton";
import { SectionTitle } from "@/components/SectionTitle";
import { ServiceCard } from "@/components/ServiceCard";
import { TestimonialCard } from "@/components/TestimonialCard";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { FloatingWhatsApp } from "@/components/FloatingWhatsApp";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const fadeUp = {
  hidden: { opacity: 0, y: 40 },
  visible: (i = 0) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.7, delay: i * 0.12, ease: [0.22, 1, 0.36, 1] as [number, number, number, number] },
  }),
};

export default function Home() {
  return (
    <div className="bg-background text-foreground overflow-x-hidden">
      <Navbar />

      {/* HERO */}
      <section
        className="relative min-h-screen flex items-end pb-24 md:pb-32"
        data-testid="section-hero"
        style={{
          background: "linear-gradient(160deg, #0A0A0A 0%, #111827 60%, #0A0A0A 100%)",
        }}
      >
        {/* Cinematic grid lines */}
        <div
          className="absolute inset-0 opacity-[0.04]"
          style={{
            backgroundImage:
              "linear-gradient(to right, #C9A84C 1px, transparent 1px), linear-gradient(to bottom, #C9A84C 1px, transparent 1px)",
            backgroundSize: "80px 80px",
          }}
        />

        {/* Gold accent line */}
        <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-primary/60 to-transparent" />

        {/* Hero content */}
        <div className="container mx-auto px-6 md:px-12 relative z-10">
          <div className="max-w-4xl">
            <motion.div
              initial="hidden"
              animate="visible"
              custom={0}
              variants={fadeUp}
            >
              <span className="inline-block text-primary text-xs uppercase tracking-[0.4em] mb-8">
                <span className="w-6 h-px bg-primary inline-block mr-3 align-middle" />
                Dubai's Premier Chauffeur Service
              </span>
            </motion.div>

            <h1 className="font-serif text-6xl md:text-7xl lg:text-8xl xl:text-9xl leading-[0.9] text-foreground mb-8">
              <div className="overflow-hidden">
                <motion.div
                  initial={{ y: "100%" }}
                  animate={{ y: 0 }}
                  transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] as [number, number, number, number], delay: 0.1 }}
                >
                  Arrive
                </motion.div>
              </div>
              <div className="overflow-hidden">
                <motion.div
                  initial={{ y: "100%" }}
                  animate={{ y: 0 }}
                  transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] as [number, number, number, number], delay: 0.15 }}
                >
                  <span className="text-primary">Without</span>
                </motion.div>
              </div>
              <div className="overflow-hidden">
                <motion.div
                  initial={{ y: "100%" }}
                  animate={{ y: 0 }}
                  transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] as [number, number, number, number], delay: 0.2 }}
                >
                  Compromise.
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
              Private chauffeur service in Dubai, tailored to those who expect more from every journey. Airport transfers, city rides, and inter-emirate travel — on your schedule, in silence and style.
            </motion.p>

            <motion.div
              className="flex items-center gap-3 my-8"
              initial="hidden"
              animate="visible"
              custom={2}
              variants={fadeUp}
            >
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
              <a
                href="https://wa.me/971501234567"
                target="_blank"
                rel="noreferrer"
                data-testid="link-hero-whatsapp"
                className="w-full sm:w-auto"
              >
                <CTAButton variant="filled" className="w-full sm:w-auto px-10 py-4 text-sm">
                  Book via WhatsApp
                </CTAButton>
              </a>
              <span className="text-muted-foreground/40 text-xs italic font-serif mx-2">or</span>
              <Link href="/contact" data-testid="link-hero-quote" className="w-full sm:w-auto">
                <CTAButton variant="outline" className="w-full sm:w-auto px-10 py-4 text-sm">
                  Get a Quote
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
              RTA Licensed · 24/7 Available · No upfront payment
            </motion.p>
          </div>
        </div>

        {/* Bottom gradient fade */}
        <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-background to-transparent" />
      </section>

      {/* TRUST BAR */}
      <section
        className="border-y border-white/5 bg-card py-6"
        data-testid="section-trust"
      >
        <div className="container mx-auto px-6 md:px-12">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {[
              { icon: <Clock className="w-4 h-4" />, label: "24/7 Available" },
              { icon: <Shield className="w-4 h-4" />, label: "RTA Licensed" },
              { icon: <Star className="w-4 h-4" />, label: "Professional Drivers" },
              { icon: <SiWhatsapp className="w-4 h-4" />, label: "Fast WhatsApp Response" },
            ].map((item, i) => (
              <motion.div
                key={i}
                className={`flex items-center gap-3 ${i < 3 ? "md:border-r border-white/5" : ""}`}
                data-testid={`badge-trust-${i}`}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.1 * (i + 1), duration: 0.5 }}
              >
                <span className="text-primary flex-shrink-0">{item.icon}</span>
                <span className="text-xs uppercase tracking-widest text-muted-foreground font-semibold">
                  {item.label}
                </span>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* SERVICES OVERVIEW */}
      <section className="py-28 md:py-36" data-testid="section-services">
        <div className="container mx-auto px-6 md:px-12">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
          >
            <SectionTitle
              subtitle="What We Offer"
              title="Services Crafted for Every Journey"
              centered
            />
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-0 border border-white/5">
            {[
              {
                icon: <Plane className="w-8 h-8" />,
                title: "Airport Transfers",
                description:
                  "Flight tracking, meet-and-greet at arrivals, and seamless transfers to any Dubai destination. No waiting, no surprises.",
                href: "/services",
              },
              {
                icon: <MapPin className="w-8 h-8" />,
                title: "City Rides",
                description:
                  "Business meetings, hotel to hotel, evening events. Your private car, always where you need it.",
                href: "/services",
              },
              {
                icon: <Route className="w-8 h-8" />,
                title: "Inter-Emirate",
                description:
                  "Dubai to Abu Dhabi, Sharjah, Ras Al Khaimah. Long-distance transfers executed with the same precision as local rides.",
                href: "/services",
              },
            ].map((service, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: i * 0.1 }}
                className={i < 2 ? "md:border-r border-white/5" : ""}
              >
                <ServiceCard
                  icon={service.icon}
                  title={service.title}
                  description={service.description}
                  href={service.href}
                />
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* HOW IT WORKS */}
      <section className="py-28 md:py-36 bg-card border-y border-white/5" data-testid="section-how-it-works">
        <div className="container mx-auto px-6 md:px-12">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
          >
            <SectionTitle subtitle="The Process" title="Simple. Precise. Effortless." centered />
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-12 md:gap-0 relative">
            <div className="hidden md:block absolute top-8 left-1/4 right-1/4 h-px bg-gradient-to-r from-primary/20 via-primary/50 to-primary/20" />
            {[
              {
                step: "01",
                title: "Send a Message",
                description: "Reach us via WhatsApp or our booking form with your journey details.",
              },
              {
                step: "02",
                title: "Confirm & Relax",
                description: "We'll confirm your booking instantly with driver details and pricing.",
              },
              {
                step: "03",
                title: "Arrive in Style",
                description: "Your chauffeur arrives on time. You arrive unforgettable.",
              },
            ].map((step, i) => (
              <motion.div
                key={i}
                className="text-center px-8 relative"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: i * 0.15 }}
                data-testid={`step-how-${i + 1}`}
              >
                <div className="inline-block mb-8">
                  <span className="font-serif text-7xl text-primary/20 leading-none">{step.step}</span>
                </div>
                <h3 className="font-serif text-2xl mb-4 text-foreground">{step.title}</h3>
                <p className="text-muted-foreground text-sm leading-relaxed">{step.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* FLEET PREVIEW */}
      <section className="py-28 md:py-36" data-testid="section-fleet">
        <div className="container mx-auto px-6 md:px-12">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
          >
            <SectionTitle subtitle="The Fleet" title="Every Vehicle. Every Standard." />
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                tier: "Economy",
                vehicle: "Toyota Camry or similar",
                features: ["Comfortable seating", "Air-conditioned", "Professional driver", "Fixed pricing"],
                color: "border-white/10",
                price: "AED 80"
              },
              {
                tier: "Business",
                vehicle: "Mercedes E-Class or similar",
                features: ["Premium leather interior", "Extended legroom", "Complimentary water", "Priority booking"],
                color: "border-primary/40",
                featured: true,
                price: "AED 150"
              },
              {
                tier: "Premium",
                vehicle: "Mercedes S-Class or similar",
                features: ["Luxury interior", "Privacy glass", "Concierge assistance", "24h dedicated support"],
                color: "border-white/10",
                price: "AED 280"
              },
            ].map((fleet, i) => (
              <motion.div
                key={i}
                className={`border ${fleet.color} p-8 md:p-10 relative transition-colors duration-300 ${fleet.featured ? "bg-card" : "hover:border-primary/50"}`}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                whileHover={{ y: -4 }}
                transition={{ duration: 0.6, delay: i * 0.1 }}
                data-testid={`card-fleet-${fleet.tier.toLowerCase()}`}
              >
                {fleet.featured && (
                  <div className="absolute -top-px left-0 right-0 h-px bg-primary" />
                )}
                {fleet.featured && (
                  <span className="absolute -top-3 left-1/2 -translate-x-1/2 bg-primary text-primary-foreground text-[10px] uppercase tracking-widest px-3 py-1 font-semibold">
                    Most Popular
                  </span>
                )}
                <div className="flex items-center justify-between mb-8">
                  <div className="flex items-center gap-4">
                    <Car className="w-6 h-6 text-primary opacity-70" />
                    <span className="text-xs uppercase tracking-[0.3em] text-muted-foreground font-semibold">
                      {fleet.tier}
                    </span>
                  </div>
                </div>
                <h3 className="font-serif text-2xl mb-1 text-foreground">{fleet.tier} Class</h3>
                <p className="text-muted-foreground text-sm mb-2">{fleet.vehicle}</p>
                <p className="text-primary text-xs uppercase tracking-wider mb-8">from {fleet.price} / trip</p>
                <ul className="space-y-3 mb-8">
                  {fleet.features.map((f) => (
                    <li key={f} className="flex items-center gap-3 text-sm text-muted-foreground">
                      <span className="w-1 h-1 bg-primary rounded-full flex-shrink-0" />
                      {f}
                    </li>
                  ))}
                </ul>
                <Link href="/pricing" data-testid={`link-fleet-pricing-${fleet.tier.toLowerCase()}`}>
                  <CTAButton variant={fleet.featured ? "filled" : "outline"} className="w-full justify-center text-center">
                    View Pricing
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
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
          >
            <SectionTitle subtitle="Client Experiences" title="What Our Guests Say" centered />
          </motion.div>

          <motion.div 
            className="flex items-center gap-3 mb-12 justify-center"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
          >
            <div className="flex items-center gap-1">
              {[1, 2, 3, 4, 5].map((_, i) => (
                <Star key={i} className="w-4 h-4 fill-primary text-primary" />
              ))}
            </div>
            <span className="text-muted-foreground text-sm">4.97 average · 200+ journeys rated</span>
          </motion.div>

          <motion.div 
            className="grid grid-cols-1 md:grid-cols-3 gap-0 border border-white/5"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={{
              hidden: {},
              visible: {
                transition: {
                  staggerChildren: 0.1
                }
              }
            }}
          >
            {[
              {
                name: "James Whitfield",
                city: "London, UK",
                rating: 5,
                review:
                  "Arrived at 2am on a delayed flight. Driver was waiting, signboard ready. Not a single moment of uncertainty. This is how transfers should work everywhere.",
              },
              {
                name: "Aisha Al-Rasheed",
                city: "Riyadh, KSA",
                rating: 5,
                review:
                  "I've used every transfer service in Dubai. DXB Driver is the only one that makes me feel like a guest, not a passenger. The S-Class was immaculate.",
              },
              {
                name: "Marcus Chen",
                city: "Singapore",
                rating: 5,
                review:
                  "Used for a week of business meetings across Dubai and Abu Dhabi. Always on time, always professional. Worth every dirham.",
              },
            ].map((t, i) => (
              <motion.div
                key={i}
                variants={{
                  hidden: { opacity: 0, y: 30 },
                  visible: { opacity: 1, y: 0, transition: { duration: 0.6 } }
                }}
                className={i < 2 ? "md:border-r border-white/5" : ""}
              >
                <TestimonialCard {...t} />
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* FAQ PREVIEW */}
      <section className="py-28 md:py-36" data-testid="section-faq-preview">
        <div className="container mx-auto px-6 md:px-12 max-w-3xl">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
          >
            <SectionTitle subtitle="Quick Answers" title="Frequently Asked" centered />
          </motion.div>

          <Accordion type="single" collapsible className="space-y-0">
            {[
              {
                q: "How far in advance should I book?",
                a: "We recommend booking at least 2 hours in advance for city rides and 24 hours for airport transfers. For premium vehicles, earlier is better — we'll always try to accommodate last-minute requests.",
              },
              {
                q: "Are your drivers RTA licensed?",
                a: "Yes. All DXB Driver chauffeurs hold valid UAE driving licences and are registered with the Road and Transport Authority (RTA). We conduct background checks on every driver.",
              },
              {
                q: "What happens if my flight is delayed?",
                a: "We track your flight in real time. If it's delayed, your driver adjusts accordingly — at no extra charge. You will never be left waiting.",
              },
              {
                q: "Can I request the same driver again?",
                a: "Absolutely. Once you've experienced a particular chauffeur, you can request them by name for future bookings. We aim to build lasting relationships.",
              },
            ].map((faq, i) => (
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
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <Link href="/faq" data-testid="link-view-all-faq">
              <CTAButton variant="outline">View All Questions</CTAButton>
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
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <div className="w-16 h-px bg-primary mx-auto mb-8" />
            <span className="block text-primary text-xs uppercase tracking-[0.4em] mb-8">
              Begin Your Journey
            </span>
            <h2 className="font-serif text-6xl md:text-7xl lg:text-8xl text-foreground mb-8 leading-tight">
              Ready to Arrive
              <br />
              <span className="text-primary">in Silence?</span>
            </h2>
            <p className="text-muted-foreground max-w-xl mx-auto mb-12 text-lg leading-relaxed">
              One message. Your driver is arranged. No apps, no surges, no uncertainty.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="https://wa.me/971501234567"
                target="_blank"
                rel="noreferrer"
                data-testid="link-cta-whatsapp"
              >
                <CTAButton variant="filled" className="px-12 py-4 text-sm w-full sm:w-auto">
                  Book on WhatsApp
                </CTAButton>
              </a>
              <Link href="/contact" data-testid="link-cta-contact">
                <CTAButton variant="outline" className="px-12 py-4 text-sm w-full sm:w-auto">
                  Get a Quote
                </CTAButton>
              </Link>
            </div>
            <p className="text-muted-foreground/40 text-xs mt-8 uppercase tracking-[0.3em]">Available now · Response within 15 minutes</p>
          </motion.div>
        </div>
      </section>

      <Footer />
      <FloatingWhatsApp />
    </div>
  );
}
