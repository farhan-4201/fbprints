import type { Metadata } from "next";

export const metadata: Metadata = { title: "Privacy Policy" };

export default function PrivacyPage() {
  return (
    <div className="bg-black min-h-screen pt-[var(--header-h)]">
      <div className="container-xl py-16 max-w-2xl">
        <h1 className="text-4xl font-black uppercase mb-6" style={{ fontFamily: "Cabinet Grotesk, system-ui" }}>
          Privacy Policy
        </h1>
        <div className="prose prose-invert prose-sm text-white/65 space-y-4">
          <p>
            <strong className="text-white">Last updated:</strong> {new Date().toLocaleDateString("en-US", { year: "numeric", month: "long", day: "numeric" })}
          </p>
          <p>
            Fresh Baked Prints (&quot;we,&quot; &quot;our,&quot; or &quot;us&quot;) is committed to protecting your personal
            information. This Privacy Policy explains how we collect, use, and safeguard your data when
            you use our website or services.
          </p>
          <h2 className="text-white text-xl font-bold mt-6">Information We Collect</h2>
          <p>We collect information you provide directly, such as name, email, phone number, and order details when you place an order or request a quote.</p>
          <h2 className="text-white text-xl font-bold mt-6">How We Use Your Information</h2>
          <p>We use your information to process orders, communicate about your print jobs, respond to inquiries, and improve our services. We do not sell your personal data.</p>
          <h2 className="text-white text-xl font-bold mt-6">Contact</h2>
          <p>For privacy questions, email us at <a href="mailto:hello@fbprints.com" className="text-[#4A9DCF]">hello@fbprints.com</a>.</p>
          <p className="text-white/40 text-xs mt-8">Full privacy policy content — placeholder. Replace with legal copy.</p>
        </div>
      </div>
    </div>
  );
}
