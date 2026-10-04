import type { Metadata } from "next";
import Link from "next/link";
import { ArrowRight, CheckCircle, Palette, Clock, Star } from "lucide-react";

export const metadata: Metadata = {
  title: "Design Services",
  description:
    "Need a design? Fresh Baked Prints' in-house design team creates stunning print-ready artwork fast. Logos, banners, flyers, and more.",
};

const services = [
  {
    icon: "🎨",
    title: "Brand New Design",
    desc: "Starting from scratch? Our designers create stunning, print-ready artwork based on your vision, brand colors, and goals.",
    price: "From $75",
    color: "#4A9DCF",
  },
  {
    icon: "✏️",
    title: "Design Touchup",
    desc: "Have artwork that needs a refresh, resize, or bleed added? We'll fix it up fast — usually same day.",
    price: "From $25",
    color: "#C93183",
  },
  {
    icon: "🖼",
    title: "Template Customization",
    desc: "Choose from our library of pre-built templates. We customize it with your text, photos, and logo in minutes.",
    price: "From $35",
    color: "#E0D94D",
  },
];

export default function DesignServicesPage() {
  return (
    <div className="bg-black min-h-screen pt-[var(--header-h)]">
      {/* Hero */}
      <div className="relative py-24 overflow-hidden border-b border-white/8">
        <div
          className="absolute inset-0"
          style={{
            background:
              "radial-gradient(ellipse 70% 60% at 50% 40%, rgba(74,157,207,0.07) 0%, transparent 70%)",
          }}
        />
        <div
          className="absolute inset-0"
          style={{
            backgroundImage:
              "radial-gradient(circle, rgba(74,157,207,0.08) 1px, transparent 1px)",
            backgroundSize: "24px 24px",
          }}
        />
        <div className="container-xl relative z-10 text-center">
          <p className="text-xs font-bold uppercase tracking-[0.3em] text-[#4A9DCF] mb-3">
            In-House Design Team
          </p>
          <h1
            className="text-5xl sm:text-6xl font-black uppercase"
            style={{
              fontFamily: "Cabinet Grotesk, system-ui",
              textShadow:
                "-2px -1px 0 rgba(74,157,207,0.4), 2px 1px 0 rgba(201,49,131,0.35)",
            }}
          >
            Design Services
          </h1>
          <p className="text-white/55 mt-4 max-w-lg mx-auto text-lg">
            No artwork? No problem. Our in-house designers create stunning,
            print-ready files — fast.
          </p>
          <div className="flex flex-wrap justify-center gap-4 mt-8">
            <Link href="/get-a-quote" className="btn-primary">
              Start a Design Project <ArrowRight size={14} />
            </Link>
            <Link href="/contact" className="btn-outline">
              Ask a Question
            </Link>
          </div>
        </div>
      </div>

      <div className="container-xl py-16">
        {/* Services */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-20">
          {services.map((svc) => (
            <div
              key={svc.title}
              className="bg-[#0a0a0a] border border-white/8 rounded-2xl p-6 hover:border-white/20 transition-colors"
            >
              <div className="text-4xl mb-4">{svc.icon}</div>
              <div
                className="text-xs font-bold uppercase tracking-widest mb-2"
                style={{ color: svc.color }}
              >
                {svc.price}
              </div>
              <h3
                className="text-xl font-black uppercase mb-2"
                style={{ fontFamily: "Cabinet Grotesk, system-ui" }}
              >
                {svc.title}
              </h3>
              <p className="text-white/55 text-sm leading-relaxed">{svc.desc}</p>
            </div>
          ))}
        </div>

        {/* Why us */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mb-20">
          <div>
            <h2
              className="text-3xl font-black uppercase mb-4"
              style={{ fontFamily: "Cabinet Grotesk, system-ui" }}
            >
              Why Use Our Design Team?
            </h2>
            <ul className="space-y-4">
              {[
                { icon: <Clock size={16} />, text: "Same-day turnaround on most design requests" },
                { icon: <Palette size={16} />, text: "Print-ready files — no back-and-forth needed" },
                { icon: <Star size={16} />, text: "Expert designers who know print production inside and out" },
                { icon: <CheckCircle size={16} />, text: "Unlimited revisions until you love it" },
              ].map(({ icon, text }) => (
                <li key={text} className="flex items-start gap-3 text-white/70">
                  <span className="text-[#4A9DCF] mt-0.5 flex-shrink-0">{icon}</span>
                  {text}
                </li>
              ))}
            </ul>
            <Link href="/get-a-quote" className="btn-primary mt-8 inline-flex">
              Start Your Project <ArrowRight size={14} />
            </Link>
          </div>

          <div
            className="rounded-2xl h-72 relative overflow-hidden flex items-center justify-center"
            style={{
              background:
                "linear-gradient(135deg, rgba(74,157,207,0.12) 0%, rgba(201,49,131,0.08) 50%, rgba(224,217,77,0.06) 100%)",
              border: "1px solid rgba(255,255,255,0.08)",
            }}
          >
            <div
              className="absolute inset-0"
              style={{
                backgroundImage:
                  "radial-gradient(circle, rgba(255,255,255,0.04) 1px, transparent 1px)",
                backgroundSize: "20px 20px",
              }}
            />
            <div className="text-center relative z-10">
              <div className="text-7xl mb-4">🎨</div>
              <div
                className="text-xl font-black uppercase"
                style={{ fontFamily: "Cabinet Grotesk, system-ui", color: "#E0D94D" }}
              >
                Designed to Print
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
