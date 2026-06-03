import { motion } from "framer-motion";
import { Link } from "wouter";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { FloatingWhatsApp } from "@/components/FloatingWhatsApp";
import { SectionTitle } from "@/components/SectionTitle";
import { CTAButton } from "@/components/CTAButton";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const faqCategories = [
  {
    category: "Booking",
    items: [
      {
        q: "How do I book a ride?",
        a: "The fastest way is WhatsApp — send us your pickup location, destination, date, and time. We confirm within minutes. You can also use our Contact page booking form, which pre-fills a WhatsApp message for you.",
      },
      {
        q: "How far in advance should I book?",
        a: "We recommend at least 2 hours for city rides and 24 hours for airport transfers. For premium vehicle classes, earlier booking ensures availability. We always try to accommodate last-minute requests — message us and we'll do our best.",
      },
      {
        q: "Can I modify or cancel a booking?",
        a: "Yes. Message us on WhatsApp with your booking reference. Cancellations made more than 2 hours before pick-up incur no charge. Late cancellations may carry a small fee depending on the vehicle class.",
      },
      {
        q: "Do you offer return journey bookings?",
        a: "Absolutely — and we recommend booking both legs simultaneously. We offer a small discount on return bookings and it guarantees the same driver for both directions if you prefer.",
      },
    ],
  },
  {
    category: "Airport Transfers",
    items: [
      {
        q: "What happens if my flight is delayed?",
        a: "We track your flight in real time. If your flight is delayed, we automatically adjust the driver's schedule at no additional charge. You will not be charged waiting time for delays beyond your control.",
      },
      {
        q: "Where will my driver meet me?",
        a: "Your driver will be waiting in the arrivals hall with a sign bearing your name. For DXB, we meet at Terminal 1, 2, or 3 arrivals. For DWC (Al Maktoum), we meet at the main arrivals area. Full instructions are sent with your confirmation.",
      },
      {
        q: "Do you cover Dubai World Central (Al Maktoum Airport)?",
        a: "Yes. We serve both Dubai International (DXB) and Dubai World Central (DWC). The base rate for DWC may differ from DXB — we'll quote exactly when you book.",
      },
      {
        q: "Can I book a transfer for a group?",
        a: "Our standard vehicles accommodate up to 3 passengers. For larger groups, we can arrange multiple vehicles simultaneously. Message us with group size and we'll quote accordingly.",
      },
    ],
  },
  {
    category: "Drivers & Fleet",
    items: [
      {
        q: "Are your drivers RTA licensed?",
        a: "Yes. Every DXB Driver chauffeur holds a valid UAE driving licence and is registered with the Road and Transport Authority (RTA). We conduct thorough background checks on all drivers before they join our team.",
      },
      {
        q: "What vehicles are in your fleet?",
        a: "We operate Economy (Toyota Camry or equivalent), Business (Mercedes E-Class or equivalent), and Premium (Mercedes S-Class or equivalent) classes. All vehicles are maintained to exacting standards and presented identically each time.",
      },
      {
        q: "Can I request the same driver again?",
        a: "Yes. Once you've had a positive experience with a particular chauffeur, you can request them by name for future bookings. Subject to availability, we'll always try to match returning clients with their preferred driver.",
      },
      {
        q: "Are your vehicles non-smoking?",
        a: "All vehicles are strictly non-smoking. If you need to stop during a journey, your driver will accommodate this. Our vehicles are cleaned and re-presented before every booking.",
      },
    ],
  },
  {
    category: "Pricing & Payment",
    items: [
      {
        q: "How is pricing calculated?",
        a: "We provide fixed quotes before every journey — no meters, no surge pricing, no guessing. The rate we confirm is the rate you pay. Our pricing is based on vehicle class, route, and time of day (late-night and public holiday rates may apply).",
      },
      {
        q: "What payment methods do you accept?",
        a: "We accept cash in AED on completion of the journey. Bank transfer and corporate billing are available for business accounts. Please discuss payment preference when booking.",
      },
      {
        q: "Are there additional charges I should know about?",
        a: "Toll charges on Dubai roads (Salik) may be added to the final fare. These are communicated upfront. There are no hidden fees — if anything additional applies, we tell you in advance.",
      },
      {
        q: "Do you offer corporate accounts?",
        a: "Yes. We work with businesses that require regular transfers for executives, guests, or staff. Corporate accounts include dedicated booking lines, consolidated monthly invoicing, and priority driver assignment. Contact us to discuss terms.",
      },
    ],
  },
];

