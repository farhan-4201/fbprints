"use client";
import { useState, useEffect, useRef } from "react";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X, ChevronDown, Phone, Mail, Search } from "lucide-react";
import { products } from "@/content/products";

const navLinks = [
  { label: "Products", href: "/products", hasMega: true },
  { label: "Packages", href: "/packages" },
  { label: "How It Works", href: "/how-it-works" },
  { label: "Design Services", href: "/design-services" },
  { label: "About", href: "/about" },
  { label: "Contact", href: "/contact" },
];

export function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [megaOpen, setMegaOpen] = useState(false);
  const megaRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  // Close mega on outside click
  useEffect(() => {
    const handler = (e: MouseEvent) => {
      if (megaRef.current && !megaRef.current.contains(e.target as Node)) {
        setMegaOpen(false);
      }
    };
    document.addEventListener("mousedown", handler);
    return () => document.removeEventListener("mousedown", handler);
  }, []);

  return (
    <>
      <header
        className={`fixed top-0 left-0 right-0 z-[100] transition-all duration-300 ${
          scrolled
            ? "bg-black/90 backdrop-blur-md border-b border-white/5"
            : "bg-transparent"
        }`}
        style={{ height: "var(--header-h)" }}
      >
        <div className="container-xl h-full flex items-center justify-between">
          {/* Logo */}
          <Link href="/" className="flex items-center gap-2 group">
            <span className="flex items-center gap-1">
              <span
                className="text-xl font-black uppercase tracking-tight"
                style={{
                  fontFamily: "Cabinet Grotesk, system-ui",
                  color: "#F0F0F0",
                  textShadow:
                    "-1.5px -1px 0 rgba(74,157,207,0.6), 1.5px 1px 0 rgba(201,49,131,0.5)",
                }}
              >
                Fresh Baked
              </span>
              <span
                className="text-xl font-black uppercase tracking-tight"
                style={{
                  fontFamily: "Cabinet Grotesk, system-ui",
                  color: "#E0D94D",
                }}
              >
                Prints
              </span>
            </span>
          </Link>

          {/* Desktop nav */}
          <nav className="hidden lg:flex items-center gap-6" ref={megaRef}>
            {navLinks.map((link) =>
              link.hasMega ? (
                <div key={link.label} className="relative">
                  <button
                    className="flex items-center gap-1 text-sm font-medium text-white/80 hover:text-white transition-colors uppercase tracking-wide"
                    style={{ fontFamily: "Cabinet Grotesk, system-ui" }}
                    onMouseEnter={() => setMegaOpen(true)}
                    onClick={() => setMegaOpen((v) => !v)}
                  >
                    {link.label}
                    <ChevronDown
                      size={14}
                      className={`transition-transform ${megaOpen ? "rotate-180" : ""}`}
                    />
                  </button>
                  <AnimatePresence>
                    {megaOpen && (
                      <motion.div
                        initial={{ opacity: 0, y: 8 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: 8 }}
                        transition={{ duration: 0.2 }}
                        onMouseLeave={() => setMegaOpen(false)}
                        className="absolute left-1/2 -translate-x-1/2 top-full mt-3 w-[600px] bg-black/95 backdrop-blur-xl border border-white/10 rounded-2xl p-5 grid grid-cols-3 gap-2 shadow-2xl"
                      >
                        {products.slice(0, 9).map((p) => (
                          <Link
                            key={p.slug}
                            href={`/products/${p.slug}`}
                            onClick={() => setMegaOpen(false)}
                            className="flex items-center gap-2 px-3 py-2.5 rounded-xl hover:bg-white/5 transition-colors group"
                          >
                            <span
                              className="w-8 h-8 rounded-lg flex-shrink-0"
                              style={{ background: p.gradient }}
                            />
                            <span className="text-xs font-medium text-white/80 group-hover:text-white transition-colors leading-tight">
                              {p.name}
                            </span>
                          </Link>
                        ))}
                        <Link
                          href="/products"
                          onClick={() => setMegaOpen(false)}
                          className="col-span-3 mt-1 text-center text-xs font-bold uppercase tracking-widest text-[#E0D94D] hover:text-white transition-colors py-2"
                          style={{ fontFamily: "Cabinet Grotesk, system-ui" }}
                        >
                          View All Products →
                        </Link>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
              ) : (
                <Link
                  key={link.label}
                  href={link.href}
                  className="text-sm font-medium text-white/80 hover:text-white transition-colors uppercase tracking-wide"
                  style={{ fontFamily: "Cabinet Grotesk, system-ui" }}
                >
                  {link.label}
                </Link>
              )
            )}
          </nav>

          {/* CTA + Mobile */}
          <div className="flex items-center gap-3">
            <Link
              href="/get-a-quote"
              className="hidden sm:inline-flex btn-primary text-xs py-2.5 px-5"
            >
              Get a Quote
            </Link>
            <button
              className="lg:hidden text-white p-2"
              onClick={() => setMobileOpen(true)}
              aria-label="Open menu"
            >
              <Menu size={22} />
            </button>
          </div>
        </div>
      </header>

      {/* Mobile Menu */}
      <AnimatePresence>
        {mobileOpen && (
          <>
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="fixed inset-0 z-[200] bg-black/60 backdrop-blur-sm"
              onClick={() => setMobileOpen(false)}
            />
            <motion.div
              initial={{ x: "100%" }}
              animate={{ x: 0 }}
              exit={{ x: "100%" }}
              transition={{ type: "spring", damping: 26, stiffness: 280 }}
              className="fixed top-0 right-0 bottom-0 z-[201] w-80 bg-black border-l border-white/10 flex flex-col p-6"
            >
              <div className="flex justify-between items-center mb-8">
                <span
                  className="font-black text-lg"
                  style={{ fontFamily: "Cabinet Grotesk, system-ui", color: "#E0D94D" }}
                >
                  Menu
                </span>
                <button onClick={() => setMobileOpen(false)} className="text-white">
                  <X size={22} />
                </button>
              </div>
              <nav className="flex flex-col gap-1 flex-1">
                {navLinks.map((link) => (
                  <Link
                    key={link.label}
                    href={link.href}
                    onClick={() => setMobileOpen(false)}
                    className="text-white/80 hover:text-white font-semibold text-base py-3 border-b border-white/5 uppercase tracking-wide transition-colors"
                    style={{ fontFamily: "Cabinet Grotesk, system-ui" }}
                  >
                    {link.label}
                  </Link>
                ))}
              </nav>
              <div className="mt-6 space-y-3">
                <Link
                  href="/get-a-quote"
                  onClick={() => setMobileOpen(false)}
                  className="btn-primary w-full justify-center text-sm"
                >
                  Get a Quote
                </Link>
                <div className="flex items-center gap-2 text-xs text-white/50">
                  <Phone size={12} />
                  <span>(555) 000-0000</span>
                </div>
                <div className="flex items-center gap-2 text-xs text-white/50">
                  <Mail size={12} />
                  <span>hello@fbprints.com</span>
                </div>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </>
  );
}
