import { motion } from "framer-motion";
import { Check, Car } from "lucide-react";
import { Link } from "wouter";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { FloatingWhatsApp } from "@/components/FloatingWhatsApp";
import { SectionTitle } from "@/components/SectionTitle";
import { CTAButton } from "@/components/CTAButton";

export default function Pricing() {
  return (
    <div className="bg-background text-foreground overflow-x-hidden">
      <Navbar />

      {/* HERO */}
      <section className="pt-40 pb-24 md:pt-48 md:pb-32 border-b border-white/5" data-testid="section-pricing-hero">
        <div className="container mx-auto px-6 md:px-12">
          <motion.span
            className="block text-primary text-xs uppercase tracking-[0.4em] mb-6"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.6 }}
          >
            Fleet & Pricing
          </motion.span>
          <motion.h1
            className="font-serif text-5xl md:text-6xl lg:text-7xl text-foreground leading-tight max-w-3xl"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.1 }}
          >
            Transparent Pricing.
            <br />
            <span className="text-primary">No Surprises.</span>
          </motion.h1>
          <motion.p
            className="text-muted-foreground text-lg mt-8 max-w-xl leading-relaxed"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.2 }}
          >
            Every rate is confirmed before your journey begins. Choose your vehicle class, get a fixed quote, and travel without arithmetic.
          </motion.p>
        </div>
      </section>

      {/* PRICING TIERS */}
      <section className="py-28 md:py-36" data-testid="section-pricing-tiers">
        <div className="container mx-auto px-6 md:px-12">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
          >
            <SectionTitle subtitle="Choose Your Class" title="Three Tiers, One Standard" centered />
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                tier: "Economy",
                tagline: "Efficient & Comfortable",
                vehicle: "Toyota Camry or equivalent",
                baseAirport: "AED 100",
                baseCity: "AED 80",
                perKm: "AED 2.5",
                features: [
                  "Up to 3 passengers",
                  "2 standard luggage bags",
                  "Air-conditioned vehicle",
                  "Professional licensed driver",
                  "Fixed airport rates",
                  "WhatsApp communication",
                ],
                featured: false,
                cta: "Book Economy",
              },
              {
                tier: "Business",
                tagline: "Executive Comfort",
                vehicle: "Mercedes E-Class or equivalent",
                baseAirport: "AED 180",
                baseCity: "AED 150",
                perKm: "AED 4",
                features: [
                  "Up to 3 passengers",
                  "3 large luggage bags",
                  "Premium leather interior",
                  "Complimentary bottled water",
                  "Extended legroom",
                  "Priority driver assignment",
                  "Flight tracking included",
                ],
                featured: true,
                cta: "Book Business",
              },
              {
                tier: "Premium",
                tagline: "Uncompromised Luxury",
                vehicle: "Mercedes S-Class or equivalent",
                baseAirport: "AED 350",
                baseCity: "AED 280",
                perKm: "AED 7",
                features: [
                  "Up to 3 passengers",
                  "4 large luggage bags",
                  "Flagship luxury interior",
                  "Privacy / tinted glass",
                  "Chilled towels & water",
                  "Dedicated concierge line",
                  "Same-driver booking",
                  "Corporate billing available",
                ],
                featured: false,
                cta: "Book Premium",
              },
            ].map((plan, i) => (
              <motion.div
                key={i}
                className={`relative border flex flex-col ${
                  plan.featured
                    ? "border-primary/40 bg-card"
                    : "border-white/10"
                }`}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: i * 0.1 }}
                data-testid={`card-pricing-${plan.tier.toLowerCase()}`}
              >
                {plan.featured && (
                  <>
                    <div className="absolute top-0 left-0 right-0 h-px bg-primary" />
                    <span className="absolute -top-3 left-1/2 -translate-x-1/2 bg-primary text-primary-foreground text-[10px] uppercase tracking-widest px-3 py-1 font-semibold">
                      Most Popular
                    </span>
                  </>
                )}

                <div className="p-8 md:p-10 flex-grow">
                  <div className="flex items-center gap-3 mb-8">
                    <Car className="w-5 h-5 text-primary/70" />
                    <span className="text-xs uppercase tracking-[0.3em] text-muted-foreground">{plan.tier}</span>
                  </div>

                  <h3 className="font-serif text-3xl text-foreground mb-2">{plan.tier} Class</h3>
                  <p className="text-muted-foreground text-sm mb-2">{plan.tagline}</p>
                  <p className="text-muted-foreground text-xs mb-8 uppercase tracking-wider">{plan.vehicle}</p>

                  <div className="border-t border-b border-white/5 py-6 mb-8 grid grid-cols-2 gap-4">
                    <div>
                      <p className="text-muted-foreground text-xs uppercase tracking-wider mb-1">Airport</p>
                      <p className="font-serif text-2xl text-foreground">
                        {plan.baseAirport}
                      </p>
                      <p className="text-muted-foreground text-xs mt-1">base rate</p>
                    </div>
                    <div>
                      <p className="text-muted-foreground text-xs uppercase tracking-wider mb-1">City Ride</p>
                      <p className="font-serif text-2xl text-foreground">
                        {plan.baseCity}
                      </p>
                      <p className="text-muted-foreground text-xs mt-1">base rate</p>
                    </div>
                  </div>

                  <ul className="space-y-3 mb-8">
                    {plan.features.map((feature) => (
                      <li key={feature} className="flex items-start gap-3 text-sm text-muted-foreground">
                        <Check className="w-4 h-4 text-primary mt-0.5 flex-shrink-0" />
                        {feature}
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="p-8 md:px-10 md:pb-10 pt-0">
                  <a
                    href="https://wa.me/971528730883"
                    target="_blank"
                    rel="noreferrer"
                    data-testid={`link-book-${plan.tier.toLowerCase()}`}
                  >
                    <CTAButton
                      variant={plan.featured ? "filled" : "outline"}
                      className="w-full justify-center text-center"
                    >
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
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.4 }}
          >
            All rates are indicative. Final price confirmed before booking. Rates may vary for inter-emirate transfers, late night, and public holidays.
          </motion.p>
        </div>
      </section>

      {/* INTER-EMIRATE TABLE */}
      <section className="py-28 md:py-36 bg-card border-y border-white/5" data-testid="section-pricing-routes">
        <div className="container mx-auto px-6 md:px-12">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
          >
            <SectionTitle subtitle="Inter-Emirate" title="Fixed Route Pricing" />
          </motion.div>

          <div className="border border-white/10 overflow-hidden">
            <div className="grid grid-cols-4 border-b border-white/10 bg-background/40">
              {["Route", "Economy", "Business", "Premium"].map((h) => (
                <div key={h} className="p-4 md:p-6">
                  <span className="text-xs uppercase tracking-widest text-muted-foreground font-semibold">{h}</span>
                </div>
              ))}
            </div>
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
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: i * 0.07 }}
                data-testid={`row-route-${i}`}
              >
                <div className="p-4 md:p-6">
                  <span className="text-sm text-foreground font-serif">{row.route}</span>
                </div>
                <div className="p-4 md:p-6"><span className="text-sm text-muted-foreground">{row.eco}</span></div>
                <div className="p-4 md:p-6"><span className="text-sm text-primary">{row.bus}</span></div>
                <div className="p-4 md:p-6"><span className="text-sm text-muted-foreground">{row.pre}</span></div>
              </motion.div>
            ))}
          </div>
          <p className="text-muted-foreground text-xs mt-6 tracking-wide">
            One-way rates. Return journey bookings available at a discount. Contact us for corporate accounts.
          </p>
        </div>
      </section>

      {/* CTA */}
      <section className="py-32 md:py-40" data-testid="section-pricing-cta">
        <div className="container mx-auto px-6 md:px-12 text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="font-serif text-5xl md:text-6xl text-foreground mb-8">
              Not Sure Which
              <br />
              <span className="text-primary">Class to Choose?</span>
            </h2>
            <p className="text-muted-foreground max-w-lg mx-auto mb-10 leading-relaxed">
              Message us on WhatsApp and we'll recommend the right vehicle for your journey and budget.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a href="https://wa.me/971528730883" target="_blank" rel="noreferrer" data-testid="link-pricing-whatsapp">
                <CTAButton variant="filled" className="px-12 py-4">Ask on WhatsApp</CTAButton>
              </a>
              <Link href="/contact" data-testid="link-pricing-contact">
                <CTAButton variant="outline" className="px-12 py-4">Get a Quote</CTAButton>
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
