import type { Metadata } from "next";
import Link from "next/link";
import { ArrowRight } from "lucide-react";

export const metadata: Metadata = {
  title: "How It Works",
  description:
    "See how Fresh Baked Prints works — choose a product, upload artwork, we print it fresh, and ship or pick up.",
};

const steps = [
  {
    number: "01",
    title: "Choose Your Product",
    detail:
      "Browse our catalog of 20+ print products. Select the type, size, material, and quantity that fits your project. Not sure? Use our Get a Quote form and we'll guide you.",
    color: "#4A9DCF",
    icon: "🛍",
  },
  {
    number: "02",
    title: "Upload Your Artwork",
    detail:
      "Upload your print-ready PDF, AI, EPS, or high-resolution image file. Our team reviews every file for print quality before we run the press. Need design help? We've got you.",
    color: "#C93183",
    icon: "🎨",
  },
  {
    number: "03",
    title: "We Print It Fresh",
    detail:
      "Your job goes straight to our state-of-the-art press. Next-day turnaround on most products. Every print is quality-checked before it leaves our facility.",
    color: "#E0D94D",
    icon: "🖨",
  },
  {
    number: "04",
    title: "Pick Up or Ship",
    detail:
      "Choose local pickup at our facility or fast nationwide shipping via UPS or FedEx. You'll receive tracking details the moment your order ships.",
    color: "#4A9DCF",
    icon: "📦",
  },
];

export default function HowItWorksPage() {
  return (
    <div className="bg-black min-h-screen pt-[var(--header-h)]">
      {/* Header */}
      <div className="relative py-20 border-b border-white/8 overflow-hidden">
        <div
          className="absolute inset-0"
          style={{
            backgroundImage:
              "radial-gradient(circle, rgba(74,157,207,0.07) 1px, transparent 1px)",
            backgroundSize: "24px 24px",
          }}
        />
        <div className="container-xl relative z-10 text-center">
          <p className="text-xs font-bold uppercase tracking-[0.3em] text-[#4A9DCF] mb-3">
            Simple Process
          </p>
          <h1
            className="text-5xl sm:text-6xl font-black uppercase"
            style={{
              fontFamily: "Cabinet Grotesk, system-ui",
              textShadow:
                "-2px -1px 0 rgba(74,157,207,0.4), 2px 1px 0 rgba(201,49,131,0.35)",
            }}
          >
            How It Works
          </h1>
          <p className="text-white/55 mt-4 max-w-md mx-auto">
            From click to crisp in four simple steps. We make premium printing
            effortless.
          </p>
        </div>
      </div>

      {/* Steps */}
      <div className="container-xl py-20">
        <div className="space-y-24">
          {steps.map((step, i) => (
            <div
              key={step.number}
              className={`grid grid-cols-1 lg:grid-cols-2 gap-12 items-center ${
                i % 2 === 1 ? "lg:flex-row-reverse" : ""
              }`}
            >
              {/* Visual */}
              <div className={`${i % 2 === 1 ? "lg:order-2" : ""}`}>
                <div
                  className="rounded-2xl h-64 flex items-center justify-center relative overflow-hidden"
                  style={{
                    background: `linear-gradient(135deg, ${step.color}22 0%, transparent 100%)`,
                    border: `1px solid ${step.color}30`,
                  }}
                >
                  <div
                    className="text-[120px] leading-none select-none"
                    aria-hidden
                  >
                    {step.icon}
                  </div>
                  <div
                    className="absolute bottom-4 right-6 text-8xl font-black text-white/5 leading-none select-none"
                    style={{ fontFamily: "Cabinet Grotesk, system-ui" }}
                    aria-hidden
                  >
                    {step.number}
                  </div>
                </div>
              </div>

              {/* Text */}
              <div className={`${i % 2 === 1 ? "lg:order-1" : ""}`}>
                <div
                  className="text-xs font-bold uppercase tracking-widest mb-3"
                  style={{ color: step.color }}
                >
                  Step {step.number}
                </div>
                <h2
                  className="text-3xl sm:text-4xl font-black uppercase leading-tight mb-4"
                  style={{ fontFamily: "Cabinet Grotesk, system-ui" }}
                >
                  {step.title}
                </h2>
                <p className="text-white/60 text-lg leading-relaxed">
                  {step.detail}
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* CTA */}
        <div className="mt-24 text-center border-t border-white/8 pt-16">
          <h2
            className="text-3xl font-black uppercase mb-4"
            style={{ fontFamily: "Cabinet Grotesk, system-ui" }}
          >
            Ready to Get Started?
          </h2>
          <div className="flex flex-wrap justify-center gap-4">
            <Link href="/products" className="btn-primary">
              Browse Products <ArrowRight size={14} />
            </Link>
            <Link href="/get-a-quote" className="btn-outline">
              Get a Free Quote
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
