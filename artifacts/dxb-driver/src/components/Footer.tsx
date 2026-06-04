import { Link } from "wouter";

export function Footer() {
  return (
    <footer className="bg-background border-t border-white/5 pt-24 pb-12">
      <div className="container mx-auto px-6 md:px-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-16">
          <div className="md:col-span-2">
            <Link href="/" className="inline-block mb-6 group" data-testid="link-footer-home">
              <span className="font-serif text-2xl tracking-widest font-bold text-primary transition-transform group-hover:scale-105 duration-500 inline-block">
                DXB DRIVER
              </span>
            </Link>
            <p className="text-muted-foreground max-w-sm text-sm leading-relaxed mb-8">
              The premier private chauffeur service in Dubai. Unhurried, precise, and uncompromisingly professional. Where every journey feels like arriving.
            </p>
          </div>

          <div>
            <h4 className="text-foreground font-serif text-xl mb-6">Explore</h4>
            <ul className="space-y-4">
              <li><Link href="/services" className="text-muted-foreground hover:text-primary transition-colors text-sm uppercase tracking-wider">Services</Link></li>
              <li><Link href="/pricing" className="text-muted-foreground hover:text-primary transition-colors text-sm uppercase tracking-wider">Fleet & Pricing</Link></li>
              <li><Link href="/about" className="text-muted-foreground hover:text-primary transition-colors text-sm uppercase tracking-wider">About Us</Link></li>
              <li><Link href="/faq" className="text-muted-foreground hover:text-primary transition-colors text-sm uppercase tracking-wider">FAQ</Link></li>
            </ul>
          </div>

          <div>
            <h4 className="text-foreground font-serif text-xl mb-6">Contact</h4>
            <ul className="space-y-4">
              <li><a href="https://wa.me/971528730883?text=Hi%20DXB%20Driver!%20I%20need%20a%20ride.%0AFrom%3A%20%0ATo%3A%20%0ADate%20%26%20Time%3A%20%0AVehicle%3A%20%0ANotes%3A%20..." target="_blank" rel="noreferrer" className="text-muted-foreground hover:text-primary transition-colors text-sm">+971 52 873 0883 (WhatsApp)</a></li>
              <li><a href="tel:+971528730883" className="text-muted-foreground hover:text-primary transition-colors text-sm">+971 52 873 0883 (Call)</a></li>
              <li><a href="mailto:dxbdriver@dxbdriver.com" className="text-muted-foreground hover:text-primary transition-colors text-sm">dxbdriver@dxbdriver.com</a></li>
              <li><Link href="/contact" className="text-muted-foreground hover:text-primary transition-colors text-sm">Get a Quote</Link></li>
              <li className="text-muted-foreground text-sm pt-4 border-t border-white/5 mt-4">DAMAC Smart Heights, 23rd Floor,<br />Barsha Heights, Dubai, UAE</li>
            </ul>
          </div>
        </div>

        <div className="border-t border-white/5 pt-8 flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-muted-foreground text-xs">
            © {new Date().getFullYear()} DXB Driver. All rights reserved.
          </p>
          <div className="flex items-center gap-6">
            <span className="text-muted-foreground text-xs">RTA Licensed</span>
            <span className="text-muted-foreground text-xs">24/7 Service</span>
          </div>
        </div>
      </div>
    </footer>
  );
}
