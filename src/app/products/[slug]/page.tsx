import type { Metadata } from "next";
import { notFound } from "next/navigation";
import Link from "next/link";
import { ArrowLeft, ArrowRight, CheckCircle, Zap } from "lucide-react";
import { getProductBySlug, products } from "@/content/products";

interface Props {
  params: Promise<{ slug: string }>;
}

export async function generateStaticParams() {
  return products.map((p) => ({ slug: p.slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const product = getProductBySlug(slug);
  if (!product) return {};
  return {
    title: product.name,
    description: product.description,
  };
}

export default async function ProductDetailPage({ params }: Props) {
  const { slug } = await params;
  const product = getProductBySlug(slug);
  if (!product) notFound();

  const related = products
    .filter((p) => p.category === product.category && p.slug !== product.slug)
    .slice(0, 3);

  return (
    <div className="bg-black min-h-screen pt-[var(--header-h)]">
      {/* Hero band */}
      <div
        className="relative h-64 sm:h-80 overflow-hidden"
        style={{ background: product.gradient }}
      >
        <div
          className="absolute inset-0"
          style={{
            backgroundImage:
              "radial-gradient(circle, rgba(0,0,0,0.2) 1px, transparent 1px)",
            backgroundSize: "20px 20px",
          }}
        />
        <div
          className="absolute inset-0"
          style={{
            background:
              "linear-gradient(to top, rgba(0,0,0,0.7) 0%, transparent 60%)",
          }}
        />
        {/* Big watermark */}
        <div
          className="absolute bottom-0 right-0 text-[12vw] font-black uppercase text-black/15 leading-none pointer-events-none select-none"
          style={{ fontFamily: "Cabinet Grotesk, system-ui" }}
          aria-hidden
        >
          {product.name}
        </div>

        {/* Breadcrumb */}
        <div className="absolute top-6 left-6">
          <Link
            href="/products"
            className="flex items-center gap-2 text-xs text-white/70 hover:text-white transition-colors font-bold uppercase tracking-widest"
          >
            <ArrowLeft size={12} /> All Products
          </Link>
        </div>
      </div>

      <div className="container-xl py-12">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
          {/* Left — info */}
          <div className="lg:col-span-2">
            <div className="flex items-center gap-3 mb-4">
              <span className="text-xs font-bold uppercase tracking-widest text-[#4A9DCF]">
                {product.category}
              </span>
              {product.turnaround === "Next Day" && (
                <span className="flex items-center gap-1 bg-[#E0D94D] text-black text-[10px] font-black px-3 py-1 rounded-full uppercase tracking-wide">
                  <Zap size={10} fill="black" /> Next Day
                </span>
              )}
            </div>

            <h1
              className="text-4xl sm:text-5xl font-black uppercase leading-tight mb-3"
              style={{
                fontFamily: "Cabinet Grotesk, system-ui",
                textShadow:
                  "-1.5px -1px 0 rgba(74,157,207,0.4), 1.5px 1px 0 rgba(201,49,131,0.35)",
              }}
            >
              {product.name}
            </h1>

            <p className="text-xl text-[#E0D94D] font-bold mb-4">
              {product.tagline}
            </p>
            <p className="text-white/65 leading-relaxed mb-8">
              {product.description}
            </p>

            {/* Specs grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 mb-8">
              <div>
                <h3 className="text-xs font-bold uppercase tracking-widest text-[#4A9DCF] mb-3">
                  Available Sizes
                </h3>
                <div className="flex flex-wrap gap-2">
                  {product.sizes.map((s) => (
                    <span
                      key={s}
                      className="px-3 py-1 border border-white/15 rounded-full text-xs text-white/70"
                    >
                      {s}
                    </span>
                  ))}
                </div>
              </div>
              <div>
                <h3 className="text-xs font-bold uppercase tracking-widest text-[#C93183] mb-3">
                  Materials
                </h3>
                <div className="flex flex-wrap gap-2">
                  {product.materials.map((m) => (
                    <span
                      key={m}
                      className="px-3 py-1 border border-white/15 rounded-full text-xs text-white/70"
                    >
                      {m}
                    </span>
                  ))}
                </div>
              </div>
            </div>

            {/* Use cases */}
            <div className="mb-8">
              <h3 className="text-xs font-bold uppercase tracking-widest text-[#E0D94D] mb-3">
                Perfect For
              </h3>
              <div className="flex flex-wrap gap-3">
                {product.useCases.map((u) => (
                  <div key={u} className="flex items-center gap-1.5 text-sm text-white/70">
                    <CheckCircle size={14} className="text-[#E0D94D]" />
                    {u}
                  </div>
                ))}
              </div>
            </div>

            {/* File specs */}
            <div className="bg-[#0a0a0a] border border-white/8 rounded-2xl p-5">
              <h3 className="text-xs font-bold uppercase tracking-widest text-white/50 mb-4">
                Artwork Requirements
              </h3>
              <div className="grid grid-cols-2 gap-4 text-sm">
                {[
                  { label: "Color Mode", value: "CMYK" },
                  { label: "Resolution", value: "300 DPI" },
                  { label: "Bleed", value: "0.125\" all sides" },
                  { label: "Accepted Formats", value: "PDF, AI, EPS, PSD" },
                ].map(({ label, value }) => (
                  <div key={label}>
                    <div className="text-white/40 text-xs mb-0.5">{label}</div>
                    <div className="text-white/80 font-medium">{value}</div>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Right — order card */}
          <div>
            <div className="sticky top-24 bg-[#0a0a0a] border border-white/10 rounded-2xl p-6">
              <div className="mb-4">
                <div className="text-xs text-white/50 uppercase tracking-widest mb-1">
                  Starting at
                </div>
                <div
                  className="text-4xl font-black text-[#E0D94D]"
                  style={{ fontFamily: "Cabinet Grotesk, system-ui" }}
                >
                  {product.startingPrice}
                </div>
              </div>

              <div className="space-y-3 mb-6">
                {[
                  `Turnaround: ${product.turnaround}`,
                  "Full-Color CMYK Printing",
                  "No Setup Fees",
                  "Free Proof on Request",
                ].map((item) => (
                  <div key={item} className="flex items-center gap-2 text-sm text-white/65">
                    <CheckCircle size={14} className="text-[#4A9DCF] flex-shrink-0" />
                    {item}
                  </div>
                ))}
              </div>

              <Link
                href="/get-a-quote"
                className="btn-primary w-full justify-center mb-3 text-sm"
              >
                Get a Quote
                <ArrowRight size={14} />
              </Link>
              <a
                href="https://fbprints.com/shop"
                target="_blank"
                rel="noopener noreferrer"
                className="btn-outline w-full justify-center text-sm"
              >
                Order on Store
              </a>

              <p className="text-center text-xs text-white/35 mt-4">
                Questions? <Link href="/contact" className="text-[#4A9DCF] hover:underline">Contact us</Link>
              </p>
            </div>
          </div>
        </div>

        {/* Related products */}
        {related.length > 0 && (
          <div className="mt-16 pt-12 border-t border-white/8">
            <h2
              className="text-2xl font-black uppercase mb-6"
              style={{ fontFamily: "Cabinet Grotesk, system-ui", color: "#E0D94D" }}
            >
              More in {product.category}
            </h2>
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-5">
              {related.map((p) => (
                <Link
                  key={p.slug}
                  href={`/products/${p.slug}`}
                  className="group block rounded-xl overflow-hidden border border-white/8 bg-[#0a0a0a] hover:border-white/20 hover:-translate-y-1 transition-all duration-300"
                >
                  <div className="h-28" style={{ background: p.gradient }} />
                  <div className="p-4">
                    <div className="font-black uppercase text-sm group-hover:text-[#E0D94D] transition-colors"
                      style={{ fontFamily: "Cabinet Grotesk, system-ui" }}>
                      {p.name}
                    </div>
                    <div className="text-xs text-white/45 mt-1">From {p.startingPrice}</div>
                  </div>
                </Link>
              ))}
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
