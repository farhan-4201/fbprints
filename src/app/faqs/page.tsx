"use client";
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronDown, Search } from "lucide-react";
import { faqs, faqCategories } from "@/content/faqs";

export default function FAQsPage() {
  const [query, setQuery] = useState("");
  const [activeCategory, setActiveCategory] = useState<string>("All");
  const [openId, setOpenId] = useState<string | null>(null);

  const categories = ["All", ...faqCategories];

  const filtered = faqs.filter((f) => {
    const matchCat = activeCategory === "All" || f.category === activeCategory;
    const matchQ =
      query === "" ||
      f.question.toLowerCase().includes(query.toLowerCase()) ||
      f.answer.toLowerCase().includes(query.toLowerCase());
    return matchCat && matchQ;
  });

  return (
    <div className="bg-black min-h-screen pt-[var(--header-h)]">
      {/* Header */}
      <div className="relative py-20 border-b border-white/8 overflow-hidden">
        <div
          className="absolute inset-0"
          style={{
            backgroundImage:
              "radial-gradient(circle, rgba(74,157,207,0.07) 1px, transparent 1px)",
            backgroundSize: "24px 24px",
          }}
        />
        <div className="container-xl relative z-10 text-center">
          <p className="text-xs font-bold uppercase tracking-[0.3em] text-[#4A9DCF] mb-3">
            Got Questions?
          </p>
          <h1
            className="text-5xl sm:text-6xl font-black uppercase mb-6"
            style={{
              fontFamily: "Cabinet Grotesk, system-ui",
              textShadow:
                "-2px -1px 0 rgba(74,157,207,0.4), 2px 1px 0 rgba(201,49,131,0.35)",
            }}
          >
            FAQs
          </h1>
          {/* Search */}
          <div className="relative max-w-md mx-auto">
            <Search
              size={16}
              className="absolute left-4 top-1/2 -translate-y-1/2 text-white/30"
            />
            <input
              id="faq-search"
              type="text"
              placeholder="Search questions..."
              value={query}
              onChange={(e) => setQuery(e.target.value)}
              className="w-full bg-[#0a0a0a] border border-white/15 rounded-full pl-10 pr-4 py-3 text-white placeholder:text-white/30 focus:outline-none focus:border-[#4A9DCF] transition-colors text-sm"
            />
          </div>
        </div>
      </div>

      <div className="container-xl py-12">
        {/* Category tabs */}
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

        {/* Accordion */}
        <div className="max-w-2xl mx-auto space-y-2">
          {filtered.length === 0 && (
            <div className="text-center py-12 text-white/40">
              No results for &quot;{query}&quot;
            </div>
          )}
          {filtered.map((faq) => (
            <div
              key={faq.id}
              className="border border-white/8 rounded-xl overflow-hidden bg-[#0a0a0a]"
            >
              <button
                id={`faq-btn-${faq.id}`}
                aria-expanded={openId === faq.id}
                aria-controls={`faq-panel-${faq.id}`}
                onClick={() => setOpenId(openId === faq.id ? null : faq.id)}
                className="w-full flex items-center justify-between gap-4 px-5 py-4 text-left hover:bg-white/3 transition-colors"
              >
                <span
                  className="font-semibold text-sm text-white/85"
                  style={{ fontFamily: "Cabinet Grotesk, system-ui" }}
                >
                  {faq.question}
                </span>
                <ChevronDown
                  size={16}
                  className={`flex-shrink-0 text-[#4A9DCF] transition-transform duration-200 ${
                    openId === faq.id ? "rotate-180" : ""
                  }`}
                />
              </button>
              <AnimatePresence initial={false}>
                {openId === faq.id && (
                  <motion.div
                    id={`faq-panel-${faq.id}`}
                    role="region"
                    aria-labelledby={`faq-btn-${faq.id}`}
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: "auto", opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.25, ease: "easeInOut" }}
                  >
                    <div className="px-5 pb-4 text-sm text-white/60 leading-relaxed border-t border-white/5 pt-3">
                      {faq.answer}
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          ))}
        </div>

        {/* Bottom CTA */}
        <div className="text-center mt-16">
          <p className="text-white/50 mb-4">Still have questions?</p>
          <a href="/contact" className="btn-primary inline-flex">
            Contact Us
          </a>
        </div>
      </div>
    </div>
  );
}
