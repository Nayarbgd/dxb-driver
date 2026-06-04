export type Lang = "en" | "es";

const WA_BASE = "https://wa.me/971528730883";

export const waMessages: Record<Lang, string> = {
  en: `Hello DXB Driver,\n\nI would like to book a chauffeur service.\n\nPickup Location: \nDestination: \nDate: \nTime: \nVehicle Preference: \nAdditional Notes: \n\nThank you.`,
  es: `Hola DXB Driver,\n\nMe gustar\u00eda reservar un servicio de ch\u00f3fer.\n\nLugar de recogida: \nDestino: \nFecha: \nHora: \nVeh\u00edculo preferido: \nNotas adicionales: \n\nGracias.`,
};

export function getWaLink(lang: Lang): string {
  return `${WA_BASE}?text=${encodeURIComponent(waMessages[lang])}`;
}

export interface Translations {
  nav: {
    services: string;
    whyUs: string;
    pricing: string;
    about: string;
    faq: string;
    bookNow: string;
    bookInAdvance: string;
  };
  mobileCTA: { bookWhatsapp: string; getQuote: string };
  footer: {
    tagline: string;
    explore: string;
    contact: string;
    links: { services: string; pricing: string; about: string; faq: string };
    getQuote: string;
    address: string;
    rights: string;
    rta: string;
    service24: string;
  };
  home: {
    badge: string;
    title: [string, string, string];
    subtitle: string;
    smallBadge: string;
    trustBar: { label: string; sub: string }[];
    services: {
      subtitle: string;
      title: string;
      airport: { name: string; desc: string; cta: string };
      city: { name: string; desc: string; cta: string };
      emirate: { name: string; desc: string; cta: string };
    };
    howItWorks: {
      subtitle: string;
      title: string;
      steps: { number: string; title: string; body: string }[];
    };
    testimonials: { subtitle: string; title: string };
    faqSection: { subtitle: string; title: string };
    finalCTA: { subtitle: string; title: string; body: string };
  };
  services: {
    pageBadge: string;
    hero: { title: string; titleGold: string; subtitle: string };
    airport: {
      badge: string;
      title: string;
      desc: string;
      goldNote: string;
      features: string[];
      cta: string;
    };
    city: {
      badge: string;
      title: string;
      desc: string;
      features: string[];
      cta: string;
    };
    emirate: {
      badge: string;
      title: string;
      desc: string;
      features: string[];
      cta: string;
    };
    cta: { subtitle: string; title: string; titleGold: string; body: string };
  };
  pricing: {
    pageBadge: string;
    hero: { title: string; titleGold: string; subtitle: string };
    tiers: { subtitle: string; title: string };
    mostPopular: string;
    labels: { airport: string; cityRide: string; baseRate: string; class: string };
    rateNote: string;
    tierData: {
      tier: string;
      tagline: string;
      vehicle: string;
      features: string[];
      cta: string;
    }[];
    routes: { subtitle: string; title: string };
    routeHeaders: [string, string, string, string];
    routeNote: string;
    cta: { title: string; titleGold: string; body: string; whatsapp: string; quote: string };
  };
  about: {
    pageBadge: string;
    hero: { title: string[] };
    story: {
      subtitle: string;
      title: string;
      paragraphs: string[];
    };
    stats: { number: string; label: string }[];
    quote: string;
    values: {
      subtitle: string;
      title: string;
      items: { title: string; desc: string }[];
    };
    drivers: {
      subtitle: string;
      title: string;
      paragraphs: string[];
      blockquote: string;
      attribution: string;
    };
    cta: { title: string; titleGold: string; book: string; contact: string };
  };
  why: {
    pageBadge: string;
    hero: {
      title: string;
      titleGold: string;
      subtitle: string;
      cta1: string;
      cta2: string;
    };
    whyClients: {
      subtitle: string;
      title: string;
      bullets: string[];
      closing: string;
      body1: string;
      body2: string;
      body3: string;
    };
    reliability: {
      subtitle: string;
      title: string;
      body: string[];
      quote: string;
    };
    audience: {
      subtitle: string;
      title: string;
      items: { title: string; body: string }[];
    };
    differentiators: {
      subtitle: string;
      title: string;
      items: { title: string; body: string }[];
    };
    process: {
      subtitle: string;
      title: string;
      steps: { number: string; title: string; body: string }[];
    };
    vsApps: {
      subtitle: string;
      title: string;
      titleGold: string;
      body: string;
      appTitle: string;
      appItems: string[];
      dxbTitle: string;
      dxbItems: string[];
      footnote: string;
    };
    philosophy: {
      subtitle: string;
      title: string;
      body: string[];
      quote: string;
    };
    finalCTA: { subtitle: string; title: string; body: string; cta1: string; cta2: string };
  };
  faq: {
    pageBadge: string;
    hero: { title: string; titleGold: string; subtitle: string };
    categories: { category: string; items: { q: string; a: string }[] }[];
    contact: { subtitle: string; title: string; body: string; whatsapp: string; form: string };
  };
  contact: {
    pageBadge: string;
    hero: { title: string; titleGold: string };
    getInTouch: string;
    subtitle: string;
    hoursTitle: string;
    hours: { label: string; value: string }[];
    form: {
      title: string;
      subtitle: string;
      nameLabel: string;
      namePlaceholder: string;
      nameError: string;
      phoneLabel: string;
      phonePlaceholder: string;
      phoneError: string;
      timeLabel: string;
      notesLabel: string;
      notesPh: string;
      submit: string;
      toastTitle: string;
      toastDesc: string;
    };
    info: { whatsapp: string; phone: string; email: string; address: string };
    finalCTA: { subtitle: string; title: string; body: string };
  };
  bookInAdvance: {
    hero: { line1: string; line2: string; sub1: string; sub2: string; body: string };
    benefits: { items: { title: string; body: string }[] };
    form: {
      sectionTitle: string;
      name: string;
      whatsapp: string;
      email: string;
      pickup: string;
      destination: string;
      date: string;
      time: string;
      tripType: string;
      oneWay: string;
      returnTrip: string;
      notes: string;
      notesPh: string;
      submit: string;
    };
    confirm: { title: string; body: string };
  };
}

