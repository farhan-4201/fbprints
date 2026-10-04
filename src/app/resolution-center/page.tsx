import type { Metadata } from "next";
import Link from "next/link";
import { ExternalLink } from "lucide-react";

export const metadata: Metadata = {
  title: "Resolution Center",
  description: "Need help with an order? Visit our Resolution Center.",
};

export default function ResolutionCenterPage() {
  return (
    <div className="bg-black min-h-screen pt-[var(--header-h)] flex items-center">
      <div className="container-xl text-center py-24">
        <div className="text-6xl mb-6">🛠</div>
        <h1
          className="text-4xl font-black uppercase mb-4"
          style={{ fontFamily: "Cabinet Grotesk, system-ui" }}
        >
          Resolution Center
        </h1>
        <p className="text-white/60 max-w-sm mx-auto mb-8">
          Need help with an order issue? Our Resolution Center is hosted on our
          store platform. Click below to get started.
        </p>
        <div className="flex flex-wrap justify-center gap-4">
          <a
            href="https://fbprints.com/resolution-center"
            target="_blank"
            rel="noopener noreferrer"
            className="btn-primary"
          >
            Open Resolution Center <ExternalLink size={14} />
          </a>
          <Link href="/contact" className="btn-outline">
            Contact Us Instead
          </Link>
        </div>
      </div>
    </div>
  );
}
