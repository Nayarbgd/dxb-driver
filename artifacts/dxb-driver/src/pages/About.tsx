import { motion } from "framer-motion";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { FloatingWhatsApp } from "@/components/FloatingWhatsApp";
import { SectionTitle } from "@/components/SectionTitle";
import { CTAButton } from "@/components/CTAButton";
import { Shield, Clock, Star, MapPin } from "lucide-react";
import { Link } from "wouter";

export default function About() {
  return (
    <div className="bg-background text-foreground overflow-x-hidden">
      <Navbar />

      {/* HERO */}
      <section className="pt-40 pb-24 md:pt-48 md:pb-32 border-b border-white/5" data-testid="section-about-hero">
        <div className="container mx-auto px-6 md:px-12 max-w-4xl">
          <motion.span
            className="block text-primary text-xs uppercase tracking-[0.4em] mb-6"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.6 }}
          >
            About DXB Driver
          </motion.span>
          <motion.h1
            className="font-serif text-5xl md:text-6xl lg:text-7xl text-foreground leading-tight"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.1 }}
          >
            Built on the
            <br />
            Belief That{" "}
            <span className="text-primary">Getting There</span>
            <br />
            Should Be Part
            <br />
            of the Experience.
          </motion.h1>
        </div>
      </section>

      {/* STORY */}
      <section className="py-28 md:py-36 border-b border-white/5" data-testid="section-about-story">
        <div className="container mx-auto px-6 md:px-12">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-20 items-start">
            <motion.div
              initial={{ opacity: 0, x: -40 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
            >
              <SectionTitle subtitle="Our Story" title="Dubai Raised. Excellence Driven." />
              <div className="space-y-6 text-muted-foreground leading-relaxed">
                <p>
                  DXB Driver was founded on a simple premise: the people who travel most deserve to travel best. Not just when they land — from the moment they land until they step through the door they're heading for.
                </p>
                <p>
                  Dubai is a city that moves at an extraordinary pace. Its airports process millions of travellers every year, its highways connect a region, and its business community operates on schedules that leave no room for uncertainty. We built our service to match that standard.
                </p>
                <p>
                  Every driver we work with is hand-selected, professionally trained, and deeply familiar with the streets, shortcuts, and sensibilities of Dubai. Every vehicle in our fleet is maintained to the highest standard and presented the same way each time — clean, restocked, and ready.
                </p>
                <p>
                  We do not compete on price. We compete on the feeling you have when you arrive.
                </p>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 40 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="space-y-0 border border-white/10"
            >
              {[
                { number: "5,000+", label: "Journeys completed" },
                { number: "4.97", label: "Average client rating" },
                { number: "100%", label: "RTA licensed fleet" },
                { number: "24/7", label: "Available, year-round" },
              ].map((stat, i) => (
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

      {/* VALUES */}
      <section className="py-28 md:py-36 bg-card border-b border-white/5" data-testid="section-about-values">
        <div className="container mx-auto px-6 md:px-12">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
          >
            <SectionTitle subtitle="How We Operate" title="The Principles That Drive Us" centered />
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-0 border border-white/5">
            {[
              {
                icon: <Clock className="w-6 h-6" />,
                title: "Punctuality Is Non-Negotiable",
                desc: "We track every flight, account for every delay, and schedule with margin. Being on time means being early. Our drivers understand that your schedule is sacred.",
              },
              {
                icon: <Shield className="w-6 h-6" />,
                title: "Trust Is Earned on Every Ride",
                desc: "Our fleet is fully RTA-licensed and insured. Our drivers are background-checked. Our vehicles are inspected before every booking. Trust is not assumed — it's built.",
              },
              {
                icon: <Star className="w-6 h-6" />,
                title: "The Detail Is the Standard",
                desc: "A chilled bottle of water. Silence unless you speak first. A vehicle that is clean in ways you might not notice but would immediately feel if it weren't. The detail is everything.",
              },
              {
                icon: <MapPin className="w-6 h-6" />,
                title: "Local Knowledge, Global Standard",
                desc: "Our drivers know Dubai the way a concierge knows a hotel. The best routes, the quietest entry points, the buildings that are easier to enter from the east side. Knowledge that only comes from years.",
              },
            ].map((value, i) => (
              <motion.div
                key={i}
                className={`p-8 md:p-12 ${i % 2 === 0 ? "md:border-r" : ""} ${i < 2 ? "border-b" : ""} border-white/5`}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: i * 0.1 }}
                data-testid={`card-value-${i}`}
              >
                <div className="text-primary mb-6">{value.icon}</div>
                <h3 className="font-serif text-2xl text-foreground mb-4">{value.title}</h3>
                <p className="text-muted-foreground leading-relaxed text-sm">{value.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* TEAM / DRIVERS */}
      <section className="py-28 md:py-36 border-b border-white/5" data-testid="section-about-drivers">
        <div className="container mx-auto px-6 md:px-12 max-w-3xl">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
          >
            <SectionTitle subtitle="The Team" title="Our Chauffeurs" />
          </motion.div>

          <div className="space-y-8 text-muted-foreground leading-relaxed">
            <p>
              We do not hire drivers. We select chauffeurs. The distinction matters enormously to us — and we believe it will matter to you.
            </p>
            <p>
              Every DXB Driver chauffeur holds a valid UAE driving licence, is registered with the RTA, and has completed our in-house orientation covering route knowledge, client etiquette, vehicle presentation, and emergency procedures.
            </p>
            <p>
              Many of our drivers have been with us from the beginning. They know our clients by name, remember their preferences, and carry a quiet professionalism that no algorithm can replicate.
            </p>
            <div className="border-l-2 border-primary pl-6 py-2 my-10">
              <p className="font-serif text-xl text-foreground leading-relaxed italic">
                "The journey is not a gap between departure and destination. It is part of the experience. We intend it to be a good one."
              </p>
              <p className="text-muted-foreground text-xs uppercase tracking-widest mt-4">— DXB Driver</p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-32 md:py-40" data-testid="section-about-cta">
        <div className="container mx-auto px-6 md:px-12 text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="font-serif text-5xl md:text-6xl text-foreground mb-8">
              Experience the
              <br />
              <span className="text-primary">Difference.</span>
            </h2>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a href="https://wa.me/971501234567" target="_blank" rel="noreferrer" data-testid="link-about-whatsapp">
                <CTAButton variant="filled" className="px-12 py-4">Book Your Ride</CTAButton>
              </a>
              <Link href="/contact" data-testid="link-about-contact">
                <CTAButton variant="outline" className="px-12 py-4">Get in Touch</CTAButton>
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
