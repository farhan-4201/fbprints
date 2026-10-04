"use client";
import { useEffect, useRef } from "react";
import { motion } from "framer-motion";
import Link from "next/link";
import { ArrowRight, Zap } from "lucide-react";

export function HeroSection() {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    let w = (canvas.width = window.innerWidth);
    let h = (canvas.height = window.innerHeight);
    let mouseX = w / 2, mouseY = h / 2;

    const resize = () => {
      w = canvas.width = window.innerWidth;
      h = canvas.height = window.innerHeight;
    };

    const onMove = (e: MouseEvent) => {
      mouseX = e.clientX;
      mouseY = e.clientY;
    };

    window.addEventListener("resize", resize);
    window.addEventListener("mousemove", onMove);

    let rafId: number;
    const spacing = 28;
    const cols = Math.ceil(w / spacing) + 2;
    const rows = Math.ceil(h / spacing) + 2;

    const colors = ["#4A9DCF", "#C93183", "#E0D94D"];

    const draw = () => {
      ctx.clearRect(0, 0, w, h);
      for (let r = 0; r < rows; r++) {
        for (let c = 0; c < cols; c++) {
          const x = c * spacing;
          const y = r * spacing;
          const dx = x - mouseX;
          const dy = y - mouseY;
          const dist = Math.sqrt(dx * dx + dy * dy);
          const maxR = 250;
          const radius = Math.max(1, (1 - Math.min(dist, maxR) / maxR) * 5);
          const alpha = Math.max(0.06, (1 - Math.min(dist, maxR) / maxR) * 0.55);
          const colorIdx = (r + c) % 3;
          ctx.beginPath();
          ctx.arc(x, y, radius, 0, Math.PI * 2);
          ctx.fillStyle =
            colors[colorIdx].replace(
              "#",
              `rgba(${parseInt(colors[colorIdx].slice(1, 3), 16)},${parseInt(colors[colorIdx].slice(3, 5), 16)},${parseInt(colors[colorIdx].slice(5, 7), 16)},`
            ) + `${alpha})`;
          // simpler approach
          ctx.fillStyle = colors[colorIdx];
          ctx.globalAlpha = alpha;
          ctx.fill();
          ctx.globalAlpha = 1;
        }
      }
      rafId = requestAnimationFrame(draw);
    };
    draw();

    return () => {
      window.removeEventListener("resize", resize);
      window.removeEventListener("mousemove", onMove);
      cancelAnimationFrame(rafId);
    };
  }, []);

  return (
    <section
      className="relative min-h-screen flex items-center overflow-hidden bg-black"
      aria-label="Hero"
    >
      {/* Halftone canvas */}
      <canvas
        ref={canvasRef}
        className="absolute inset-0 w-full h-full"
        aria-hidden
      />

      {/* Radial vignette */}
      <div
        className="absolute inset-0"
        style={{
          background:
            "radial-gradient(ellipse 80% 70% at 50% 50%, transparent 0%, rgba(0,0,0,0.7) 70%, #000 100%)",
        }}
        aria-hidden
      />

      {/* Registration marks */}
      <div
        className="absolute top-8 left-8 w-10 h-10 opacity-30"
        aria-hidden
        style={{
          backgroundImage: `
            linear-gradient(#4A9DCF,#4A9DCF) 50% 0 / 1px 100%,
            linear-gradient(#4A9DCF,#4A9DCF) 0 50% / 100% 1px
          `,
          backgroundRepeat: "no-repeat",
        }}
      />
      <div
        className="absolute top-8 right-8 w-10 h-10 opacity-30"
        aria-hidden
        style={{
          backgroundImage: `
            linear-gradient(#C93183,#C93183) 50% 0 / 1px 100%,
            linear-gradient(#C93183,#C93183) 0 50% / 100% 1px
          `,
          backgroundRepeat: "no-repeat",
        }}
      />

      {/* Content */}
      <div className="container-xl relative z-10 pt-32 pb-24">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="inline-flex items-center gap-2 border border-[#E0D94D]/40 rounded-full px-4 py-1.5 mb-7"
        >
          <Zap size={12} fill="#E0D94D" className="text-[#E0D94D]" />
          <span className="text-xs font-bold uppercase tracking-widest text-[#E0D94D]">
            Next-Day Printing Available
          </span>
        </motion.div>

        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.3 }}
          className="text-5xl sm:text-6xl lg:text-8xl font-black uppercase leading-[0.9] tracking-tight mb-6"
          style={{
            fontFamily: "Cabinet Grotesk, system-ui",
            textShadow:
              "-3px -2px 0 rgba(74,157,207,0.5), 3px 2px 0 rgba(201,49,131,0.4)",
          }}
        >
          Print That
          <br />
          <span
            style={{
              background:
                "linear-gradient(90deg, #4A9DCF 0%, #C93183 50%, #E0D94D 100%)",
              WebkitBackgroundClip: "text",
              WebkitTextFillColor: "transparent",
              backgroundClip: "text",
            }}
          >
            Hits Different.
          </span>
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.5 }}
          className="text-lg text-white/65 max-w-xl mb-10 leading-relaxed"
        >
          Premium full-color printing with next-day turnaround. Banners,
          business cards, flyers, and 20+ more products — fresh from our press
          to your door.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.65 }}
          className="flex flex-wrap gap-4"
        >
          <Link href="/products" className="btn-primary group">
            Shop All Products
            <ArrowRight
              size={16}
              className="group-hover:translate-x-1 transition-transform"
            />
          </Link>
          <Link href="/get-a-quote" className="btn-outline">
            Get a Free Quote
          </Link>
        </motion.div>

        {/* Stats row */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.9 }}
          className="flex flex-wrap gap-8 mt-16 pt-8 border-t border-white/10"
        >
          {[
            { value: "20+", label: "Print Products" },
            { value: "Next Day", label: "Turnaround" },
            { value: "1,000+", label: "Happy Clients" },
            { value: "100%", label: "Quality Guarantee" },
          ].map(({ value, label }) => (
            <div key={label}>
              <div
                className="text-3xl font-black"
                style={{
                  fontFamily: "Cabinet Grotesk, system-ui",
                  color: "#E0D94D",
                }}
              >
                {value}
              </div>
              <div className="text-xs text-white/50 uppercase tracking-widest mt-1">
                {label}
              </div>
            </div>
          ))}
        </motion.div>
      </div>

      {/* Scroll cue */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.5, duration: 0.8 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2"
      >
        <span className="text-[10px] uppercase tracking-[0.2em] text-white/30">
          Scroll
        </span>
        <motion.div
          animate={{ y: [0, 6, 0] }}
          transition={{ duration: 1.4, repeat: Infinity }}
          className="w-px h-8 bg-gradient-to-b from-white/30 to-transparent"
        />
      </motion.div>
    </section>
  );
}
