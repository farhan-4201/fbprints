import type { Metadata } from "next";

export const metadata: Metadata = { title: "Terms & Conditions" };

export default function TermsPage() {
  return (
    <div className="bg-black min-h-screen pt-[var(--header-h)]">
      <div className="container-xl py-16 max-w-2xl">
        <h1 className="text-4xl font-black uppercase mb-6" style={{ fontFamily: "Cabinet Grotesk, system-ui" }}>
          Terms & Conditions
        </h1>
        <div className="text-white/65 space-y-4 text-sm leading-relaxed">
          <p><strong className="text-white">Last updated:</strong> {new Date().toLocaleDateString("en-US", { year: "numeric", month: "long", day: "numeric" })}</p>
          <p>By using the Fresh Baked Prints website and services, you agree to these terms and conditions. Please read them carefully.</p>
          <h2 className="text-white text-xl font-bold mt-6">Orders & Payment</h2>
          <p>All orders are subject to acceptance. Payment is required before production begins. We accept major credit cards and online payment methods.</p>
          <h2 className="text-white text-xl font-bold mt-6">Artwork Responsibility</h2>
          <p>The customer is responsible for ensuring submitted artwork is print-ready and free of copyright infringement. We are not liable for print issues caused by customer-supplied files.</p>
          <h2 className="text-white text-xl font-bold mt-6">Returns & Refunds</h2>
          <p>Due to the custom nature of print products, we do not accept returns except in cases of production defects. See our <a href="/shipping-and-returns" className="text-[#4A9DCF]">Shipping & Returns</a> policy.</p>
          <p className="text-white/40 text-xs mt-8">Placeholder — replace with full legal terms.</p>
        </div>
      </div>
    </div>
  );
}
