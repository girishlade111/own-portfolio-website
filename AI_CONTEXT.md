# Portfolio Website — Complete AI Context

## 📋 Project Overview

**Tech Stack:** Next.js 14 (App Router), TypeScript, Tailwind CSS, Framer Motion, Base UI React (shadcn/ui nova style)
**Theme:** Dark, gold-accented luxury portfolio with noise texture overlay
**Purpose:** Personal portfolio for **Girish Lade** — Full-Stack Developer & Founder of LadeStack
**Domain:** `https://girish.ladestack.in`
**Package Manager:** npm

---

## 🧱 Project Structure

```
/
├── .eslintrc.json                     # ESLint config (Next.js core-web-vitals + typescript)
├── .gitignore
├── components.json                    # shadcn/ui configuration (Base UI style "base-nova")
├── next.config.mjs                    # ignores ESLint & TS errors during build
├── package.json
├── postcss.config.mjs                 # Tailwind CSS plugin only
├── tailwind.config.ts                 # Custom theme with dark mode (class), gold/surface colors, 3 font families
├── tsconfig.json                      # Path alias @/ = ./src/
│
├── content/blog/
│   └── why-i-built-ladestack.mdx      # Blog post (frontmatter: title, date, description, tags, readTime, published)
│
├── public/
│   └── og-image-placeholder-note.txt  # TODO note for OG image
│
└── src/
    ├── app/
    │   ├── favicon.ico
    │   ├── globals.css                 # Global styles, CSS variables, scrollbar, noise overlay
    │   ├── layout.tsx                  # Root layout — fonts, metadata, Navbar, Footer, CustomCursor, Loader, PageTransition
    │   ├── page.tsx                    # Home page — Hero → About → Skills → FeaturedProjects → Testimonials → Contact
    │   ├── robots.ts                   # Dynamic robots.txt
    │   ├── sitemap.ts                  # Dynamic sitemap (static routes + blog posts)
    │   ├── blog/
    │   │   ├── page.tsx                # Blog index — lists all published posts
    │   │   └── [slug]/
    │   │       └── page.tsx            # Blog detail — MDX rendering with custom components
    │   └── projects/
    │       ├── page.tsx                # Projects page (server component wrapper)
    │       └── ProjectsClient.tsx      # Client component — category filter + animated grid
    │
    ├── components/
    │   ├── layout/
    │   │   ├── Footer.tsx              # Footer with logo, nav links, copyright
    │   │   ├── Navbar.tsx              # Fixed navbar with scroll blur, mobile menu, active section detection
    │   │   └── PageTransition.tsx      # Framer motion page fade wrapper
    │   │
    │   ├── sections/
    │   │   ├── Hero.tsx                # Full-screen hero with radial gradient, year watermark, CTA buttons, availability badge
    │   │   ├── About.tsx               # Two-column: content (stats) + visual placeholder, stagger animations
    │   │   ├── Skills.tsx              # Tabbed skill bars with animated progress (Framer Motion)
    │   │   ├── FeaturedProjects.tsx    # Alternating left/right project cards with case study links + filter
    │   │   ├── Testimonials.tsx        # Quote cards with author info, hidden if < 2 testimonials
    │   │   └── Contact.tsx             # Two-column: social links (copy email, GitHub, LinkedIn, Twitter) + contact form (simulated submit)
    │   │
    │   └── ui/
    │       ├── badge.tsx               # shadcn/ui badge (Base UI useRender)
    │       ├── button.tsx              # shadcn/ui button (Base UI ButtonPrimitive)
    │       ├── card.tsx                # shadcn/ui card (Card, CardHeader, CardTitle, etc.)
    │       ├── CustomCursor.tsx         # Custom gold dot cursor with spring physics, hover expansion, desktop-only
    │       ├── input.tsx               # shadcn/ui input (Base UI InputPrimitive)
    │       ├── Loader.tsx              # Animated "G.L." loader, shows once per session (sessionStorage)
    │       ├── ScrollReveal.tsx        # Reusable scroll-triggered animation wrapper
    │       ├── select.tsx              # shadcn/ui select (Base UI SelectPrimitive) complete with scroll buttons
    │       ├── separator.tsx           # shadcn/ui separator (Base UI SeparatorPrimitive)
    │       ├── tabs.tsx                # shadcn/ui tabs (Base UI TabsPrimitive) with line variant
    │       └── textarea.tsx            # shadcn/ui textarea
    │
    └── lib/
        ├── blog.ts                    # Blog data layer — reads MDX/MD files from content/blog/
        ├── constants.ts                # PERSONAL info (name, title, tagline, email, social URLs, resume, availability)
        ├── projects.ts                 # PROJECTS array + FEATURED_PROJECTS filter (max 3)
        ├── skills.ts                   # SKILLS object categorized (Frontend, Backend, DevOps, AI & Tools)
        ├── testimonials.ts             # TESTIMONIALS array of quote objects
        └── utils.ts                    # cn() helper (clsx + tailwind-merge)
```