export default function FAQ() {
  return (
    <div className="bg-background text-foreground overflow-x-hidden">
      <Navbar />

      {/* HERO */}
      <section className="pt-40 pb-24 md:pt-48 md:pb-32 border-b border-white/5" data-testid="section-faq-hero">
        <div className="container mx-auto px-6 md:px-12">
          <motion.span
            className="block text-primary text-xs uppercase tracking-[0.4em] mb-6"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.6 }}
          >
            FAQ
          </motion.span>
          <motion.h1
            className="font-serif text-5xl md:text-6xl lg:text-7xl text-foreground leading-tight max-w-3xl"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.1 }}
          >
            Questions,
            <br />
            <span className="text-primary">Answered Honestly.</span>
          </motion.h1>
          <motion.p
            className="text-muted-foreground text-lg mt-8 max-w-xl leading-relaxed"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.2 }}
          >
            Everything you need to know about booking, our fleet, pricing, and what to expect when you travel with DXB Driver.
          </motion.p>
        </div>
      </section>

      {/* FAQ ACCORDION */}
      <section className="py-28 md:py-36" data-testid="section-faq-accordions">
        <div className="container mx-auto px-6 md:px-12 max-w-4xl">
          <div className="space-y-20">
            {faqCategories.map((cat, ci) => (
              <motion.div
                key={cat.category}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.7, delay: ci * 0.05 }}
              >
                <SectionTitle subtitle={`Category ${String(ci + 1).padStart(2, "0")}`} title={cat.category} />

                <Accordion type="single" collapsible className="space-y-0">
                  {cat.items.map((item, ii) => (
                    <AccordionItem
                      key={ii}
                      value={`${ci}-${ii}`}
                      className="border-b border-white/5 py-2"
                      data-testid={`faq-${ci}-${ii}`}
                    >
                      <AccordionTrigger className="text-foreground text-left font-serif text-lg md:text-xl hover:text-primary hover:no-underline transition-colors py-6">
                        {item.q}
                      </AccordionTrigger>
                      <AccordionContent className="text-muted-foreground text-sm leading-relaxed pb-8 max-w-2xl">
                        {item.a}
                      </AccordionContent>
                    </AccordionItem>
                  ))}
                </Accordion>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* STILL HAVE QUESTIONS */}
      <section className="py-28 md:py-36 bg-card border-y border-white/5" data-testid="section-faq-contact">
        <div className="container mx-auto px-6 md:px-12 text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
          >
            <span className="block text-primary text-xs uppercase tracking-[0.4em] mb-6">Still Have Questions?</span>
            <h2 className="font-serif text-4xl md:text-5xl text-foreground mb-6">
              We're One Message Away.
            </h2>
            <p className="text-muted-foreground max-w-md mx-auto mb-10 leading-relaxed text-sm">
              If you didn't find what you were looking for, message us directly. We respond on WhatsApp within 15 minutes.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a href="https://wa.me/971501234567" target="_blank" rel="noreferrer" data-testid="link-faq-whatsapp">
                <CTAButton variant="filled" className="px-12 py-4">Ask on WhatsApp</CTAButton>
              </a>
              <Link href="/contact" data-testid="link-faq-contact">
                <CTAButton variant="outline" className="px-12 py-4">Contact Form</CTAButton>
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
