# Evil Portfolio Website

A fully responsive, hacker-inspired portfolio website with cyberpunk aesthetics, interactive elements, and smooth animations.

## Features

- Dark cyberpunk-themed design with evil red accents
- Interactive terminal-like messages and effects
- Particle background animation
- Responsive layout for all device sizes
- Animated evil accent elements throughout the interface
- Contact form with SendGrid integration (optional)
- Sections for showcasing projects, skills, and information

## Tech Stack

- **Frontend**: React, TailwindCSS, GSAP, particles.js
- **Backend**: Node.js, Express
- **Styling**: Custom CSS animations, Tailwind utilities
- **Build Tools**: Vite, esbuild

## Development

1. Install dependencies:
   ```
   npm install
   ```

2. Start development server:
   ```
   npm run dev
   ```

3. The application will be available at `http://localhost:5000`

## Build for Production

1. Create production build:
   ```
   npm run build
   ```

2. This will generate optimized files in the `/dist` directory.

3. For deployment instructions, see `DEPLOYMENT.md`

## Customization

- Edit the content in the component files to personalize the portfolio
- Modify theme colors in the `theme.json` file
- Adjust the evil accent elements in `EvilAccent.tsx`

## Credits

- Fonts: Google Fonts (including VT323 for terminal effects)
- Icons: Lucide React, React Icons
- Animation libraries: GSAP, particles.js