# CV Template Application

## Overview

This is a modern, professional CV (resume) template application built as a full-stack web application. The application displays a Google Material Design-inspired CV for Humna Imran, showcasing expertise in Artificial Intelligence and Cybersecurity. The project is structured as a monorepo with a React frontend and Express.js backend, utilizing modern web development practices and tools.

## User Preferences

Preferred communication style: Simple, everyday language.

## System Architecture

### Frontend Architecture
- **Framework**: React 18 with TypeScript
- **Styling**: Tailwind CSS with custom Google Material Design color palette
- **UI Components**: Shadcn/ui component library with Radix UI primitives
- **Routing**: Wouter for client-side routing
- **State Management**: TanStack Query for server state management
- **Build Tool**: Vite for development and build processes

### Backend Architecture
- **Runtime**: Node.js with Express.js framework
- **Language**: TypeScript with ES modules
- **API Structure**: RESTful API with `/api` prefix for all routes
- **Database ORM**: Drizzle ORM with PostgreSQL dialect
- **Session Storage**: In-memory storage with interface for future database integration

### Database Design
- **Database**: PostgreSQL (configured via Drizzle)
- **ORM**: Drizzle ORM with type-safe schema definitions
- **Migrations**: Managed through drizzle-kit
- **Schema**: Currently includes user authentication tables with extensible design

## Key Components

### Frontend Components
1. **CV Header**: Hero section with contact information and social links
2. **Professional Summary**: Brief overview of qualifications and experience
3. **Work Experience**: Detailed employment history with achievements
4. **Education**: Academic background and relevant coursework
5. **Technical Skills**: Programming languages, tools, and technologies
6. **Projects**: Portfolio of completed projects with descriptions
7. **Certifications**: Professional certifications and credentials
8. **CV Footer**: Additional contact information and inspirational quote

### Backend Components
1. **Route Registration**: Centralized API route management
2. **Storage Interface**: Abstracted storage layer supporting multiple implementations
3. **Memory Storage**: In-memory data storage for development
4. **Vite Integration**: Development server with HMR support

### Shared Components
1. **Database Schema**: Type-safe database models using Drizzle
2. **Validation**: Zod schemas for data validation

## Data Flow

1. **Static Content**: CV data is hardcoded in React components for this template version
2. **API Ready**: Backend infrastructure prepared for dynamic content management
3. **Type Safety**: Shared TypeScript types ensure consistency between frontend and backend
4. **Build Process**: Vite builds frontend assets, esbuild bundles backend for production

## External Dependencies

### Frontend Dependencies
- **UI Framework**: React with TypeScript support
- **Styling**: Tailwind CSS with PostCSS processing
- **Icons**: Lucide React for consistent iconography
- **Fonts**: Google Fonts (Google Sans, Roboto) loaded via CDN
- **Components**: Extensive Radix UI component collection via Shadcn/ui

### Backend Dependencies
- **Database**: Neon Database serverless PostgreSQL
- **ORM**: Drizzle ORM with PostgreSQL adapter
- **Session Management**: Connect-pg-simple for PostgreSQL session storage
- **Development**: TSX for TypeScript execution, ESBuild for production builds

### Development Tools
- **Build**: Vite with React plugin and TypeScript support
- **Database**: Drizzle Kit for schema management and migrations
- **Type Checking**: TypeScript compiler with strict mode enabled
- **Linting**: Path aliases configured for clean imports

## Deployment Strategy

### Development Environment
- **Dev Server**: Vite development server with HMR
- **Backend**: TSX for running TypeScript directly
- **Database**: Environment variable configuration for database URL
- **Hot Reload**: Vite middleware integrated with Express for seamless development

### Production Build
- **Frontend**: Vite builds optimized React application to `dist/public`
- **Backend**: ESBuild bundles server code to `dist/index.js`
- **Static Assets**: Frontend assets served by Express in production
- **Database**: Production PostgreSQL database via environment configuration

### Environment Configuration
- **Database URL**: Required environment variable for PostgreSQL connection
- **Node Environment**: Development/production mode switching
- **Replit Integration**: Special handling for Replit development environment

The application follows a clean separation of concerns with the frontend focused on presentation and user experience, while the backend provides a scalable API foundation. The use of TypeScript throughout ensures type safety and better developer experience, while the component-based architecture allows for easy maintenance and extension.