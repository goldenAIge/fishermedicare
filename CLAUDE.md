# Fisher Medicare — Agent Website

Single-page marketing site for Stephanie Fisher, a licensed Medicare insurance agent based in Spokane, WA. Built for a 65+ audience. Accessibility is the brief, not a bonus.

## Client info

- **Name:** Stephanie Fisher
- **Domain:** fishermedicare.com (registered at Squarespace — do not change nameservers)
- **Phone:** 509-869-2537
- **Email:** Stephanie@fishermedicare.com (Google Workspace — do not touch MX records)
- **Service area:** Spokane, WA primarily; remote (Zoom/phone) for anyone in WA
- **Business hours:** 9am–5pm
- **Licensed in:** Washington
- **Carriers appointed:** UnitedHealthcare, Aetna
- **Lines of business:** Medicare Advantage, Medicare Supplement, Part D

**Important:** Do NOT display NPN anywhere on the site (per FMO guidance from JJ at Klaus Medicare).

## Bio (use verbatim, do not rewrite)

I genuinely care about people and am passionate about helping my clients make informed Medicare decisions with confidence. My goal is to simplify the process and make choosing the right Medicare plan as easy and stress-free as possible.

I believe in treating every client like family — with honesty, patience, and personalized service. Whether you are new to Medicare or reviewing your current coverage, I am committed to being a trusted resource and helping you feel confident in your healthcare choices for years to come.

I look forward to hearing from you and helping make Medicare a little less complicated and a lot more manageable.

## Required compliance copy (footer, verbatim)

> We do not offer every plan available in your area. Any information we provide is limited to those plans we do offer in your area. Please contact Medicare.gov or 1-800-MEDICARE to get information on all your plan options.

Also include in the footer: "Not affiliated with or endorsed by Medicare or any government agency."

## Design System

### Aesthetic
Clean, warm, trustworthy. NOT "financial/corporate." No literal landscape photography. The brand logo (abstract tree + mountain) is the only nature motif used, and only as the logo itself.

### Color Palette
- Slate/charcoal: `#2E3A47` — structural dark; section panels and nav
- Navy:           `#22304D` — secondary dark for depth
- Light gray:     `#F4F5F7` — light section backgrounds
- Coral accent:   `#E68A78` — single warm accent; CTAs, links, highlights only
- White:          `#FFFFFF` — text on dark panels

Coral is the ONLY warm accent — use sparingly. Cool darks (slate/navy) carry the structure. Powder blue is carried by the logo only; do not spread it across the UI.

### Emphasis Blocks
Key sections (hero, service cards, possibly footer) use a slate (`#2E3A47`) panel background with white text so the words stand out clearly against the light-gray page.

### Typography
- Base: 18–20px. Headings generous. Audience is 65+; accessibility IS the brief, not a bonus.
- Layout: Single page, anchor-link nav, generous whitespace, tap targets ≥44px.
- Tone: Professional but warm. Not corporate-sterile.

### Brand / Header
- Logo image: `public/images/stephanie-fisher-logo-v2.png` — displayed in the nav bar and as a white-card badge in the hero
- Larger brand wordmark; taller top nav bar (h-48)
- **Note:** Logo has a WHITE background, not transparent. On dark panels it sits inside a white rounded card (`bg-white rounded-2xl`). If a transparent PNG/SVG is ever provided, remove that wrapper.

### Imagery
- Hero portrait:  `public/images/stephanie-hero-v2.png` (green-top headshot — featured in hero)
- About portrait: `public/images/stephanie-about-v2.png` (black blazer headshot — About section)
- **Removed:** all landscape photography and previous photo versions

## Page Structure (single page, anchor-link nav)

1. **Hero** — Slate panel background. Logo badge + Stephanie's photo + her name as the heading. Primary CTAs: phone link + "Get in touch" scroll.
2. **About** — Bio + `stephanie-about-v2.png` headshot (black blazer). Light-gray or white background.
3. **What I Do** — Three service cards on slate panel backgrounds with white text.
4. **Contact** — Phone, email, business hours, service area, simple contact form (mailto for v1).
5. **Footer** — Compliance disclaimer, "not affiliated with Medicare" line, copyright.

## Tech stack

- Next.js 14+ App Router, TypeScript, Tailwind CSS
- Deploy target: Vercel
- DNS at launch: add A record `76.76.21.21` (apex) and CNAME `cname.vercel-dns.com` (www) at Squarespace. Do NOT change nameservers. Leave MX records alone.

## Asset notes

- Hero portrait: `public/images/stephanie-hero-v2.png` (green-top headshot)
- About portrait: `public/images/stephanie-about-v2.png` (black blazer headshot)
- Logo (nav + hero): `public/images/stephanie-fisher-logo-v2.png` (white background — wrap in white card on dark panels)

## Out of scope (v1)

- Blog
- Lead capture beyond mailto contact form
- CRM integration
- Plan comparison tools (would trigger heavier CMS marketing requirements)
- NPN display
