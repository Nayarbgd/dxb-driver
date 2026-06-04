import { motion } from "framer-motion";
import { SEOHead } from "@/components/SEOHead";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { CTAButton } from "@/components/CTAButton";
import { SectionTitle } from "@/components/SectionTitle";
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { useToast } from "@/hooks/use-toast";
import { SiWhatsapp } from "react-icons/si";
import { MapPin, Phone, Mail } from "lucide-react";
import { useLanguage } from "@/context/LanguageContext";

type BookingFormData = { name: string; phone: string; time?: string; notes?: string };

export default function Contact() {
  const { t, waLink, lang } = useLanguage();
  const { toast } = useToast();

  const bookingSchema = z.object({
    name: z.string().min(2, t.contact.form.nameError),
    phone: z.string().min(7, t.contact.form.phoneError),
    time: z.string().optional(),
    notes: z.string().optional(),
  });

  const form = useForm<BookingFormData>({
    resolver: zodResolver(bookingSchema),
    defaultValues: { name: "", phone: "", time: "", notes: "" },
  });

  function onSubmit(data: BookingFormData) {
    const lines =
      lang === "es"
        ? [
            "Hola DXB Driver! Necesito un servicio de chófer.",
            `Nombre: ${data.name}`,
            `Teléfono: ${data.phone}`,
            `Hora: ${data.time || "..."}`,
            "Lugar de recogida: ",
            "Destino: ",
            "Vehículo: ",
            `Notas: ${data.notes || "..."}`,
          ]
        : [
            "Hi DXB Driver! I need a chauffeur service.",
            `Name: ${data.name}`,
            `Phone: ${data.phone}`,
            `Time: ${data.time || "..."}`,
            "From: ",
            "To: ",
            "Vehicle: ",
            `Notes: ${data.notes || "..."}`,
          ];
    const message = encodeURIComponent(lines.join("\n"));
    window.open(`https://wa.me/971528730883?text=${message}`, "_blank");
    toast({ title: t.contact.form.toastTitle, description: t.contact.form.toastDesc });
    form.reset();
  }

  return (
    <div className="bg-background text-foreground overflow-x-hidden">
      <SEOHead
        title="Book a Dubai Chauffeur | Contact DXB Driver"
        description="Book your Dubai private chauffeur by WhatsApp or contact form. Instant reply, fixed rates, RTA licensed drivers available 24/7. One message away."
      />
      <Navbar />

      {/* HERO */}
      <section className="pt-40 pb-24 md:pt-48 md:pb-32 border-b border-white/5" data-testid="section-contact-hero">
        <div className="container mx-auto px-6 md:px-12">
          <motion.span
            className="block text-primary text-xs uppercase tracking-[0.4em] mb-6"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.6 }}
          >
            {t.contact.pageBadge}
          </motion.span>
          <motion.h1
            className="font-serif text-5xl md:text-6xl lg:text-7xl text-foreground leading-tight max-w-3xl"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.1 }}
          >
            {t.contact.hero.title}
            <br />
            <span className="text-primary">{t.contact.hero.titleGold}</span>
          </motion.h1>
        </div>
      </section>

      {/* CONTACT CONTENT */}
      <section className="py-28 md:py-36" data-testid="section-contact-form">
        <div className="container mx-auto px-6 md:px-12">
          <div className="grid grid-cols-1 lg:grid-cols-5 gap-16 lg:gap-24 items-start">

            {/* LEFT — Info */}
            <motion.div
              className="lg:col-span-2"
              initial={{ opacity: 0, x: -40 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
            >
              <SectionTitle subtitle={t.contact.getInTouch} title={t.contact.subtitle} />

              <div className="space-y-8 mb-12">
                <p className="text-muted-foreground leading-relaxed text-sm">
                  {lang === "es"
                    ? "Complete el formulario y le precompletaremos un mensaje de WhatsApp para que lo envíe directamente. También puede escribirnos en cualquier momento — estamos disponibles las 24 horas del día."
                    : "Fill in the form and we'll pre-fill a WhatsApp message for you to send directly. Alternatively, message us yourself at any time — we are available 24 hours a day."}
                </p>

                <div className="space-y-6">
                  <a href={waLink} target="_blank" rel="noreferrer" className="flex items-center gap-4 group" data-testid="link-contact-whatsapp-direct">
                    <div className="w-10 h-10 border border-primary/30 flex items-center justify-center text-primary group-hover:bg-primary/10 transition-colors">
                      <SiWhatsapp className="w-5 h-5" />
                    </div>
                    <div>
                      <p className="text-foreground text-sm font-semibold group-hover:text-primary transition-colors">{t.contact.info.whatsapp}</p>
                      <p className="text-muted-foreground text-xs">+971 52 873 0883</p>
                    </div>
                  </a>

                  <a href="tel:+971528730883" className="flex items-center gap-4 group" data-testid="link-contact-phone">
                    <div className="w-10 h-10 border border-white/10 flex items-center justify-center text-muted-foreground group-hover:border-primary/30 group-hover:text-primary transition-colors">
                      <Phone className="w-5 h-5" />
                    </div>
                    <div>
                      <p className="text-foreground text-sm font-semibold group-hover:text-primary transition-colors">{t.contact.info.phone}</p>
                      <p className="text-muted-foreground text-xs">+971 52 873 0883</p>
                    </div>
                  </a>

                  <a href="mailto:dxbdriver@dxbdriver.com" className="flex items-center gap-4 group" data-testid="link-contact-email">
                    <div className="w-10 h-10 border border-white/10 flex items-center justify-center text-muted-foreground group-hover:border-primary/30 group-hover:text-primary transition-colors">
                      <Mail className="w-5 h-5" />
                    </div>
                    <div>
                      <p className="text-foreground text-sm font-semibold group-hover:text-primary transition-colors">{t.contact.info.email}</p>
                      <p className="text-muted-foreground text-xs">dxbdriver@dxbdriver.com</p>
                    </div>
                  </a>

                  <div className="flex items-start gap-4">
                    <div className="w-10 h-10 border border-white/10 flex items-center justify-center text-muted-foreground shrink-0">
                      <MapPin className="w-5 h-5" />
                    </div>
                    <div>
                      <p className="text-foreground text-sm font-semibold">{t.contact.info.address}</p>
                      <p className="text-muted-foreground text-xs leading-relaxed whitespace-pre-line">{t.footer.address}</p>
                    </div>
                  </div>
                </div>
              </div>

              <div className="border border-white/5 bg-card p-6">
                <p className="text-xs uppercase tracking-widest text-muted-foreground mb-4">{t.contact.hoursTitle}</p>
                <div className="space-y-3">
                  {t.contact.hours.map((h, i) => (
                    <div key={i} className="flex justify-between text-sm">
                      <span className="text-muted-foreground">{h.label}</span>
                      <span className="text-foreground">{h.value}</span>
                    </div>
                  ))}
                  <div className="flex justify-between text-sm">
                    <span className="text-muted-foreground">{lang === "es" ? "Respuesta WhatsApp" : "WhatsApp Response"}</span>
                    <span className="text-foreground">{lang === "es" ? "En 15 min" : "Within 15 min"}</span>
                  </div>
                </div>
              </div>
            </motion.div>

            {/* RIGHT — Booking Form */}
            <motion.div
              className="lg:col-span-3 border border-white/10 bg-card p-8 md:p-12"
              initial={{ opacity: 0, x: 40 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
            >
              <div className="border-b border-white/5 pb-8 mb-8">
                <h3 className="font-serif text-2xl text-foreground">{t.contact.form.title}</h3>
                <p className="text-muted-foreground text-sm mt-2">{t.contact.form.subtitle}</p>
              </div>

              <Form {...form}>
                <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6" data-testid="form-booking">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <FormField
                      control={form.control}
                      name="name"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel className="text-xs uppercase tracking-widest text-muted-foreground">
                            {t.contact.form.nameLabel}
                          </FormLabel>
                          <FormControl>
                            <Input
                              placeholder={t.contact.form.namePlaceholder}
                              {...field}
                              className="bg-background border-white/10 focus:border-primary/50 text-foreground placeholder:text-muted-foreground/50"
                              data-testid="input-name"
                            />
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />
                    <FormField
                      control={form.control}
                      name="phone"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel className="text-xs uppercase tracking-widest text-muted-foreground">
                            {t.contact.form.phoneLabel}
                          </FormLabel>
                          <FormControl>
                            <Input
                              placeholder={t.contact.form.phonePlaceholder}
                              {...field}
                              className="bg-background border-white/10 focus:border-primary/50 text-foreground placeholder:text-muted-foreground/50"
                              data-testid="input-phone"
                            />
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />
                  </div>

                  <FormField
                    control={form.control}
                    name="time"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel className="text-xs uppercase tracking-widest text-muted-foreground">
                          {t.contact.form.timeLabel}
                        </FormLabel>
                        <FormControl>
                          <Input
                            type="time"
                            {...field}
                            className="bg-background border-white/10 focus:border-primary/50 text-foreground placeholder:text-muted-foreground/50"
                            data-testid="input-time"
                          />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />

                  <FormField
                    control={form.control}
                    name="notes"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel className="text-xs uppercase tracking-widest text-muted-foreground">
                          {t.contact.form.notesLabel}
                        </FormLabel>
                        <FormControl>
                          <Textarea
                            placeholder={t.contact.form.notesPh}
                            rows={3}
                            {...field}
                            className="bg-background border-white/10 focus:border-primary/50 text-foreground placeholder:text-muted-foreground/50 resize-none"
                            data-testid="textarea-notes"
                          />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />

                  <CTAButton
                    type="submit"
                    variant="filled"
                    className="w-full py-4 text-sm justify-center text-center"
                    disabled={form.formState.isSubmitting}
                    data-testid="button-submit-booking"
                  >
                    {t.contact.form.submit}
                  </CTAButton>
                </form>
              </Form>
            </motion.div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