---

## 🔄 Data Flow & Architecture

### Framework: Next.js 14 App Router

- **Server Components (RSC)** — `layout.tsx`, `page.tsx` (home), `blog/page.tsx`, `blog/[slug]/page.tsx`, `projects/page.tsx`, `robots.ts`, `sitemap.ts`
- **Client Components** — All components under `components/` that use `"use client"` (hooks, interactivity)
- **Hybrid Pattern** — `projects/page.tsx` is a thin server wrapper that renders the client `ProjectsClient.tsx`

### Data Sources

| Data            | Source File            | Type        | Consumption                         |
|-----------------|------------------------|-------------|-------------------------------------|
| Personal info   | `src/lib/constants.ts` | Static TS   | Hero, Navbar, Footer, Contact       |
| Projects        | `src/lib/projects.ts`  | Static TS   | FeaturedProjects, ProjectsClient    |
| Skills          | `src/lib/skills.ts`    | Static TS   | Skills tabbed section               |
| Testimonials    | `src/lib/testimonials.ts` | Static TS  | Testimonials section                |
| Blog posts      | `content/blog/*.mdx`   | MDX files   | Blog index, Blog detail (MDXRemote) |

### Routing

| Route           | Page Component        | Purpose                          |
|-----------------|-----------------------|----------------------------------|
| `/`             | `page.tsx`            | Home - all sections in sequence  |
| `/projects`     | `projects/page.tsx`   | All projects with category filter|
| `/blog`         | `blog/page.tsx`       | Blog index (chronological)       |
| `/blog/[slug]`  | `blog/[slug]/page.tsx`| MDX blog detail                  |
| `/robots.txt`   | `robots.ts`           | SEO robots                       |
| `/sitemap.xml`  | `sitemap.ts`          | Dynamic sitemap                  |

### Navigation Links (from constants.ts)
```
About   → #about    (scroll to section on home)
Projects → /projects (full page)
Skills  → #skills   (scroll to section on home)
Blog    → /blog      (full page)
Contact → #contact   (scroll to section on home)
```

---

## 🎨 Theme & Styling System

### CSS Variables (`src/app/globals.css`)

```css
--bg-primary: #050A18              /* Main background (deep navy-black) */
--bg-surface: #0A1020              /* Surface/card background */
--bg-card: #0F1628                 /* Card background */
--accent-gold: #C9A84C             /* Primary accent gold */
--accent-gold-light: #E8C878       /* Lighter gold hover */
--accent-gold-muted: #8B6914       /* Scrollbar, selection */
--accent-blue: #1A3A6B             /* Secondary accent */
--text-primary: #F0EDE6            /* Main text (warm white) */
--text-secondary: #9A9490          /* Body text (warm gray) */
--text-muted: #5A5650              /* Muted text */
--border: rgba(201, 168, 76, 0.12)       /* Subtle gold border */
--border-hover: rgba(201, 168, 76, 0.3)  /* Hover border */
```

### Typography
- **Display:** Cormorant Garamond (weights 300, 400, 600) — headings, large text
- **Body:** DM Sans (weights 400, 500) — paragraphs, UI text
- **Mono:** JetBrains Mono — code, stats, small labels

### Tailwind Theme Extensions
```js
colors: { background, foreground, gold, surface, card, muted, border }
fontFamily: { display, body, mono }
```

### Global Effects
- **Noise overlay** — fixed SVG noise texture at `opacity: 0.4` on `::after` pseudo-element of `.noise-overlay`
- **Custom scrollbar** — thin 4px, gold thumb
- **Selection** — gold-muted background
- **`::selection`** — gold-muted background

---

