import type { Metadata } from "next";
import Link from "next/link";
import { ArrowRight, CheckCircle, Star } from "lucide-react";

export const metadata: Metadata = {
  title: "Prom Packages",
  description:
    "Make prom night unforgettable with Fresh Baked Prints' prom packages — step & repeat backdrops, handheld signs, banners and more.",
};

const included = [
  "Step & Repeat Backdrop (8×8') on adjustable stand",
  "50× Custom Handheld Fan Signs",
  "Welcome Banner (3×6') hemmed & grommeted",
  "10× Balloon Arch Banner strips (optional add-on)",
  "Free digital proof before printing",
  "Next-day turnaround available",
];

const addOns = [
  { item: "Extra fan signs (25 qty)", price: "+$35" },
  { item: "Larger backdrop (10×10')", price: "+$79" },
  { item: "Yard signs (per 10)", price: "+$60" },
  { item: "Photo booth props set", price: "+$49" },
  { item: "Custom step & repeat design", price: "+$75" },
];

export default function PromPackagesPage() {
  return (
    <div className="bg-black min-h-screen pt-[var(--header-h)]">
      {/* Hero */}
      <div
        className="relative py-28 overflow-hidden"
        style={{
          background: "linear-gradient(135deg, rgba(201,49,131,0.15) 0%, rgba(224,217,77,0.08) 100%)",
        }}
      >
        <div
          className="absolute inset-0"
          style={{
            backgroundImage:
              "radial-gradient(circle, rgba(201,49,131,0.1) 1px, transparent 1px)",
            backgroundSize: "22px 22px",
          }}
        />
        <div className="container-xl relative z-10 text-center">
          <div className="inline-flex items-center gap-2 border border-[#C93183]/40 rounded-full px-4 py-1.5 mb-6">
            <Star size={12} fill="#C93183" className="text-[#C93183]" />
            <span className="text-xs font-bold uppercase tracking-widest text-[#C93183]">
              Prom 2025 Special
            </span>
          </div>
          <h1
            className="text-5xl sm:text-7xl font-black uppercase leading-[0.9] mb-4"
            style={{
              fontFamily: "Cabinet Grotesk, system-ui",
              textShadow:
                "-2px -1.5px 0 rgba(74,157,207,0.45), 2px 1.5px 0 rgba(201,49,131,0.4)",
            }}
          >
            Prom Night
            <br />
            <span
              style={{
                background: "linear-gradient(90deg, #C93183, #E0D94D)",
                WebkitBackgroundClip: "text",
                WebkitTextFillColor: "transparent",
                backgroundClip: "text",
              }}
            >
              Done Right.
            </span>
          </h1>
          <p className="text-white/60 text-lg max-w-lg mx-auto mb-8">
            Everything you need for a stunning prom night — printed fresh,
            delivered fast.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <Link href="/get-a-quote" className="btn-primary">
              Book Your Package <ArrowRight size={14} />
            </Link>
            <Link href="/contact" className="btn-outline">
              Talk to Us
            </Link>
          </div>
        </div>
      </div>

      <div className="container-xl py-16">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
          {/* Package details */}
          <div>
            <h2
              className="text-3xl font-black uppercase mb-2 text-[#E0D94D]"
              style={{ fontFamily: "Cabinet Grotesk, system-ui" }}
            >
              What&apos;s Included
            </h2>
            <p className="text-white/55 mb-6">
              The complete prom print package — everything bundled for one
              stress-free price.
            </p>
            <ul className="space-y-3 mb-10">
              {included.map((item) => (
                <li key={item} className="flex items-start gap-3 text-white/80">
                  <CheckCircle size={16} className="text-[#C93183] mt-0.5 flex-shrink-0" />
                  {item}
                </li>
              ))}
            </ul>

            <h3
              className="text-xl font-black uppercase mb-4 text-white"
              style={{ fontFamily: "Cabinet Grotesk, system-ui" }}
            >
              Available Add-Ons
            </h3>
            <div className="space-y-2">
              {addOns.map(({ item, price }) => (
                <div
                  key={item}
                  className="flex items-center justify-between px-4 py-3 border border-white/8 rounded-xl text-sm"
                >
                  <span className="text-white/70">{item}</span>
                  <span className="font-bold text-[#E0D94D]">{price}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Price card */}
          <div>
            <div className="sticky top-24 bg-[#0a0a0a] border border-[#C93183]/30 rounded-2xl p-7">
              <div
                className="h-2 rounded-t-xl -mx-7 -mt-7 mb-6"
                style={{
                  background: "linear-gradient(90deg, #C93183, #E0D94D)",
                }}
              />
              <div
                className="text-xs font-bold uppercase tracking-widest text-[#C93183] mb-1"
              >
                Complete Prom Package
              </div>
              <div
                className="text-5xl font-black text-white mb-1"
                style={{ fontFamily: "Cabinet Grotesk, system-ui" }}
              >
                $349
              </div>
              <div className="text-white/45 text-sm mb-6">
                All-inclusive · Next-day available
              </div>

              <div className="space-y-2.5 mb-7">
                {["Free digital proof", "Next-day turnaround option", "Backdrop stand included", "Nationwide shipping"].map(
                  (f) => (
                    <div key={f} className="flex items-center gap-2 text-sm text-white/65">
                      <CheckCircle size={13} className="text-[#C93183]" />
                      {f}
                    </div>
                  )
                )}
              </div>

              <Link href="/get-a-quote" className="btn-primary w-full justify-center mb-3">
                Book Now <ArrowRight size={14} />
              </Link>
              <Link href="/contact" className="btn-outline w-full justify-center text-sm">
                Ask a Question
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
