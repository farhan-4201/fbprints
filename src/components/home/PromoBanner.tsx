const items = [
  "🖨 Next-Day Turnaround",
  "🎨 Full-Color Printing",
  "📦 Free Local Pickup",
  "⚡ Rush Orders Welcome",
  "✅ 100% Quality Guarantee",
  "🎉 Prom Packages Available",
  "📐 Custom Sizes",
  "🖼 Design Services",
  "🇺🇸 Shipped Nationally",
];

// Double for seamless loop
const ticker = [...items, ...items];

export function PromoBanner() {
  return (
    <div
      className="relative w-full py-3 overflow-hidden"
      style={{
        background:
          "linear-gradient(90deg, #4A9DCF 0%, #C93183 50%, #E0D94D 100%)",
      }}
      aria-label="Promotional highlights"
    >
      <div className="marquee-wrapper">
        <div className="marquee-track">
          {ticker.map((item, i) => (
            <span
              key={i}
              className="mx-6 text-xs font-bold uppercase tracking-widest text-black whitespace-nowrap"
              style={{ fontFamily: "Cabinet Grotesk, system-ui" }}
            >
              {item}
            </span>
          ))}
        </div>
      </div>
    </div>
  );
}