## 🧩 Component Deep Dive

### 1. Root Layout (`layout.tsx`)
- Loads 3 Google Fonts (Cormorant Garamond, DM Sans, JetBrains Mono) as CSS variables
- Sets comprehensive metadata (title template, OG, Twitter, robots)
- Wraps children in: `Loader → CustomCursor → Navbar → PageTransition → {children} → Footer`
- Body class: `noise-overlay antialiased`
- Font loading: `display: swap, preload: true`

### 2. Navbar (`Navbar.tsx`) — Client Component
- **Scroll effect:** `isScrolled` state → applies `bg-surface/80 backdrop-blur-[12px]` + bottom border when `scrollY > 20`
- **Active section detection:** IntersectionObserver with `rootMargin: "-20% 0px -80% 0px"` observes all `section[id]` elements
- **Desktop nav:** horizontal list + "Hire Me" gold outline button
- **Mobile:** hamburger toggle (Menu/X icons), AnimatePresence slide-down menu
- **Active link:** text becomes gold when section is in view; underline animation via `scale-x` transform
- **Edge case:** If on `/projects` or `/blog` page (no matching `#id`), activeSection stays empty

### 3. Hero (`Hero.tsx`) — Client Component
- Full viewport height (`min-h-screen`), vertical centering
- **Background:** radial gradient ellipse at 70% 20%
- **Year watermark:** large `20vw` gold text at 3% opacity, positioned right side, hidden on mobile
- **Animations:** staggered entrance (line → subtitle → name → tagline → CTAs → availability) with 0.15s delays
- **Download resume:** simulated 1.5s download state with Check icon
- **Availability badge:** ping animation on green dot + "Available for freelance work" text
- **CTA buttons:** "View My Work" (solid gold) + "Download Resume" (outline gold, 208px fixed width)

### 4. About (`About.tsx`) — Client Component
- **Two-column layout** (55% / 45% on desktop, stacked on mobile)
- **Left column:**
  - Section heading with gold accent line
  - Multi-paragraph bio with decorative gold dividers
  - Stats row (3+ years, 10+ products) staggered with `containerVariants`
- **Right column:**
  - Decorative border frame with corner accents (hover animation shifts corners)
  - "G.L." placeholder inside frame
  - "Currently Building" info card with Code2 icon

### 5. Skills (`Skills.tsx`) — Client Component
- **Background:** faded large "STACK" text watermark
- **Tabs:** uses Base UI TabsPrimitive with custom line variant (gold underline on active)
- **Categories from `SKILLS` object keys:** Frontend, Backend, DevOps & Cloud, AI & Tools
- **Progress bars:** animated width from 0 → level% when section enters viewport (`useInView`)
- **Percentage labels:** appear 1s after bar animation completes
- **Each skill row:** name, animated bar, percentage, staggered delay

### 6. FeaturedProjects (`FeaturedProjects.tsx`) — Client Component
- Displays `FEATURED_PROJECTS` (filtered from PROJECTS, `featured: true`, max 3)
- **Alternating layout:** even index = image left, odd index = image right
- **Background number:** large 01/02/03 gold number at 30% opacity
- **Status badge:** green (live), gold (development), muted (archived)
- **Tech stack:** small uppercase mono tags with gold border
- **Project visual:** placeholder with corner accents on hover + "Screenshot / Visual" text
- **"View All Projects"** link at bottom with underline animation

### 7. Testimonials (`Testimonials.tsx`) — Client Component
- **Guard:** Returns `null` if `TESTIMONIALS.length < 2` (section hidden entirely)
- **Static grid** (1 col mobile, 2 col desktop)
- **Quote card:** large opening quote mark, italicized quote, gold divider line, author avatar (image or initial letter fallback), name + role
- **Stagger animation** using `containerVariants` + `cardVariants`

### 8. Contact (`Contact.tsx`) — Client Component
- **Two-column** (60% / 40%)
- **Left column:**
  - Section heading + subtitle
  - Social links list (Email, GitHub, LinkedIn, Twitter) — each as button/link with gold icon, hover effects
  - Email has **copy-to-clipboard** with 2s "Copied!" feedback
  - Availability status indicator (green = open, amber = busy)
- **Right column:**
  - Contact form (name, email, inquiry type Select, message Textarea)
  - Submit simulates 1.5s delay then shows success state
  - **TODO in code:** `wire up email service (Formspree/Resend)`
