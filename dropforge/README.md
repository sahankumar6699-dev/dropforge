# DropForge

DropForge is a production-ready Next.js frontend for a cyberpunk creator utility suite.

**Tagline:** Drop. Convert. Create.

## Stack

- Next.js App Router
- TypeScript
- Tailwind CSS v4
- shadcn/ui-style components
- Framer Motion
- Lucide icons

## Pages

- `/` landing page
- `/video` video tools
- `/pdf` PDF tools
- `/image` image tools
- `/converter` converter tools

## Featured Tools

- YouTube Downloader
- Instagram Downloader
- MP4 to MP3
- Compress Image
- PDF Merge
- PDF to Word
- OCR Scanner
- Image to PDF

## Project Structure

```txt
app/                  App Router pages, metadata, sitemap, robots
components/           Reusable sections, layout, cards, and UI primitives
components/ui/        shadcn/ui-style Button, Card, Accordion
lib/                  Shared utilities and tool/category data
tailwind.config.ts    Tailwind animation/content configuration
app/globals.css       Dark theme tokens, Tailwind v4 setup, neon/glass styles
vercel.json           Vercel deployment defaults
```

## Getting Started

Install Node.js 20.9 or newer, then run:

```bash
npm install
npm run dev
```

Open `http://localhost:3000`.

## Production Build

```bash
npm run typecheck
npm run lint
npm run build
npm run start
```

## Deploy to Vercel

1. Push this repository to GitHub, GitLab, or Bitbucket.
2. Import the repository in Vercel.
3. Keep the detected framework as Next.js.
4. Use the default commands:
   - Install: `npm install`
   - Build: `npm run build`
   - Output: `.next`
5. Deploy.

No backend or environment variables are required for the current frontend.
