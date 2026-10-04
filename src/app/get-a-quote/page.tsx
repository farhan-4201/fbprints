"use client";
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ArrowRight, Upload, Check } from "lucide-react";
import { z } from "zod";

const steps = [
  { id: 1, label: "Product" },
  { id: 2, label: "Details" },
  { id: 3, label: "Artwork" },
  { id: 4, label: "Submit" },
];

const productOptions = [
  "Banners", "Business Cards", "Flyers", "Retractable Banners",
  "Yard Signs", "Stickers / Labels", "Foam Board", "Coro Boards",
  "Booklets", "Tickets", "Backdrops", "Custom Apparel", "Other",
];

const schema = z.object({
  product: z.string().min(1),
  size: z.string().min(1),
  quantity: z.string().min(1),
  name: z.string().min(2),
  email: z.string().email(),
  phone: z.string().optional(),
  turnaround: z.string().min(1),
  notes: z.string().optional(),
});

type FormData = z.infer<typeof schema>;

export default function GetAQuotePage() {
  const [step, setStep] = useState(1);
  const [submitted, setSubmitted] = useState(false);
  const [fileLabel, setFileLabel] = useState("Drop your artwork here or click to browse");
  const [form, setForm] = useState<Partial<FormData>>({});
  const [errors, setErrors] = useState<Record<string, string>>({});

  const update = (key: keyof FormData, value: string) =>
    setForm((f) => ({ ...f, [key]: value }));

  const validateStep1 = () => {
    const errs: Record<string, string> = {};
    if (!form.product) errs.product = "Please select a product";
    if (!form.size) errs.size = "Please enter a size";
    if (!form.quantity) errs.quantity = "Please enter a quantity";
    setErrors(errs);
    return Object.keys(errs).length === 0;
  };

  const validateStep2 = () => {
    const errs: Record<string, string> = {};
    if (!form.name || form.name.length < 2) errs.name = "Name required";
    if (!form.email || !form.email.includes("@")) errs.email = "Valid email required";
    if (!form.turnaround) errs.turnaround = "Please select turnaround";
    setErrors(errs);
    return Object.keys(errs).length === 0;
  };

  const handleNext = () => {
    if (step === 1 && !validateStep1()) return;
    if (step === 2 && !validateStep2()) return;
    setStep((s) => s + 1);
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  const inputClass =
    "w-full bg-[#0a0a0a] border border-white/10 rounded-xl px-4 py-3 text-white placeholder:text-white/25 focus:outline-none focus:border-[#4A9DCF] transition-colors text-sm";

  const errClass = "text-red-400 text-xs mt-1";

  return (
    <div className="bg-black min-h-screen pt-[var(--header-h)]">
      {/* Header */}
      <div className="relative py-20 border-b border-white/8 overflow-hidden">
        <div
          className="absolute inset-0"
          style={{
            backgroundImage:
              "radial-gradient(circle, rgba(224,217,77,0.06) 1px, transparent 1px)",
            backgroundSize: "24px 24px",
          }}
        />
        <div className="container-xl relative z-10 text-center">
          <p className="text-xs font-bold uppercase tracking-[0.3em] text-[#E0D94D] mb-3">
            Free & Fast
          </p>
          <h1
            className="text-5xl sm:text-6xl font-black uppercase"
            style={{
              fontFamily: "Cabinet Grotesk, system-ui",
              textShadow:
                "-2px -1px 0 rgba(74,157,207,0.4), 2px 1px 0 rgba(201,49,131,0.35)",
            }}
          >
            Get a Quote
          </h1>
          <p className="text-white/55 mt-4">
            We respond within 2 business hours.
          </p>
        </div>
      </div>

      <div className="container-xl py-16 max-w-xl">
        {submitted ? (
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            className="text-center py-16"
          >
            <div className="w-16 h-16 rounded-full bg-[#E0D94D] flex items-center justify-center mx-auto mb-6">
              <Check size={28} className="text-black" />
            </div>
            <h2
              className="text-3xl font-black uppercase mb-3"
              style={{ fontFamily: "Cabinet Grotesk, system-ui" }}
            >
              Quote Request Sent!
            </h2>
            <p className="text-white/60 mb-8">
              We&apos;ll get back to you at <strong className="text-white">{form.email}</strong> within 2 business hours.
            </p>
            <a href="/products" className="btn-primary">
              Browse More Products <ArrowRight size={14} />
            </a>
          </motion.div>
        ) : (
          <>
            {/* Step indicator */}
            <div className="flex items-center justify-between mb-10">
              {steps.map((s, i) => (
                <div key={s.id} className="flex items-center flex-1">
                  <div className="flex flex-col items-center">
                    <div
                      className="w-8 h-8 rounded-full flex items-center justify-center text-xs font-black transition-all duration-300"
                      style={{
                        fontFamily: "Cabinet Grotesk, system-ui",
                        background:
                          step >= s.id
                            ? "linear-gradient(135deg, #4A9DCF, #C93183)"
                            : "rgba(255,255,255,0.08)",
                        color: step >= s.id ? "#000" : "rgba(255,255,255,0.4)",
                      }}
                    >
                      {step > s.id ? <Check size={12} /> : s.id}
                    </div>
                    <span className="text-[10px] uppercase tracking-widest text-white/40 mt-1">
                      {s.label}
                    </span>
                  </div>
                  {i < steps.length - 1 && (
                    <div
                      className="flex-1 h-px mx-2 mb-4 transition-all duration-300"
                      style={{
                        background:
                          step > s.id
                            ? "linear-gradient(90deg, #4A9DCF, #C93183)"
                            : "rgba(255,255,255,0.08)",
                      }}
                    />
                  )}
                </div>
              ))}
            </div>

            <form onSubmit={handleSubmit}>
              <AnimatePresence mode="wait">
                {/* Step 1 — Product */}
                {step === 1 && (
                  <motion.div
                    key="step1"
                    initial={{ opacity: 0, x: 20 }}
                    animate={{ opacity: 1, x: 0 }}
                    exit={{ opacity: 0, x: -20 }}
                    className="space-y-4"
                  >
                    <div>
                      <label htmlFor="quote-product" className="block text-xs font-bold uppercase tracking-widest text-white/50 mb-1.5">
                        Product *
                      </label>
                      <select
                        id="quote-product"
                        value={form.product || ""}
                        onChange={(e) => update("product", e.target.value)}
                        className={inputClass}
                      >
                        <option value="">Select a product...</option>
                        {productOptions.map((p) => (
                          <option key={p} value={p}>{p}</option>
                        ))}
                      </select>
                      {errors.product && <p className={errClass}>{errors.product}</p>}
                    </div>
                    <div>
                      <label htmlFor="quote-size" className="block text-xs font-bold uppercase tracking-widest text-white/50 mb-1.5">
                        Size / Dimensions *
                      </label>
                      <input
                        id="quote-size"
                        type="text"
                        placeholder="e.g. 24×36 inches"
                        value={form.size || ""}
                        onChange={(e) => update("size", e.target.value)}
                        className={inputClass}
                      />
                      {errors.size && <p className={errClass}>{errors.size}</p>}
                    </div>
                    <div>
                      <label htmlFor="quote-qty" className="block text-xs font-bold uppercase tracking-widest text-white/50 mb-1.5">
                        Quantity *
                      </label>
                      <input
                        id="quote-qty"
                        type="number"
                        min={1}
                        placeholder="e.g. 100"
                        value={form.quantity || ""}
                        onChange={(e) => update("quantity", e.target.value)}
                        className={inputClass}
                      />
                      {errors.quantity && <p className={errClass}>{errors.quantity}</p>}
                    </div>
                    <button type="button" onClick={handleNext} className="btn-primary w-full justify-center mt-2">
                      Next <ArrowRight size={14} />
                    </button>
                  </motion.div>
                )}

                {/* Step 2 — Details */}
                {step === 2 && (
                  <motion.div
                    key="step2"
                    initial={{ opacity: 0, x: 20 }}
                    animate={{ opacity: 1, x: 0 }}
                    exit={{ opacity: 0, x: -20 }}
                    className="space-y-4"
                  >
                    <div>
                      <label htmlFor="quote-name" className="block text-xs font-bold uppercase tracking-widest text-white/50 mb-1.5">
                        Full Name *
                      </label>
                      <input id="quote-name" type="text" placeholder="Jane Smith" value={form.name || ""} onChange={(e) => update("name", e.target.value)} className={inputClass} />
                      {errors.name && <p className={errClass}>{errors.name}</p>}
                    </div>
                    <div>
                      <label htmlFor="quote-email" className="block text-xs font-bold uppercase tracking-widest text-white/50 mb-1.5">
                        Email *
                      </label>
                      <input id="quote-email" type="email" placeholder="jane@example.com" value={form.email || ""} onChange={(e) => update("email", e.target.value)} className={inputClass} />
                      {errors.email && <p className={errClass}>{errors.email}</p>}
                    </div>
                    <div>
                      <label htmlFor="quote-phone" className="block text-xs font-bold uppercase tracking-widest text-white/50 mb-1.5">
                        Phone (optional)
                      </label>
                      <input id="quote-phone" type="tel" placeholder="(555) 000-0000" value={form.phone || ""} onChange={(e) => update("phone", e.target.value)} className={inputClass} />
                    </div>
                    <div>
                      <label htmlFor="quote-turnaround" className="block text-xs font-bold uppercase tracking-widest text-white/50 mb-1.5">
                        Turnaround Needed *
                      </label>
                      <select id="quote-turnaround" value={form.turnaround || ""} onChange={(e) => update("turnaround", e.target.value)} className={inputClass}>
                        <option value="">Select...</option>
                        <option value="next-day">Next Day</option>
                        <option value="2-3-days">2–3 Days</option>
                        <option value="5-7-days">5–7 Days</option>
                        <option value="flexible">Flexible</option>
                      </select>
                      {errors.turnaround && <p className={errClass}>{errors.turnaround}</p>}
                    </div>
                    <div>
                      <label htmlFor="quote-notes" className="block text-xs font-bold uppercase tracking-widest text-white/50 mb-1.5">
                        Additional Notes
                      </label>
                      <textarea id="quote-notes" rows={3} placeholder="Any special requirements..." value={form.notes || ""} onChange={(e) => update("notes", e.target.value)} className={`${inputClass} resize-none`} />
                    </div>
                    <div className="flex gap-3 mt-2">
                      <button type="button" onClick={() => setStep(1)} className="btn-outline flex-1 justify-center text-sm">
                        Back
                      </button>
                      <button type="button" onClick={handleNext} className="btn-primary flex-1 justify-center">
                        Next <ArrowRight size={14} />
                      </button>
                    </div>
                  </motion.div>
                )}

                {/* Step 3 — Artwork */}
                {step === 3 && (
                  <motion.div
                    key="step3"
                    initial={{ opacity: 0, x: 20 }}
                    animate={{ opacity: 1, x: 0 }}
                    exit={{ opacity: 0, x: -20 }}
                    className="space-y-4"
                  >
                    <div>
                      <label className="block text-xs font-bold uppercase tracking-widest text-white/50 mb-1.5">
                        Upload Artwork (optional)
                      </label>
                      <label
                        htmlFor="quote-file"
                        className="block border-2 border-dashed border-white/15 rounded-xl p-8 text-center hover:border-[#4A9DCF]/50 transition-colors cursor-pointer"
                      >
                        <Upload size={28} className="mx-auto mb-3 text-white/30" />
                        <p className="text-sm text-white/50">{fileLabel}</p>
                        <p className="text-xs text-white/25 mt-2">
                          PDF, AI, EPS, PNG, JPG — max 50 MB
                        </p>
                        <input
                          id="quote-file"
                          type="file"
                          accept=".pdf,.ai,.eps,.png,.jpg,.jpeg,.psd"
                          className="sr-only"
                          onChange={(e) =>
                            setFileLabel(
                              e.target.files?.[0]?.name || "File selected"
                            )
                          }
                        />
                      </label>
                      <p className="text-xs text-white/35 mt-2">
                        No artwork yet? No problem — we can design it for you or
                        send us the file later.
                      </p>
                    </div>
                    <div className="flex gap-3 mt-2">
                      <button type="button" onClick={() => setStep(2)} className="btn-outline flex-1 justify-center text-sm">
                        Back
                      </button>
                      <button type="button" onClick={() => setStep(4)} className="btn-primary flex-1 justify-center">
                        Review <ArrowRight size={14} />
                      </button>
                    </div>
                  </motion.div>
                )}

                {/* Step 4 — Review & Submit */}
                {step === 4 && (
                  <motion.div
                    key="step4"
                    initial={{ opacity: 0, x: 20 }}
                    animate={{ opacity: 1, x: 0 }}
                    exit={{ opacity: 0, x: -20 }}
                    className="space-y-4"
                  >
                    <div className="bg-[#0a0a0a] border border-white/8 rounded-2xl p-5 space-y-3">
                      <h3 className="text-xs font-bold uppercase tracking-widest text-white/50 mb-3">
                        Quote Summary
                      </h3>
                      {[
                        { label: "Product", value: form.product },
                        { label: "Size", value: form.size },
                        { label: "Quantity", value: form.quantity },
                        { label: "Name", value: form.name },
                        { label: "Email", value: form.email },
                        { label: "Turnaround", value: form.turnaround },
                      ].map(({ label, value }) =>
                        value ? (
                          <div key={label} className="flex justify-between text-sm">
                            <span className="text-white/40">{label}</span>
                            <span className="text-white/80 font-medium">{value}</span>
                          </div>
                        ) : null
                      )}
                    </div>
                    <div className="flex gap-3">
                      <button type="button" onClick={() => setStep(3)} className="btn-outline flex-1 justify-center text-sm">
                        Back
                      </button>
                      <button type="submit" className="btn-primary flex-1 justify-center">
                        Submit Quote <Check size={14} />
                      </button>
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </form>
          </>
        )}
      </div>
    </div>
  );
}
