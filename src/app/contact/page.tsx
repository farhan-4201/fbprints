"use client";
import { useState } from "react";
import { Phone, Mail, MapPin, Clock, Send } from "lucide-react";

function OpenNowBadge() {
  const now = new Date();
  // Convert to EST (UTC-5 / UTC-4 DST)
  const utc = now.getTime() + now.getTimezoneOffset() * 60000;
  const est = new Date(utc + -5 * 3600000);
  const h = est.getHours();
  const day = est.getDay(); // 0=Sun, 6=Sat
  const isOpen = day >= 1 && day <= 5 && h >= 9 && h < 18;

  return (
    <div className={`inline-flex items-center gap-2 px-3 py-1.5 rounded-full text-xs font-bold ${
      isOpen ? "bg-green-500/15 text-green-400 border border-green-500/30" : "bg-red-500/15 text-red-400 border border-red-500/30"
    }`}>
      <span className={`w-2 h-2 rounded-full ${isOpen ? "bg-green-400 animate-pulse" : "bg-red-400"}`} />
      {isOpen ? "Open Now" : "Closed"}
    </div>
  );
}

export default function ContactPage() {
  const [sent, setSent] = useState(false);
  const [form, setForm] = useState({ name: "", email: "", message: "" });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Placeholder — wire to server action / email provider
    setSent(true);
  };

  return (
    <div className="bg-black min-h-screen pt-[var(--header-h)]">
      {/* Header */}
      <div className="relative py-20 border-b border-white/8 overflow-hidden">
        <div
          className="absolute inset-0"
          style={{
            backgroundImage:
              "radial-gradient(circle, rgba(201,49,131,0.07) 1px, transparent 1px)",
            backgroundSize: "24px 24px",
          }}
        />
        <div className="container-xl relative z-10 text-center">
          <p className="text-xs font-bold uppercase tracking-[0.3em] text-[#C93183] mb-3">
            Get in Touch
          </p>
          <h1
            className="text-5xl sm:text-6xl font-black uppercase"
            style={{
              fontFamily: "Cabinet Grotesk, system-ui",
              textShadow:
                "-2px -1px 0 rgba(74,157,207,0.4), 2px 1px 0 rgba(201,49,131,0.35)",
            }}
          >
            Contact Us
          </h1>
        </div>
      </div>

      <div className="container-xl py-16">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Contact info */}
          <div>
            <div className="flex items-center gap-3 mb-8">
              <h2
                className="text-2xl font-black uppercase"
                style={{ fontFamily: "Cabinet Grotesk, system-ui" }}
              >
                Say Hello
              </h2>
              <OpenNowBadge />
            </div>

            <div className="space-y-5 mb-10">
              {[
                { icon: <Phone size={18} />, label: "Phone", value: "(555) 000-0000", href: "tel:+15550000000", color: "#4A9DCF" },
                { icon: <Mail size={18} />, label: "Email", value: "hello@fbprints.com", href: "mailto:hello@fbprints.com", color: "#C93183" },
                { icon: <MapPin size={18} />, label: "Address", value: "Atlanta, GA", href: "#map", color: "#E0D94D" },
                { icon: <Clock size={18} />, label: "Hours", value: "Mon–Fri 9am–6pm EST", href: undefined, color: "#4A9DCF" },
              ].map(({ icon, label, value, href, color }) => (
                <div key={label} className="flex items-start gap-4">
                  <div
                    className="w-10 h-10 rounded-xl flex items-center justify-center flex-shrink-0"
                    style={{ background: `${color}18`, color }}
                  >
                    {icon}
                  </div>
                  <div>
                    <div className="text-xs text-white/40 uppercase tracking-widest mb-0.5">{label}</div>
                    {href ? (
                      <a href={href} className="text-white/80 hover:text-white transition-colors font-medium">
                        {value}
                      </a>
                    ) : (
                      <div className="text-white/80 font-medium">{value}</div>
                    )}
                  </div>
                </div>
              ))}
            </div>

            {/* Map placeholder */}
            <div
              id="map"
              className="rounded-2xl h-48 relative overflow-hidden flex items-center justify-center"
              style={{
                background: "linear-gradient(135deg, #0a0a0a 0%, #111 100%)",
                border: "1px solid rgba(255,255,255,0.08)",
              }}
            >
              <div className="text-center">
                <div className="text-4xl mb-2">📍</div>
                <div className="text-sm text-white/50">Atlanta, Georgia</div>
                <a
                  href="https://maps.google.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-xs text-[#4A9DCF] hover:underline mt-1 inline-block"
                >
                  Open in Google Maps →
                </a>
              </div>
            </div>
          </div>

          {/* Contact form */}
          <div>
            <h2
              className="text-2xl font-black uppercase mb-6"
              style={{ fontFamily: "Cabinet Grotesk, system-ui" }}
            >
              Send a Message
            </h2>

            {sent ? (
              <div className="bg-green-500/10 border border-green-500/30 rounded-2xl p-8 text-center">
                <div className="text-4xl mb-3">✅</div>
                <div
                  className="text-xl font-black uppercase mb-2 text-green-400"
                  style={{ fontFamily: "Cabinet Grotesk, system-ui" }}
                >
                  Message Sent!
                </div>
                <p className="text-white/60">
                  We&apos;ll get back to you within 2 business hours.
                </p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-4">
                {[
                  { id: "contact-name", label: "Your Name", type: "text", field: "name" as const, placeholder: "Jane Smith" },
                  { id: "contact-email", label: "Email Address", type: "email", field: "email" as const, placeholder: "jane@example.com" },
                ].map(({ id, label, type, field, placeholder }) => (
                  <div key={field}>
                    <label htmlFor={id} className="block text-xs font-bold uppercase tracking-widest text-white/50 mb-1.5">
                      {label}
                    </label>
                    <input
                      id={id}
                      type={type}
                      required
                      placeholder={placeholder}
                      value={form[field]}
                      onChange={(e) => setForm((f) => ({ ...f, [field]: e.target.value }))}
                      className="w-full bg-[#0a0a0a] border border-white/10 rounded-xl px-4 py-3 text-white placeholder:text-white/25 focus:outline-none focus:border-[#4A9DCF] transition-colors text-sm"
                    />
                  </div>
                ))}

                <div>
                  <label htmlFor="contact-message" className="block text-xs font-bold uppercase tracking-widest text-white/50 mb-1.5">
                    Message
                  </label>
                  <textarea
                    id="contact-message"
                    required
                    rows={5}
                    placeholder="Tell us how we can help..."
                    value={form.message}
                    onChange={(e) => setForm((f) => ({ ...f, message: e.target.value }))}
                    className="w-full bg-[#0a0a0a] border border-white/10 rounded-xl px-4 py-3 text-white placeholder:text-white/25 focus:outline-none focus:border-[#4A9DCF] transition-colors resize-none text-sm"
                  />
                </div>

                <button type="submit" className="btn-primary w-full justify-center">
                  Send Message <Send size={14} />
                </button>
              </form>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
