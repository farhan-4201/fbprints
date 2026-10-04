"use client";
import { motion } from "framer-motion";
import Link from "next/link";
import { ArrowRight } from "lucide-react";

export function FinalCTA() {
  return (
    <section
      className="relative py-32 bg-black overflow-hidden"
      aria-labelledby="cta-heading"
    >
      {/* CMY gradient blob */}
      <div
        className="absolute inset-0"
        style={{
          background:
            "radial-gradient(ellipse 90% 80% at 50% 50%, rgba(74,157,207,0.08) 0%, rgba(201,49,131,0.06) 40%, rgba(224,217,77,0.04) 70%, transparent 100%)",
        }}
        aria-hidden
      />

      {/* Halftone grid */}
      <div
        className="absolute inset-0"
        style={{
          backgroundImage:
            "radial-gradient(circle, rgba(255,255,255,0.04) 1px, transparent 1px)",
          backgroundSize: "32px 32px",
        }}
        aria-hidden
      />

      {/* Registration marks corners */}
      {[
        { top: 20, left: 20 },
        { top: 20, right: 20 },
        { bottom: 20, left: 20 },
        { bottom: 20, right: 20 },
      ].map((pos, i) => (
        <div
          key={i}
          className="absolute w-8 h-8 opacity-20"
          style={{
            ...pos,
            backgroundImage: `
              linear-gradient(#4A9DCF,#4A9DCF) 50% 0 / 1px 100%,
              linear-gradient(#4A9DCF,#4A9DCF) 0 50% / 100% 1px
            `,
            backgroundRepeat: "no-repeat",
          }}
          aria-hidden
        />
      ))}

      <div className="container-xl relative z-10 text-center">
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-xs font-bold uppercase tracking-[0.3em] text-[#4A9DCF] mb-4"
        >
          Ready When You Are
        </motion.p>

        <motion.h2
          id="cta-heading"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="text-5xl sm:text-6xl lg:text-7xl font-black uppercase leading-[0.9] mb-6"
          style={{
            fontFamily: "Cabinet Grotesk, system-ui",
            textShadow:
              "-2px -1.5px 0 rgba(74,157,207,0.5), 2px 1.5px 0 rgba(201,49,131,0.4)",
          }}
        >
          Let&apos;s Print
          <br />
          <span
            style={{
              background:
                "linear-gradient(90deg, #4A9DCF, #C93183, #E0D94D)",
              WebkitBackgroundClip: "text",
              WebkitTextFillColor: "transparent",
              backgroundClip: "text",
            }}
          >
            Something Great.
          </span>
        </motion.h2>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.25 }}
          className="text-white/60 text-lg max-w-md mx-auto mb-10"
        >
          Get an instant quote in minutes. Next-day delivery available.
          No minimums, no fuss.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.35 }}
          className="flex flex-wrap justify-center gap-4"
        >
          <Link href="/get-a-quote" className="btn-primary group text-sm">
            Get a Free Quote
            <ArrowRight
              size={14}
              className="group-hover:translate-x-1 transition-transform"
            />
          </Link>
          <Link href="/products" className="btn-outline text-sm">
            Browse Products
          </Link>
        </motion.div>
      </div>
    </section>
  );
}
