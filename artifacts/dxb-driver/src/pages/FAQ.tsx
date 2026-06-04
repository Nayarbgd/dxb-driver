import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronDown } from "lucide-react";
import { Link } from "wouter";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { CTAButton } from "@/components/CTAButton";
import { useLanguage } from "@/context/LanguageContext";
import { SEOHead } from "@/components/SEOHead";

const FAQ_SCHEMA = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: [
    { "@type": "Question", name: "How do I book a ride?", acceptedAnswer: { "@type": "Answer", text: "The fastest way is WhatsApp — send us your pickup location, destination, date, and time. We confirm within minutes. You can also use our Contact page booking form, which pre-fills a WhatsApp message for you." } },
    { "@type": "Question", name: "How far in advance should I book?", acceptedAnswer: { "@type": "Answer", text: "We recommend at least 2 hours for city rides and 24 hours for airport transfers. For premium vehicle classes, earlier booking ensures availability. We always try to accommodate last-minute requests — message us and we'll do our best." } },
    { "@type": "Question", name: "Can I modify or cancel a booking?", acceptedAnswer: { "@type": "Answer", text: "Yes. Message us on WhatsApp with your booking reference. Cancellations made more than 2 hours before pick-up incur no charge. Late cancellations may carry a small fee depending on the vehicle class." } },
    { "@type": "Question", name: "Do you offer return journey bookings?", acceptedAnswer: { "@type": "Answer", text: "Absolutely — and we recommend booking both legs simultaneously. We offer a small discount on return bookings and it guarantees the same driver for both directions if you prefer." } },
    { "@type": "Question", name: "Can I book airport transfers in advance?", acceptedAnswer: { "@type": "Answer", text: "Absolutely — and we strongly recommend it. You can book your Dubai airport transfer days, weeks, or even months ahead. We hold your booking, monitor your flight in real time, and adjust automatically for any delays." } },
    { "@type": "Question", name: "What happens if my flight is delayed?", acceptedAnswer: { "@type": "Answer", text: "We track your flight in real time. If your flight is delayed, we automatically adjust the driver's schedule at no additional charge. You will not be charged waiting time for delays beyond your control." } },
    { "@type": "Question", name: "Where will my driver meet me?", acceptedAnswer: { "@type": "Answer", text: "Your driver will be waiting in the arrivals hall with a sign bearing your name. For DXB, we meet at Terminal 1, 2, or 3 arrivals. For DWC (Al Maktoum), we meet at the main arrivals area. Full instructions are sent with your confirmation." } },
    { "@type": "Question", name: "Do you cover Dubai World Central (Al Maktoum Airport)?", acceptedAnswer: { "@type": "Answer", text: "Yes. We serve both Dubai International (DXB) and Dubai World Central (DWC). The base rate for DWC may differ from DXB — we'll quote exactly when you book." } },
    { "@type": "Question", name: "Are your drivers RTA licensed?", acceptedAnswer: { "@type": "Answer", text: "Yes. Every DXB Driver chauffeur holds a valid UAE driving licence and is registered with the Road and Transport Authority (RTA). We conduct thorough background checks on all drivers before they join our team." } },
    { "@type": "Question", name: "Do you provide Spanish-speaking drivers?", acceptedAnswer: { "@type": "Answer", text: "Yes. DXB Driver has English and Spanish-speaking chauffeurs available. If you'd prefer a Spanish-speaking driver for your journey, simply mention it when booking and we'll match you accordingly." } },
    { "@type": "Question", name: "What vehicles are in your fleet?", acceptedAnswer: { "@type": "Answer", text: "We operate Economy (Toyota Camry or equivalent), Business (Mercedes E-Class or equivalent), and Premium (Mercedes S-Class or equivalent) classes. All vehicles are maintained to exacting standards and presented identically each time." } },
    { "@type": "Question", name: "Can I request the same driver again?", acceptedAnswer: { "@type": "Answer", text: "Yes. Once you've had a positive experience with a particular chauffeur, you can request them by name for future bookings. Subject to availability, we'll always try to match returning clients with their preferred driver." } },
    { "@type": "Question", name: "Do you offer fixed pricing?", acceptedAnswer: { "@type": "Answer", text: "Yes — always. Every DXB Driver journey is priced on a fixed rate agreed before you travel. There is no meter running, no surge pricing, and no algorithm adjusting your fare based on demand or time of day. What we quote is what you pay." } },
    { "@type": "Question", name: "Are your services cheaper than Uber or Careem?", acceptedAnswer: { "@type": "Answer", text: "For many journeys — particularly airport transfers and inter-emirate travel — DXB Driver is often more cost-effective than popular ride-hailing apps, especially during peak hours when surge pricing can significantly increase the fare." } },
    { "@type": "Question", name: "What payment methods do you accept?", acceptedAnswer: { "@type": "Answer", text: "We accept cash in AED on completion of the journey. Bank transfer and corporate billing are available for business accounts. Please discuss payment preference when booking." } },
    { "@type": "Question", name: "Are there additional charges I should know about?", acceptedAnswer: { "@type": "Answer", text: "Toll charges on Dubai roads (Salik) may be added to the final fare. These are communicated upfront. There are no hidden fees — if anything additional applies, we tell you in advance." } },
    { "@type": "Question", name: "Do you offer corporate accounts?", acceptedAnswer: { "@type": "Answer", text: "Yes. We work with businesses that require regular transfers for executives, guests, or staff. Corporate accounts include dedicated booking lines, consolidated monthly invoicing, and priority driver assignment. Contact us to discuss terms." } },
  ],
};

