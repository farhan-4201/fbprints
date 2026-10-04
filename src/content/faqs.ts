export interface FAQ {
  id: string;
  question: string;
  answer: string;
  category: string;
}

export const faqs: FAQ[] = [
  // Ordering
  {
    id: "faq-1",
    question: "How do I place an order?",
    answer:
      "You can order directly through our website by browsing products, selecting your specs, uploading your artwork, and checking out. Need help? Use our Get a Quote form or contact us directly.",
    category: "Ordering",
  },
  {
    id: "faq-2",
    question: "Do you offer rush or next-day printing?",
    answer:
      "Yes! Many of our products are available with next-day turnaround. Orders must be placed and artwork approved before noon EST to qualify for next-day production. Rush fees may apply.",
    category: "Ordering",
  },
  {
    id: "faq-3",
    question: "Can I get a custom quote?",
    answer:
      "Absolutely. Use our Get a Quote form and we'll respond within 2 business hours with a detailed price breakdown.",
    category: "Ordering",
  },
  {
    id: "faq-4",
    question: "Is there a minimum order quantity?",
    answer:
      "We have no minimums on most products! You can order as few as 1 of many items. Some products like booklets or tickets may have a small minimum — check the product page for details.",
    category: "Ordering",
  },
  // Files & Artwork
  {
    id: "faq-5",
    question: "What file formats do you accept?",
    answer:
      "We accept PDF (preferred), AI, EPS, PSD, PNG (300 dpi+), and JPG (300 dpi+). Files should be set up in CMYK color mode with 1/8\" bleed on all sides.",
    category: "Files & Artwork",
  },
  {
    id: "faq-6",
    question: "What resolution should my artwork be?",
    answer:
      "For best results, artwork should be at 300 DPI at final print size. Large format items (banners, backdrops) can use 150 DPI due to their viewing distance.",
    category: "Files & Artwork",
  },
  {
    id: "faq-7",
    question: "Do you offer design services?",
    answer:
      "Yes! Our in-house design team can create or polish your artwork. Visit our Design Services page to learn more or get started.",
    category: "Files & Artwork",
  },
  {
    id: "faq-8",
    question: "What is bleed and why do I need it?",
    answer:
      "Bleed is extra artwork that extends 1/8\" (0.125\") beyond the trim line. It prevents white edges from appearing if the cut shifts slightly. Always include bleed in your files.",
    category: "Files & Artwork",
  },
  // Shipping
  {
    id: "faq-9",
    question: "Do you ship nationally?",
    answer:
      "Yes! We ship across the United States via UPS and FedEx. Shipping time varies by location. Most orders ship within 1–2 business days after production.",
    category: "Shipping",
  },
  {
    id: "faq-10",
    question: "Can I pick up my order?",
    answer:
      "Yes, local pickup is available at our facility. Select 'Local Pickup' at checkout and we'll notify you when your order is ready.",
    category: "Shipping",
  },
  {
    id: "faq-11",
    question: "How do I track my order?",
    answer:
      "You'll receive an email with a tracking number as soon as your order ships. You can also log in to your account to view order history and status.",
    category: "Shipping",
  },
  // Quality & Returns
  {
    id: "faq-12",
    question: "What if I'm not happy with my order?",
    answer:
      "We stand behind our work. If there's a print defect or production error on our end, we'll reprint or refund — no hassle. Visit our Resolution Center to start a claim.",
    category: "Quality & Returns",
  },
  {
    id: "faq-13",
    question: "Can I see a proof before printing?",
    answer:
      "Digital proofs are available upon request for most orders. Note that screen colors may vary slightly from printed output due to monitor calibration differences.",
    category: "Quality & Returns",
  },
  {
    id: "faq-14",
    question: "Do colors look exactly like on my screen?",
    answer:
      "Not always — screens display colors in RGB while we print in CMYK. We recommend converting your files to CMYK before submitting. If you need color-critical work, ask about our proofing options.",
    category: "Quality & Returns",
  },
  // Prom & Events
  {
    id: "faq-15",
    question: "Do you have packages for prom events?",
    answer:
      "Yes! Our Prom Packages include step-and-repeat backdrops, handheld signs, banners, and more — bundled at a great price. Visit our Prom Packages page for details.",
    category: "Prom & Events",
  },
];

export const faqCategories = [...new Set(faqs.map((f) => f.category))];
