# Personal Website

A modern, minimal personal website showcasing engineering projects and music. Built with Next.js 14+, TypeScript, Tailwind CSS, and Framer Motion.

## 🎯 Overview

This site represents a hybrid personal brand:

- **Engineer / Builder**: Audio plugins, full-stack systems, cloud infrastructure, and data pipelines
- **Artist / Producer**: Electronic music, DJ sets, and creative sound design

The design aesthetic is a retro-futurist control surface—dark, cinematic, with clean grid layouts and intentional animations.

## 🚀 Getting Started

### Prerequisites

- Node.js 18+ (recommended: latest LTS)
- npm or pnpm

### Installation

1. Clone the repository:

```bash
git clone <your-repo-url>
cd personal-website
```

2. Install dependencies:

```bash
npm install
```

3. Run the development server:

```bash
npm run dev
```

4. Open [http://localhost:3000](http://localhost:3000) in your browser.

## 📁 Project Structure

```
/app
  layout.tsx           # Root layout with header and footer
  page.tsx             # Home page
  globals.css          # Global styles with custom theme
  /(site)
    /projects          # Engineering and creative projects
    /music             # Music releases and DJ mixes
    /resume            # Formatted resume with highlights
    /about             # Bio and background
    /labs              # Interactive demos (WebAudio/WebGL)
    /contact           # Contact information

/components
  /layout              # Site header, footer, navigation
  /ui                  # Reusable UI components (Button, Card, Tag)
  /sections            # Home page sections (Hero, Projects, Music)
  /animations          # Framer Motion components (PageTransition, FadeIn)
  /labs                # Labs page components (CanvasShell, ClipperDemo)
  /music               # Music page components (EmbedPlaceholder)

/data
  projectsData.ts      # Project information and metadata
```

## 🎨 Tech Stack

- **Framework**: Next.js 14+ (App Router)
- **Language**: TypeScript
- **Styling**: Tailwind CSS
- **Animations**: Framer Motion
- **Tooling**: ESLint, Prettier

## 🎛️ Key Features

### Current

- Responsive, mobile-first design
- Dark retro-futurist theme with subtle scanline and noise effects
- Smooth page transitions and scroll-based animations
- Sticky navigation with active state indicators
- Modular, composable component architecture
- Project showcase with category grouping
- Music section with embed placeholders

### Future-Ready

The **Labs** page is structured to easily accommodate:

- WebAudio API integrations
- WebGL real-time visualizations
- Interactive audio demos (e.g., Clipper plugin demo)
- WebAudio node graph experiments

The `CanvasShell` and `ClipperDemoPlaceholder` components provide a foundation for dropping in live demos without restructuring the app.

## 🛠️ Customization

### Theme

Edit the Tailwind config (`tailwind.config.ts`) to adjust colors, fonts, and spacing:

```ts
colors: {
  bg: "#050509",
  surface: "#0d0d14",
  accent: "#4465CB",        // blue
  accentSecondary: "#D15045", // red
  muted: "#6b7280",
}
```

### Content

1. **Projects**: Update `data/projectsData.ts` with your real project information.
2. **Music**: Replace placeholders in `app/(site)/music/page.tsx` with actual releases and embeds.
3. **Contact**: Update social links in `app/(site)/contact/page.tsx` and `components/layout/SiteFooter.tsx`.
4. **Resume**: Add your resume PDF and link it from the About and Contact pages (search for `// TODO: Add link to actual PDF resume`).

## 📜 Scripts

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm start` - Start production server
- `npm run lint` - Run ESLint

## 📝 TODO Comments

The codebase includes clear `// TODO:` comments indicating where to plug in:

- Real project data
- Music embed iframes (Spotify, SoundCloud)
- Contact information (email, social links)
- Resume PDF download
- WebAudio/WebGL demo implementations in Labs

Use global search for `TODO:` to find all placeholders.

## 🎵 Labs: Interactive Demos

The Labs section is designed to showcase interactive audio and visual experiments. The infrastructure is ready:

- `CanvasShell`: A styled container for `<canvas>` or interactive elements
- `ClipperDemoPlaceholder`: A structured placeholder demonstrating how to integrate a WebAudio + WebGL demo

To add a live demo:

1. Create your WebAudio/WebGL logic in a new component
2. Replace or extend `ClipperDemoPlaceholder`
3. The shell handles layout, styling, and responsive behavior

## 🚢 Deployment

This is a static Next.js site and can be deployed to:

- **Vercel** (recommended): `vercel deploy`
- **Netlify**: Connect your repo and deploy
- **GitHub Pages**: Export as static site with `next export`

## 📄 License

This project is open source and available under the MIT License.

---

**Built with precision. Crafted with intention.**

Building tools for sound and systems.

