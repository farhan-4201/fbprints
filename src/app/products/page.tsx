import type { Metadata } from "next";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { products, productCategories } from "@/content/products";

export const metadata: Metadata = {
  title: "All Print Products",
  description:
    "Browse 20+ premium print products — banners, business cards, flyers, yard signs, custom apparel and more. Next-day turnaround available.",
};

export default function ProductsPage() {
  return (
    <div className="bg-black min-h-screen pt-[var(--header-h)]">
      {/* Page header */}
      <div className="relative py-20 overflow-hidden border-b border-white/8">
        <div
          className="absolute inset-0"
          style={{
            backgroundImage:
              "radial-gradient(circle, rgba(74,157,207,0.08) 1px, transparent 1px)",
            backgroundSize: "24px 24px",
          }}
        />
        <div className="container-xl relative z-10">
          <p className="text-xs font-bold uppercase tracking-[0.3em] text-[#4A9DCF] mb-3">
            Full Catalog
          </p>
          <h1
            className="text-5xl sm:text-6xl font-black uppercase leading-tight"
            style={{
              fontFamily: "Cabinet Grotesk, system-ui",
              textShadow:
                "-2px -1px 0 rgba(74,157,207,0.4), 2px 1px 0 rgba(201,49,131,0.35)",
            }}
          >
            All Print Products
          </h1>
          <p className="text-white/55 mt-4 max-w-lg">
            20+ products, next-day turnaround, no minimums. Pick your product
            and we&apos;ll handle the rest.
          </p>
        </div>
      </div>

      <div className="container-xl py-16">
        {productCategories.map((category) => {
          const items = products.filter((p) => p.category === category);
          return (
            <div key={category} className="mb-16">
              <div className="flex items-center gap-4 mb-6">
                <h2
                  className="text-2xl font-black uppercase"
                  style={{ fontFamily: "Cabinet Grotesk, system-ui", color: "#E0D94D" }}
                >
                  {category}
                </h2>
                <div className="flex-1 h-px bg-white/8" />
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-5">
                {items.map((product) => (
                  <Link
                    key={product.slug}
                    href={`/products/${product.slug}`}
                    className="group block rounded-2xl overflow-hidden border border-white/8 bg-[#0a0a0a] hover:border-white/20 hover:-translate-y-1 transition-all duration-300"
                  >
                    {/* Gradient tile */}
                    <div
                      className="h-36 relative"
                      style={{ background: product.gradient }}
                    >
                      <div
                        className="absolute inset-0"
                        style={{
                          backgroundImage:
                            "radial-gradient(circle, rgba(0,0,0,0.15) 1px, transparent 1px)",
                          backgroundSize: "16px 16px",
                        }}
                      />
                      {product.turnaround === "Next Day" && (
                        <div className="absolute top-3 left-3 bg-[#E0D94D] text-black text-[9px] font-black px-2.5 py-1 rounded-full uppercase tracking-wide">
                          ⚡ Next Day
                        </div>
                      )}
                      <div className="absolute bottom-3 right-3 bg-black/50 backdrop-blur-sm text-white text-xs font-bold px-3 py-1 rounded-full">
                        From {product.startingPrice}
                      </div>
                    </div>

                    <div className="p-4">
                      <h3
                        className="text-lg font-black uppercase mb-1 group-hover:text-[#E0D94D] transition-colors"
                        style={{ fontFamily: "Cabinet Grotesk, system-ui" }}
                      >
                        {product.name}
                      </h3>
                      <p className="text-sm text-white/50 leading-relaxed mb-3 line-clamp-2">
                        {product.tagline}
                      </p>
                      <div className="flex items-center gap-1 text-xs font-bold uppercase tracking-wider text-white/50 group-hover:text-white transition-colors">
                        Order Now <ArrowRight size={11} />
                      </div>
                    </div>
                  </Link>
                ))}
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}
