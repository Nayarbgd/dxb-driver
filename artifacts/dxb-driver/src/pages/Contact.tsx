import { motion } from "framer-motion";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { FloatingWhatsApp } from "@/components/FloatingWhatsApp";
import { CTAButton } from "@/components/CTAButton";
import { SectionTitle } from "@/components/SectionTitle";
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { useToast } from "@/hooks/use-toast";
import { SiWhatsapp } from "react-icons/si";
import { MapPin, Phone, Mail } from "lucide-react";

const bookingSchema = z.object({
  name: z.string().min(2, "Please enter your full name"),
  phone: z.string().min(7, "Please enter a valid phone number"),
  time: z.string().optional(),
  notes: z.string().optional(),
});

type BookingFormData = z.infer<typeof bookingSchema>;

export default function Contact() {
  const { toast } = useToast();

  const form = useForm<BookingFormData>({
    resolver: zodResolver(bookingSchema),
    defaultValues: {
      name: "",
      phone: "",
      time: "",
      notes: "",
    },
  });

  function onSubmit(data: BookingFormData) {
    const lines = [
      "Hi DXB Driver! I need a ride.",
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
    toast({
      title: "Redirecting to WhatsApp",
      description: "Your details have been prepared. Complete and send the message to confirm.",
    });
    form.reset();
  }

  return (
    <div className="bg-background text-foreground overflow-x-hidden">
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
            Book a Journey
          </motion.span>
          <motion.h1
            className="font-serif text-5xl md:text-6xl lg:text-7xl text-foreground leading-tight max-w-3xl"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.1 }}
          >
            One Message.
            <br />
            <span className="text-primary">Your Driver Is Ready.</span>
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
              <SectionTitle subtitle="Get in Touch" title="We Respond Within Minutes." />

              <div className="space-y-8 mb-12">
                <p className="text-muted-foreground leading-relaxed text-sm">
                  Fill in the form and we'll pre-fill a WhatsApp message for you to send directly. Alternatively, message us yourself at any time — we are available 24 hours a day.
                </p>

                <div className="space-y-6">
                  <a
                    href="https://wa.me/971528730883?text=Hi%20DXB%20Driver!%20I%20need%20a%20ride.%0AFrom%3A%20%0ATo%3A%20%0ADate%20%26%20Time%3A%20%0AVehicle%3A%20%0ANotes%3A%20..."
                    target="_blank"
                    rel="noreferrer"
                    className="flex items-center gap-4 group"
                    data-testid="link-contact-whatsapp-direct"
                  >
                    <div className="w-10 h-10 border border-primary/30 flex items-center justify-center text-primary group-hover:bg-primary/10 transition-colors">
                      <SiWhatsapp className="w-5 h-5" />
                    </div>
                    <div>
                      <p className="text-foreground text-sm font-semibold group-hover:text-primary transition-colors">WhatsApp</p>
                      <p className="text-muted-foreground text-xs">+971 52 873 0883</p>
                    </div>
                  </a>

                  <a
                    href="tel:+971528730883"
                    className="flex items-center gap-4 group"
                    data-testid="link-contact-phone"
                  >
                    <div className="w-10 h-10 border border-white/10 flex items-center justify-center text-muted-foreground group-hover:border-primary/30 group-hover:text-primary transition-colors">
                      <Phone className="w-5 h-5" />
                    </div>
                    <div>
                      <p className="text-foreground text-sm font-semibold group-hover:text-primary transition-colors">Phone</p>
                      <p className="text-muted-foreground text-xs">+971 52 873 0883</p>
                    </div>
                  </a>

                  <a
                    href="mailto:dxbdriver@dxbdriver.com"
                    className="flex items-center gap-4 group"
                    data-testid="link-contact-email"
                  >
                    <div className="w-10 h-10 border border-white/10 flex items-center justify-center text-muted-foreground group-hover:border-primary/30 group-hover:text-primary transition-colors">
                      <Mail className="w-5 h-5" />
                    </div>
                    <div>
                      <p className="text-foreground text-sm font-semibold group-hover:text-primary transition-colors">Email</p>
                      <p className="text-muted-foreground text-xs">dxbdriver@dxbdriver.com</p>
                    </div>
                  </a>

                  <div className="flex items-start gap-4">
                    <div className="w-10 h-10 border border-white/10 flex items-center justify-center text-muted-foreground shrink-0">
                      <MapPin className="w-5 h-5" />
                    </div>
                    <div>
                      <p className="text-foreground text-sm font-semibold">Location</p>
                      <p className="text-muted-foreground text-xs leading-relaxed">DAMAC Smart Heights, 23rd Floor,<br />Barsha Heights, Dubai, UAE</p>
                    </div>
                  </div>
                </div>
              </div>

              <div className="border border-white/5 bg-card p-6">
                <p className="text-xs uppercase tracking-widest text-muted-foreground mb-4">Operating Hours</p>
                <div className="space-y-3">
                  <div className="flex justify-between text-sm">
                    <span className="text-muted-foreground">Bookings</span>
                    <span className="text-foreground">24 / 7</span>
                  </div>
                  <div className="flex justify-between text-sm">
                    <span className="text-muted-foreground">WhatsApp Response</span>
                    <span className="text-foreground">Within 15 min</span>
                  </div>
                  <div className="flex justify-between text-sm">
                    <span className="text-muted-foreground">Airport Transfers</span>
                    <span className="text-foreground">All hours</span>
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
                <h3 className="font-serif text-2xl text-foreground">Booking Request Form</h3>
                <p className="text-muted-foreground text-sm mt-2">We'll send your details directly to WhatsApp for confirmation.</p>
              </div>

              <Form {...form}>
                <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6" data-testid="form-booking">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <FormField
                      control={form.control}
                      name="name"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel className="text-xs uppercase tracking-widest text-muted-foreground">Full Name</FormLabel>
                          <FormControl>
                            <Input
                              placeholder="Your name"
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
                          <FormLabel className="text-xs uppercase tracking-widest text-muted-foreground">Phone / WhatsApp</FormLabel>
                          <FormControl>
                            <Input
                              placeholder="+971 5X XXX XXXX"
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
                        <FormLabel className="text-xs uppercase tracking-widest text-muted-foreground">Preferred Time (Optional)</FormLabel>
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
                        <FormLabel className="text-xs uppercase tracking-widest text-muted-foreground">Additional Notes (Optional)</FormLabel>
                        <FormControl>
                          <Textarea
                            placeholder="Flight number, special requests, number of passengers..."
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
                    Send Booking Request via WhatsApp
                  </CTAButton>
                </form>
              </Form>
            </motion.div>
          </div>
        </div>
      </section>

      <Footer />
      <FloatingWhatsApp />
    </div>
  );
}
