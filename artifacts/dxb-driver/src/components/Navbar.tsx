import { Link, useLocation } from "wouter";
import { useState, useEffect } from "react";
import { Menu, X } from "lucide-react";
import { CTAButton } from "./CTAButton";
import { motion, AnimatePresence } from "framer-motion";

export function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [location] = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Close mobile menu on route change
  useEffect(() => {
    setIsOpen(false);
  }, [location]);

  const navLinks = [
    { href: "/services", label: "Services" },
    { href: "/pricing", label: "Fleet & Pricing" },
    { href: "/about", label: "About" },
    { href: "/faq", label: "FAQ" },
  ];

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        isScrolled ? "bg-background/95 backdrop-blur-md border-b border-white/5 py-4" : "bg-transparent py-6"
      }`}
    >
      <div className="container mx-auto px-6 md:px-12 flex items-center justify-between">
        <Link href="/" className="flex items-center gap-2 group" data-testid="link-home">
          <span className="font-serif text-2xl tracking-widest font-bold text-primary transition-transform group-hover:scale-105 duration-500">
            DXB DRIVER
          </span>
        </Link>

        {/* Desktop Nav */}
        <nav className="hidden md:flex items-center gap-8">
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className={`text-sm uppercase tracking-widest transition-colors duration-300 hover:text-primary ${
                location === link.href ? "text-primary" : "text-muted-foreground"
              }`}
              data-testid={`link-nav-${link.label.toLowerCase().replace(/[^a-z0-9]/g, "-")}`}
            >
              {link.label}
            </Link>
          ))}
          <div className="ml-4">
            <Link href="/contact" data-testid="link-nav-book">
              <CTAButton variant="filled">Book Now</CTAButton>
            </Link>
          </div>
        </nav>

        {/* Mobile Toggle */}
        <button
          className="md:hidden text-foreground hover:text-primary transition-colors p-2"
          onClick={() => setIsOpen(true)}
          data-testid="button-mobile-menu"
          aria-label="Open menu"
        >
          <Menu className="w-6 h-6" />
        </button>
      </div>

      {/* Mobile Menu Overlay */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="fixed inset-0 bg-background/98 backdrop-blur-xl z-50 flex flex-col px-6 py-8"
          >
            <div className="flex justify-between items-center mb-12">
              <span className="font-serif text-2xl tracking-widest font-bold text-primary">
                DXB DRIVER
              </span>
              <button
                onClick={() => setIsOpen(false)}
                className="text-foreground hover:text-primary p-2 transition-colors"
                data-testid="button-close-menu"
                aria-label="Close menu"
              >
                <X className="w-8 h-8" />
              </button>
            </div>

            <nav className="flex flex-col gap-8 text-center flex-grow justify-center pb-20">
              {navLinks.map((link, i) => (
                <motion.div
                  key={link.href}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.1 * i, duration: 0.4 }}
                >
                  <Link
                    href={link.href}
                    className={`text-2xl font-serif tracking-wider ${
                      location === link.href ? "text-primary" : "text-foreground"
                    }`}
                  >
                    {link.label}
                  </Link>
                </motion.div>
              ))}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.5, duration: 0.4 }}
                className="mt-8"
              >
                <Link href="/contact">
                  <CTAButton variant="filled" className="w-full text-lg py-4">Book Now</CTAButton>
                </Link>
              </motion.div>
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
