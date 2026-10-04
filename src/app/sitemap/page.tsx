import type { Metadata } from "next";
import Link from "next/link";
import { products } from "@/content/products";

export const metadata: Metadata = {
  title: "Sitemap",
  description: "Full sitemap for Fresh Baked Prints.",
};

const staticPages = [
  { label: "Home", href: "/" },
  { label: "Products", href: "/products" },
  { label: "Packages", href: "/packages" },
  { label: "Prom Packages", href: "/packages/prom" },
  { label: "How It Works", href: "/how-it-works" },
  { label: "Design Services", href: "/design-services" },
  { label: "About", href: "/about" },
  { label: "Contact", href: "/contact" },
  { label: "Get a Quote", href: "/get-a-quote" },
  { label: "FAQs", href: "/faqs" },
  { label: "Resolution Center", href: "/resolution-center" },
  { label: "Privacy Policy", href: "/privacy" },
  { label: "Terms & Conditions", href: "/terms-and-conditions-2" },
  { label: "Shipping & Returns", href: "/shipping-and-returns" },
];

export default function SitemapPage() {
  return (
    <div className="bg-black min-h-screen pt-[var(--header-h)]">
      <div className="container-xl py-16">
        <h1
          className="text-4xl font-black uppercase mb-10"
          style={{ fontFamily: "Cabinet Grotesk, system-ui" }}
        >
          Sitemap
        </h1>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
          <div>
            <h2
              className="text-xs font-bold uppercase tracking-widest text-[#4A9DCF] mb-4"
            >
              Pages
            </h2>
            <ul className="space-y-2">
              {staticPages.map((p) => (
                <li key={p.href}>
                  <Link
                    href={p.href}
                    className="text-white/65 hover:text-white transition-colors text-sm"
                  >
                    {p.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h2
              className="text-xs font-bold uppercase tracking-widest text-[#C93183] mb-4"
            >
              Products
            </h2>
            <ul className="space-y-2">
              {products.map((p) => (
                <li key={p.slug}>
                  <Link
                    href={`/products/${p.slug}`}
                    className="text-white/65 hover:text-white transition-colors text-sm"
                  >
                    {p.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}
