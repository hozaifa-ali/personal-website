# Portfolio Website

A modern, professional portfolio website built with React, TypeScript, Tailwind CSS, and Three.js. Features 3D animations, smooth transitions, and a responsive design.

## Features

- 🎨 Modern UI with 3D effects and animations
- 📱 Fully responsive design
- 🎯 Professional project showcase with carousel
- 💼 About section highlighting Software Engineering background from UET Lahore
- 📧 Contact form
- 🌐 Integration with GitHub repositories
- ✨ Smooth scroll animations using Framer Motion
- 🎭 Glass morphism effects

## Tech Stack

- **React 18** - UI library
- **TypeScript** - Type safety
- **Vite** - Build tool
- **Tailwind CSS** - Styling
- **Three.js / React Three Fiber** - 3D graphics
- **Framer Motion** - Animations
- **Embla Carousel** - Project carousel

## Getting Started

### Prerequisites

- Node.js 18+ and npm/yarn/pnpm

### Installation

1. Install dependencies:
```bash
npm install
```

2. Start the development server:
```bash
npm run dev
```

3. Build for production:
```bash
npm run build
```

4. Preview production build:
```bash
npm run preview
```

## Project Structure

```
src/
├── components/     # React components
│   ├── Hero.tsx
│   ├── About.tsx
│   ├── Projects.tsx
│   ├── Contact.tsx
│   ├── Navigation.tsx
│   └── Scene3D.tsx
├── data/          # Data files
│   └── githubData.ts
├── App.tsx        # Main app component
├── main.tsx       # Entry point
└── index.css      # Global styles
```

## Customization

- Update GitHub data in `src/data/githubData.ts`
- Modify colors in `tailwind.config.js`
- Edit personal information in component files

## Environment Variables

Create a `.env.local` file in the root directory (see `.env.example` for template):

```bash
# Optional: GitHub API token for enhanced repo access
VITE_GITHUB_TOKEN=your_github_token_here
```

## Deployment

### Vercel (Recommended)

1. Push your code to GitHub
2. Import your repository at [vercel.com](https://vercel.com)
3. Vercel automatically detects Astro and configures the build settings
4. Deploy with a single click

**Build Command:** `npm run build`  
**Output Directory:** `dist`

### Other Platforms

The project can be deployed to any static hosting platform:
- **Netlify** - Drag and drop `dist` folder or connect GitHub
- **GitHub Pages** - Use GitHub Actions to deploy
- **AWS S3** - Upload `dist` folder to S3 bucket

## Performance

- Optimized bundle size (~50KB gzipped)
- Lazy-loaded components with React
- Static site generation with Astro
- Responsive images and CSS optimization

## License

MIT