function FAQItem({ q, a, index }: { q: string; a: string; index: number }) {
  const [open, setOpen] = useState(false);

  return (
    <motion.div
      className="border-b border-white/5"
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay: index * 0.07, ease: [0.22, 1, 0.36, 1] }}
    >
      <button
        className="w-full flex items-center justify-between gap-4 py-6 text-left group"
        onClick={() => setOpen(!open)}
        data-testid={`faq-toggle-${index}`}
      >
        <span className="font-serif text-lg text-foreground group-hover:text-primary transition-colors leading-snug">
          {q}
        </span>
        <ChevronDown
          className={`w-4 h-4 text-primary flex-shrink-0 transition-transform duration-300 ${open ? "rotate-180" : ""}`}
        />
      </button>
      <AnimatePresence initial={false}>
        {open && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.3, ease: "easeInOut" }}
            className="overflow-hidden"
          >
            <p className="text-muted-foreground text-sm leading-relaxed pb-6 pr-4 md:pr-8">{a}</p>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.div>
  );
}

export default function FAQ() {
  const { t, waLink } = useLanguage();

  return (
    <div className="bg-background text-foreground overflow-x-hidden">
      <SEOHead
        title="Dubai Chauffeur Service FAQ | Booking & Pricing | DXB Driver"
        description="Answers to common questions about booking a private chauffeur in Dubai — pricing, airport transfers, fleet, and how DXB Driver works. Read before you book."
        canonical="https://dxbdriver.com/faq"
        schema={FAQ_SCHEMA}
      />
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
            {t.faq.pageBadge}
          </motion.span>
          <motion.h1
            className="font-serif text-3xl sm:text-4xl md:text-5xl lg:text-7xl text-foreground leading-tight max-w-3xl"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.1 }}
          >
            {t.faq.hero.title}
            <br />
            <span className="text-primary">{t.faq.hero.titleGold}</span>
          </motion.h1>
          <motion.p
            className="text-muted-foreground text-lg mt-8 max-w-xl leading-relaxed"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.2 }}
          >
            {t.faq.hero.subtitle}
          </motion.p>
        </div>
      </section>

      {/* FAQ CATEGORIES */}
      <section className="py-28 md:py-36" data-testid="section-faq-list">
        <div className="container mx-auto px-6 md:px-12 max-w-4xl">
          <div className="space-y-20">
            {t.faq.categories.map((cat, ci) => (
              <motion.div
                key={ci}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
                data-testid={`faq-category-${ci}`}
              >
                <div className="flex items-center gap-4 mb-8">
                  <span className="text-primary text-xs uppercase tracking-[0.4em]">
                    {String(ci + 1).padStart(2, "0")}
                  </span>
                  <div className="w-px h-4 bg-primary/30" />
                  <h2 className="font-serif text-2xl text-foreground">{cat.category}</h2>
                </div>
                <div className="border-t border-white/5">
                  {cat.items.map((item, ii) => (
                    <FAQItem key={ii} q={item.q} a={item.a} index={ci * 10 + ii} />
                  ))}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CONTACT CTA */}
      <section className="py-28 md:py-36 bg-card border-t border-white/5" data-testid="section-faq-cta">
        <div className="container mx-auto px-6 md:px-12 text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <span className="block text-primary text-xs uppercase tracking-[0.4em] mb-6">
              {t.faq.contact.subtitle}
            </span>
            <h2 className="font-serif text-4xl md:text-5xl text-foreground mb-6">
              {t.faq.contact.title}
            </h2>
            <p className="text-muted-foreground max-w-md mx-auto mb-10 leading-relaxed">
              {t.faq.contact.body}
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a href={waLink} target="_blank" rel="noreferrer" data-testid="link-faq-whatsapp">
                <CTAButton variant="filled" className="px-10 py-4">{t.faq.contact.whatsapp}</CTAButton>
              </a>
              <Link href="/contact" data-testid="link-faq-contact">
                <CTAButton variant="outline" className="px-10 py-4">{t.faq.contact.form}</CTAButton>
              </Link>
            </div>
          </motion.div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
