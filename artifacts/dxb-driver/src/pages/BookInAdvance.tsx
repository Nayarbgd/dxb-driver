import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { useLanguage } from "@/context/LanguageContext";
import { CheckCircle, Calendar, Shield, MessageCircle } from "lucide-react";

const WA_NUMBER = "971528730883";

const fadeUp = {
  hidden: { opacity: 0, y: 28 },
  show: (i = 0) => ({ opacity: 1, y: 0, transition: { duration: 0.55, delay: i * 0.1, ease: [0.22, 1, 0.36, 1] } }),
};

const BENEFIT_ICONS = [Shield, Calendar, MessageCircle];

type FormState = {
  name: string;
  whatsapp: string;
  email: string;
  pickup: string;
  destination: string;
  date: string;
  time: string;
  tripType: "one-way" | "return";
  notes: string;
};

const EMPTY: FormState = {
  name: "", whatsapp: "", email: "", pickup: "", destination: "",
  date: "", time: "", tripType: "one-way", notes: "",
};

export default function BookInAdvance() {
  const { t, lang } = useLanguage();
  const b = t.bookInAdvance;

  const [form, setForm] = useState<FormState>(EMPTY);
  const [submitted, setSubmitted] = useState(false);
  const [errors, setErrors] = useState<Partial<Record<keyof FormState, boolean>>>({});

  function set(key: keyof FormState, value: string) {
    setForm(prev => ({ ...prev, [key]: value }));
    setErrors(prev => ({ ...prev, [key]: false }));
  }

  function validate(): boolean {
    const required: (keyof FormState)[] = ["name", "whatsapp", "pickup", "destination", "date", "time"];
    const next: Partial<Record<keyof FormState, boolean>> = {};
    let ok = true;
    for (const k of required) {
      if (!form[k].trim()) { next[k] = true; ok = false; }
    }
    setErrors(next);
    return ok;
  }

  function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    if (!validate()) return;

    const tripLabel = form.tripType === "return"
      ? (lang === "es" ? "Ida Y Vuelta" : "Return Trip")
      : (lang === "es" ? "Solo Ida" : "One Way");

    const lines = lang === "es"
      ? [
          "Hola DXB Driver,",
          "",
          "Me gustaría reservar un viaje con anticipación.",
          "",
          `Nombre: ${form.name}`,
          `WhatsApp: ${form.whatsapp}`,
          form.email ? `Correo: ${form.email}` : null,
          `Recogida: ${form.pickup}`,
          `Destino: ${form.destination}`,
          `Fecha: ${form.date}`,
          `Hora: ${form.time}`,
          `Tipo de viaje: ${tripLabel}`,
          form.notes ? `Notas: ${form.notes}` : null,
          "",
          "Por favor confirmen disponibilidad.",
        ]
      : [
          "Hi DXB Driver,",
          "",
          "I would like to reserve a ride in advance.",
          "",
          `Name: ${form.name}`,
          `WhatsApp: ${form.whatsapp}`,
          form.email ? `Email: ${form.email}` : null,
          `Pickup: ${form.pickup}`,
          `Destination: ${form.destination}`,
          `Date: ${form.date}`,
          `Time: ${form.time}`,
          `Trip Type: ${tripLabel}`,
          form.notes ? `Notes: ${form.notes}` : null,
          "",
          "Please confirm availability.",
        ];

    const message = lines.filter(l => l !== null).join("\n");
    window.open(`https://wa.me/${WA_NUMBER}?text=${encodeURIComponent(message)}`, "_blank");
    setSubmitted(true);
  }

  const inputBase =
    "w-full bg-white/[0.04] border border-white/10 text-foreground placeholder:text-white/25 px-4 py-4 text-sm focus:outline-none focus:border-primary/60 focus:bg-white/[0.06] transition-all duration-200 rounded-none";
  const inputError = "border-red-500/60 bg-red-500/5";
  const labelBase = "block text-xs uppercase tracking-[0.18em] text-white/45 mb-2 font-medium";

  return (
    <div className="min-h-screen bg-background text-foreground">
      <Navbar />

      {/* ── HERO ── */}
      <section className="relative pt-36 pb-28 overflow-hidden">
        {/* Background texture */}
        <div className="absolute inset-0 pointer-events-none">
          <div className="absolute inset-0 bg-[radial-gradient(ellipse_80%_60%_at_50%_-10%,rgba(212,175,55,0.10),transparent)]" />
          <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-primary/20 to-transparent" />
        </div>

        <div className="container mx-auto px-6 md:px-12 text-center relative z-10">
          <motion.div
            initial="hidden" animate="show" variants={fadeUp} custom={0}
            className="inline-flex items-center gap-2 px-5 py-2 border border-primary/25 text-primary text-xs uppercase tracking-[0.25em] mb-10 bg-primary/5"
          >
            <Calendar className="w-3.5 h-3.5" />
            {lang === "es" ? "Reserva Con Anticipación" : "Book in Advance"}
          </motion.div>

          <motion.h1
            initial="hidden" animate="show" variants={fadeUp} custom={1}
            className="font-serif text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-bold leading-[1.08] tracking-tight mb-6"
          >
            <span className="block text-primary">{b.hero.line1}</span>
            <span className="block text-foreground">{b.hero.line2}</span>
          </motion.h1>

          <motion.div
            initial="hidden" animate="show" variants={fadeUp} custom={2}
            className="mt-8 mb-6 space-y-1"
          >
            <p className="text-white/50 text-lg md:text-xl font-light italic">{b.hero.sub1}</p>
            <p className="text-white/50 text-lg md:text-xl font-light italic">{b.hero.sub2}</p>
          </motion.div>

          <motion.p
            initial="hidden" animate="show" variants={fadeUp} custom={3}
            className="text-white/60 text-base md:text-lg max-w-2xl mx-auto leading-relaxed"
          >
            {b.hero.body}
          </motion.p>
        </div>
      </section>

      {/* ── BENEFIT CARDS ── */}
      <section className="py-20 relative">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_60%_40%_at_50%_50%,rgba(212,175,55,0.03),transparent)] pointer-events-none" />
        <div className="container mx-auto px-6 md:px-12">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {b.benefits.items.map((item, i) => {
              const Icon = BENEFIT_ICONS[i];
              return (
                <motion.div
                  key={i}
                  initial="hidden" whileInView="show" viewport={{ once: true }} variants={fadeUp} custom={i * 0.5}
                  className="relative border border-white/8 bg-white/[0.025] p-8 group hover:border-primary/30 hover:bg-white/[0.04] transition-all duration-400"
                >
                  <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-primary/30 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-400" />
                  <div className="w-10 h-10 border border-primary/30 flex items-center justify-center mb-6 group-hover:border-primary/60 transition-colors duration-300">
                    <Icon className="w-4.5 h-4.5 text-primary" strokeWidth={1.5} />
                  </div>
                  <h3 className="font-serif text-lg text-foreground mb-3 leading-snug">{item.title}</h3>
                  <p className="text-white/50 text-sm leading-relaxed">{item.body}</p>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* ── FORM / CONFIRMATION ── */}
      <section className="py-24 relative">
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-primary/[0.02] to-transparent pointer-events-none" />
        <div className="container mx-auto px-6 md:px-12">
          <motion.div
            initial="hidden" whileInView="show" viewport={{ once: true }} variants={fadeUp}
            className="text-center mb-16"
          >
            <div className="w-12 h-px bg-primary/40 mx-auto mb-6" />
            <h2 className="font-serif text-3xl md:text-4xl lg:text-5xl font-bold text-foreground">
              {b.form.sectionTitle}
            </h2>
          </motion.div>

          <div className="max-w-2xl mx-auto">
            <AnimatePresence mode="wait">
              {!submitted ? (
                <motion.form
                  key="form"
                  initial={{ opacity: 0, y: 24 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -16 }}
                  transition={{ duration: 0.4 }}
                  onSubmit={handleSubmit}
                  className="space-y-5"
                >
                  {/* Name + WhatsApp */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                    <div>
                      <label className={labelBase}>{b.form.name}</label>
                      <input
                        type="text"
                        autoComplete="name"
                        value={form.name}
                        onChange={e => set("name", e.target.value)}
                        className={`${inputBase} ${errors.name ? inputError : ""}`}
                        placeholder={lang === "es" ? "Tu nombre" : "Your full name"}
                      />
                    </div>
                    <div>
                      <label className={labelBase}>{b.form.whatsapp}</label>
                      <input
                        type="tel"
                        autoComplete="tel"
                        value={form.whatsapp}
                        onChange={e => set("whatsapp", e.target.value)}
                        className={`${inputBase} ${errors.whatsapp ? inputError : ""}`}
                        placeholder="+971 5X XXX XXXX"
                      />
                    </div>
                  </div>

                  {/* Email */}
                  <div>
                    <label className={labelBase}>{b.form.email}</label>
                    <input
                      type="email"
                      autoComplete="email"
                      value={form.email}
                      onChange={e => set("email", e.target.value)}
                      className={inputBase}
                      placeholder={lang === "es" ? "tu@correo.com" : "you@email.com"}
                    />
                  </div>

                  {/* Pickup + Destination */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                    <div>
                      <label className={labelBase}>{b.form.pickup}</label>
                      <input
                        type="text"
                        value={form.pickup}
                        onChange={e => set("pickup", e.target.value)}
                        className={`${inputBase} ${errors.pickup ? inputError : ""}`}
                        placeholder={lang === "es" ? "Dirección de recogida" : "Pickup address"}
                      />
                    </div>
                    <div>
                      <label className={labelBase}>{b.form.destination}</label>
                      <input
                        type="text"
                        value={form.destination}
                        onChange={e => set("destination", e.target.value)}
                        className={`${inputBase} ${errors.destination ? inputError : ""}`}
                        placeholder={lang === "es" ? "Destino" : "Where to"}
                      />
                    </div>
                  </div>

                  {/* Date + Time */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                    <div>
                      <label className={labelBase}>{b.form.date}</label>
                      <input
                        type="date"
                        value={form.date}
                        onChange={e => set("date", e.target.value)}
                        min={new Date().toISOString().split("T")[0]}
                        className={`${inputBase} ${errors.date ? inputError : ""} [color-scheme:dark]`}
                      />
                    </div>
                    <div>
                      <label className={labelBase}>{b.form.time}</label>
                      <input
                        type="time"
                        value={form.time}
                        onChange={e => set("time", e.target.value)}
                        className={`${inputBase} ${errors.time ? inputError : ""} [color-scheme:dark]`}
                      />
                    </div>
                  </div>

                  {/* Trip Type */}
                  <div>
                    <label className={labelBase}>{b.form.tripType}</label>
                    <div className="grid grid-cols-2 gap-3">
                      {(["one-way", "return"] as const).map(v => {
                        const label = v === "one-way" ? b.form.oneWay : b.form.returnTrip;
                        const active = form.tripType === v;
                        return (
                          <button
                            key={v}
                            type="button"
                            onClick={() => set("tripType", v)}
                            className={`py-4 px-4 border text-sm uppercase tracking-widest font-medium transition-all duration-200 ${
                              active
                                ? "border-primary bg-primary/10 text-primary"
                                : "border-white/10 text-white/40 hover:border-white/20 hover:text-white/60"
                            }`}
                          >
                            {active && <span className="mr-2 text-primary">✓</span>}
                            {label}
                          </button>
                        );
                      })}
                    </div>
                  </div>

                  {/* Notes */}
                  <div>
                    <label className={labelBase}>{b.form.notes}</label>
                    <textarea
                      value={form.notes}
                      onChange={e => set("notes", e.target.value)}
                      rows={4}
                      placeholder={b.form.notesPh}
                      className={`${inputBase} resize-none`}
                    />
                  </div>

                  {/* Submit */}
                  <div className="pt-2">
                    <button
                      type="submit"
                      className="group relative w-full py-5 px-8 bg-primary text-black font-semibold uppercase tracking-[0.2em] text-sm overflow-hidden transition-all duration-300 hover:bg-primary/90 active:scale-[0.99]"
                    >
                      <span className="relative z-10 flex items-center justify-center gap-3">
                        <svg viewBox="0 0 24 24" className="w-5 h-5 flex-shrink-0 fill-current" xmlns="http://www.w3.org/2000/svg">
                          <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
                        </svg>
                        {b.form.submit}
                      </span>
                    </button>
                    <p className="text-center text-white/25 text-xs mt-4 tracking-wide">
                      {lang === "es"
                        ? "Se abrirá WhatsApp con los detalles de tu reserva"
                        : "WhatsApp will open with your booking details pre-filled"}
                    </p>
                  </div>
                </motion.form>
              ) : (
                <motion.div
                  key="confirm"
                  initial={{ opacity: 0, scale: 0.97 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
                  className="text-center py-16 px-8 border border-primary/20 bg-primary/[0.03]"
                >
                  <motion.div
                    initial={{ scale: 0.5, opacity: 0 }}
                    animate={{ scale: 1, opacity: 1 }}
                    transition={{ delay: 0.2, duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
                    className="w-16 h-16 border border-primary/40 flex items-center justify-center mx-auto mb-8"
                  >
                    <CheckCircle className="w-7 h-7 text-primary" strokeWidth={1.5} />
                  </motion.div>
                  <h3 className="font-serif text-3xl md:text-4xl font-bold text-primary mb-6">
                    {b.confirm.title}
                  </h3>
                  {b.confirm.body.split("\n\n").map((para, i) => (
                    <p key={i} className={`${i === 0 ? "text-foreground text-lg" : "text-white/50 text-base"} mb-3 leading-relaxed`}>
                      {para}
                    </p>
                  ))}
                  <button
                    onClick={() => { setSubmitted(false); setForm(EMPTY); }}
                    className="mt-8 border border-white/15 text-white/40 hover:border-primary/30 hover:text-primary text-xs uppercase tracking-widest px-6 py-3 transition-all duration-200"
                  >
                    {lang === "es" ? "Nueva Reserva" : "New Booking"}
                  </button>
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