- **Background:** subtle radial gradient glow at bottom-left

### 9. ProjectsClient (`ProjectsClient.tsx`) — Client Component
- **Full page** for `/projects`
- **Category filter:** buttons — All, Tool, App, SaaS, AI
- **Animated grid:** AnimatePresence with `popLayout`, scale + fade transitions
- **Each card:** title (linked to `/projects/[id]`), status badge, description (2-line clamp), tech stack tags, footer with "Read Case Study" link + GitHub/Live icons
- **Note:** No `/projects/[id]` page exists yet — links point to missing routes

### 10. Blog (`blog/page.tsx`) — Server Component
- **Header** with "Back to Home" link
- **Editorial list:** each post shows date (mono, uppercase), title, description, reading time badge
- **Hover effect:** left gold border + slight background + pl-4
- **Empty state:** "No posts found." when no published posts

### 11. Blog Detail (`blog/[slug]/page.tsx`) — Server Component
- **`generateStaticParams`** for SSG
- **`generateMetadata`** for dynamic SEO
- **MDX rendering** via `next-mdx-remote/rsc` with custom component overrides (headings, paragraphs, lists, links, blockquotes, code blocks)
- **Article header:** title, formatted date, read time, tags with gold # prefix
- **Back button** with ArrowLeft icon

### 12. CustomCursor (`CustomCursor.tsx`) — Client Component
- **Desktop-only:** checks `window.matchMedia("(hover: hover) and (pointer: fine)")`
- **Spring physics:** `damping: 25, stiffness: 200, mass: 0.5` for smooth follow
- **Hover detection:** checks `a`, `button` tags and their parents/closest
- **State changes:** size 6px → 24px, opacity 1 → 0.5, mix-blend-difference on hover
- **Cleanup:** restores `cursor: auto` on unmount

### 13. Loader (`Loader.tsx`) — Client Component
- **Session-only:** uses `sessionStorage.getItem("hasVisited")`
- If first visit: shows "G.L." (staggered letter entrance) for 1800ms then fades out
- On subsequent visits (same tab): hidden completely
- **z-index:** 10000 (highest layer)

### 14. ScrollReveal (`ScrollReveal.tsx`) — Client Component
- **Reusable wrapper** for scroll-triggered animations
- **Props:** delay, direction (up/left/right), className
- Uses `useInView` with `once: true, margin: "-20%"`
- Direction maps to initial x/y offset

---

## 📦 Data Layer

### constants.ts — `PERSONAL` object
```ts
name: "Girish Lade"
title: "Full-Stack Developer & Founder"
tagline: "I build tools developers actually want to use."
email: "your@email.com"           // PLACEHOLDER — needs real email
github: "https://github.com/yourusername"  // PLACEHOLDER
linkedin: "https://linkedin.com/in/yourusername"  // PLACEHOLDER
twitter: "https://twitter.com/yourusername"  // PLACEHOLDER
resumeUrl: "/resume.pdf"          // PLACEHOLDER — needs PDF
availableForWork: true
currentFocus: "Building LadeStack — a suite of AI-powered developer tools"
```

### projects.ts — Project type & data
```ts
type Project = {
  id: string
  title: string
  description: string
  longDescription: string
  techStack: string[]
  githubUrl?: string
  liveUrl?: string
  screenshot?: string
  status: "live" | "development" | "archived"
  featured: boolean
  category: "tool" | "app" | "saas" | "ai"
}
```
4 placeholder projects exist. `FEATURED_PROJECTS = PROJECTS.filter(p => p.featured).slice(0, 3)`

### skills.ts — SKILLS object
4 categories with name + level (0–100):
- Frontend (5 skills)
- Backend (4 skills)
- DevOps & Cloud (4 skills)
- AI & Tools (4 skills)

### testimonials.ts — TESTIMONIALS array
3 placeholder entries with `quote`, `author`, `role`, `avatar` (all null)

### blog.ts — Blog data layer
- `getAllPosts()` — reads `content/blog/` for .mdx/.md, parses frontmatter, filters published, sorts by date descending
- `getPostBySlug(slug)` — reads single file, returns full content for MDX rendering
- Both handle missing directory gracefully (returns `[]` or `null`)

---

## ⚙️ Utils & Configs

