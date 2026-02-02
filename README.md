# Dror Ben-Eliyahu - Professional CV

A modern, responsive CV website built with React, TypeScript, and Tailwind CSS. Features two distinct versions: a classic multi-section layout and an AI-optimized single-page version with structured data for automated parsing.

## 🚀 Features

- **Dual Versions**: Switch between Classic and AI-Ready versions
- **Responsive Design**: Optimized for all devices
- **Dark/Light Theme**: Automatic theme switching
- **AI-Optimized**: Structured data and keywords for AI recruitment tools
- **Modern UI**: Built with shadcn/ui components and Framer Motion animations
- **TypeScript**: Full type safety
- **Fast**: Built with Vite for optimal performance

## 🛠️ Tech Stack

- **Frontend**: React 18, TypeScript
- **Build Tool**: Vite
- **Styling**: Tailwind CSS, shadcn/ui
- **Animations**: Framer Motion
- **Icons**: Lucide React
- **State Management**: React Query
- **Routing**: React Router

## 📋 Versions

### Classic Version
Traditional CV layout with separate sections:
- Hero with profile photo
- About section
- Core strengths
- Professional experience
- Education
- Military service
- Skills
- Contact footer

### AI-Ready Version
Single-page layout optimized for AI parsing:
- Structured JSON-LD schema
- Keyword optimization
- Machine-readable experience data
- Skill proficiency levels
- Downloadable CV link

## 🏃‍♂️ Running Locally

### Prerequisites
- Node.js (v16 or higher)
- npm or yarn

### Installation

1. Clone the repository:
```bash
git clone <YOUR_GIT_URL>
cd <YOUR_PROJECT_NAME>
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
│   ├── ui/           # shadcn/ui components
│   ├── versions/     # CV version components
│   ├── Header.tsx
│   ├── VersionSwitcher.tsx
│   └── ...           # Individual section components
├── pages/
│   ├── Index.tsx
│   └── NotFound.tsx
├── hooks/
├── lib/
└── assets/
```

## 🎨 Customization

### Adding New Sections
1. Create a new component in `src/components/`
2. Add it to both `ClassicVersion.tsx` and `AIOptimizedVersion.tsx`
3. Update the data structure in `AIOptimizedVersion.tsx` if needed

### Modifying Content
- Update personal information in component files
- Modify `candidateData` object in `AIOptimizedVersion.tsx`
- Update individual components for the Classic version

### Styling
- Global styles in `src/index.css`
- Component-specific styles using Tailwind classes
- Theme configuration in `tailwind.config.ts`

## 🚀 Deployment

### GitHub Pages
1. Build the project: `npm run build`
2. Deploy to GitHub Pages using GitHub Actions or manually

### Other Platforms
The built files in `dist/` can be deployed to:
- Vercel
- Netlify
- AWS S3 + CloudFront
- Any static hosting service

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch
3. Make your changes
4. Test locally
5. Submit a pull request

## 📄 License

This project is private and proprietary.

## 📞 Contact

Dror Ben-Eliyahu
- Email: Droreli@gmail.com
- Phone: +972-54-5441014
- Location: Israel & EU (Work authorized)
- Edit files directly within the Codespace and commit and push your changes once you're done.

## What technologies are used for this project?

This project is built with:

- Vite
- TypeScript
- React
- shadcn-ui
- Tailwind CSS

## How can I deploy this project?

Simply open [Lovable](https://lovable.dev/projects/REPLACE_WITH_PROJECT_ID) and click on Share -> Publish.

## Can I connect a custom domain to my Lovable project?

Yes, you can!

To connect a domain, navigate to Project > Settings > Domains and click Connect Domain.

Read more here: [Setting up a custom domain](https://docs.lovable.dev/features/custom-domain#custom-domain)
