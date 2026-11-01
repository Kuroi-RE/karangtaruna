# Karang Taruna — v2 Plan (Redesign + GSAP + SEO)

Branch: `v2`
Goal: Redesign UI/UX with a single animation engine (GSAP), remove redundant
animation libraries, add smooth scrolling, and build a strong SEO foundation.

This document is the plan only. No feature code is written yet — implementation
follows after this plan is approved.

---

## 0. Current State (audit summary)

Stack: Next.js 15 (App Router), React 18, TypeScript, Tailwind, shadcn/ui (T3).

Pages:
- `/` (Home) → Hero, About, Activity, Gallery — **all loaded with `ssr: false`**
- `/about` → About, Visi & Misi, quote, Struktur (Timeline)
- `/event` → tabs of events (static)
- `/contact` → contact form + socials

Animation libraries currently installed:

| Library | Used by | v2 decision |
|---|---|---|
| `framer-motion` | About, Activity, WriteText, /about | Replace with GSAP, remove |
| `@react-spring/web` | SplitText | Replace with GSAP SplitText, remove |
| `react-vertical-timeline-component` | Timeline (struktur) | Replace with GSAP timeline, remove |
| `particles-bg` | ParticleBackground (Gallery, /about) | Replace with GSAP/canvas or remove |
| `ogl` | (none — unused) | Remove |
| `embla-carousel-react` | `ui/carousel.tsx` (unused) | Remove if carousel unused |

Critical problems found:
1. **SEO killer:** every homepage section uses `dynamic(import, { ssr: false })`.
   Crawlers receive an almost-empty `<main>`. Content is invisible to Google.
2. `<html lang="en">` while 100% of content is Indonesian → should be `id`.
3. Metadata only at root; no per-page titles/descriptions, no Open Graph,
   no Twitter cards, no `metadataBase`, no canonical URLs.
4. No `sitemap.xml`, no `robots.txt`.
5. No structured data (JSON-LD): no Organization / LocalBusiness / Event schema.
6. Gallery images use `Math.random()` width/height → layout shift (poor CLS)
   and non-deterministic SSR output.
7. Placeholder content (`Unknown`, `@unknown`, `kartar@gmail.com`) hurts E-E-A-T.

---

## PART A — UI/UX Redesign + GSAP Migration

### A1. Design direction (to confirm before building)

Subject: a youth community organization (Karang Taruna Mekar Jadi, Dusun Domas).
The redesign should feel **community-driven, energetic, local, and trustworthy** —
not a generic SaaS template.

Proposed token system (draft — open to your input):
- **Palette:** keep the sea-blue identity (`#89CFF3 / #B7EFFE / #CDF5FD`) but add
  a warm accent (e.g. Indonesian-flag-adjacent red/merah `#E63946`) for energy and
  CTAs, plus a neutral ink for text. Refine dark mode (currently very dark navy).
- **Typography:** pair a characterful display face (e.g. Plus Jakarta Sans / Sora /
  Clash Display) with the existing Inter for body. One display face used with restraint.
- **Layout:** stronger hero (headline + map is currently flat), clearer section
  rhythm, consistent spacing scale, real masonry gallery (the current
  `grid-template-rows: masonry` only works in Firefox).
- **Signature element:** one memorable motion moment — candidate: a scroll-pinned
  "timeline of kegiatan" or an animated hero reveal tied to the community story.

Deliverable for this phase: a short `docs/design-tokens.md` with finalized palette,
type scale, and 2–3 ASCII wireframes per key section before any coding.

### A2. GSAP foundation

1. Add dependency: `gsap` (free, MIT). Pin exact version.
2. Create a central GSAP setup:
   - `src/lib/gsap.ts` — registers plugins (`ScrollTrigger`) once, exports configured `gsap`.
   - Respect `prefers-reduced-motion` via `gsap.matchMedia()` (accessibility, required).
3. Use the official **`@gsap/react`** package + `useGSAP()` hook for React-safe
   animation with automatic cleanup (avoids memory leaks in Next App Router).
4. Because GSAP animates the DOM directly, sections can render server-side
   (no more `ssr: false`) and animate after hydration → fixes SEO + animation together.

### A3. Smooth scroll — decision needed

