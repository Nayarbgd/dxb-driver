import { motion } from "framer-motion";
import { Link } from "wouter";
import {
  UserCheck,
  Car,
  CalendarClock,
  PlaneTakeoff,
  MessageCircle,
  MapPin,
  Briefcase,
  Plane,
  Globe,
  Users,
  CheckCircle2,
  DollarSign,
  Languages,
} from "lucide-react";
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
    transition: { duration: 0.7, delay: i * 0.1, ease: [0.22, 1, 0.36, 1] as [number, number, number, number] },
  }),
};

const differentiators = [
  {
    icon: <UserCheck className="w-6 h-6" />,
    title: "Professional Chauffeurs",
    body: "Every DXB Driver chauffeur is RTA licensed, background-checked, and trained to the standards of a private chauffeur service — not a ride-hailing driver.",
  },
  {
    icon: <DollarSign className="w-6 h-6" />,
    title: "Fixed Pricing, Always",
    body: "No meters, no surge pricing, no algorithm adjusting your fare at 7am on a Monday. The rate we quote is the rate you pay — always.",
  },
  {
    icon: <CalendarClock className="w-6 h-6" />,
    title: "Advance Booking",
    body: "Book your Dubai airport transfer or city ride days, weeks, or months ahead. We hold your booking and confirm your driver in advance.",
  },
  {
    icon: <PlaneTakeoff className="w-6 h-6" />,
    title: "Airport Meet & Greet",
    body: "Your chauffeur waits in arrivals with a name sign, monitors your flight in real time, and adjusts for delays automatically — at no extra charge.",
  },
  {
    icon: <Languages className="w-6 h-6" />,
    title: "English & Spanish Drivers",
    body: "Bilingual English and Spanish-speaking chauffeurs available on request. A service detail that matters more than most realize.",
  },
  {
    icon: <MapPin className="w-6 h-6" />,
    title: "Dubai, UAE & Beyond",
    body: "City rides, airport transfers across DXB and DWC, and inter-emirate travel to Abu Dhabi, Sharjah, Ajman, and all seven emirates.",
  },
];

const audience = [
  {
    icon: <Briefcase className="w-8 h-8" />,
    title: "Business Travelers",
    body: "Professional transportation for meetings, conferences, corporate events, and executive schedules.",
  },
  {
    icon: <Plane className="w-8 h-8" />,
    title: "Airport Transfers",
    body: "Smooth airport pickups and drop-offs designed to eliminate travel stress and save valuable time.",
  },
  {
    icon: <Globe className="w-8 h-8" />,
    title: "Visitors & Tourists",
    body: "Comfortable transportation for discovering Dubai and the UAE without the hassle of navigating unfamiliar roads.",
  },
  {
    icon: <Users className="w-8 h-8" />,
    title: "Families",
    body: "Reliable transportation solutions for everyday travel, special occasions, and family outings.",
  },
];

const steps = [
  {
    number: "01",
    title: "Contact Us",
    body: "Tell us where and when you need transportation.",
  },
  {
    number: "02",
    title: "Confirm Your Booking",
    body: "Receive confirmation and travel details.",
  },
  {
    number: "03",
    title: "Enjoy The Journey",
    body: "Sit back, relax, and let us handle the drive.",
  },
];

