# Own Portfolio Website

A modern, animated personal portfolio website built with **Next.js 14** (App Router), **React 18**, **Tailwind CSS**, and **Framer Motion** — showcasing projects, skills, blog posts, and testimonials, all from local content files (no database or login required).

## Features

- **Animated hero & sections** — Framer Motion page transitions, scroll reveals, custom cursor, loader
- **Projects showcase** — data-driven project cards from `src/lib/projects.ts`
- **Skills section** — animated progress bars with tabbed categories
- **Blog** — Markdown posts in `content/` rendered with `next-mdx-remote`, with reading-time estimates
- **Testimonials** — curated client/peer quotes
- **Contact section** — contact form UI (client-side)
- **SEO-ready** — dynamic `sitemap.ts`, `robots.ts`, metadata
- **Fully static** — builds to a static `out/` directory (`output: "export"`), deployable to any static host (GitHub Pages, Cloudflare Pages)

## Tech Stack

- Next.js 14.2 (App Router, static export) · React 18 · TypeScript
- Tailwind CSS 3.4 · shadcn/ui components (Radix, class-variance-authority, clsx, tailwind-merge)
- Framer Motion 12 · lucide-react icons
- Blog: gray-matter + next-mdx-remote + reading-time

## Quick Start

```bash
npm install
npm run dev        # http://localhost:3000
npm run build      # static export -> ./out
```

## Project Structure

```
src/
├── app/            # App Router pages (page.tsx, blog/, projects/, layout.tsx, sitemap.ts, robots.ts)
├── components/
│   ├── layout/     # Navbar, Footer, PageTransition
│   ├── sections/   # Hero, About, Skills, FeaturedProjects, Testimonials, Contact
│   └── ui/         # shadcn/ui primitives + CustomCursor, Loader, ScrollReveal
├── lib/            # projects.ts, skills.ts, testimonials.ts, blog.ts, constants.ts
content/            # Markdown blog posts
public/             # static assets
```

## Deploy

Any static host works. The repo ships with `output: "export"` so `npm run build` produces a ready-to-serve `./out` directory. For GitHub Pages: push `out/` contents to the default branch and enable Pages (Settings → Pages → Deploy from branch).

## License

MIT

---

**Built by Girish Lade** — [ladestack.in](https://ladestack.in)