The user asked for GSAP smooth scroll. Two options:

- **Option 1 — GSAP ScrollSmoother** (official). Requires a GSAP Club/paid membership
  (it is a bonus plugin, not in the free npm package). Integrates natively with ScrollTrigger.
- **Option 2 — Lenis** (free, by Studio Freight/Darkroom). Industry standard, free,
  integrates cleanly with ScrollTrigger via `lenis.on('scroll', ScrollTrigger.update)`.

**Recommendation:** use **Lenis** unless you already have a GSAP Club license.
It gives the same buttery smooth-scroll feel, is free, and pairs perfectly with
GSAP ScrollTrigger. (Confirm your preference.)

### A4. Component-by-component migration

| Component | Now | v2 |
|---|---|---|
| `WriteText` | framer-motion typewriter | GSAP `TextPlugin` or a small GSAP-driven typewriter; or replace with a cleaner reveal |
| `SplitText` | @react-spring per-letter | GSAP stagger reveal (manual char split + `gsap.from` stagger). No paid SplitText plugin needed |
| `About` (home + /about) | framer-motion fade variants | GSAP `ScrollTrigger` fade/slide-in, batched |
| `Activity` | framer-motion + custom slider | GSAP scroll reveal for cards; fix the slider (both buttons currently call `prevSlide`) |
| `Gallery` | particles bg + random sizes | Real masonry/grid with fixed aspect ratios; GSAP scroll reveal; replace particle bg |
| `Timeline` (struktur) | react-vertical-timeline | Custom GSAP scroll-driven vertical timeline (pin + scrub optional) |
| `ParticleBackground` | particles-bg lib | Lightweight GSAP/canvas ambient effect, or remove for performance |
| `Navbar` | CSS transitions | Keep CSS; optional GSAP entrance + scroll-hide |

Known functional bugs to fix during migration:
- `Activity.tsx`: right chevron calls `prevSlide` (should be `nextSlide`).
- Gallery random image dimensions → set fixed `width`/`height` + aspect ratio.
- `globals.css` duplicates the `:root`/`.dark` token blocks → de-duplicate.

### A5. Performance guardrails (gsap-performance skill)
- Animate only `transform` and `opacity` (GPU-friendly); avoid layout props.
- Use `ScrollTrigger.batch()` for lists (gallery, cards) instead of N triggers.
- `will-change` only during active animation; clean up with `useGSAP` scope.
- Lazy-init heavy/ambient effects; honor reduced-motion.
- Target: no regression in Core Web Vitals (see Part B).

### A6. Dependency cleanup
Remove after migration verified: `framer-motion`, `@react-spring/web`,
`react-vertical-timeline-component`, `@types/react-vertical-timeline-component`,
`particles-bg`, `ogl`, and `embla-carousel-react` (+ `ui/carousel.tsx`) if the
carousel stays unused. Run `npm run check` (lint + typecheck) + `npm run build`.

---

## PART B — SEO Analysis + Build

### B1. Technical SEO (highest impact first)

1. **Stop `ssr: false` on indexable content.** Convert Hero/About/Activity/Gallery
   and `/about` to server-rendered components; move only the interactive bits to
   small `"use client"` children. This is the #1 ranking fix.
2. **`<html lang="id">`** in `layout.tsx`.
3. **`metadataBase`** + canonical URLs in root metadata.
4. **Per-page metadata** (`export const metadata`) for `/`, `/about`, `/event`,
   `/contact` with unique titles + descriptions (Indonesian, keyword-aware).
5. **Open Graph + Twitter cards** + a real `/public/og-image` (1200×630).
6. **`app/sitemap.ts`** (Next.js native) listing all routes.
7. **`app/robots.ts`** allowing crawl + pointing to sitemap.
8. **`app/manifest.ts`** (PWA basics) + proper favicons/apple-touch-icon.

### B2. On-page SEO
- One `<h1>` per page; logical heading hierarchy (Activity currently has multiple `h1`s).
- Descriptive `alt` text on all images (currently `gallery-0`, "Activity Image").
- Real content replacing placeholders (`Unknown`, `kartar@gmail.com`) — needs your input.
- Internal linking between Home ↔ About ↔ Event ↔ Contact with descriptive anchors.
- Keyword targeting: "Karang Taruna", "Dusun Domas", "Desa Domas", "pemuda Domas",
  event names (HUT RI, voli antar dusun / PORDUS). (programmatic-seo skill can scale
  event/kegiatan pages later.)

