import Link from "next/link";
import { Phone, Mail, MapPin, Globe, Share2, MessageSquare } from "lucide-react";

const footerLinks = {
  Products: [
    { label: "Banners", href: "/products/banners" },
    { label: "Business Cards", href: "/products/business-cards" },
    { label: "Flyers", href: "/products/flyers" },
    { label: "Yard Signs", href: "/products/yard-signs" },
    { label: "All Products", href: "/products" },
  ],
  Company: [
    { label: "About Us", href: "/about" },
    { label: "How It Works", href: "/how-it-works" },
    { label: "Design Services", href: "/design-services" },
    { label: "Prom Packages", href: "/packages/prom" },
    { label: "FAQs", href: "/faqs" },
  ],
  Support: [
    { label: "Get a Quote", href: "/get-a-quote" },
    { label: "Contact Us", href: "/contact" },
    { label: "Resolution Center", href: "/resolution-center" },
    { label: "Shipping & Returns", href: "/shipping-and-returns" },
    { label: "Terms & Conditions", href: "/terms-and-conditions-2" },
  ],
};

export function Footer() {
  return (
    <footer className="bg-black border-t border-white/8">
      {/* Top bar */}
      <div
        className="h-1 w-full"
        style={{
          background:
            "linear-gradient(90deg, #4A9DCF 0%, #C93183 50%, #E0D94D 100%)",
        }}
      />

      <div className="container-xl py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-10">
          {/* Brand column */}
          <div className="lg:col-span-2">
            <Link href="/" className="inline-block mb-4">
              <span
                className="text-2xl font-black uppercase tracking-tight"
                style={{
                  fontFamily: "Cabinet Grotesk, system-ui",
                  color: "#F0F0F0",
                  textShadow:
                    "-1.5px -1px 0 rgba(74,157,207,0.5), 1.5px 1px 0 rgba(201,49,131,0.4)",
                }}
              >
                Fresh Baked{" "}
                <span style={{ color: "#E0D94D" }}>Prints</span>
              </span>
            </Link>
            <p className="text-white/55 text-sm leading-relaxed max-w-xs mb-6">
              Premium printing, next-day turnaround. Banners, cards, flyers,
              and custom print products — made fresh for your brand.
            </p>
            <div className="space-y-2.5">
              <a
                href="tel:+15550000000"
                className="flex items-center gap-2.5 text-sm text-white/60 hover:text-[#4A9DCF] transition-colors"
              >
                <Phone size={14} />
                (555) 000-0000
              </a>
              <a
                href="mailto:hello@fbprints.com"
                className="flex items-center gap-2.5 text-sm text-white/60 hover:text-[#C93183] transition-colors"
              >
                <Mail size={14} />
                hello@fbprints.com
              </a>
              <div className="flex items-start gap-2.5 text-sm text-white/60">
                <MapPin size={14} className="mt-0.5 flex-shrink-0" />
                <span>Atlanta, GA · Mon–Fri 9am–6pm EST</span>
              </div>
            </div>
            {/* Socials */}
            <div className="flex items-center gap-3 mt-6">
              {[
                { Icon: Globe, href: "#", label: "Instagram" },
                { Icon: Share2, href: "#", label: "Facebook" },
                { Icon: MessageSquare, href: "#", label: "Twitter" },
              ].map(({ Icon, href, label }) => (
                <a
                  key={label}
                  href={href}
                  aria-label={label}
                  className="w-9 h-9 rounded-full border border-white/10 flex items-center justify-center text-white/50 hover:text-white hover:border-white/30 transition-all"
                >
                  <Icon size={15} />
                </a>
              ))}
            </div>
          </div>

          {/* Link columns */}
          {Object.entries(footerLinks).map(([title, links]) => (
            <div key={title}>
              <h3
                className="text-xs font-bold uppercase tracking-widest mb-4"
                style={{ color: "#E0D94D", fontFamily: "Cabinet Grotesk, system-ui" }}
              >
                {title}
              </h3>
              <ul className="space-y-2.5">
                {links.map((link) => (
                  <li key={link.label}>
                    <Link
                      href={link.href}
                      className="text-sm text-white/55 hover:text-white transition-colors"
                    >
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Bottom bar */}
        <div className="border-t border-white/8 mt-12 pt-6 flex flex-col sm:flex-row justify-between items-center gap-3">
          <p className="text-xs text-white/35">
            © {new Date().getFullYear()} Fresh Baked Prints. All rights reserved.
          </p>
          <div className="flex items-center gap-4 text-xs text-white/35">
            <Link href="/privacy" className="hover:text-white/70 transition-colors">
              Privacy Policy
            </Link>
            <Link href="/terms-and-conditions-2" className="hover:text-white/70 transition-colors">
              Terms
            </Link>
            <Link href="/sitemap" className="hover:text-white/70 transition-colors">
              Sitemap
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