### utils.ts
```ts
cn() — clsx + tailwind-merge for class merging
```

### next.config.mjs
```js
eslint: { ignoreDuringBuilds: true }
typescript: { ignoreBuildErrors: true }
```
Both are set to `true` (bypassed during build).

### tailwind.config.ts
- Dark mode: `["class"]`
- Content paths: `src/pages/`, `src/components/`, `src/app/`
- Custom colors mapped to CSS variables
- 3 custom font families

### tsconfig.json
- Path alias: `@/*` → `./src/*`
- Strict mode enabled
- JSX: preserve

---

## 🚀 Scripts & Dependencies

### Scripts
| Command       | Action              |
|---------------|---------------------|
| `npm run dev` | Next.js dev server   |
| `npm run build` | Production build  |
| `npm start`   | Start prod server    |
| `npm run lint` | ESLint check        |

### Key Dependencies
| Package               | Purpose                          |
|-----------------------|----------------------------------|
| next@14.2.35          | Framework                        |
| react@18              | UI library                       |
| framer-motion@12.40.0 | Animations                       |
| @base-ui/react@1.5.0  | Headless UI primitives (shadcn)  |
| lucide-react@1.17.0   | Icons                            |
| gray-matter@4.0.3     | MDX frontmatter parsing          |
| next-mdx-remote@6.0.0 | RSC MDX rendering                |
| reading-time@1.5.0    | Read time calculation (unused)   |
| class-variance-authority | Component variants            |
| clsx + tailwind-merge | Class utilities                  |
| tailwindcss@3.4.1     | CSS framework                    |
| shadcn@4.8.3          | CLI (for adding shadcn components) |
| tw-animate-css@1.4.0  | Tailwind animation CSS           |

---

## 🔍 Known Issues & TODOs

1. **Constants placeholders** — `email`, `github`, `linkedin`, `twitter`, `resumeUrl` in `constants.ts` are all placeholder values
2. **Resume PDF** — `PERSONAL.resumeUrl` points to `/resume.pdf` which doesn't exist
3. **Contact form** — submit is simulated (1.5s timeout), no real email service wired up. Comment says: `// TODO: wire up email service (Formspree/Resend)`
4. **Blog post** — only 1 sample post exists (`why-i-built-ladestack.mdx`)
5. **Project data** — all 4 projects are placeholder examples, not real
6. **Testimonials** — all 3 are placeholder entries with `avatar: null` and fake names/roles
7. **OG Image** — `/og-image.png` referenced in metadata doesn't exist (just a note in `public/`)
8. **Project detail pages** — `/projects/[slug]` route doesn't exist; links from FeaturedProjects and ProjectsClient point to 404
9. **Mobile menu** — IntersectionObserver runs on all pages; if no `section[id]` exists (e.g., /blog, /projects), `activeSection` stays empty
10. **Font loading** — 3 Google Fonts with `preload: true` could slow initial load
11. **reading-time package** — imported in `package.json` but not actually used (blog has manual `readTime` in frontmatter)
12. **`shadcn` package** — listed as a dependency; likely meant as devDependency

---

## 🎯 Architecture Patterns

- **Component organization:** `layout/` for shared UI (Navbar, Footer, PageTransition), `sections/` for home page sections, `ui/` for primitive components
- **Animation philosophy:** All entrance animations use Framer Motion. Sections animate on scroll via `whileInView` with `viewport: { once: true, margin: "-20%" }`
- **Styling approach:** Tailwind utility classes primarily; CSS variables for theming; inline `style` for dynamic gradients
- **No state management library** — all state is local `useState`/`useEffect`
- **No API routes** — fully static data
- **No authentication** — public portfolio

---

## 📸 Visual Design Language

- **Color:** Deep navy backgrounds (#050A18) with warm gold accents (#C9A84C)
- **Texture:** SVG fractal noise overlay at 40% opacity
- **Typography:** Serif display (Cormorant Garamond) for headings, sans-serif body (DM Sans), mono (JetBrains Mono) for metadata
- **Borders:** Subtle gold at 12% opacity, hover at 30%
- **Animations:** Staggered section entrances on scroll; spring cursor physics; underline hover effects
- **Section pattern:** Each section has gold mono label `— SectionName`, large lightweight heading, body text, then content
- **Decorations:** Gold divider lines, corner accents on frames, large faded background watermark text
