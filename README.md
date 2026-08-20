# Akash Verma — Portfolio

Professional developer portfolio built with React, Vite, TypeScript, and Tailwind CSS.

## Tech Stack

- **React 19** + **TypeScript** (strict mode)
- **Vite 8** — fast dev server and optimized builds
- **Tailwind CSS 3** — utility-first styling with custom design tokens
- **Framer Motion** — purposeful, reduced-motion-aware animations
- **React Router v7** — client-side routing with code splitting
- **Lucide React** — consistent icon set

## Getting Started

```bash
npm install
npm run dev
```

## Build for Production

```bash
npm run build
npm run preview
```

## Lint

```bash
npm run lint
```

## Project Structure

```
src/
├── components/
│   ├── common/       # AnimateIn, StaggerList, SocialLinks
│   ├── layout/       # Layout, Footer
│   ├── navigation/   # Navbar
│   └── ui/           # Badge, Button, Card, Container, Heading, Section
├── constants/        # Site config, section IDs, animation config
├── data/             # projects.ts, skills.ts, experience.ts, navigation.ts
├── hooks/            # useReducedMotion, useActiveSection, useScrolled
├── lib/              # motion.ts (Framer Motion variants)
├── pages/            # Home, ProjectDetails, NotFound
├── routes/           # AppRouter
├── sections/         # Hero, About, Skills, Experience, Projects, Engineering, Contact
├── types/            # TypeScript interfaces
└── utils/            # cn() class name utility
```

## Personalisation Checklist

After cloning, update these files with your real information:

| File | What to update |
|------|---------------|
| `src/constants/index.ts` | Email, GitHub URL, LinkedIn URL, site URL |
| `index.html` | Canonical URL, OG image URL, Twitter handle |
| `public/sitemap.xml` | Replace `aakashverma.dev` with your domain |
| `public/robots.txt` | Replace sitemap URL with your domain |
| `public/resume.pdf` | Add your actual resume PDF |
| `.env` (copy from `.env.example`) | Contact form endpoint if using an external service |

## Deployment

The build output in `dist/` is a static site deployable to:

- **Vercel** — `vercel deploy`
- **Netlify** — drag `dist/` folder or connect repo
- **AWS S3 + CloudFront** — upload `dist/` to S3 bucket with static hosting

For SPAs on these platforms, configure a redirect rule so all routes serve `index.html`.

## License

Personal portfolio — not licensed for redistribution.
