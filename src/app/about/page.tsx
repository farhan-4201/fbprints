import type { Metadata } from "next";
import Link from "next/link";
import { ArrowRight } from "lucide-react";

export const metadata: Metadata = {
  title: "About Us",
  description:
    "Learn about Fresh Baked Prints — Atlanta's premium printing company. Fast turnarounds, full-color quality, and a team that cares.",
};

const values = [
  { icon: "⚡", title: "Speed", desc: "Next-day on most products. Rush always welcome." },
  { icon: "🎨", title: "Quality", desc: "State-of-the-art presses. Every print checked by eye." },
  { icon: "💛", title: "Care", desc: "Real people, real support. We treat your brand like our own." },
  { icon: "📐", title: "Precision", desc: "Print-ready standards, exact cuts, true-to-color output." },
];

export default function AboutPage() {
  return (
    <div className="bg-black min-h-screen pt-[var(--header-h)]">
      {/* Hero */}
      <div className="relative py-24 border-b border-white/8 overflow-hidden">
        <div
          className="absolute inset-0"
          style={{
            background:
              "radial-gradient(ellipse 80% 60% at 50% 40%, rgba(224,217,77,0.06) 0%, transparent 70%)",
          }}
        />
        <div
          className="absolute inset-0"
          style={{
            backgroundImage:
              "radial-gradient(circle, rgba(224,217,77,0.06) 1px, transparent 1px)",
            backgroundSize: "24px 24px",
          }}
        />
        <div className="container-xl relative z-10">
          <p className="text-xs font-bold uppercase tracking-[0.3em] text-[#E0D94D] mb-3">
            Our Story
          </p>
          <h1
            className="text-5xl sm:text-7xl font-black uppercase leading-[0.9] mb-6 max-w-2xl"
            style={{
              fontFamily: "Cabinet Grotesk, system-ui",
              textShadow:
                "-2px -1.5px 0 rgba(74,157,207,0.45), 2px 1.5px 0 rgba(201,49,131,0.4)",
            }}
          >
            We Print
            <br />
            <span
              style={{
                background: "linear-gradient(90deg, #4A9DCF, #C93183, #E0D94D)",
                WebkitBackgroundClip: "text",
                WebkitTextFillColor: "transparent",
                backgroundClip: "text",
              }}
            >
              With Purpose.
            </span>
          </h1>
          <p className="text-white/60 text-lg max-w-xl leading-relaxed">
            Fresh Baked Prints was built by creatives who got tired of slow,
            overpriced, impersonal print shops. We built something better — a
            studio that moves at the speed of ideas.
          </p>
        </div>
      </div>

      <div className="container-xl py-16 space-y-20">
        {/* Mission */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div>
            <h2
              className="text-3xl font-black uppercase mb-4 text-[#4A9DCF]"
              style={{ fontFamily: "Cabinet Grotesk, system-ui" }}
            >
              Our Mission
            </h2>
            <p className="text-white/65 text-lg leading-relaxed mb-4">
              To make premium printing accessible — without the wait, the
              minimums, or the runaround. We believe every brand deserves
              print that looks as good as it should.
            </p>
            <p className="text-white/55 leading-relaxed">
              Based in Atlanta, GA, we serve clients locally and nationwide.
              From one business card to 10,000 flyers — we treat every job like
              it matters. Because it does.
            </p>
          </div>
          <div
            className="rounded-2xl h-64 relative overflow-hidden"
            style={{
              background:
                "linear-gradient(135deg, rgba(74,157,207,0.12) 0%, rgba(201,49,131,0.08) 100%)",
              border: "1px solid rgba(255,255,255,0.08)",
            }}
          >
            <div
              className="absolute inset-0"
              style={{
                backgroundImage:
                  "radial-gradient(circle, rgba(255,255,255,0.04) 1px, transparent 1px)",
                backgroundSize: "18px 18px",
              }}
            />
            <div className="absolute inset-0 flex items-center justify-center">
              <div
                className="text-6xl font-black uppercase text-white/5"
                style={{ fontFamily: "Cabinet Grotesk, system-ui" }}
                aria-hidden
              >
                FRESH
              </div>
            </div>
          </div>
        </div>

        {/* Values */}
        <div>
          <h2
            className="text-3xl font-black uppercase mb-8 text-center"
            style={{ fontFamily: "Cabinet Grotesk, system-ui" }}
          >
            What We Stand For
          </h2>
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-5">
            {values.map((v, i) => (
              <div
                key={v.title}
                className="bg-[#0a0a0a] border border-white/8 rounded-2xl p-5 text-center"
              >
                <div className="text-4xl mb-3">{v.icon}</div>
                <div
                  className="font-black uppercase mb-2 text-lg"
                  style={{
                    fontFamily: "Cabinet Grotesk, system-ui",
                    color: ["#4A9DCF","#C93183","#E0D94D","#4A9DCF"][i],
                  }}
                >
                  {v.title}
                </div>
                <p className="text-white/50 text-sm">{v.desc}</p>
              </div>
            ))}
          </div>
        </div>

        {/* CTA */}
        <div className="text-center border-t border-white/8 pt-16">
          <h2
            className="text-3xl font-black uppercase mb-4"
            style={{ fontFamily: "Cabinet Grotesk, system-ui" }}
          >
            Ready to Work Together?
          </h2>
          <div className="flex flex-wrap justify-center gap-4">
            <Link href="/get-a-quote" className="btn-primary">
              Get a Free Quote <ArrowRight size={14} />
            </Link>
            <Link href="/contact" className="btn-outline">
              Contact Us
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
