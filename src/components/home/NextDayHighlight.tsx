"use client";
import { motion, useInView } from "framer-motion";
import { useRef, useEffect, useState } from "react";

function Counter({
  to,
  suffix = "",
  prefix = "",
}: {
  to: number;
  suffix?: string;
  prefix?: string;
}) {
  const ref = useRef<HTMLSpanElement>(null);
  const inView = useInView(ref, { once: true });
  const [count, setCount] = useState(0);

  useEffect(() => {
    if (!inView) return;
    let start = 0;
    const duration = 1600;
    const startTime = performance.now();
    const tick = (now: number) => {
      const progress = Math.min((now - startTime) / duration, 1);
      const eased = 1 - Math.pow(1 - progress, 3);
      setCount(Math.round(eased * to));
      if (progress < 1) requestAnimationFrame(tick);
    };
    requestAnimationFrame(tick);
  }, [inView, to]);

  return (
    <span ref={ref}>
      {prefix}
      {count.toLocaleString()}
      {suffix}
    </span>
  );
}

const stats = [
  { value: 1000, suffix: "+", label: "Orders Fulfilled", color: "#4A9DCF" },
  { value: 24, suffix: "h", label: "Avg. Turnaround", color: "#C93183" },
  { value: 20, suffix: "+", label: "Print Products", color: "#E0D94D" },
  { value: 98, suffix: "%", label: "Satisfaction Rate", color: "#4A9DCF" },
];

export function NextDayHighlight() {
  return (
    <section
      className="section-gap bg-black relative overflow-hidden"
      aria-labelledby="stats-heading"
    >
      {/* Big background text */}
      <div
        className="absolute inset-0 flex items-center justify-center pointer-events-none select-none"
        aria-hidden
      >
        <span
          className="text-[18vw] font-black uppercase leading-none text-white"
          style={{
            fontFamily: "Cabinet Grotesk, system-ui",
            opacity: 0.02,
          }}
        >
          FRESH
        </span>
      </div>

      <div className="container-xl relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <p className="text-xs font-bold uppercase tracking-[0.3em] text-[#E0D94D] mb-3">
            The Numbers
          </p>
          <h2
            id="stats-heading"
            className="text-4xl sm:text-5xl font-black uppercase misreg-text"
            style={{ fontFamily: "Cabinet Grotesk, system-ui" }}
          >
            Baked Fresh, Every Day
          </h2>
        </motion.div>

        <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
          {stats.map((stat, i) => (
            <motion.div
              key={stat.label}
              initial={{ opacity: 0, y: 32 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              className="text-center"
            >
              <div
                className="text-5xl sm:text-6xl font-black leading-none mb-2"
                style={{
                  fontFamily: "Cabinet Grotesk, system-ui",
                  color: stat.color,
                }}
              >
                <Counter to={stat.value} suffix={stat.suffix} />
              </div>
              <div className="text-xs uppercase tracking-widest text-white/50 font-medium">
                {stat.label}
              </div>
            </motion.div>
          ))}
        </div>

        {/* Next-day CTA strip */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="mt-16 rounded-2xl p-8 flex flex-col sm:flex-row items-center justify-between gap-6 border border-[#E0D94D]/20 relative overflow-hidden"
          style={{
            background:
              "linear-gradient(135deg, rgba(224,217,77,0.06) 0%, rgba(201,49,131,0.06) 100%)",
          }}
        >
          <div>
            <div
              className="text-2xl font-black uppercase mb-1 text-[#E0D94D]"
              style={{ fontFamily: "Cabinet Grotesk, system-ui" }}
            >
              ⚡ Next-Day Turnaround
            </div>
            <p className="text-white/60 text-sm">
              Order before noon EST — pick up or ship tomorrow. Rush orders
              always welcome.
            </p>
          </div>
          <a href="/get-a-quote" className="btn-primary flex-shrink-0">
            Get a Quote
          </a>
        </motion.div>
      </div>
    </section>
  );
}
