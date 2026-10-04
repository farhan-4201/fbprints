import type { Metadata } from "next";
import Link from "next/link";
import { ArrowRight, CheckCircle } from "lucide-react";

export const metadata: Metadata = {
  title: "Packages",
  description:
    "Bundled print packages for events, prom, and business — everything you need at one great price.",
};

const packages = [
  {
    id: "prom",
    name: "Prom Package",
    tagline: "Make prom night unforgettable.",
    href: "/packages/prom",
    gradient: "linear-gradient(135deg, #C93183 0%, #E0D94D 100%)",
    includes: [
      "Step & Repeat Backdrop (8×8')",
      "Handheld Fan Signs (qty 50)",
      "Welcome Banner (3×6')",
      "Balloon Arch Banner (optional)",
    ],
    startingPrice: "$349",
  },
  {
    id: "event",
    name: "Event Starter Pack",
    tagline: "Everything you need for a great event.",
    href: "/get-a-quote",
    gradient: "linear-gradient(135deg, #4A9DCF 0%, #C93183 100%)",
    includes: [
      "2× Retractable Banners",
      "500 Flyers",
      "250 Business Cards",
      "1× Foam Board Sign",
    ],
    startingPrice: "$199",
  },
  {
    id: "grand-opening",
    name: "Grand Opening Bundle",
    tagline: "Open with a bang.",
    href: "/get-a-quote",
    gradient: "linear-gradient(135deg, #E0D94D 0%, #4A9DCF 100%)",
    includes: [
      "Outdoor Banner (4×8')",
      "500 Flyers",
      "100 Business Cards",
      "3× Yard Signs",
    ],
    startingPrice: "$149",
  },
];

export default function PackagesPage() {
  return (
    <div className="bg-black min-h-screen pt-[var(--header-h)]">
      <div className="relative py-20 border-b border-white/8 overflow-hidden">
        <div
          className="absolute inset-0"
          style={{
            backgroundImage:
              "radial-gradient(circle, rgba(201,49,131,0.07) 1px, transparent 1px)",
            backgroundSize: "24px 24px",
          }}
        />
        <div className="container-xl relative z-10 text-center">
          <p className="text-xs font-bold uppercase tracking-[0.3em] text-[#C93183] mb-3">
            Bundle & Save
          </p>
          <h1
            className="text-5xl sm:text-6xl font-black uppercase"
            style={{
              fontFamily: "Cabinet Grotesk, system-ui",
              textShadow:
                "-2px -1px 0 rgba(74,157,207,0.4), 2px 1px 0 rgba(201,49,131,0.35)",
            }}
          >
            Print Packages
          </h1>
          <p className="text-white/55 mt-4 max-w-md mx-auto">
            Bundled for events, prom, grand openings, and more. Great quality,
            even better value.
          </p>
        </div>
      </div>

      <div className="container-xl py-16">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {packages.map((pkg) => (
            <div
              key={pkg.id}
              className="rounded-2xl overflow-hidden border border-white/10 bg-[#0a0a0a] flex flex-col"
            >
              <div
                className="h-40 relative"
                style={{ background: pkg.gradient }}
              >
                <div
                  className="absolute inset-0"
                  style={{
                    backgroundImage:
                      "radial-gradient(circle, rgba(0,0,0,0.18) 1px, transparent 1px)",
                    backgroundSize: "18px 18px",
                  }}
                />
              </div>
              <div className="p-6 flex flex-col flex-1">
                <div
                  className="text-2xl font-black uppercase mb-1"
                  style={{ fontFamily: "Cabinet Grotesk, system-ui" }}
                >
                  {pkg.name}
                </div>
                <p className="text-white/55 text-sm mb-4">{pkg.tagline}</p>
                <ul className="space-y-2 mb-6 flex-1">
                  {pkg.includes.map((item) => (
                    <li key={item} className="flex items-start gap-2 text-sm text-white/70">
                      <CheckCircle size={14} className="text-[#E0D94D] mt-0.5 flex-shrink-0" />
                      {item}
                    </li>
                  ))}
                </ul>
                <div className="border-t border-white/8 pt-4 flex items-center justify-between">
                  <div>
                    <div className="text-xs text-white/40 uppercase tracking-widest">From</div>
                    <div
                      className="text-2xl font-black text-[#E0D94D]"
                      style={{ fontFamily: "Cabinet Grotesk, system-ui" }}
                    >
                      {pkg.startingPrice}
                    </div>
                  </div>
                  <Link href={pkg.href} className="btn-primary text-xs px-4 py-2.5">
                    Get This Pack <ArrowRight size={12} />
                  </Link>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
