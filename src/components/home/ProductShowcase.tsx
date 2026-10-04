"use client";
import { useState } from "react";
import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import { products, productCategories } from "@/content/products";

export function ProductShowcase() {
  const [activeCategory, setActiveCategory] = useState<string>("All");
  const categories = ["All", ...productCategories];

  const filtered =
    activeCategory === "All"
      ? products
      : products.filter((p) => p.category === activeCategory);

  return (
    <section
      className="section-gap bg-black"
      aria-labelledby="showcase-heading"
    >
      <div className="container-xl">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-10"
        >
          <p className="text-xs font-bold uppercase tracking-[0.3em] text-[#C93183] mb-3">
            Full Catalog
          </p>
          <h2
            id="showcase-heading"
            className="text-4xl sm:text-5xl font-black uppercase misreg-text"
            style={{ fontFamily: "Cabinet Grotesk, system-ui" }}
          >
            Everything You Need,
            <br />
            Printed Fresh
          </h2>
        </motion.div>

        {/* Category filter */}
        <div className="flex flex-wrap justify-center gap-2 mb-10">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setActiveCategory(cat)}
              className="px-4 py-1.5 rounded-full text-xs font-bold uppercase tracking-widest transition-all duration-200"
              style={{
                fontFamily: "Cabinet Grotesk, system-ui",
                background:
                  activeCategory === cat
                    ? "linear-gradient(135deg, #4A9DCF, #C93183)"
                    : "transparent",
                color: activeCategory === cat ? "#000" : "rgba(240,240,240,0.6)",
                border:
                  activeCategory === cat
                    ? "none"
                    : "1px solid rgba(240,240,240,0.15)",
              }}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Grid */}
        <motion.div
          layout
          className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-4"
        >
          {filtered.map((product, i) => (
            <motion.div
              key={product.slug}
              layout
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.9 }}
              transition={{ duration: 0.3, delay: i * 0.04 }}
            >
              <Link
                href={`/products/${product.slug}`}
                className="group block rounded-xl overflow-hidden border border-white/8 bg-[#0a0a0a] hover:border-white/25 transition-all duration-300 hover:-translate-y-0.5"
              >
                {/* Mini gradient tile */}
                <div
                  className="h-24 relative"
                  style={{ background: product.gradient }}
                >
                  <div
                    className="absolute inset-0"
                    style={{
                      backgroundImage:
                        "radial-gradient(circle, rgba(0,0,0,0.15) 1px, transparent 1px)",
                      backgroundSize: "14px 14px",
                    }}
                  />
                  {/* Turnaround badge */}
                  {product.turnaround === "Next Day" && (
                    <div className="absolute top-2 left-2 bg-[#E0D94D] text-black text-[9px] font-black px-2 py-0.5 rounded-full uppercase tracking-wide">
                      ⚡ Next Day
                    </div>
                  )}
                </div>
                <div className="p-3">
                  <div className="text-[9px] uppercase tracking-widest text-[#4A9DCF] font-bold mb-0.5">
                    {product.category}
                  </div>
                  <div
                    className="text-xs font-black uppercase leading-tight group-hover:text-[#E0D94D] transition-colors"
                    style={{ fontFamily: "Cabinet Grotesk, system-ui" }}
                  >
                    {product.name}
                  </div>
                  <div className="text-[10px] text-white/45 mt-1">
                    From {product.startingPrice}
                  </div>
                </div>
              </Link>
            </motion.div>
          ))}
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="text-center mt-8"
        >
          <Link href="/products" className="btn-primary text-sm">
            See All Products
            <ArrowRight size={14} />
          </Link>
        </motion.div>
      </div>
    </section>
  );
}
