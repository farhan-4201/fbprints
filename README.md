# Fresh Baked Prints — Next.js Website

> **"Print studio meets fresh bakery."**  
> Premium full-color printing website. Next.js 16 App Router · Tailwind v4 · TypeScript · Framer Motion · GSAP.

---

## Quick Start

```bash
npm install
npm run dev        # → http://localhost:3000
```

---

## Tech Stack

| Layer | Tool |
|-------|------|
| Framework | Next.js 16 (App Router) |
| Language | TypeScript (strict) |
| Styling | Tailwind CSS v4 + vanilla CSS |
| Animation | Framer Motion + GSAP/ScrollTrigger |
| Smooth Scroll | Lenis |
| Icons | lucide-react |
| Validation | Zod |

---

## Route Map

| Route | Page |
|-------|------|
| `/` | Home (8 sections) |
| `/products` | Product grid |
| `/products/[slug]` | Product detail (22 pages) |
| `/packages` | Packages overview |
| `/packages/prom` | Prom Packages |
| `/how-it-works` | 4-step process |
| `/design-services` | Design Services |
| `/about` | About |
| `/contact` | Contact + Open Now badge |
| `/get-a-quote` | 4-step quote form |
| `/faqs` | Searchable FAQ accordion |
| `/resolution-center` | Resolution center |
| `/sitemap` | Human sitemap |
| `/sitemap.xml` | Machine sitemap |
| `/robots.txt` | Robots |
| `/privacy` | Privacy Policy |
| `/terms-and-conditions-2` | Terms |
| `/shipping-and-returns` | Shipping & Returns |
| `404` | Branded error page |

---

## Design System

**Colours:**
- Black `#000000` — primary canvas
- Off-white `#F0F0F0` — primary text
- Paper `#FAF7F2` — alternate surface
- Cyan `#4A9DCF` — accent 1
- Magenta `#C93183` — accent 2
- Yellow `#E0D94D` — accent 3

**Print Motifs:** halftone dot grids, CMYK misregistration shadows, crop-mark corners, registration-mark crosshairs

**Typography:** Cabinet Grotesk (display) + Inter (body)

---

## Environment Variables

Copy `.env.local` and fill in:

```bash
WC_URL=https://fbprints.com
WC_KEY=ck_xxx
WC_SECRET=cs_xxx
SMTP_HOST=
SMTP_PORT=587
SMTP_USER=
SMTP_PASS=
QUOTE_EMAIL=quotes@fbprints.com
NEXT_PUBLIC_SITE_URL=https://fbprints.com
```

---

## TODO

- [ ] Wire quote form to email provider (SMTP/Resend/SendGrid)
- [ ] Wire contact form server action
- [ ] Integrate WooCommerce API for real pricing
- [ ] Add real product photography (replace gradient placeholders)
- [ ] Replace Google Maps placeholder with embedded map
- [ ] Add Cabinet Grotesk via self-hosted font (fontshare CDN fallback currently)
- [ ] GSAP ScrollTrigger pinned How-It-Works section
- [ ] SearchModal (Cmd+K)
- [ ] Replace social icon placeholders with actual social SVGs
- [ ] Legal copy for Privacy Policy and Terms pages

---

## Project Structure

```
src/
├── app/                  # All routes (App Router)
│   ├── page.tsx          # Home
│   ├── products/         # Products grid + [slug] pages
│   ├── packages/         # Packages + prom
│   ├── get-a-quote/      # Multi-step quote form
│   ├── faqs/             # Searchable accordion
│   ├── contact/          # Contact + form
│   └── ...               # All other pages
├── components/
│   ├── home/             # 8 home page sections
│   ├── layout/           # Header, Footer
│   └── ui/               # CustomCursor, LenisProvider
├── content/
│   ├── products.ts       # 22 product definitions
│   └── faqs.ts           # 15 FAQ entries
└── lib/
    └── utils.ts          # cn(), formatPrice(), slugify()
```
