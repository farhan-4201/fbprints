"use client";
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronLeft, ChevronRight, Star } from "lucide-react";

const testimonials = [
  {
    name: "Marcus T.",
    role: "Event Coordinator",
    body: "Fresh Baked Prints delivered 50 step-and-repeat banners overnight for our gala. Every single one was perfect. These guys are the real deal.",
    rating: 5,
    accent: "#4A9DCF",
  },
  {
    name: "Aisha R.",
    role: "Small Business Owner",
    body: "I needed business cards in 24 hours. Not only did they deliver, the quality blew away every other printer I've used. Will never go anywhere else.",
    rating: 5,
    accent: "#C93183",
  },
  {
    name: "Jordan K.",
    role: "School Prom Committee",
    body: "The prom package was everything. Banners, handheld signs, backdrop — all spot on. Our photos looked incredible. Thank you Fresh Baked!",
    rating: 5,
    accent: "#E0D94D",
  },
  {
    name: "Delia M.",
    role: "Marketing Director",
    body: "Their design team fixed our artwork and turned around 500 flyers the next morning. Crisp colors, perfect cuts. Highly recommend.",
    rating: 5,
    accent: "#4A9DCF",
  },
];

export function Testimonials() {
  const [idx, setIdx] = useState(0);
  const prev = () => setIdx((i) => (i - 1 + testimonials.length) % testimonials.length);
  const next = () => setIdx((i) => (i + 1) % testimonials.length);

  const t = testimonials[idx];

  return (
    <section
      className="section-gap surface-paper relative overflow-hidden"
      aria-labelledby="testimonials-heading"
    >
      {/* Accent line */}
      <div
        className="absolute top-0 left-0 right-0 h-px"
        style={{
          background:
            "linear-gradient(90deg, #4A9DCF 0%, #C93183 50%, #E0D94D 100%)",
        }}
        aria-hidden
      />

      <div className="container-xl relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <p className="text-xs font-bold uppercase tracking-[0.3em] text-[#C93183] mb-3">
            Client Love
          </p>
          <h2
            id="testimonials-heading"
            className="text-4xl sm:text-5xl font-black uppercase text-black leading-tight"
            style={{ fontFamily: "Cabinet Grotesk, system-ui" }}
          >
            Fresh Reviews,
            <br />
            Hot Off the Press
          </h2>
        </motion.div>

        <div className="max-w-2xl mx-auto">
          <AnimatePresence mode="wait">
            <motion.div
              key={idx}
              initial={{ opacity: 0, x: 40 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -40 }}
              transition={{ duration: 0.3 }}
              className="bg-white rounded-2xl p-8 shadow-sm border border-black/5 relative"
            >
              {/* Quote mark */}
              <div
                className="absolute top-6 right-8 text-7xl font-black leading-none select-none"
                style={{
                  fontFamily: "Cabinet Grotesk, system-ui",
                  color: t.accent,
                  opacity: 0.15,
                }}
                aria-hidden
              >
                "
              </div>

              {/* Stars */}
              <div className="flex gap-1 mb-4">
                {Array.from({ length: t.rating }).map((_, i) => (
                  <Star key={i} size={14} fill={t.accent} style={{ color: t.accent }} />
                ))}
              </div>

              <p className="text-black/80 text-lg leading-relaxed mb-6">
                "{t.body}"
              </p>

              <div className="flex items-center gap-3">
                <div
                  className="w-10 h-10 rounded-full flex items-center justify-center text-sm font-black text-black"
                  style={{ background: t.accent }}
                >
                  {t.name.charAt(0)}
                </div>
                <div>
                  <div
                    className="font-black text-black text-sm"
                    style={{ fontFamily: "Cabinet Grotesk, system-ui" }}
                  >
                    {t.name}
                  </div>
                  <div className="text-xs text-black/50">{t.role}</div>
                </div>
              </div>
            </motion.div>
          </AnimatePresence>

          {/* Controls */}
          <div className="flex items-center justify-between mt-6">
            <button
              onClick={prev}
              aria-label="Previous testimonial"
              className="w-10 h-10 rounded-full border border-black/15 flex items-center justify-center hover:border-black/40 transition-colors"
            >
              <ChevronLeft size={16} className="text-black" />
            </button>

            <div className="flex gap-2">
              {testimonials.map((_, i) => (
                <button
                  key={i}
                  onClick={() => setIdx(i)}
                  aria-label={`Testimonial ${i + 1}`}
                  className="w-2 h-2 rounded-full transition-all duration-300"
                  style={{
                    background: i === idx ? "#C93183" : "rgba(0,0,0,0.2)",
                    transform: i === idx ? "scale(1.4)" : "scale(1)",
                  }}
                />
              ))}
            </div>

            <button
              onClick={next}
              aria-label="Next testimonial"
              className="w-10 h-10 rounded-full border border-black/15 flex items-center justify-center hover:border-black/40 transition-colors"
            >
              <ChevronRight size={16} className="text-black" />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
