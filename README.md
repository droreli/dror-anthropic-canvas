# Dror Ben-Eliyahu - Professional CV

A modern, responsive CV website built with React, TypeScript, and Tailwind CSS. Features a single AI-optimized layout with structured data for automated parsing.

🌐 **Live Site**: [https://droreli.github.io/dror-anthropic-canvas/](https://droreli.github.io/dror-anthropic-canvas/)

## 🚀 Features

- **AI-Optimized Layout**: Single-page design with structured data for AI recruitment tools
- **Responsive Design**: Optimized for all devices
- **Dark/Light Theme**: Automatic theme switching
- **Modern UI**: Built with shadcn/ui components and Framer Motion animations
- **TypeScript**: Full type safety
- **Fast**: Built with Vite for optimal performance
- **PDF Generation**: Dynamic CV export (currently in development)

## 🛠️ Tech Stack

- **Frontend**: React 18, TypeScript
- **Build Tool**: Vite
- **Styling**: Tailwind CSS, shadcn/ui
- **Animations**: Framer Motion
- **Icons**: Lucide React
- **PDF**: @react-pdf/renderer
- **Routing**: React Router
- **Deployment**: GitHub Pages


## 📋 CV Structure

The CV features a single-page AI-optimized layout with:
- **Header**: Name, title, contact information
- **Impact Highlights**: Quantified achievements across career
- **Summary**: Professional overview and expertise areas
- **Core Strengths**: Technical and leadership capabilities
- **Experience**: Detailed role descriptions with achievements
  - Current: Nuvei (Director, Solutions & Implementation)
  - Recent: Simplex, Vayomar, MotorK
  - Earlier Career: Startups and product design roles
- **Education**: MBA from INSEAD, Bachelor's in Industrial Design
- **Languages**: Hebrew, English, Italian
- **Military Service**: Israeli Air Force

## 🏃‍♂️ Running Locally

### Prerequisites
- Node.js (v16 or higher)
- npm or yarn

### Installation

1. Clone the repository:
```bash
git clone https://github.com/droreli/dror-anthropic-canvas.git
cd dror-anthropic-canvas
```

2. Install dependencies:
```bash
npm install
```

3. Start the development server:
```bash
npm run dev
```

4. Open [http://localhost:8080](http://localhost:8080) in your browser

### Build for Production

```bash
npm run build
npm run preview
```

## 📁 Project Structure

```
src/
├── components/
│   ├── ui/                  # shadcn/ui components
│   ├── versions/
│   │   └── AIOptimizedVersion.tsx  # Main CV layout
│   ├── CVPdfDocument.tsx   # PDF generation component
│   ├── Header.tsx          # Site header with theme toggle
│   └── ...                 # Individual section components
├── lib/
│   ├── cvData.ts          # CV data (shared between web & PDF)
│   └── utils.ts
├── pages/
│   ├── Index.tsx
│   └── NotFound.tsx
└── assets/
```

## 🎨 Customization

### Modifying Content
- Update CV data in `src/lib/cvData.ts`:
  - `candidateData`: Used for PDF generation (with placeholders)
  - `websiteData`: Used for website display (with actual metrics)
- Modify layout in `src/components/versions/AIOptimizedVersion.tsx`
- Update PDF styling in `src/components/CVPdfDocument.tsx`

### Styling
- Global styles in `src/index.css`
- Component-specific styles using Tailwind classes
- Theme configuration in `tailwind.config.ts`
- PDF styles in `CVPdfDocument.tsx` StyleSheet

## 🚀 Deployment

### GitHub Pages (Current)
Deployed automatically via `gh-pages` package:
```bash
npm run build
npx gh-pages -d dist -f
```

Live at: [https://droreli.github.io/dror-anthropic-canvas/](https://droreli.github.io/dror-anthropic-canvas/)

### Other Platforms
The built files in `dist/` can be deployed to:
- Vercel
- Netlify
- Cloudflare Pages
- AWS S3 + CloudFront
- Any static hosting service

## 📄 License

This project is private and proprietary.

## 📞 Contact

**Dror Ben-Eliyahu**
- Email: Droreli@gmail.com
- Phone: +972-54-5441014
- LinkedIn: [linkedin.com/in/dror-ben-eliyahu](https://linkedin.com/in/dror-ben-eliyahu)
- Location: Ra'anana / Tel Aviv, Israel

Read more here: [Setting up a custom domain](https://docs.lovable.dev/features/custom-domain#custom-domain)
