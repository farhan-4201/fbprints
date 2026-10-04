import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { CustomCursor } from "@/components/ui/CustomCursor";
import { LenisProvider } from "@/components/ui/LenisProvider";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

export const metadata: Metadata = {
  title: {
    default: "Fresh Baked Prints — Premium Next-Day Printing",
    template: "%s | Fresh Baked Prints",
  },
  description:
    "Premium full-color printing with next-day turnaround. Banners, business cards, flyers, yard signs, custom apparel, and more. Fresh Baked Prints — Atlanta, GA.",
  keywords: [
    "printing",
    "custom printing",
    "banners",
    "business cards",
    "flyers",
    "next day printing",
    "Atlanta printing",
    "fresh baked prints",
  ],
  authors: [{ name: "Fresh Baked Prints" }],
  openGraph: {
    type: "website",
    locale: "en_US",
    url: process.env.NEXT_PUBLIC_SITE_URL || "https://fbprints.com",
    siteName: "Fresh Baked Prints",
    title: "Fresh Baked Prints — Premium Next-Day Printing",
    description:
      "Premium full-color printing with next-day turnaround. Banners, business cards, flyers, yard signs and more.",
  },
  twitter: {
    card: "summary_large_image",
    title: "Fresh Baked Prints",
    description: "Premium printing, next-day turnaround.",
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={inter.variable}>
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link
          rel="preconnect"
          href="https://fonts.gstatic.com"
          crossOrigin="anonymous"
        />
        <link
          href="https://api.fontshare.com/v2/css?f[]=cabinet-grotesk@800,700,500,400&display=swap"
          rel="stylesheet"
        />
      </head>
      <body className="bg-black text-[#F0F0F0] overflow-x-hidden">
        <a
          href="#main-content"
          className="sr-only focus:not-sr-only focus:fixed focus:top-4 focus:left-4 focus:z-[9999] focus:bg-[#E0D94D] focus:text-black focus:px-4 focus:py-2 focus:rounded-lg focus:font-bold"
        >
          Skip to content
        </a>
        <LenisProvider>
          <CustomCursor />
          <Header />
          <main id="main-content">{children}</main>
          <Footer />
        </LenisProvider>
      </body>
    </html>
  );
}