export default function WhyChooseUs() {
  return (
    <div className="bg-background text-foreground overflow-x-hidden">
      <Navbar />

      {/* HERO */}
      <section
        className="pt-40 pb-24 md:pt-48 md:pb-32 border-b border-white/5"
        data-testid="section-why-hero"
      >
        <div className="container mx-auto px-6 md:px-12 max-w-4xl">
          <motion.span
            className="block text-primary text-xs uppercase tracking-[0.4em] mb-6"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.6 }}
          >
            Why Choose Us
          </motion.span>
          <motion.h1
            className="font-serif text-5xl md:text-6xl lg:text-7xl text-foreground leading-tight mb-8"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.1 }}
          >
            More Than A Ride.
            <br />
            <span className="text-primary">A Better Travel Experience.</span>
          </motion.h1>
          <motion.p
            className="text-muted-foreground text-lg md:text-xl leading-relaxed max-w-2xl mb-10"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.2 }}
          >
            Whether you're heading to the airport, an important meeting, or exploring the UAE, DXB Driver is built around one simple goal: making every journey smooth, comfortable, and stress-free.
          </motion.p>
          <motion.div
            className="flex flex-col sm:flex-row gap-4"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.35 }}
          >
            <Link href="/contact">
              <CTAButton variant="filled">Book Your Driver</CTAButton>
            </Link>
            <a href="https://wa.me/971528730883?text=Hi%20DXB%20Driver!%20I%20need%20a%20ride.%0AFrom%3A%20%0ATo%3A%20%0ADate%20%26%20Time%3A%20%0AVehicle%3A%20%0ANotes%3A%20..." target="_blank" rel="noreferrer">
              <CTAButton variant="outline">WhatsApp Us</CTAButton>
            </a>
          </motion.div>
        </div>
      </section>

      {/* WHY CLIENTS CHOOSE DXB DRIVER */}
      <section className="py-28 md:py-36 border-b border-white/5" data-testid="section-why-clients">
        <div className="container mx-auto px-6 md:px-12">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-16 items-center max-w-5xl mx-auto">
            {/* Left: title */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
            >
              <span className="block text-primary text-xs uppercase tracking-[0.4em] mb-5">The Difference</span>
              <h2 className="font-serif text-4xl md:text-5xl text-foreground leading-tight">
                Why Clients Choose DXB Driver
              </h2>
              <div className="w-12 h-px bg-primary mt-8 mb-0" />
            </motion.div>
            {/* Right: body */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.15 }}
              className="space-y-5 text-muted-foreground text-lg leading-relaxed"
            >
              <p>Most transportation services focus on getting you from one place to another.</p>
              <p>We focus on everything that happens in between.</p>
              <p className="text-foreground/80">
                The difference is not just the vehicle. It's the experience.
              </p>
              <ul className="space-y-2 pl-0">
                {[
                  "Reliable scheduling.",
                  "Professional drivers.",
                  "Clear communication.",
                  "Comfortable travel.",
                  "And the peace of mind that comes from knowing your transportation is already taken care of.",
                ].map((item, i) => (
                  <li key={i} className="flex items-start gap-3">
                    <span className="text-primary mt-1.5 shrink-0">—</span>
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
              <p className="text-foreground/70 pt-2">
                For business professionals, visitors, families, and frequent travelers, that difference matters.
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* BUILT AROUND RELIABILITY */}
      <section
        className="py-28 md:py-36 bg-card border-b border-white/5"
        data-testid="section-why-reliability"
      >
        <div className="container mx-auto px-6 md:px-12 max-w-3xl text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <SectionTitle subtitle="Our Foundation" title="Built Around Reliability" centered />
            <div className="space-y-5 text-muted-foreground text-lg leading-relaxed mt-8">
              <p>When timing matters, reliability matters.</p>
              <p>
                Whether you're catching a flight, attending an important meeting, or planning a day of
                travel, transportation should never be something you need to worry about.
              </p>
              <p className="text-foreground/80">
                DXB Driver is designed to help clients travel with confidence through professional
                planning, clear communication, and dependable service.
              </p>
              <p className="font-serif text-xl text-foreground italic pt-4">
                Because the best journeys are the ones that feel effortless.
              </p>
            </div>
          </motion.div>
        </div>
      </section>

      {/* WHO WE SERVE */}
      <section className="py-28 md:py-36 border-b border-white/5" data-testid="section-why-audience">
        <div className="container mx-auto px-6 md:px-12">
          <motion.div
            className="text-center mb-16"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
          >
            <SectionTitle subtitle="Our Clientele" title="Who We Serve" centered />
          </motion.div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {audience.map((item, i) => (
              <motion.div
                key={i}
                custom={i}
                variants={fadeUp}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                className="group border border-white/8 bg-card p-8 relative overflow-hidden transition-all duration-500 hover:border-primary/30 hover:-translate-y-1"
              >
                {/* Gold top line on hover */}
                <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-primary/0 to-transparent group-hover:via-primary/60 transition-all duration-500" />
                <div className="text-primary mb-6">{item.icon}</div>
                <h3 className="font-serif text-xl text-foreground mb-3 leading-snug">{item.title}</h3>
                <p className="text-muted-foreground text-sm leading-relaxed">{item.body}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* WHAT MAKES THE DIFFERENCE — Icon Grid */}
      <section
        className="py-28 md:py-36 bg-card border-b border-white/5"
        data-testid="section-why-differentiators"
      >
        <div className="container mx-auto px-6 md:px-12">
          <motion.div
            className="text-center mb-16"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
          >
            <SectionTitle subtitle="The Details" title="What Makes The Difference" centered />
          </motion.div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-px bg-white/5">
            {differentiators.map((item, i) => (
              <motion.div
                key={i}
                custom={i}
                variants={fadeUp}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                className="bg-card p-8 md:p-10 group hover:bg-card/80 transition-colors duration-300"
              >
                <div className="inline-flex items-center justify-center w-12 h-12 border border-primary/20 text-primary mb-6 group-hover:border-primary/50 transition-colors duration-300">
                  {item.icon}
                </div>
                <h3 className="font-serif text-xl text-foreground mb-3">{item.title}</h3>
                <p className="text-muted-foreground text-sm leading-relaxed">{item.body}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* HOW IT WORKS — Simple From Start To Finish */}
      <section className="py-28 md:py-36 border-b border-white/5" data-testid="section-why-process">
        <div className="container mx-auto px-6 md:px-12">
          <motion.div
            className="text-center mb-16"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
          >
            <SectionTitle subtitle="The Process" title="Simple From Start To Finish" centered />
          </motion.div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-12 md:gap-0 relative max-w-4xl mx-auto">
            <div className="hidden md:block absolute top-[2.25rem] left-[16.67%] right-[16.67%] h-px bg-gradient-to-r from-transparent via-primary/35 to-transparent" />
            {steps.map((step, i) => (
              <motion.div
                key={i}
                custom={i}
                variants={fadeUp}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                className="text-center px-8"
              >
                <div className="inline-block mb-8">
                  <span className="font-serif text-7xl font-light text-primary/25 leading-none select-none">
                    {step.number}
                  </span>
                </div>
                <h3 className="font-serif text-xl text-foreground mb-3">{step.title}</h3>
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
            <span className="block text-primary text-xs uppercase tracking-[0.4em] mb-5">The Distinction</span>
            <h2 className="font-serif text-4xl md:text-5xl text-foreground leading-tight max-w-2xl mx-auto">
              More Than Just<br /><span className="text-primary">Another Ride App</span>
            </h2>
            <p className="text-muted-foreground text-lg leading-relaxed max-w-2xl mx-auto mt-6">
              When you book a private chauffeur service in Dubai, you're not just booking a car. You're booking peace of mind — and that is something no app algorithm can replicate.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 max-w-5xl mx-auto">
            {/* App-based rides */}
            <motion.div
              className="border border-white/8 bg-card p-8 md:p-10"
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7 }}
            >
              <h3 className="font-serif text-xl text-muted-foreground/70 mb-8 pb-6 border-b border-white/5">App-Based Ride Hailing</h3>
              <ul className="space-y-4">
                {[
                  "Variable pricing — surge rates during peak hours",
                  "Random driver assigned — no advance relationship",
                  "No flight tracking or automatic delay adjustment",
                  "No meet-and-greet — locate your vehicle yourself",
                  "Limited vehicle quality control",
                  "No bilingual service option",
                  "Booking confirmation is never guaranteed",
                ].map((item, i) => (
                  <li key={i} className="flex items-start gap-3 text-sm text-muted-foreground/60">
                    <span className="text-white/15 mt-0.5 shrink-0 text-base leading-none">—</span>
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </motion.div>

            {/* DXB Driver */}
            <motion.div
              className="border border-primary/25 bg-card p-8 md:p-10 relative overflow-hidden"
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7, delay: 0.1 }}
            >
              <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-primary/50 to-transparent" />
              <h3 className="font-serif text-xl text-primary mb-8 pb-6 border-b border-primary/10">DXB Driver — Private Chauffeur</h3>
              <ul className="space-y-4">
                {[
                  "Fixed rates — no surge pricing, ever",
                  "Your dedicated professional chauffeur, every time",
                  "Live flight tracking with automatic delay adjustment",
                  "Meet-and-greet at arrivals with name sign",
                  "Luxury fleet — Economy, Business & Premium classes",
                  "English and Spanish-speaking chauffeurs available",
                  "Advance booking weeks or months ahead",
                ].map((item, i) => (
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
            For airport transfers and longer journeys across the UAE, a fixed-rate Dubai chauffeur service is often more cost-effective than ride-hailing — particularly when surge pricing applies.
          </motion.p>
        </div>
      </section>

      {/* THE REAL LUXURY IS PEACE OF MIND */}
      <section
        className="relative py-32 md:py-40 border-b border-white/5 overflow-hidden"
        data-testid="section-why-luxury"
      >
        {/* Subtle background */}
        <div
          className="absolute inset-0"
          style={{
            backgroundImage:
              "url('https://images.unsplash.com/photo-1555215695-3004980ad54e?auto=format&fit=crop&w=1920&q=80')",
            backgroundSize: "cover",
            backgroundPosition: "center 60%",
          }}
        />
        <div className="absolute inset-0 bg-background/90" />
        <div className="absolute inset-0" style={{ background: "linear-gradient(to bottom, rgba(10,10,10,0.6) 0%, rgba(10,10,10,0.95) 100%)" }} />

        <div className="relative z-10 container mx-auto px-6 md:px-12 max-w-3xl text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.9 }}
          >
            <div className="w-px h-16 bg-gradient-to-b from-transparent via-primary to-transparent mx-auto mb-10" />
            <span className="block text-primary text-xs uppercase tracking-[0.4em] mb-6">
              The Philosophy
            </span>
            <h2 className="font-serif text-4xl md:text-5xl text-foreground leading-tight mb-10">
              The Real Luxury Is Peace Of Mind
            </h2>
            <div className="space-y-4 text-muted-foreground text-lg leading-relaxed">
              <p>Luxury isn't only about the vehicle.</p>
              <p>
                It's about knowing someone is already waiting.
                <br className="hidden md:block" />
                Knowing your schedule is under control.
                <br className="hidden md:block" />
                Knowing you'll arrive comfortably and on time.
              </p>
              <p className="text-foreground/80 font-serif text-xl italic pt-2">
                That's the experience DXB Driver aims to deliver every day.
              </p>
            </div>
            <div className="w-px h-16 bg-gradient-to-b from-primary via-primary/20 to-transparent mx-auto mt-10" />
          </motion.div>
        </div>
      </section>

      {/* FINAL CTA */}
      <section
        className="py-28 md:py-36"
        data-testid="section-why-cta"
        style={{ background: "radial-gradient(ellipse 80% 60% at 50% 100%, rgba(201,168,76,0.07) 0%, transparent 70%)" }}
      >
        <div className="container mx-auto px-6 md:px-12 text-center max-w-2xl">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <span className="block text-primary text-xs uppercase tracking-[0.4em] mb-6">Get Started</span>
            <h2 className="font-serif text-4xl md:text-5xl lg:text-6xl text-foreground leading-tight mb-6">
              Ready For A Better Travel Experience?
            </h2>
            <p className="text-muted-foreground text-lg leading-relaxed mb-12">
              Book your next journey today and travel with comfort, confidence, and convenience.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link href="/contact">
                <CTAButton variant="filled">Book Now</CTAButton>
              </Link>
              <a href="https://wa.me/971528730883?text=Hi%20DXB%20Driver!%20I%20need%20a%20ride.%0AFrom%3A%20%0ATo%3A%20%0ADate%20%26%20Time%3A%20%0AVehicle%3A%20%0ANotes%3A%20..." target="_blank" rel="noreferrer">
                <CTAButton variant="outline">WhatsApp Us</CTAButton>
              </a>
            </div>
          </motion.div>
        </div>
      </section>

      <Footer />
      <FloatingWhatsApp />
    </div>
  );
}
