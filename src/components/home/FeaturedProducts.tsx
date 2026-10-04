"use client";
import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import { featuredProducts } from "@/content/products";

export function FeaturedProducts() {
  return (
    <section className="section-gap bg-black halftone-overlay" aria-labelledby="featured-heading">
      <div className="container-xl relative z-10">
        {/* Heading */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-14"
        >
          <p className="text-xs font-bold uppercase tracking-[0.3em] text-[#4A9DCF] mb-3">
            Most Popular
          </p>
          <h2
            className="text-4xl sm:text-5xl font-black uppercase leading-tight misreg-text"
            style={{ fontFamily: "Cabinet Grotesk, system-ui" }}
            id="featured-heading"
          >
            Print. Impress. Repeat.
          </h2>
        </motion.div>

        {/* Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {featuredProducts.map((product, i) => (
            <motion.div
              key={product.slug}
              initial={{ opacity: 0, y: 32 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.55, delay: i * 0.12 }}
            >
              <Link
                href={`/products/${product.slug}`}
                className="group block rounded-2xl overflow-hidden border border-white/8 bg-[#0a0a0a] crop-marks transition-all duration-300 hover:border-white/20 hover:-translate-y-1 hover:shadow-2xl"
              >
                {/* Gradient header */}
                <div
                  className="h-44 relative overflow-hidden"
                  style={{ background: product.gradient }}
                >
                  {/* Halftone overlay */}
                  <div
                    className="absolute inset-0"
                    style={{
                      backgroundImage:
                        "radial-gradient(circle, rgba(0,0,0,0.18) 1px, transparent 1px)",
                      backgroundSize: "18px 18px",
                    }}
                  />
                  {/* Product name watermark */}
                  <div className="absolute inset-0 flex items-end p-5">
                    <span
                      className="text-5xl font-black uppercase text-black/20 leading-none tracking-tighter"
                      style={{ fontFamily: "Cabinet Grotesk, system-ui" }}
                    >
                      {product.name}
                    </span>
                  </div>
                  {/* Price badge */}
                  <div className="absolute top-4 right-4 bg-black/60 backdrop-blur-sm text-white text-xs font-bold px-3 py-1.5 rounded-full">
                    From {product.startingPrice}
                  </div>
                </div>

                {/* Content */}
                <div className="p-5">
                  <div className="flex items-center justify-between mb-2">
                    <span className="text-[10px] font-bold uppercase tracking-widest text-[#4A9DCF]">
                      {product.category}
                    </span>
                    <span className="text-[10px] font-bold uppercase tracking-widest text-[#E0D94D]">
                      ⚡ {product.turnaround}
                    </span>
                  </div>
                  <h3
                    className="text-xl font-black uppercase mb-1 group-hover:text-[#E0D94D] transition-colors"
                    style={{ fontFamily: "Cabinet Grotesk, system-ui" }}
                  >
                    {product.name}
                  </h3>
                  <p className="text-sm text-white/55 leading-relaxed mb-4">
                    {product.tagline}
                  </p>
                  <div className="flex items-center gap-1 text-xs font-bold uppercase tracking-widest text-white/70 group-hover:text-white transition-colors">
                    Order Now
                    <ArrowRight
                      size={12}
                      className="group-hover:translate-x-1 transition-transform"
                    />
                  </div>
                </div>
              </Link>
            </motion.div>
          ))}
        </div>

        {/* CTA */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="text-center mt-10"
        >
          <Link href="/products" className="btn-outline">
            View All 20+ Products
            <ArrowRight size={14} />
          </Link>
        </motion.div>
      </div>
    </section>
  );
}
