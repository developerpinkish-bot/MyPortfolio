# CV Template Application

A professional, modern CV (resume) template application built with React and Material Design principles.

## Features

- ✨ Google Material Design styling
- 🌓 Dark/Light mode with system preference detection
- 📱 Responsive design for all devices
- 🖨️ Print-optimized layout
- ⚡ Fast performance with Vite
- 🎨 Beautiful animations and transitions

## Tech Stack

- **Frontend**: React 18, TypeScript, Tailwind CSS
- **Backend**: Express.js, Node.js
- **Build Tools**: Vite, ESBuild
- **UI Components**: Shadcn/ui, Radix UI
- **Icons**: Lucide React

## Quick Start

### Development

1. Install dependencies:
```bash
npm install
```

2. Start development server:
```bash
npm run dev
```

3. Open [http://localhost:5000](http://localhost:5000)

### Production Build

```bash
npm run build
npm start
```

## Project Structure

```
├── client/                 # Frontend React application
│   ├── src/
│   │   ├── components/     # React components
│   │   ├── pages/          # Page components
│   │   ├── lib/            # Utilities and configurations
│   │   └── hooks/          # Custom React hooks
│   └── index.html
├── server/                 # Backend Express server
│   ├── index.ts           # Main server file
│   ├── routes.ts          # API routes
│   └── storage.ts         # Data storage interface
├── shared/                # Shared types and schemas
└── dist/                  # Production build output
```

## Environment Variables

- `NODE_ENV`: Environment mode (development/production)
- `PORT`: Server port (default: 5000)
- `DATABASE_URL`: PostgreSQL connection string (optional)

## Deployment

### Vercel

1. Connect your GitHub repository to Vercel
2. Set build command: `npm run build`
3. Set output directory: `dist/public`
4. Deploy

### Netlify

1. Connect your GitHub repository
2. Set build command: `npm run build`
3. Set publish directory: `dist/public`
4. Deploy

### Traditional Hosting

1. Run `npm run build`
2. Upload `dist/` folder to your server
3. Start with `node dist/index.js`

## Customization

Edit the component files in `client/src/components/` to customize:

- Personal information in `cv-header.tsx`
- Professional summary in `professional-summary.tsx`
- Work experience in `work-experience.tsx`
- Education details in `education.tsx`
- Skills in `technical-skills.tsx`
- Projects in `projects.tsx`
- Certifications in `certifications.tsx`

## License

MIT License - feel free to use this template for your own CV!