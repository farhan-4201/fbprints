import type { Metadata } from "next";
import { CheckCircle } from "lucide-react";

export const metadata: Metadata = { title: "Shipping & Returns" };

const policies = [
  { title: "Shipping Methods", body: "We ship via UPS and FedEx. Ground, 2-day, and overnight shipping options are available at checkout based on your location." },
  { title: "Processing Time", body: "Most orders ship 1–2 business days after production is complete. Next-day production orders (placed before noon EST) ship the following business day." },
  { title: "Tracking", body: "You'll receive a tracking number via email as soon as your order ships. You can also view order status in your account." },
  { title: "Local Pickup", body: "Free local pickup is available at our facility in Atlanta, GA. Select 'Local Pickup' at checkout and we'll notify you when your order is ready." },
  { title: "Returns Policy", body: "Due to the custom nature of print products, we generally do not accept returns. However, if there is a production defect or error on our part, we will reprint or refund at no charge." },
  { title: "Defective Orders", body: "If your order arrives damaged or with a print defect, contact us within 7 days with photos. We'll resolve it quickly — reprint or full refund." },
];

export default function ShippingReturnsPage() {
  return (
    <div className="bg-black min-h-screen pt-[var(--header-h)]">
      <div className="container-xl py-16">
        <h1 className="text-4xl font-black uppercase mb-3" style={{ fontFamily: "Cabinet Grotesk, system-ui" }}>
          Shipping & Returns
        </h1>
        <p className="text-white/55 mb-10 max-w-lg">
          Everything you need to know about getting your order and what happens if something goes wrong.
        </p>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-5 max-w-3xl">
          {policies.map((p) => (
            <div key={p.title} className="bg-[#0a0a0a] border border-white/8 rounded-2xl p-5">
              <div className="flex items-start gap-3 mb-3">
                <CheckCircle size={16} className="text-[#4A9DCF] mt-0.5 flex-shrink-0" />
                <h2 className="font-black uppercase text-sm" style={{ fontFamily: "Cabinet Grotesk, system-ui" }}>{p.title}</h2>
              </div>
              <p className="text-white/60 text-sm leading-relaxed">{p.body}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