### B3. Structured data (JSON-LD) — needs `schema` skill (see below)
- **Organization** (name, logo, sameAs → Instagram, LinkTree, YouTube).
- **LocalBusiness / NGO** with address (Dusun Domas) + geo (lat/lng already in the map embed).
- **Event** schema for `/event` items (past + upcoming) → eligible for rich results.
- **BreadcrumbList** for sub-pages.

### B4. Core Web Vitals
- Fix Gallery CLS (fixed image dimensions, `next/image` with width/height).
- Audit LCP (hero map iframe is heavy — consider a static map image + lazy iframe on interaction).
- Verify GSAP work doesn't block main thread; defer ambient effects.
- Measure with Lighthouse before/after; record scores in `docs/seo-audit.md`.

### B5. AI search (ai-seo skill, optional/stretch)
- Clean semantic HTML + structured data also helps AI answer engines.
- Add concise, factual "about" copy that answers "what is Karang Taruna Mekar Jadi".

---

## Execution Phases (proposed order)

1. **Phase 0 — Setup:** install `gsap` + `@gsap/react` (+ `lenis` if approved),
   create `src/lib/gsap.ts`, design-tokens doc. (branch already created: `v2`)
2. **Phase 1 — SEO structural fix:** remove `ssr: false`, `lang="id"`, metadata,
   sitemap/robots/manifest. (No visual change, big SEO win, low risk.)
3. **Phase 2 — GSAP migration:** port components off framer-motion / react-spring /
   react-vertical-timeline / particles-bg, add smooth scroll, fix known bugs.
4. **Phase 3 — Redesign polish:** apply new tokens/typography, real masonry gallery,
   hero rework, signature motion moment.
5. **Phase 4 — Structured data + content:** JSON-LD, real copy, alt text, internal links.
6. **Phase 5 — Verify:** `npm run check`, `npm run build`, Lighthouse audit,
   then dependency cleanup.

---

## Skills I have vs. need

Have: `gsap-core`, `gsap-scrolltrigger`, `gsap-timeline`, `gsap-performance`,
`frontend-design`, `design-md`, `seo-audit`, `programmatic-seo`, `ai-seo`.

Requests (would meaningfully improve quality):
- **`gsap-react`** — official `useGSAP()` hook + cleanup patterns for React/Next.
  (The other GSAP skills explicitly defer React specifics to this skill.)
- **`gsap-plugins`** — needed if you want official **ScrollSmoother** for smooth scroll
  (Club plugin). Skip if we go with Lenis.
- **`schema`** — referenced by the seo-audit skill for proper JSON-LD structured data.

---

## Open questions for you
1. Smooth scroll: **Lenis (free)** or **GSAP ScrollSmoother (paid Club)**? **→ Lenis (done)**
2. OK to add a warm red accent alongside the sea-blue, or keep blue-only? **→ red accent added (done)**
3. Can you provide real data ... **→ email kartarmj@gmail.com set; org names/roles still placeholder ("Unknown") pending real data**
4. Is `ui/carousel.tsx` (embla) used anywhere planned, or safe to remove? **→ removed (done)**
5. Production domain? **→ https://mekarjadi.vercel.app (done)**

## Status (executed)
All phases complete. `npm run check` and `npm run build` both pass (exit 0; only
pre-existing warnings in ui/form.tsx and use-toast.ts). All 10 routes prerender as
static, including /sitemap.xml, /robots.txt, /manifest.webmanifest.

### Remaining follow-ups (need real content / assets)
- Replace org structure placeholders (`Unknown` / `@unknown`) in `src/app/about/page.tsx`.
- Add a dedicated 1200×630 `public/og-image.png` and repoint OG/Twitter + schema
  image (currently using `/images/172024/1.jpg` as a real-photo fallback).
- Source photos in `public/images` are 2–9 MB each; consider compressing for faster LCP.
- Optionally add `/event` to the Navbar for stronger internal linking.
