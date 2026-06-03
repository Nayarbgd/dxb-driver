import { motion } from "framer-motion";
import { Plane, MapPin, Route, Clock, Shield, CheckCircle2 } from "lucide-react";
import { Link } from "wouter";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { FloatingWhatsApp } from "@/components/FloatingWhatsApp";
import { SectionTitle } from "@/components/SectionTitle";
import { CTAButton } from "@/components/CTAButton";

const fadeUp = {
  hidden: { opacity: 0, y: 40 },
  visible: (i = 0) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.7, delay: i * 0.1, ease: [0.22, 1, 0.36, 1] },
  }),
};

export default function Services() {
  return (
    <div className="bg-background text-foreground overflow-x-hidden">
      <Navbar />

      {/* PAGE HERO */}
      <section
        className="pt-40 pb-24 md:pt-48 md:pb-32 border-b border-white/5"
        data-testid="section-services-hero"
      >
        <div className="container mx-auto px-6 md:px-12">
          <motion.span
            className="block text-primary text-xs uppercase tracking-[0.4em] mb-6"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.6 }}
          >
            Our Services
          </motion.span>
          <motion.h1
            className="font-serif text-5xl md:text-6xl lg:text-7xl text-foreground leading-tight max-w-3xl"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.1 }}
          >
            Every Journey,
            <br />
            <span className="text-primary">Perfectly Arranged.</span>
          </motion.h1>
          <motion.p
            className="text-muted-foreground text-lg mt-8 max-w-xl leading-relaxed"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.2 }}
          >
            Three distinct service categories. One consistent standard of excellence. Whether you need to be at DXB Terminal 3 in two hours or across the Emirates by noon — we are ready.
          </motion.p>
        </div>
      </section>

      {/* SERVICE DETAIL — AIRPORT */}
      <section className="py-28 md:py-36 border-b border-white/5" data-testid="section-airport-transfers">
        <div className="container mx-auto px-6 md:px-12">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-20 items-center">
            <motion.div
              initial={{ opacity: 0, x: -40 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
            >
              <span className="block text-primary text-xs uppercase tracking-[0.3em] mb-6">Service 01</span>
              <h2 className="font-serif text-4xl md:text-5xl text-foreground mb-6 leading-tight">
                Airport Transfers
              </h2>
              <p className="text-muted-foreground leading-relaxed mb-8 text-base">
                Every detail considered before you land. We track your flight in real time, account for delays, and ensure your driver is exactly where you expect him — signboard, composure, and all. From DXB and DWC to any Dubai address, with no rushing and no waiting.
              </p>
              <ul className="space-y-4 mb-10">
                {[
                  "Live flight tracking — delay-adjusted automatically",
                  "Meet-and-greet at arrivals with name sign",
                  "Assistance with luggage to the vehicle",
                  "All three Dubai terminals covered",
                  "Corporate billing available",
                ].map((item) => (
                  <li key={item} className="flex items-start gap-3 text-sm text-muted-foreground">
                    <CheckCircle2 className="w-4 h-4 text-primary mt-0.5 flex-shrink-0" />
                    {item}
                  </li>
                ))}
              </ul>
              <a href="https://wa.me/971501234567" target="_blank" rel="noreferrer" data-testid="link-book-airport">
                <CTAButton variant="filled">Book Airport Transfer</CTAButton>
              </a>
            </motion.div>

            <motion.div
              className="relative"
              initial={{ opacity: 0, x: 40 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
            >
              <div
                className="aspect-[4/3] bg-card border border-white/10 flex items-center justify-center relative overflow-hidden"
                style={{ backgroundImage: "url('https://images.unsplash.com/photo-1436491865332-7a61a109cc05?auto=format&fit=crop&w=800&q=80')", backgroundSize: "cover", backgroundPosition: "center" }}
              >
                <div className="absolute inset-0 bg-gradient-to-br from-card/80 to-background/80" />
                <Plane className="w-24 h-24 text-primary/20 relative z-10" />
                <div className="absolute bottom-0 left-0 right-0 p-8 z-10">
                  <div className="border-t border-white/10 pt-6">
                    <p className="font-serif text-3xl text-foreground/60">DXB · DWC</p>
                    <p className="text-muted-foreground text-xs uppercase tracking-widest mt-2">Dubai International & Al Maktoum</p>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* SERVICE DETAIL — CITY RIDES */}
      <section className="py-28 md:py-36 border-b border-white/5 bg-card" data-testid="section-city-rides">
        <div className="container mx-auto px-6 md:px-12">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-20 items-center">
            <motion.div
              className="md:order-2"
              initial={{ opacity: 0, x: 40 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
            >
              <span className="block text-primary text-xs uppercase tracking-[0.3em] mb-6">Service 02</span>
              <h2 className="font-serif text-4xl md:text-5xl text-foreground mb-6 leading-tight">
                City Rides
              </h2>
              <p className="text-muted-foreground leading-relaxed mb-8 text-base">
                Your private car for Dubai's every demand. Morning meetings in DIFC, lunches in Jumeirah, evening events in Downtown — your driver handles the roads while you handle the day. No surge pricing. No guesswork.
              </p>
              <ul className="space-y-4 mb-10">
                {[
                  "As-directed hourly hire available",
                  "Business district specialists (DIFC, Business Bay, DWTC)",
                  "Hotels, restaurants, venues across Dubai",
                  "Child seat on request",
                  "Discretion guaranteed",
                ].map((item) => (
                  <li key={item} className="flex items-start gap-3 text-sm text-muted-foreground">
                    <CheckCircle2 className="w-4 h-4 text-primary mt-0.5 flex-shrink-0" />
                    {item}
                  </li>
                ))}
              </ul>
              <a href="https://wa.me/971501234567" target="_blank" rel="noreferrer" data-testid="link-book-city">
                <CTAButton variant="filled">Book a City Ride</CTAButton>
              </a>
            </motion.div>

            <motion.div
              className="md:order-1 relative"
              initial={{ opacity: 0, x: -40 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
            >
              <div 
                className="aspect-[4/3] bg-background border border-white/10 flex items-center justify-center relative overflow-hidden"
                style={{ backgroundImage: "url('https://images.unsplash.com/photo-1546436836-07a91091f160?auto=format&fit=crop&w=800&q=80')", backgroundSize: "cover", backgroundPosition: "center" }}
              >
                <div className="absolute inset-0 bg-gradient-to-br from-background/80 to-card/60" />
                <MapPin className="w-24 h-24 text-primary/20 relative z-10" />
                <div className="absolute bottom-0 left-0 right-0 p-8 z-10">
                  <div className="border-t border-white/10 pt-6">
                    <p className="font-serif text-3xl text-foreground/60">DIFC · Downtown</p>
                    <p className="text-muted-foreground text-xs uppercase tracking-widest mt-2">Business & Leisure Dubai</p>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* SERVICE DETAIL — INTER-EMIRATE */}
      <section className="py-28 md:py-36 border-b border-white/5" data-testid="section-inter-emirate">
        <div className="container mx-auto px-6 md:px-12">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-20 items-center">
            <motion.div
              initial={{ opacity: 0, x: -40 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
            >
              <span className="block text-primary text-xs uppercase tracking-[0.3em] mb-6">Service 03</span>
              <h2 className="font-serif text-4xl md:text-5xl text-foreground mb-6 leading-tight">
                Inter-Emirate Transfers
              </h2>
              <p className="text-muted-foreground leading-relaxed mb-8 text-base">
                The UAE is more connected than most visitors realise. Dubai to Abu Dhabi in comfort. Dubai to Sharjah in silence. We operate across all seven emirates, with fixed rates and professional chauffeurs who know every route.
              </p>
              <ul className="space-y-4 mb-10">
                {[
                  "Dubai ↔ Abu Dhabi (approx. 90 min)",
                  "Dubai ↔ Sharjah, Ajman, RAK",
                  "Fixed rates — no meter surprises",
                  "Return journeys arranged simultaneously",
                  "Corporate account billing",
                ].map((item) => (
                  <li key={item} className="flex items-start gap-3 text-sm text-muted-foreground">
                    <CheckCircle2 className="w-4 h-4 text-primary mt-0.5 flex-shrink-0" />
                    {item}
                  </li>
                ))}
              </ul>
              <a href="https://wa.me/971501234567" target="_blank" rel="noreferrer" data-testid="link-book-intemirate">
                <CTAButton variant="filled">Plan Your Transfer</CTAButton>
              </a>
            </motion.div>

            <motion.div
              className="relative"
              initial={{ opacity: 0, x: 40 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
            >
              <div 
                className="aspect-[4/3] bg-card border border-white/10 flex items-center justify-center relative overflow-hidden"
                style={{ backgroundImage: "url('https://images.unsplash.com/photo-1558618666-fcd25c85cd64?auto=format&fit=crop&w=800&q=80')", backgroundSize: "cover", backgroundPosition: "center" }}
              >
                <div className="absolute inset-0 bg-gradient-to-br from-card/80 to-background/80" />
                <Route className="w-24 h-24 text-primary/20 relative z-10" />
                <div className="absolute bottom-0 left-0 right-0 p-8 z-10">
                  <div className="border-t border-white/10 pt-6">
                    <p className="font-serif text-3xl text-foreground/60">AUH · SHJ · RAK</p>
                    <p className="text-muted-foreground text-xs uppercase tracking-widest mt-2">All Emirates Covered</p>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* WHY CHOOSE US */}
      <section className="py-28 md:py-36 bg-card border-b border-white/5" data-testid="section-why-choose">
        <div className="container mx-auto px-6 md:px-12">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
          >
            <SectionTitle subtitle="The Standard" title="Why DXB Driver" centered />
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-4 gap-0 border border-white/5">
            {[
              { icon: <Clock className="w-6 h-6" />, title: "Always On Time", desc: "Punctuality is not a feature — it's a baseline." },
              { icon: <Shield className="w-6 h-6" />, title: "RTA Licensed", desc: "Fully registered, insured, and road-authority compliant." },
              { icon: <CheckCircle2 className="w-6 h-6" />, title: "Fixed Pricing", desc: "The price we quote is the price you pay." },
              { icon: <MapPin className="w-6 h-6" />, title: "Dubai-Native", desc: "We know every district, every shortcut, every preference." },
            ].map((item, i) => (
              <motion.div
                key={i}
                className={`p-8 md:p-10 ${i < 3 ? "md:border-r border-white/5" : ""} border-b md:border-b-0 border-white/5`}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.1 }}
                data-testid={`card-why-${i}`}
              >
                <div className="text-primary mb-6">{item.icon}</div>
                <h3 className="font-serif text-xl text-foreground mb-3">{item.title}</h3>
                <p className="text-muted-foreground text-sm leading-relaxed">{item.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-32 md:py-40" data-testid="section-services-cta">
        <div className="container mx-auto px-6 md:px-12 text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="font-serif text-5xl md:text-6xl text-foreground mb-8">
              Ready to Book?
            </h2>
            <p className="text-muted-foreground max-w-lg mx-auto mb-10 leading-relaxed">
              Send us a message on WhatsApp or fill in a quote form. We respond within minutes.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a href="https://wa.me/971501234567" target="_blank" rel="noreferrer" data-testid="link-services-whatsapp">
                <CTAButton variant="filled" className="px-12 py-4">Book via WhatsApp</CTAButton>
              </a>
              <Link href="/contact" data-testid="link-services-contact">
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
