import Link from "next/link";
import { ArrowRight } from "lucide-react";

export default function NotFound() {
  return (
    <div className="bg-black min-h-screen pt-[var(--header-h)] flex items-center justify-center relative overflow-hidden">
      {/* Halftone grid */}
      <div
        className="absolute inset-0"
        style={{
          backgroundImage:
            "radial-gradient(circle, rgba(74,157,207,0.07) 1px, transparent 1px)",
          backgroundSize: "28px 28px",
        }}
        aria-hidden
      />
      {/* Big 404 watermark */}
      <div
        className="absolute text-[25vw] font-black text-white/[0.025] leading-none select-none pointer-events-none"
        style={{ fontFamily: "Cabinet Grotesk, system-ui" }}
        aria-hidden
      >
        404
      </div>

      <div className="relative z-10 text-center px-6">
        {/* Registration marks */}
        <div
          className="w-10 h-10 mx-auto mb-8 opacity-30"
          style={{
            backgroundImage: `
              linear-gradient(#4A9DCF,#4A9DCF) 50% 0 / 1px 100%,
              linear-gradient(#4A9DCF,#4A9DCF) 0 50% / 100% 1px
            `,
            backgroundRepeat: "no-repeat",
          }}
          aria-hidden
        />

        <p className="text-xs font-bold uppercase tracking-[0.3em] text-[#C93183] mb-3">
          Error 404
        </p>
        <h1
          className="text-5xl sm:text-7xl font-black uppercase leading-[0.9] mb-4"
          style={{
            fontFamily: "Cabinet Grotesk, system-ui",
            textShadow:
              "-2px -1.5px 0 rgba(74,157,207,0.5), 2px 1.5px 0 rgba(201,49,131,0.45)",
          }}
        >
          Page Not
          <br />
          <span
            style={{
              background: "linear-gradient(90deg, #4A9DCF, #C93183, #E0D94D)",
              WebkitBackgroundClip: "text",
              WebkitTextFillColor: "transparent",
              backgroundClip: "text",
            }}
          >
            Found.
          </span>
        </h1>
        <p className="text-white/55 text-lg mb-10 max-w-xs mx-auto">
          Looks like this page got trimmed in the bleed. Let&apos;s get you
          back on the press.
        </p>
        <div className="flex flex-wrap justify-center gap-4">
          <Link href="/" className="btn-primary">
            Back to Home <ArrowRight size={14} />
          </Link>
          <Link href="/products" className="btn-outline">
            Browse Products
          </Link>
        </div>
      </div>
    </div>
  );
}
