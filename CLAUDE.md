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

## Design direction

- **Aesthetic:** Calm Pacific Northwest. Soft Spokane-area imagery (Spokane River, Mt. Spokane, Riverfront Park) in the hero.
- **Palette:** Navy primary, white background, warm accent (soft amber or sage). No bright/loud colors.
- **Typography:** Base 18–20px. Headings generous. Audience is 65+; accessibility IS the brief, not a bonus.
- **Layout:** Single page, anchor-link nav, generous whitespace, tap targets ≥44px.
- **Tone:** Professional but warm. Not corporate-sterile.

## Page structure (single page, anchor-link nav)

1. **Hero** — Name, headline, headshot, primary CTA (phone link + "Get in touch" scroll)
2. **About** — Bio above + headshot
3. **What I Do** — Three service cards: Medicare Advantage, Medicare Supplement, Part D. Plain-English one-paragraph explanation under each.
4. **Contact** — Phone, email, business hours, service area, simple contact form (mailto for v1)
5. **Footer** — Compliance disclaimer, "not affiliated with Medicare" line, copyright

## Tech stack

- Next.js 14+ App Router, TypeScript, Tailwind CSS
- Deploy target: Vercel
- DNS at launch: add A record `76.76.21.21` (apex) and CNAME `cname.vercel-dns.com` (www) at Squarespace. Do NOT change nameservers. Leave MX records alone.

## Asset notes

- Headshot: will live at `public/images/stephanie.jpg` (TBD — use a placeholder gray box for now).
- Hero imagery: source from Unsplash, search "Spokane River", "Mt Spokane", "Pacific Northwest mountains". Save to `public/images/hero.jpg`.
- Favicon: generate from initials "SF" in navy.

## Out of scope (v1)

- Blog
- Lead capture beyond mailto contact form
- CRM integration
- Plan comparison tools (would trigger heavier CMS marketing requirements)
- NPN display