const en: Translations = {
  nav: {
    services: "Services",
    whyUs: "Why Us",
    pricing: "Pricing",
    about: "About",
    faq: "FAQ",
    bookNow: "Book Now",
    bookInAdvance: "Book in Advance",
  },
  mobileCTA: { bookWhatsapp: "Book on WhatsApp", getQuote: "Get a Quote" },
  footer: {
    tagline:
      "The premier private chauffeur service in Dubai. Unhurried, precise, and uncompromisingly professional. Where every journey feels like arriving.",
    explore: "Explore",
    contact: "Contact",
    links: { services: "Services", pricing: "Pricing", about: "About Us", faq: "FAQ" },
    getQuote: "Get a Quote",
    address: "DAMAC Smart Heights, 23rd Floor,\nBarsha Heights, Dubai, UAE",
    rights: "All rights reserved.",
    rta: "RTA Licensed",
    service24: "24/7 Service",
  },
  home: {
    badge: "Dubai's Premier Chauffeur Service",
    title: ["Arrive", "Without", "Compromise."],
    subtitle:
      "Private chauffeur service in Dubai, tailored to those who expect more from every journey. Airport transfers, city rides, and inter-emirate travel — on your schedule, in silence and style.",
    smallBadge: "RTA Licensed · 24/7 Available · No upfront payment",
    trustBar: [
      { label: "Fixed Pricing", sub: "No surge, ever" },
      { label: "English & Spanish Drivers", sub: "Bilingual chauffeurs" },
      { label: "Airport Transfers", sub: "DXB · DWC · 24/7" },
      { label: "Available 24/7", sub: "Any hour, any day" },
      { label: "Often More Affordable", sub: "Than app-based rides" },
    ],
    services: {
      subtitle: "What We Offer",
      title: "Services Crafted for Every Journey",
      airport: {
        name: "Airport Transfers",
        desc: "Flight tracked. Driver waiting. Sign in hand. From DXB, DWC or private terminals to any address in Dubai — timed perfectly, confirmed before you board.",
        cta: "Book Transfer",
      },
      city: {
        name: "City Rides",
        desc: "Your private driver for Dubai's every demand. Fixed pricing, bilingual chauffeurs, no surge. DIFC to Downtown. JBR to Jumeirah. Wherever the day takes you.",
        cta: "Book City Ride",
      },
      emirate: {
        name: "Inter-Emirate",
        desc: "Dubai to Abu Dhabi. Dubai to Sharjah. All seven emirates, fixed rates, professional chauffeurs who know every route.",
        cta: "Plan Transfer",
      },
    },
    howItWorks: {
      subtitle: "The Process",
      title: "Simple. From Start to Finish.",
      steps: [
        { number: "01", title: "Message Us", body: "Send your journey details on WhatsApp. We respond within 15 minutes." },
        { number: "02", title: "Get Your Quote", body: "Fixed price confirmed. No surprises. No surge." },
        { number: "03", title: "Arrive in Style", body: "Your chauffeur arrives on time. Every time." },
      ],
    },
    testimonials: { subtitle: "Client Voices", title: "What Our Clients Say" },
    faqSection: { subtitle: "Quick Answers", title: "Frequently Asked" },
    finalCTA: {
      subtitle: "Ready to Experience It?",
      title: "Your Driver Is Waiting.",
      body: "One message. Instant confirmation. Professional service from the moment you book.",
    },
  },
  services: {
    pageBadge: "Our Services",
    hero: {
      title: "Every Journey,",
      titleGold: "Perfectly Arranged.",
      subtitle:
        "Three distinct service categories. One consistent standard of excellence. Whether you need to be at DXB Terminal 3 in two hours or across the Emirates by noon — we are ready.",
    },
    airport: {
      badge: "Service 01",
      title: "Airport Transfers",
      desc: "Every detail considered before you land. We track your flight in real time, account for delays, and ensure your Dubai airport chauffeur is exactly where you expect him — signboard, composure, and all. From DXB and DWC to any Dubai address, with no rushing and no waiting.",
      goldNote:
        "For many airport journeys, a private Dubai airport chauffeur transfer is more cost-effective than ride-hailing apps — especially during peak hours when surge pricing applies. And the level of service is simply incomparable.",
      features: [
        "Live flight tracking — delay-adjusted automatically",
        "Meet-and-greet at arrivals with name sign",
        "Assistance with luggage to the vehicle",
        "All three Dubai terminals covered (T1, T2, T3)",
        "Fixed rates — quoted before you travel, no surprises",
        "English and Spanish-speaking chauffeurs available",
      ],
      cta: "Book Airport Transfer",
    },
    city: {
      badge: "Service 02",
      title: "City Rides",
      desc: "Your private Dubai chauffeur for the city's every demand. Morning meetings in DIFC, lunches in Jumeirah, evening events in Downtown — your driver handles the roads while you handle the day. Fixed pricing, professional bilingual chauffeurs, zero surge.",
      features: [
        "Fixed rates — no surge pricing at any hour",
        "English and Spanish-speaking private drivers",
        "As-directed hourly hire available",
        "Business district specialists (DIFC, Business Bay, DWTC)",
        "Hotels, restaurants, venues across Dubai",
        "Discretion guaranteed",
      ],
      cta: "Book a City Ride",
    },
    emirate: {
      badge: "Service 03",
      title: "Inter-Emirate Transfers",
      desc: "The UAE is more connected than most visitors realise. Dubai to Abu Dhabi in comfort. Dubai to Sharjah in silence. For longer journeys across the Emirates, a fixed-rate private chauffeur consistently offers better value than app-based transportation — with no surge pricing and a professional service from door to door.",
      features: [
        "Dubai ↔ Abu Dhabi chauffeur (approx. 90 min)",
        "Dubai ↔ Sharjah, Ajman, RAK, Fujairah",
        "Fixed rates — no meter surprises, no surge",
        "English and Spanish-speaking chauffeurs on request",
        "Return journeys arranged simultaneously",
        "Corporate account billing available",
      ],
      cta: "Plan Your Transfer",
    },
    cta: {
      subtitle: "Ready to Travel?",
      title: "Every Journey Begins",
      titleGold: "With One Message.",
      body: "Contact us on WhatsApp and receive a fixed quote within minutes.",
    },
  },
  pricing: {
    pageBadge: "Pricing",
    hero: {
      title: "Transparent Pricing.",
      titleGold: "No Surprises.",
      subtitle:
        "Every rate is confirmed before your journey begins. Choose your vehicle class, get a fixed quote, and travel without arithmetic.",
    },
    tiers: { subtitle: "Choose Your Class", title: "Three Tiers, One Standard" },
    mostPopular: "Most Popular",
    labels: { airport: "Airport", cityRide: "City Ride", baseRate: "base rate", class: "Class" },
    rateNote:
      "All rates are indicative. Final price confirmed before booking. Rates may vary for inter-emirate transfers, late night, and public holidays.",
    tierData: [
      {
        tier: "Economy",
        tagline: "Efficient & Comfortable",
        vehicle: "Toyota Camry or equivalent",
        features: [
          "Up to 3 passengers",
          "2 standard luggage bags",
          "Air-conditioned vehicle",
          "Professional licensed driver",
          "Fixed airport rates",
          "WhatsApp communication",
        ],
        cta: "Book Economy",
      },
      {
        tier: "Business",
        tagline: "Executive Comfort",
        vehicle: "Mercedes E-Class or equivalent",
        features: [
          "Up to 3 passengers",
          "3 large luggage bags",
          "Premium leather interior",
          "Complimentary bottled water",
          "Extended legroom",
          "Priority driver assignment",
          "Flight tracking included",
        ],
        cta: "Book Business",
      },
      {
        tier: "Premium",
        tagline: "Uncompromised Luxury",
        vehicle: "Mercedes S-Class or equivalent",
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
        cta: "Book Premium",
      },
    ],
    routes: { subtitle: "Inter-Emirate", title: "Fixed Route Pricing" },
    routeHeaders: ["Route", "Economy", "Business", "Premium"],
    routeNote:
      "One-way rates. Return journey bookings available at a discount. Contact us for corporate accounts.",
    cta: {
      title: "Not Sure Which",
      titleGold: "Class to Choose?",
      body: "Message us on WhatsApp and we'll recommend the right vehicle for your journey and budget.",
      whatsapp: "Ask on WhatsApp",
      quote: "Get a Quote",
    },
  },
  about: {
    pageBadge: "About DXB Driver",
    hero: {
      title: [
        "Built on the",
        "Belief That ",
        "Getting There",
        "Should Be Part",
        "of the Experience.",
      ],
    },
    story: {
      subtitle: "Our Story",
      title: "Dubai Raised. Excellence Driven.",
      paragraphs: [
        "DXB Driver was founded on a simple premise: the people who travel most deserve to travel best. Not just when they land — from the moment they land until they step through the door they're heading for.",
        "Dubai is a city that moves at an extraordinary pace. Its airports process millions of travellers every year, its highways connect a region, and its business community operates on schedules that leave no room for uncertainty. We built our service to match that standard.",
        "Every driver we work with is hand-selected, professionally trained, and deeply familiar with the streets, shortcuts, and sensibilities of Dubai. Every vehicle in our fleet is maintained to the highest standard and presented the same way each time — clean, restocked, and ready.",
        "We do not compete on price. We compete on the feeling you have when you arrive.",
      ],
    },
    stats: [
      { number: "5,000+", label: "Journeys completed" },
      { number: "4.97", label: "Average client rating" },
      { number: "100%", label: "RTA licensed fleet" },
      { number: "24/7", label: "Available, year-round" },
    ],
    quote:
      "\u201cThe standard of a chauffeur service is measured not by the car, but by the moment the door opens.\u201d",
    values: {
      subtitle: "How We Operate",
      title: "The Principles That Drive Us",
      items: [
        {
          title: "Punctuality Is Non-Negotiable",
          desc: "We track every flight, account for every delay, and schedule with margin. Being on time means being early. Our drivers understand that your schedule is sacred.",
        },
        {
          title: "Trust Is Earned on Every Ride",
          desc: "Our fleet is fully RTA-licensed and insured. Our drivers are background-checked. Our vehicles are inspected before every booking. Trust is not assumed — it\u2019s built.",
        },
        {
          title: "The Detail Is the Standard",
          desc: "A chilled bottle of water. Silence unless you speak first. A vehicle that is clean in ways you might not notice but would immediately feel if it weren\u2019t. The detail is everything.",
        },
        {
          title: "Local Knowledge, Global Standard",
          desc: "Our drivers know Dubai the way a concierge knows a hotel. The best routes, the quietest entry points, the buildings that are easier to enter from the east side. Knowledge that only comes from years.",
        },
      ],
    },
    drivers: {
      subtitle: "The Team",
      title: "Our Chauffeurs",
      paragraphs: [
        "We do not hire drivers. We select chauffeurs. The distinction matters enormously to us — and we believe it will matter to you.",
        "Every DXB Driver chauffeur holds a valid UAE driving licence, is registered with the RTA, and has completed our in-house orientation covering route knowledge, client etiquette, vehicle presentation, and emergency procedures.",
        "Many of our drivers have been with us from the beginning. They know our clients by name, remember their preferences, and carry a quiet professionalism that no algorithm can replicate.",
      ],
      blockquote:
        "\u201cThe journey is not a gap between departure and destination. It is part of the experience. We intend it to be a good one.\u201d",
      attribution: "\u2014 DXB Driver",
    },
    cta: {
      title: "Experience the",
      titleGold: "Difference.",
      book: "Book Your Ride",
      contact: "Get in Touch",
    },
  },
  why: {
    pageBadge: "Why Choose Us",
    hero: {
      title: "More Than A Ride.",
      titleGold: "A Better Travel Experience.",
      subtitle:
        "Whether you\u2019re heading to the airport, an important meeting, or exploring the UAE, DXB Driver is built around one simple goal: making every journey smooth, comfortable, and stress-free.",
      cta1: "Book Your Driver",
      cta2: "WhatsApp Us",
    },
    whyClients: {
      subtitle: "The Difference",
      title: "Why Clients Choose DXB Driver",
      body1: "Most transportation services focus on getting you from one place to another.",
      body2: "We focus on everything that happens in between.",
      body3: "The difference is not just the vehicle. It\u2019s the experience.",
      bullets: [
        "Reliable scheduling.",
        "Professional drivers.",
        "Clear communication.",
        "Comfortable travel.",
        "And the peace of mind that comes from knowing your transportation is already taken care of.",
      ],
      closing: "For business professionals, visitors, families, and frequent travelers, that difference matters.",
    },
    reliability: {
      subtitle: "Our Foundation",
      title: "Built Around Reliability",
      body: [
        "When timing matters, reliability matters.",
        "Whether you\u2019re catching a flight, attending an important meeting, or planning a day of travel, transportation should never be something you need to worry about.",
        "DXB Driver is designed to help clients travel with confidence through professional planning, clear communication, and dependable service.",
      ],
      quote: "Because the best journeys are the ones that feel effortless.",
    },
    audience: {
      subtitle: "Our Clientele",
      title: "Who We Serve",
      items: [
        {
          title: "Business Travelers",
          body: "Professional transportation for meetings, conferences, corporate events, and executive schedules.",
        },
        {
          title: "Airport Transfers",
          body: "Smooth airport pickups and drop-offs designed to eliminate travel stress and save valuable time.",
        },
        {
          title: "Visitors & Tourists",
          body: "Comfortable transportation for discovering Dubai and the UAE without the hassle of navigating unfamiliar roads.",
        },
        {
          title: "Families",
          body: "Reliable transportation solutions for everyday travel, special occasions, and family outings.",
        },
      ],
    },
    differentiators: {
      subtitle: "The Details",
      title: "What Makes The Difference",
      items: [
        {
          title: "Professional Chauffeurs",
          body: "Every DXB Driver chauffeur is RTA licensed, background-checked, and trained to the standards of a private chauffeur service — not a ride-hailing driver.",
        },
        {
          title: "Fixed Pricing, Always",
          body: "No meters, no surge pricing, no algorithm adjusting your fare at 7am on a Monday. The rate we quote is the rate you pay — always.",
        },
        {
          title: "Advance Booking",
          body: "Book your Dubai airport transfer or city ride days, weeks, or months ahead. We hold your booking and confirm your driver in advance.",
        },
        {
          title: "Airport Meet & Greet",
          body: "Your chauffeur waits in arrivals with a name sign, monitors your flight in real time, and adjusts for delays automatically — at no extra charge.",
        },
        {
          title: "English & Spanish Drivers",
          body: "Bilingual English and Spanish-speaking chauffeurs available on request. A service detail that matters more than most realize.",
        },
        {
          title: "Dubai, UAE & Beyond",
          body: "City rides, airport transfers across DXB and DWC, and inter-emirate travel to Abu Dhabi, Sharjah, Ajman, and all seven emirates.",
        },
      ],
    },
    process: {
      subtitle: "The Process",
      title: "Simple From Start To Finish",
      steps: [
        { number: "01", title: "Contact Us", body: "Tell us where and when you need transportation." },
        { number: "02", title: "Confirm Your Booking", body: "Receive confirmation and travel details." },
        { number: "03", title: "Enjoy The Journey", body: "Sit back, relax, and let us handle the drive." },
      ],
    },
    vsApps: {
      subtitle: "The Distinction",
      title: "More Than Just",
      titleGold: "Another Ride App",
      body: "When you book a private chauffeur service in Dubai, you\u2019re not just booking a car. You\u2019re booking peace of mind — and that is something no app algorithm can replicate.",
      appTitle: "App-Based Ride Hailing",
      appItems: [
        "Variable pricing — surge rates during peak hours",
        "Random driver assigned — no advance relationship",
        "No flight tracking or automatic delay adjustment",
        "No meet-and-greet — locate your vehicle yourself",
        "Limited vehicle quality control",
        "No bilingual service option",
        "Booking confirmation is never guaranteed",
      ],
      dxbTitle: "DXB Driver — Private Chauffeur",
      dxbItems: [
        "Fixed rates — no surge pricing, ever",
        "Your dedicated professional chauffeur, every time",
        "Live flight tracking with automatic delay adjustment",
        "Meet-and-greet at arrivals with name sign",
        "Luxury fleet — Economy, Business & Premium classes",
        "English and Spanish-speaking chauffeurs available",
        "Advance booking weeks or months ahead",
      ],
      footnote:
        "For airport transfers and longer journeys across the UAE, a fixed-rate Dubai chauffeur service is often more cost-effective than ride-hailing — particularly when surge pricing applies.",
    },
    philosophy: {
      subtitle: "The Philosophy",
      title: "The Real Luxury Is Peace Of Mind",
      body: [
        "Luxury isn\u2019t only about the vehicle.",
        "It\u2019s about knowing someone is already waiting.\nKnowing your schedule is under control.\nKnowing you\u2019ll arrive comfortably and on time.",
      ],
      quote: "That\u2019s the experience DXB Driver aims to deliver every day.",
    },
    finalCTA: {
      subtitle: "Get Started",
      title: "Ready For A Better Travel Experience?",
      body: "Book your next journey today and travel with comfort, confidence, and convenience.",
      cta1: "Book Now",
      cta2: "WhatsApp Us",
    },
  },
  faq: {
    pageBadge: "FAQ",
    hero: {
      title: "Questions,",
      titleGold: "Answered Honestly.",
      subtitle:
        "Everything you need to know about booking, our fleet, pricing, and what to expect when you travel with DXB Driver.",
    },
    categories: [
      {
        category: "Booking",
        items: [
          {
            q: "How do I book a ride?",
            a: "The fastest way is WhatsApp — send us your pickup location, destination, date, and time. We confirm within minutes. You can also use our Contact page booking form, which pre-fills a WhatsApp message for you.",
          },
          {
            q: "How far in advance should I book?",
            a: "We recommend at least 2 hours for city rides and 24 hours for airport transfers. For premium vehicle classes, earlier booking ensures availability. We always try to accommodate last-minute requests — message us and we\u2019ll do our best.",
          },
          {
            q: "Can I modify or cancel a booking?",
            a: "Yes. Message us on WhatsApp with your booking reference. Cancellations made more than 2 hours before pick-up incur no charge. Late cancellations may carry a small fee depending on the vehicle class.",
          },
          {
            q: "Do you offer return journey bookings?",
            a: "Absolutely — and we recommend booking both legs simultaneously. We offer a small discount on return bookings and it guarantees the same driver for both directions if you prefer.",
          },
          {
            q: "Can I book airport transfers in advance?",
            a: "Absolutely — and we strongly recommend it. You can book your Dubai airport transfer days, weeks, or even months ahead. We hold your booking, monitor your flight in real time, and adjust automatically for any delays. Advance booking guarantees your vehicle class and preferred driver, giving you one less thing to think about before you travel.",
          },
        ],
      },
      {
        category: "Airport Transfers",
        items: [
          {
            q: "What happens if my flight is delayed?",
            a: "We track your flight in real time. If your flight is delayed, we automatically adjust the driver\u2019s schedule at no additional charge. You will not be charged waiting time for delays beyond your control.",
          },
          {
            q: "Where will my driver meet me?",
            a: "Your driver will be waiting in the arrivals hall with a sign bearing your name. For DXB, we meet at Terminal 1, 2, or 3 arrivals. For DWC (Al Maktoum), we meet at the main arrivals area. Full instructions are sent with your confirmation.",
          },
          {
            q: "Do you cover Dubai World Central (Al Maktoum Airport)?",
            a: "Yes. We serve both Dubai International (DXB) and Dubai World Central (DWC). The base rate for DWC may differ from DXB — we\u2019ll quote exactly when you book.",
          },
          {
            q: "Can I book a transfer for a group?",
            a: "Our standard vehicles accommodate up to 3 passengers. For larger groups, we can arrange multiple vehicles simultaneously. Message us with group size and we\u2019ll quote accordingly.",
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
            q: "Do you provide Spanish-speaking drivers?",
            a: "Yes. DXB Driver has English and Spanish-speaking chauffeurs available. If you\u2019d prefer a Spanish-speaking driver for your journey, simply mention it when booking and we\u2019ll match you accordingly. It\u2019s one of the ways we make travel more comfortable for our international clientele.",
          },
          {
            q: "What vehicles are in your fleet?",
            a: "We operate Economy (Toyota Camry or equivalent), Business (Mercedes E-Class or equivalent), and Premium (Mercedes S-Class or equivalent) classes. All vehicles are maintained to exacting standards and presented identically each time.",
          },
          {
            q: "Can I request the same driver again?",
            a: "Yes. Once you\u2019ve had a positive experience with a particular chauffeur, you can request them by name for future bookings. Subject to availability, we\u2019ll always try to match returning clients with their preferred driver.",
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
            q: "Do you offer fixed pricing?",
            a: "Yes — always. Every DXB Driver journey is priced on a fixed rate agreed before you travel. There is no meter running, no surge pricing, and no algorithm adjusting your fare based on demand or time of day. What we quote is what you pay.",
          },
          {
            q: "Are your services cheaper than Uber or Careem?",
            a: "For many journeys — particularly airport transfers and inter-emirate travel — DXB Driver is often more cost-effective than popular ride-hailing apps, especially during peak hours when surge pricing can significantly increase the fare. Beyond price, you also receive a private chauffeur experience, advance booking, live flight tracking, and a meet-and-greet service that no app can offer. We encourage you to compare — message us for a quote.",
          },
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
    ],
    contact: {
      subtitle: "Still Have Questions?",
      title: "We\u2019re One Message Away.",
      body: "If you didn\u2019t find what you were looking for, message us directly. We respond on WhatsApp within 15 minutes.",
      whatsapp: "Ask on WhatsApp",
      form: "Contact Form",
    },
  },
  bookInAdvance: {
    hero: {
      line1: "Book Ahead.",
      line2: "Travel Without Uncertainty.",
      sub1: "Good trips are planned.",
      sub2: "Great trips are confirmed in advance.",
      body: "Reserve your chauffeur before your travel date and enjoy complete peace of mind knowing everything is already arranged.",
    },
    benefits: {
      items: [
        {
          title: "Confirmed Before You Travel",
          body: "Your booking is received in advance so your transportation can be planned properly.",
        },
        {
          title: "Perfect For Important Schedules",
          body: "Ideal for airport transfers, business meetings, events and family travel.",
        },
        {
          title: "Fast WhatsApp Confirmation",
          body: "Submit your request and receive confirmation directly through WhatsApp.",
        },
      ],
    },
    form: {
      sectionTitle: "Tell Us About Your Trip",
      name: "Full Name",
      whatsapp: "WhatsApp Number",
      email: "Email Address",
      pickup: "Pickup Location",
      destination: "Destination",
      date: "Date",
      time: "Time",
      tripType: "Trip Type",
      oneWay: "One Way",
      returnTrip: "Return Trip",
      notes: "Notes (optional)",
      notesPh: "Anything we should know about your trip?",
      submit: "Secure My Ride",
    },
    confirm: {
      title: "Thank you.",
      body: "Your booking request has been received.\n\nOur team will review your details and confirm availability shortly via WhatsApp.",
    },
  },
  contact: {
    pageBadge: "Book a Journey",
    hero: { title: "One Message.", titleGold: "Your Driver Is Ready." },
    getInTouch: "Get In Touch",
    subtitle: "We Respond Within Minutes.",
    hoursTitle: "Our Hours",
    hours: [
      { label: "Standard Service", value: "7:00 AM – 11:00 PM" },
      { label: "Airport Transfers", value: "All hours" },
    ],
    form: {
      title: "Booking Request Form",
      subtitle: "We\u2019ll send your details directly to WhatsApp for confirmation.",
      nameLabel: "Full Name",
      namePlaceholder: "Your name",
      nameError: "Please enter your full name",
      phoneLabel: "Phone / WhatsApp",
      phonePlaceholder: "+971 5X XXX XXXX",
      phoneError: "Please enter a valid phone number",
      timeLabel: "Preferred Time (Optional)",
      notesLabel: "Additional Notes (Optional)",
      notesPh: "Flight number, special requests, number of passengers\u2026",
      submit: "Send via WhatsApp",
      toastTitle: "Redirecting to WhatsApp",
      toastDesc: "Your details have been prepared. Complete and send the message to confirm.",
    },
    info: { whatsapp: "WhatsApp", phone: "Call Us", email: "Email", address: "Address" },
    finalCTA: {
      subtitle: "Prefer to Call?",
      title: "We\u2019re Always Available.",
      body: "Our team responds to every message within 15 minutes, day or night.",
    },
  },
};

const es: Translations = {
  nav: {
    services: "Servicios",
    whyUs: "Por Qu\u00e9 Nosotros",
    pricing: "Precios",
    about: "Sobre Nosotros",
    faq: "Preguntas",
    bookNow: "Reservar",
    bookInAdvance: "Reserva Con Anticipación",
  },
  mobileCTA: { bookWhatsapp: "Reservar por WhatsApp", getQuote: "Obtener Presupuesto" },
  footer: {
    tagline:
      "El servicio de ch\u00f3fer privado premium de Dub\u00e1i. Puntual, preciso e incondicionalmente profesional. Donde cada viaje se convierte en una llegada.",
    explore: "Explorar",
    contact: "Contacto",
    links: {
      services: "Servicios",
      pricing: "Precios",
      about: "Sobre Nosotros",
      faq: "Preguntas",
    },
    getQuote: "Obtener Presupuesto",
    address: "DAMAC Smart Heights, Planta 23,\nBarsha Heights, Dub\u00e1i, EAU",
    rights: "Todos los derechos reservados.",
    rta: "Licencia RTA",
    service24: "Servicio 24/7",
  },
  home: {
    badge: "El Servicio de Ch\u00f3fer Premium de Dub\u00e1i",
    title: ["Tu Viaje", "Sin", "Improvisar."],
    subtitle:
      "Servicio de ch\u00f3fer privado en Dub\u00e1i, dise\u00f1ado para quienes exigen lo mejor en cada viaje. Traslados al aeropuerto, viajes por la ciudad y traslados entre emiratos — en su horario, en silencio y con estilo.",
    smallBadge: "Licencia RTA · Disponible 24/7 · Sin pago previo",
    trustBar: [
      { label: "Precio Fijo", sub: "Sin tarifas variables" },
      { label: "Conductores EN & ES", sub: "Servicio biling\u00fce" },
      { label: "Traslados al Aeropuerto", sub: "DXB · DWC · 24/7" },
      { label: "Disponible 24/7", sub: "A cualquier hora" },
      { label: "M\u00e1s Asequible", sub: "Que las apps de transporte" },
    ],
    services: {
      subtitle: "Nuestros Servicios",
      title: "Servicios Para Cada Viaje",
      airport: {
        name: "Traslados al Aeropuerto",
        desc: "Vuelo monitorizado. Conductor esperando. Letrero en mano. Desde DXB o DWC hasta cualquier direcci\u00f3n en Dub\u00e1i, perfectamente coordinado.",
        cta: "Reservar Traslado",
      },
      city: {
        name: "Viajes por la Ciudad",
        desc: "Su ch\u00f3fer privado para cada necesidad en Dub\u00e1i. Precio fijo, conductores biling\u00fces, sin tarifas variables. Desde DIFC hasta Downtown. Donde el d\u00eda le lleve.",
        cta: "Reservar Viaje",
      },
      emirate: {
        name: "Traslados entre Emiratos",
        desc: "Dub\u00e1i a Abu Dabi. Dub\u00e1i a Sharjah. Los siete emiratos, tarifas fijas, ch\u00f3feres profesionales que conocen cada ruta.",
        cta: "Planificar Traslado",
      },
    },
    howItWorks: {
      subtitle: "El Proceso",
      title: "Simple. De Principio a Fin.",
      steps: [
        {
          number: "01",
          title: "Escr\u00edbanos",
          body: "Env\u00ede los detalles de su viaje por WhatsApp. Respondemos en 15 minutos.",
        },
        {
          number: "02",
          title: "Reciba su Presupuesto",
          body: "Precio fijo confirmado. Sin sorpresas. Sin tarifas variables.",
        },
        {
          number: "03",
          title: "Llegue con Estilo",
          body: "Su ch\u00f3fer llega a tiempo. Siempre.",
        },
      ],
    },
    testimonials: { subtitle: "Voces de Clientes", title: "Lo Que Dicen Nuestros Clientes" },
    faqSection: { subtitle: "Respuestas R\u00e1pidas", title: "Preguntas Frecuentes" },
    finalCTA: {
      subtitle: "\u00bfListo Para Experimentarlo?",
      title: "Su Conductor Est\u00e1 Esperando.",
      body: "Un mensaje. Confirmaci\u00f3n instant\u00e1nea. Servicio profesional desde el momento de la reserva.",
    },
  },
  services: {
    pageBadge: "Nuestros Servicios",
    hero: {
      title: "Cada Viaje,",
      titleGold: "Perfectamente Organizado.",
      subtitle:
        "Tres categor\u00edas de servicio distintas. Un est\u00e1ndar de excelencia constante. Ya sea que necesite estar en la Terminal 3 del DXB en dos horas o cruzar los emiratos antes del mediod\u00eda — estamos listos.",
    },
    airport: {
      badge: "Servicio 01",
      title: "Traslados al Aeropuerto",
      desc: "Cada detalle considerado antes de que aterrice. Monitorizamos su vuelo en tiempo real, tenemos en cuenta los retrasos y garantizamos que su ch\u00f3fer est\u00e9 exactamente donde lo espera — letrero, compostura y todo. Desde DXB y DWC hasta cualquier direcci\u00f3n en Dub\u00e1i, sin prisas y sin esperas.",
      goldNote:
        "Para muchos viajes al aeropuerto, un traslado con ch\u00f3fer privado en Dub\u00e1i es m\u00e1s econ\u00f3mico que las apps de transporte — especialmente en horas pico cuando se aplican tarifas variables. Y el nivel de servicio es sencillamente incomparable.",
      features: [
        "Seguimiento del vuelo en tiempo real — ajuste autom\u00e1tico por retrasos",
        "Recibimiento en llegadas con letrero personalizado",
        "Asistencia con el equipaje hasta el veh\u00edculo",
        "Las tres terminales de Dub\u00e1i cubiertas (T1, T2, T3)",
        "Tarifas fijas — confirmadas antes del viaje, sin sorpresas",
        "Ch\u00f3feres en ingl\u00e9s y espa\u00f1ol disponibles",
      ],
      cta: "Reservar Traslado al Aeropuerto",
    },
    city: {
      badge: "Servicio 02",
      title: "Viajes por la Ciudad",
      desc: "Su ch\u00f3fer privado en Dub\u00e1i para cada necesidad. Reuniones matutinas en DIFC, almuerzos en Jumeirah, eventos nocturnos en Downtown — su conductor maneja las carreteras mientras usted maneja el d\u00eda. Precio fijo, ch\u00f3feres biling\u00fces profesionales, cero tarifas variables.",
      features: [
        "Tarifas fijas — sin precios variables a cualquier hora",
        "Conductores privados en ingl\u00e9s y espa\u00f1ol",
        "Contrataci\u00f3n por horas a disposici\u00f3n",
        "Especialistas en distritos de negocios (DIFC, Business Bay, DWTC)",
        "Hoteles, restaurantes y eventos en todo Dub\u00e1i",
        "Discrecci\u00f3n garantizada",
      ],
      cta: "Reservar Viaje por la Ciudad",
    },
    emirate: {
      badge: "Servicio 03",
      title: "Traslados entre Emiratos",
      desc: "Los EAU est\u00e1n m\u00e1s conectados de lo que la mayor\u00eda cree. Dub\u00e1i a Abu Dabi con comodidad. Dub\u00e1i a Sharjah en silencio. Para viajes largos por los emiratos, un ch\u00f3fer privado a precio fijo ofrece consistentemente mejor valor que el transporte por apps — sin tarifas variables y con un servicio profesional de puerta a puerta.",
      features: [
        "Dub\u00e1i \u2194 Abu Dabi ch\u00f3fer (aprox. 90 min)",
        "Dub\u00e1i \u2194 Sharjah, Ajman, RAK, Fujairah",
        "Tarifas fijas — sin sorpresas, sin precios variables",
        "Ch\u00f3feres en ingl\u00e9s y espa\u00f1ol disponibles bajo pedido",
        "Viajes de ida y vuelta organizados simult\u00e1neamente",
        "Facturaci\u00f3n corporativa disponible",
      ],
      cta: "Planificar Traslado",
    },
    cta: {
      subtitle: "\u00bfListo Para Viajar?",
      title: "Cada Viaje Comienza",
      titleGold: "Con Un Mensaje.",
      body: "Cont\u00e1ctenos por WhatsApp y reciba un presupuesto fijo en minutos.",
    },
  },
  pricing: {
    pageBadge: "Precios",
    hero: {
      title: "Precios Transparentes.",
      titleGold: "Sin Sorpresas.",
      subtitle:
        "Cada tarifa se confirma antes de iniciar su viaje. Elija su clase de veh\u00edculo, obtenga un presupuesto fijo y viaje sin preocupaciones.",
    },
    tiers: { subtitle: "Elija Su Clase", title: "Tres Categor\u00edas, Un Est\u00e1ndar" },
    mostPopular: "M\u00e1s Popular",
    labels: {
      airport: "Aeropuerto",
      cityRide: "Ciudad",
      baseRate: "tarifa base",
      class: "Clase",
    },
    rateNote:
      "Todas las tarifas son orientativas. Precio final confirmado antes de la reserva. Las tarifas pueden variar para traslados entre emiratos, noche y festivos.",
    tierData: [
      {
        tier: "Economy",
        tagline: "Eficiente y C\u00f3modo",
        vehicle: "Toyota Camry o equivalente",
        features: [
          "Hasta 3 pasajeros",
          "2 maletas est\u00e1ndar",
          "Veh\u00edculo climatizado",
          "Conductor profesional con licencia",
          "Tarifas fijas al aeropuerto",
          "Comunicaci\u00f3n por WhatsApp",
        ],
        cta: "Reservar Economy",
      },
      {
        tier: "Business",
        tagline: "Confort Ejecutivo",
        vehicle: "Mercedes Clase E o equivalente",
        features: [
          "Hasta 3 pasajeros",
          "3 maletas grandes",
          "Interior de cuero premium",
          "Agua embotellada de cortес\u00eda",
          "Mayor espacio para las piernas",
          "Asignaci\u00f3n prioritaria de conductor",
          "Seguimiento de vuelo incluido",
        ],
        cta: "Reservar Business",
      },
      {
        tier: "Premium",
        tagline: "Lujo Sin Concesiones",
        vehicle: "Mercedes Clase S o equivalente",
        features: [
          "Hasta 3 pasajeros",
          "4 maletas grandes",
          "Interior de lujo insignia",
          "Privacidad / cristales tintados",
          "Toallas fr\u00edas y agua",
          "L\u00ednea de conserjer\u00eda dedicada",
          "Reserva con el mismo conductor",
          "Facturaci\u00f3n corporativa disponible",
        ],
        cta: "Reservar Premium",
      },
    ],
    routes: { subtitle: "Entre Emiratos", title: "Precios de Rutas Fijas" },
    routeHeaders: ["Ruta", "Economy", "Business", "Premium"],
    routeNote:
      "Tarifas de ida. Reservas de ida y vuelta disponibles con descuento. Cont\u00e1ctenos para cuentas corporativas.",
    cta: {
      title: "\u00bfNo Sabe Qu\u00e9",
      titleGold: "Clase Elegir?",
      body: "Esc\u00edbanos por WhatsApp y le recomendaremos el veh\u00edculo adecuado para su viaje y presupuesto.",
      whatsapp: "Consultar por WhatsApp",
      quote: "Obtener Presupuesto",
    },
  },
  about: {
    pageBadge: "Sobre DXB Driver",
    hero: {
      title: [
        "Fundado en la",
        "Creencia de Que ",
        "El Camino",
        "Tambi\u00e9n Es",
        "Parte de la Experiencia.",
      ],
    },
    story: {
      subtitle: "Nuestra Historia",
      title: "Nacidos en Dub\u00e1i. Guiados por la Excelencia.",
      paragraphs: [
        "DXB Driver se fund\u00f3 sobre una premisa simple: las personas que m\u00e1s viajan merecen viajar mejor. No solo cuando aterrizan — desde el momento en que llegan hasta que cruzan la puerta a la que se dirigen.",
        "Dub\u00e1i es una ciudad que se mueve a un ritmo extraordinario. Sus aeropuertos procesan millones de viajeros cada a\u00f1o, sus autopistas conectan una regi\u00f3n y su comunidad empresarial opera con horarios que no dejan lugar a la incertidumbre. Construimos nuestro servicio para estar a la altura de ese est\u00e1ndar.",
        "Cada conductor con el que trabajamos es seleccionado a mano, formado profesionalmente y profundamente familiarizado con las calles, los atajos y las particularidades de Dub\u00e1i. Cada veh\u00edculo de nuestra flota se mantiene seg\u00fan los m\u00e1s altos est\u00e1ndares y se presenta de la misma manera cada vez.",
        "No competimos en precio. Competimos en la sensaci\u00f3n que tiene cuando llega.",
      ],
    },
    stats: [
      { number: "5.000+", label: "Viajes completados" },
      { number: "4,97", label: "Valoraci\u00f3n media de clientes" },
      { number: "100%", label: "Flota con licencia RTA" },
      { number: "24/7", label: "Disponible todo el a\u00f1o" },
    ],
    quote:
      "\u201cEl est\u00e1ndar de un servicio de ch\u00f3fer no se mide por el coche, sino por el momento en que se abre la puerta.\u201d",
    values: {
      subtitle: "C\u00f3mo Operamos",
      title: "Los Principios Que Nos Gu\u00edan",
      items: [
        {
          title: "La Puntualidad Es Innegociable",
          desc: "Monitorizamos cada vuelo, contamos con cada retraso y planificamos con margen. Ser puntual significa llegar antes. Nuestros conductores entienden que su agenda es sagrada.",
        },
        {
          title: "La Confianza Se Gana en Cada Viaje",
          desc: "Nuestra flota tiene licencia y seguro completo de la RTA. Nuestros conductores pasan controles de antecedentes. Nuestros veh\u00edculos se inspeccionan antes de cada reserva. La confianza no se asume — se construye.",
        },
        {
          title: "El Detalle Es el Est\u00e1ndar",
          desc: "Una botella de agua fr\u00eda. Silencio a menos que hable primero. Un veh\u00edculo limpio de maneras que quiz\u00e1s no note, pero que sentir\u00eda de inmediato si no fuera as\u00ed. El detalle lo es todo.",
        },
        {
          title: "Conocimiento Local, Est\u00e1ndar Global",
          desc: "Nuestros conductores conocen Dub\u00e1i como un conserje conoce un hotel. Las mejores rutas, las entradas m\u00e1s tranquilas, los edificios a los que es m\u00e1s f\u00e1cil acceder por el lado este. Conocimiento que solo dan los a\u00f1os.",
        },
      ],
    },
    drivers: {
      subtitle: "El Equipo",
      title: "Nuestros Ch\u00f3feres",
      paragraphs: [
        "No contratamos conductores. Seleccionamos ch\u00f3feres. La distinci\u00f3n nos importa enormemente — y creemos que a usted tambi\u00e9n le importar\u00e1.",
        "Cada ch\u00f3fer de DXB Driver tiene una licencia de conducir v\u00e1lida en los EAU, est\u00e1 registrado en la RTA y ha completado nuestra orientaci\u00f3n interna sobre conocimiento de rutas, etiqueta con el cliente, presentaci\u00f3n del veh\u00edculo y procedimientos de emergencia.",
        "Muchos de nuestros conductores llevan con nosotros desde el principio. Conocen a nuestros clientes por su nombre, recuerdan sus preferencias y mantienen un profesionalismo tranquilo que ning\u00fan algoritmo puede replicar.",
      ],
      blockquote:
        "\u201cEl viaje no es un hueco entre la salida y el destino. Es parte de la experiencia. Nos proponemos que sea una buena experiencia.\u201d",
      attribution: "\u2014 DXB Driver",
    },
    cta: {
      title: "Experimente la",
      titleGold: "Diferencia.",
      book: "Reserve Su Viaje",
      contact: "Ponte en Contacto",
    },
  },
  why: {
    pageBadge: "Por Qu\u00e9 Elegirnos",
    hero: {
      title: "M\u00e1s Que Un Viaje.",
      titleGold: "Una Mejor Experiencia de Desplazamiento.",
      subtitle:
        "Ya sea que se dirija al aeropuerto, a una reuni\u00f3n importante o est\u00e9 explorando los EAU, DXB Driver est\u00e1 construido alrededor de un objetivo simple: hacer que cada viaje sea fluido, c\u00f3modo y sin estr\u00e9s.",
      cta1: "Reservar Su Ch\u00f3fer",
      cta2: "Escribirnos por WhatsApp",
    },
    whyClients: {
      subtitle: "La Diferencia",
      title: "Por Qu\u00e9 los Clientes Eligen DXB Driver",
      body1: "La mayor\u00eda de los servicios de transporte se centran en llevarte de un lugar a otro.",
      body2: "Nosotros nos centramos en todo lo que sucede en el camino.",
      body3: "La diferencia no es solo el veh\u00edculo. Es la experiencia.",
      bullets: [
        "Horarios confiables.",
        "Conductores profesionales.",
        "Comunicaci\u00f3n clara.",
        "Viaje c\u00f3modo.",
        "Y la tranquilidad de saber que su transporte ya est\u00e1 organizado.",
      ],
      closing:
        "Para profesionales de negocios, visitantes, familias y viajeros frecuentes, esa diferencia importa.",
    },
    reliability: {
      subtitle: "Nuestra Base",
      title: "Construidos Sobre la Fiabilidad",
      body: [
        "Cuando el tiempo importa, la fiabilidad importa.",
        "Ya sea que est\u00e9 tomando un vuelo, asistiendo a una reuni\u00f3n importante o planeando un d\u00eda de viaje, el transporte nunca deber\u00eda ser algo por lo que preocuparse.",
        "DXB Driver est\u00e1 dise\u00f1ado para ayudar a los clientes a viajar con confianza a trav\u00e9s de una planificaci\u00f3n profesional, comunicaci\u00f3n clara y servicio confiable.",
      ],
      quote: "Porque los mejores viajes son los que se sienten sin esfuerzo.",
    },
    audience: {
      subtitle: "Nuestra Clientela",
      title: "A Qui\u00e9n Servimos",
      items: [
        {
          title: "Viajeros de Negocios",
          body: "Transporte profesional para reuniones, conferencias, eventos corporativos y agendas ejecutivas.",
        },
        {
          title: "Traslados al Aeropuerto",
          body: "Recogidas y entregas en el aeropuerto dise\u00f1adas para eliminar el estr\u00e9s del viaje y ahorrar tiempo valioso.",
        },
        {
          title: "Visitantes y Turistas",
          body: "Transporte c\u00f3modo para descubrir Dub\u00e1i y los EAU sin las molestias de navegar por carreteras desconocidas.",
        },
        {
          title: "Familias",
          body: "Soluciones de transporte confiables para viajes cotidianos, ocasiones especiales y salidas familiares.",
        },
      ],
    },
    differentiators: {
      subtitle: "Los Detalles",
      title: "Lo Que Marca la Diferencia",
      items: [
        {
          title: "Ch\u00f3feres Profesionales",
          body: "Cada ch\u00f3fer de DXB Driver tiene licencia RTA, ha pasado controles de antecedentes y est\u00e1 formado seg\u00fan los est\u00e1ndares de un servicio de ch\u00f3fer privado.",
        },
        {
          title: "Precio Fijo, Siempre",
          body: "Sin tax\u00edmetros, sin precios variables, sin algoritmos que ajusten su tarifa. La tarifa que cotizamos es la que paga — siempre.",
        },
        {
          title: "Reserva con Anticipaci\u00f3n",
          body: "Reserve su traslado al aeropuerto de Dub\u00e1i o viaje por la ciudad d\u00edas, semanas o meses antes. Mantenemos su reserva y confirmamos su conductor con anticipaci\u00f3n.",
        },
        {
          title: "Recibimiento en el Aeropuerto",
          body: "Su ch\u00f3fer espera en llegadas con un letrero con su nombre, monitoriza su vuelo en tiempo real y se ajusta a los retrasos autom\u00e1ticamente — sin cargo adicional.",
        },
        {
          title: "Conductores en Ingl\u00e9s y Espa\u00f1ol",
          body: "Ch\u00f3feres biling\u00fces en ingl\u00e9s y espa\u00f1ol disponibles bajo pedido. Un detalle de servicio que importa m\u00e1s de lo que la mayor\u00eda cree.",
        },
        {
          title: "Dub\u00e1i, EAU y M\u00e1s All\u00e1",
          body: "Viajes por la ciudad, traslados al aeropuerto en DXB y DWC, y viajes entre emiratos a Abu Dabi, Sharjah, Ajman y los siete emiratos.",
        },
      ],
    },
    process: {
      subtitle: "El Proceso",
      title: "Simple De Principio a Fin",
      steps: [
        { number: "01", title: "Cont\u00e1ctenos", body: "D\u00edganos d\u00f3nde y cu\u00e1ndo necesita transporte." },
        {
          number: "02",
          title: "Confirme Su Reserva",
          body: "Reciba la confirmaci\u00f3n y los detalles del viaje.",
        },
        {
          number: "03",
          title: "Disfrute el Viaje",
          body: "Rela\u0301jese y deje que nosotros manejemos.",
        },
      ],
    },
    vsApps: {
      subtitle: "La Distinci\u00f3n",
      title: "M\u00e1s Que Solo",
      titleGold: "Otra App de Transporte",
      body: "Cuando reserva un servicio de ch\u00f3fer privado en Dub\u00e1i, no solo est\u00e1 reservando un coche. Est\u00e1 reservando tranquilidad — y eso es algo que ning\u00fan algoritmo puede replicar.",
      appTitle: "Apps de Transporte Bajo Demanda",
      appItems: [
        "Precios variables — tarifas elevadas en horas pico",
        "Conductor aleatorio — sin relaci\u00f3n previa",
        "Sin seguimiento de vuelos ni ajuste autom\u00e1tico",
        "Sin recibimiento — localice su veh\u00edculo usted mismo",
        "Control de calidad del veh\u00edculo limitado",
        "Sin opci\u00f3n de servicio biling\u00fce",
        "La confirmaci\u00f3n de la reserva nunca est\u00e1 garantizada",
      ],
      dxbTitle: "DXB Driver — Ch\u00f3fer Privado",
      dxbItems: [
        "Tarifas fijas — sin precios variables, nunca",
        "Su ch\u00f3fer profesional dedicado, cada vez",
        "Seguimiento del vuelo en tiempo real con ajuste autom\u00e1tico",
        "Recibimiento en llegadas con letrero personalizado",
        "Flota de lujo — clases Economy, Business y Premium",
        "Ch\u00f3feres en ingl\u00e9s y espa\u00f1ol disponibles",
        "Reserva con semanas o meses de anticipaci\u00f3n",
      ],
      footnote:
        "Para traslados al aeropuerto y viajes largos por los EAU, un servicio de ch\u00f3fer a precio fijo en Dub\u00e1i suele ser m\u00e1s econ\u00f3mico que las apps de transporte — especialmente cuando se aplican tarifas variables.",
    },
    philosophy: {
      subtitle: "La Filosof\u00eda",
      title: "El Verdadero Lujo Es la Tranquilidad",
      body: [
        "El lujo no es solo el veh\u00edculo.",
        "Es saber que alguien ya est\u00e1 esperando.\nSaber que su agenda est\u00e1 bajo control.\nSaber que llegar\u00e1 c\u00f3modo y a tiempo.",
      ],
      quote: "Esa es la experiencia que DXB Driver busca ofrecer cada d\u00eda.",
    },
    finalCTA: {
      subtitle: "Comenzar",
      title: "\u00bfListo Para Una Mejor Experiencia de Viaje?",
      body: "Reserve su pr\u00f3ximo viaje hoy y viaje con comodidad, confianza y conveniencia.",
      cta1: "Reservar Ahora",
      cta2: "WhatsApp",
    },
  },
  faq: {
    pageBadge: "Preguntas Frecuentes",
    hero: {
      title: "Preguntas,",
      titleGold: "Respondidas con Honestidad.",
      subtitle:
        "Todo lo que necesita saber sobre reservas, nuestra flota, precios y qu\u00e9 esperar cuando viaje con DXB Driver.",
    },
    categories: [
      {
        category: "Reservas",
        items: [
          {
            q: "\u00bfC\u00f3mo reservo un viaje?",
            a: "La forma m\u00e1s r\u00e1pida es por WhatsApp — env\u00edenos su lugar de recogida, destino, fecha y hora. Confirmamos en minutos. Tambi\u00e9n puede usar nuestro formulario de contacto, que precompleta un mensaje de WhatsApp por usted.",
          },
          {
            q: "\u00bfCon cu\u00e1nta antelaci\u00f3n debo reservar?",
            a: "Recomendamos al menos 2 horas para viajes en la ciudad y 24 horas para traslados al aeropuerto. Para clases premium, reservar con antelaci\u00f3n garantiza disponibilidad. Siempre intentamos atender solicitudes de \u00faltimo momento.",
          },
          {
            q: "\u00bfPuedo modificar o cancelar una reserva?",
            a: "S\u00ed. Esc\u00edbanos por WhatsApp con su referencia de reserva. Las cancelaciones realizadas con m\u00e1s de 2 horas de antelaci\u00f3n no tienen cargo. Las cancelaciones tard\u00edas pueden conllevar una peque\u00f1a tarifa seg\u00fan la clase de veh\u00edculo.",
          },
          {
            q: "\u00bfOfrecen reservas de ida y vuelta?",
            a: "Por supuesto — y lo recomendamos. Ofrecemos un peque\u00f1o descuento en reservas de ida y vuelta y garantiza el mismo conductor para ambas direcciones si lo prefiere.",
          },
          {
            q: "\u00bfPuedo reservar traslados al aeropuerto con antelaci\u00f3n?",
            a: "Absolutamente — y lo recomendamos firmemente. Puede reservar su traslado al aeropuerto de Dub\u00e1i d\u00edas, semanas o incluso meses antes. Monitorizamos su vuelo en tiempo real y nos ajustamos autom\u00e1ticamente ante cualquier retraso.",
          },
        ],
      },
      {
        category: "Traslados al Aeropuerto",
        items: [
          {
            q: "\u00bfQu\u00e9 pasa si mi vuelo se retrasa?",
            a: "Realizamos seguimiento de su vuelo en tiempo real. Si hay retraso, ajustamos autom\u00e1ticamente el horario del conductor sin cargo adicional. No se le cobrar\u00e1 tiempo de espera por retrasos fuera de su control.",
          },
          {
            q: "\u00bfD\u00f3nde me encontrar\u00e1 mi conductor?",
            a: "Su conductor estar\u00e1 esperando en la sala de llegadas con un letrero con su nombre. Para el DXB, nos encontramos en las llegadas de las Terminales 1, 2 o 3. Para el DWC (Al Maktoum), nos encontramos en la zona principal de llegadas.",
          },
          {
            q: "\u00bfCubren Dubai World Central (Aeropuerto Al Maktoum)?",
            a: "S\u00ed. Atendemos tanto el Aeropuerto Internacional de Dub\u00e1i (DXB) como Dubai World Central (DWC). La tarifa base del DWC puede diferir del DXB — cotizaremos exactamente cuando reserve.",
          },
          {
            q: "\u00bfPuedo reservar un traslado para un grupo?",
            a: "Nuestros veh\u00edculos est\u00e1ndar tienen capacidad para hasta 3 pasajeros. Para grupos m\u00e1s grandes, podemos organizar varios veh\u00edculos simult\u00e1neamente.",
          },
        ],
      },
      {
        category: "Conductores y Flota",
        items: [
          {
            q: "\u00bfSus conductores tienen licencia de la RTA?",
            a: "S\u00ed. Todos nuestros ch\u00f3feres tienen licencia de conducir v\u00e1lida en los EAU y est\u00e1n registrados ante la Autoridad de Carreteras y Transporte (RTA). Realizamos controles exhaustivos de antecedentes antes de que se unan a nuestro equipo.",
          },
          {
            q: "\u00bfTienen conductores que hablen espa\u00f1ol?",
            a: "S\u00ed. DXB Driver tiene ch\u00f3feres disponibles en ingl\u00e9s y espa\u00f1ol. Si prefiere un conductor hispanohablante para su viaje, simplemente men\u00edcionelo al reservar y lo asignaremos. Es una de las formas en que hacemos el viaje m\u00e1s c\u00f3modo para nuestra clientela internacional.",
          },
          {
            q: "\u00bfQu\u00e9 veh\u00edculos tiene su flota?",
            a: "Operamos clases Economy (Toyota Camry o equivalente), Business (Mercedes Clase E o equivalente) y Premium (Mercedes Clase S o equivalente). Todos los veh\u00edculos se mantienen seg\u00fan est\u00e1ndares exigentes y se presentan de id\u00e9ntica manera cada vez.",
          },
          {
            q: "\u00bfPuedo solicitar el mismo conductor de nuevo?",
            a: "S\u00ed. Una vez que haya tenido una experiencia positiva con un ch\u00f3fer, puede solicitarlo por nombre para futuras reservas. Sujeto a disponibilidad, siempre intentaremos hacer coincidir a los clientes habituales con su conductor preferido.",
          },
          {
            q: "\u00bfSus veh\u00edculos son de no fumadores?",
            a: "Todos los veh\u00edculos son estrictamente de no fumadores. Si necesita detenerse durante un viaje, su conductor lo atender\u00e1. Nuestros veh\u00edculos se limpian y se vuelven a preparar antes de cada reserva.",
          },
        ],
      },
      {
        category: "Precios y Pago",
        items: [
          {
            q: "\u00bfOfrecen precios fijos?",
            a: "S\u00ed — siempre. Cada viaje de DXB Driver tiene un precio fijo acordado antes del viaje. No hay tax\u00edmetro en marcha, no hay precios variables y no hay ning\u00fan algoritmo que ajuste su tarifa seg\u00fan la demanda o la hora del d\u00eda. Lo que cotizamos es lo que paga.",
          },
          {
            q: "\u00bfSus servicios son m\u00e1s baratos que Uber o Careem?",
            a: "Para muchos trayectos — especialmente traslados al aeropuerto y viajes entre emiratos — DXB Driver suele ser m\u00e1s rentable que las apps populares, especialmente en horas pico cuando los precios variables pueden aumentar significativamente la tarifa. Adem\u00e1s, tambi\u00e9n recibe una experiencia de ch\u00f3fer privado, reserva anticipada, seguimiento del vuelo en tiempo real y un servicio de recibimiento que ninguna app puede ofrecer.",
          },
          {
            q: "\u00bfC\u00f3mo se calcula el precio?",
            a: "Proporcionamos presupuestos fijos antes de cada viaje. La tarifa que confirmamos es la que paga. Nuestros precios se basan en la clase de veh\u00edculo, la ruta y la hora del d\u00eda.",
          },
          {
            q: "\u00bfQu\u00e9 m\u00e9todos de pago aceptan?",
            a: "Aceptamos efectivo en AED al finalizar el viaje. Tambi\u00e9n transferencia bancaria y facturaci\u00f3n corporativa para cuentas empresariales.",
          },
          {
            q: "\u00bfHay cargos adicionales que deba conocer?",
            a: "Los cargos de peaje en las carreteras de Dub\u00e1i (Salik) pueden a\u00f1adirse a la tarifa final. Estos se comunican por adelantado. No hay cargos ocultos.",
          },
          {
            q: "\u00bfOfrecen cuentas corporativas?",
            a: "S\u00ed. Trabajamos con empresas que requieren traslados regulares para ejecutivos, clientes y personal. Las cuentas corporativas incluyen l\u00edneas de reserva dedicadas, facturaci\u00f3n mensual consolidada y asignaci\u00f3n prioritaria de conductores.",
          },
        ],
      },
    ],
    contact: {
      subtitle: "\u00bfA\u00fan Tiene Preguntas?",
      title: "Estamos a Un Mensaje.",
      body: "Si no encontr\u00f3 lo que buscaba, esc\u00edbanos directamente. Respondemos por WhatsApp en 15 minutos.",
      whatsapp: "Preguntar por WhatsApp",
      form: "Formulario de Contacto",
    },
  },
  bookInAdvance: {
    hero: {
      line1: "Reserva Con Anticipación.",
      line2: "Viaja Con Tranquilidad.",
      sub1: "Los buenos viajes se planean.",
      sub2: "Los grandes viajes se confirman con anticipación.",
      body: "Reserva tu chófer antes de la fecha de tu viaje y disfruta de la tranquilidad de saber que todo está organizado de antemano.",
    },
    benefits: {
      items: [
        {
          title: "Confirmado Antes De Tu Viaje",
          body: "Recibimos tu solicitud con antelación para organizar cada detalle correctamente.",
        },
        {
          title: "Ideal Para Momentos Importantes",
          body: "Perfecto para traslados al aeropuerto, reuniones de negocios, eventos y viajes familiares.",
        },
        {
          title: "Confirmación Rápida Por WhatsApp",
          body: "Envía tu solicitud y recibe confirmación directamente por WhatsApp.",
        },
      ],
    },
    form: {
      sectionTitle: "Cuéntanos Sobre Tu Viaje",
      name: "Nombre Completo",
      whatsapp: "Número De WhatsApp",
      email: "Correo Electrónico",
      pickup: "Lugar De Recogida",
      destination: "Destino",
      date: "Fecha",
      time: "Hora",
      tripType: "Tipo De Viaje",
      oneWay: "Solo Ida",
      returnTrip: "Ida Y Vuelta",
      notes: "Notas (opcional)",
      notesPh: "¿Hay algo que debamos saber sobre tu viaje?",
      submit: "Reservar Mi Traslado",
    },
    confirm: {
      title: "Gracias.",
      body: "Hemos recibido tu solicitud de reserva.\n\nNuestro equipo revisará los detalles y confirmará la disponibilidad en breve por WhatsApp.",
    },
  },
  contact: {
    pageBadge: "Reservar un Viaje",
    hero: { title: "Un Mensaje.", titleGold: "Su Conductor Está Listo." },
    getInTouch: "Cont\u00e1ctenos",
    subtitle: "Respondemos en Minutos.",
    hoursTitle: "Nuestro Horario",
    hours: [
      { label: "Servicio Est\u00e1ndar", value: "7:00 AM – 11:00 PM" },
      { label: "Traslados al Aeropuerto", value: "A todas horas" },
    ],
    form: {
      title: "Formulario de Reserva",
      subtitle: "Enviaremos sus datos directamente a WhatsApp para confirmaci\u00f3n.",
      nameLabel: "Nombre Completo",
      namePlaceholder: "Su nombre",
      nameError: "Por favor, introduzca su nombre completo",
      phoneLabel: "Tel\u00e9fono / WhatsApp",
      phonePlaceholder: "+971 5X XXX XXXX",
      phoneError: "Por favor, introduzca un n\u00famero de tel\u00e9fono v\u00e1lido",
      timeLabel: "Hora Preferida (Opcional)",
      notesLabel: "Notas Adicionales (Opcional)",
      notesPh: "N\u00famero de vuelo, solicitudes especiales, n\u00famero de pasajeros\u2026",
      submit: "Enviar por WhatsApp",
      toastTitle: "Redirigiendo a WhatsApp",
      toastDesc: "Sus datos est\u00e1n listos. Complete y env\u00ede el mensaje para confirmar.",
    },
    info: { whatsapp: "WhatsApp", phone: "Llamar", email: "Correo", address: "Direcci\u00f3n" },
    finalCTA: {
      subtitle: "\u00bfPrefiere Llamar?",
      title: "Siempre Estamos Disponibles.",
      body: "Nuestro equipo responde a cada mensaje en 15 minutos, de d\u00eda o de noche.",
    },
  },
};

export const translations: Record<Lang, Translations> = { en, es };
