# Karang Taruna Mekar Jadi

Official website of **Karang Taruna Mekar Jadi**, the youth organization of
Dusun Domas, Desa Domas. It introduces the organization, showcases its
activities and events, and provides a way for the community to get in touch.

🌐 Live site: https://mekarjadi.vercel.app

## Tech Stack

Bootstrapped with the [T3 Stack](https://create.t3.gg/) and upgraded to the
latest framework versions:

- [Next.js 16](https://nextjs.org) (App Router, Turbopack, React Server Components)
- [React 19](https://react.dev)
- [TypeScript](https://www.typescriptlang.org/)
- [Tailwind CSS](https://tailwindcss.com) + [shadcn/ui](https://ui.shadcn.com) (Radix UI primitives)
- [GSAP](https://gsap.com) + [`@gsap/react`](https://github.com/greensock/react) for scroll animations
- [Lenis](https://lenis.darkroom.engineering/) for smooth scrolling
- [react-hook-form](https://react-hook-form.com) + [Zod](https://zod.dev) for forms and validation
- [next-themes](https://github.com/pacocoursey/next-themes) for light/dark mode
- [`@t3-oss/env-nextjs`](https://env.t3.gg/) for type-safe environment variables
- ESLint 9 (flat config) + Prettier

## Pages

- `/` — Home: hero, about, activities, and gallery
- `/about` — About the organization, vision & mission, and structure (timeline)
- `/event` — Past and upcoming events
- `/contact` — Contact form and social links

The site is fully server-rendered for SEO, with `sitemap.xml`, `robots.txt`,
a web app manifest, and JSON-LD structured data (Organization, LocalBusiness,
Event, and Breadcrumb schemas). All routes prerender as static content.

## Getting Started

### Prerequisites

- Node.js **20.9+** (required by Next.js 16)
- npm (the repo uses npm; see `packageManager` in `package.json`)

### Setup

```bash
# 1. Install dependencies
npm install

# 2. Create your environment file
cp .env.example .env

# 3. Start the dev server (http://localhost:3000)
npm run dev
```

### Environment variables

Environment variables are validated at build/start time via `src/env.js`.
Copy `.env.example` to `.env` and fill in the values. To skip validation
(e.g. in Docker builds), set `SKIP_ENV_VALIDATION`.

## Scripts

| Script                 | Description                                          |
| ---------------------- | ---------------------------------------------------- |
| `npm run dev`          | Start the development server (Turbopack)             |
| `npm run build`        | Create a production build                            |
| `npm run start`        | Run the production server                            |
| `npm run preview`      | Build and run the production server                  |
| `npm run lint`         | Lint `src` with ESLint                               |
| `npm run lint:fix`     | Lint and auto-fix                                    |
| `npm run typecheck`    | Type-check with `tsc --noEmit`                       |
| `npm run check`        | Run lint **and** type-check                          |
| `npm run format:write` | Format the codebase with Prettier                    |
| `npm run format:check` | Check formatting with Prettier                       |

> Note: As of Next.js 16, `next lint` has been removed. Linting now runs ESLint
> directly via the flat config in `eslint.config.js`.

## Project Structure

```
src/
├── app/              # App Router routes (pages, layout, sitemap, robots, manifest)
│   ├── about/
│   ├── contact/
│   ├── event/
│   └── features/     # Page sections and shared feature components (Navbar, Footer, ...)
├── components/       # Reusable UI and animation components
│   └── ui/           # shadcn/ui components
├── hooks/            # Custom React hooks
├── lib/              # Utilities, GSAP setup, and structured-data schemas
└── styles/           # Global styles
```

## Deployment

The site is deployed on [Vercel](https://vercel.com). Pushing to the production
branch triggers an automatic build and deploy. You can also deploy to any
platform that supports Next.js (see the
[Next.js deployment docs](https://nextjs.org/docs/app/building-your-application/deploying)).
