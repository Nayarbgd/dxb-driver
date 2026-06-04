import { Link } from "wouter";
import { useLanguage } from "@/context/LanguageContext";

export function Footer() {
  const { t, waLink } = useLanguage();

  return (
    <footer className="bg-background border-t border-white/5 pt-24 pb-28 md:pb-12">
      <div className="container mx-auto px-6 md:px-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-16">
          <div className="md:col-span-2">
            <Link href="/" className="inline-block mb-6 group" data-testid="link-footer-home">
              <span className="font-serif text-2xl tracking-widest font-bold text-primary transition-transform group-hover:scale-105 duration-500 inline-block">
                DXB DRIVER
              </span>
            </Link>
            <p className="text-muted-foreground max-w-sm text-sm leading-relaxed mb-8">
              {t.footer.tagline}
            </p>
          </div>

          <div>
            <h4 className="text-foreground font-serif text-xl mb-6">{t.footer.explore}</h4>
            <nav aria-label="Footer navigation">
              <ul className="space-y-4">
                <li>
                  <Link href="/services" className="text-muted-foreground hover:text-primary transition-colors text-sm uppercase tracking-wider">
                    {t.footer.links.services}
                  </Link>
                </li>
                <li>
                  <Link href="/pricing" className="text-muted-foreground hover:text-primary transition-colors text-sm uppercase tracking-wider">
                    {t.footer.links.pricing}
                  </Link>
                </li>
                <li>
                  <Link href="/why-choose-us" className="text-muted-foreground hover:text-primary transition-colors text-sm uppercase tracking-wider">
                    Why Choose Us
                  </Link>
                </li>
                <li>
                  <Link href="/book-in-advance" className="text-muted-foreground hover:text-primary transition-colors text-sm uppercase tracking-wider">
                    Book in Advance
                  </Link>
                </li>
                <li>
                  <Link href="/about" className="text-muted-foreground hover:text-primary transition-colors text-sm uppercase tracking-wider">
                    {t.footer.links.about}
                  </Link>
                </li>
                <li>
                  <Link href="/faq" className="text-muted-foreground hover:text-primary transition-colors text-sm uppercase tracking-wider">
                    {t.footer.links.faq}
                  </Link>
                </li>
              </ul>
            </nav>
          </div>

          <div>
            <h4 className="text-foreground font-serif text-xl mb-6">{t.footer.contact}</h4>
            <ul className="space-y-4">
              <li>
                <a href={waLink} target="_blank" rel="noreferrer" className="text-muted-foreground hover:text-primary transition-colors text-sm">
                  +971 52 873 0883 (WhatsApp)
                </a>
              </li>
              <li>
                <a href="tel:+971528730883" className="text-muted-foreground hover:text-primary transition-colors text-sm">
                  +971 52 873 0883 ({t.footer.contact === "Contact" ? "Call" : "Llamar"})
                </a>
              </li>
              <li>
                <a href="mailto:dxbdriver@dxbdriver.com" className="text-muted-foreground hover:text-primary transition-colors text-sm">
                  dxbdriver@dxbdriver.com
                </a>
              </li>
              <li>
                <Link href="/contact" className="text-muted-foreground hover:text-primary transition-colors text-sm">
                  {t.footer.getQuote}
                </Link>
              </li>
              <li className="text-muted-foreground text-sm pt-4 border-t border-white/5 mt-4 whitespace-pre-line">
                {t.footer.address}
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-white/5 pt-8 flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-muted-foreground text-xs">
            © {new Date().getFullYear()} DXB Driver. {t.footer.rights}
          </p>
          <div className="flex items-center gap-6">
            <span className="text-muted-foreground text-xs">{t.footer.rta}</span>
            <span className="text-muted-foreground text-xs">{t.footer.service24}</span>
          </div>
        </div>
      </div>
    </footer>
  );
}
