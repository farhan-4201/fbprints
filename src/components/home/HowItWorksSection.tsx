"use client";
import { motion } from "framer-motion";

const steps = [
  {
    number: "01",
    title: "Choose Your Product",
    body: "Browse 20+ print products. Select your size, material, and quantity — then customize to your exact specs.",
    color: "#4A9DCF",
    icon: "🛍",
  },
  {
    number: "02",
    title: "Upload Your Artwork",
    body: "Upload your print-ready file. No design yet? Our team can create it for you — just ask.",
    color: "#C93183",
    icon: "🎨",
  },
  {
    number: "03",
    title: "We Print It Fresh",
    body: "Your job goes straight to our press. Next-day turnaround on most products. No waiting, no excuses.",
    color: "#E0D94D",
    icon: "🖨",
  },
  {
    number: "04",
    title: "Pick Up or Ship",
    body: "Collect locally or have your order shipped anywhere in the US. Track your package in real time.",
    color: "#4A9DCF",
    icon: "📦",
  },
];

export function HowItWorksSection() {
  return (
    <section
      className="section-gap surface-paper relative overflow-hidden"
      aria-labelledby="how-heading"
    >
      {/* Paper grain */}
      <div
        className="absolute inset-0 opacity-30"
        style={{
          backgroundImage: `radial-gradient(circle, rgba(0,0,0,0.04) 1px, transparent 1px)`,
          backgroundSize: "20px 20px",
        }}
        aria-hidden
      />
      {/* Top edge crop marks */}
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
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-14"
        >
          <p className="text-xs font-bold uppercase tracking-[0.3em] text-[#C93183] mb-3">
            Simple Process
          </p>
          <h2
            id="how-heading"
            className="text-4xl sm:text-5xl font-black uppercase leading-tight text-black"
            style={{ fontFamily: "Cabinet Grotesk, system-ui" }}
          >
            From Click to Crisp
            <br />
            in 4 Steps
          </h2>
        </motion.div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {steps.map((step, i) => (
            <motion.div
              key={step.number}
              initial={{ opacity: 0, y: 32 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              className="relative bg-white rounded-2xl p-6 shadow-sm border border-black/5 group hover:-translate-y-1 transition-transform duration-300"
            >
              {/* Step number */}
              <div
                className="text-6xl font-black opacity-8 leading-none mb-4 select-none"
                style={{
                  fontFamily: "Cabinet Grotesk, system-ui",
                  color: step.color,
                  opacity: 0.08,
                  position: "absolute",
                  top: 12,
                  right: 16,
                  fontSize: "5rem",
                }}
                aria-hidden
              >
                {step.number}
              </div>

              <div className="text-4xl mb-4">{step.icon}</div>

              <div
                className="text-xs font-bold uppercase tracking-widest mb-2"
                style={{ color: step.color }}
              >
                Step {step.number}
              </div>

              <h3
                className="text-xl font-black uppercase mb-2 text-black leading-tight"
                style={{ fontFamily: "Cabinet Grotesk, system-ui" }}
              >
                {step.title}
              </h3>
              <p className="text-sm text-black/60 leading-relaxed">{step.body}</p>

              {/* Connector line (hidden on last) */}
              {i < steps.length - 1 && (
                <div
                  className="hidden lg:block absolute top-1/2 -right-3 w-6 h-px"
                  style={{ background: step.color, opacity: 0.4 }}
                  aria-hidden
                />
              )}
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
