# Project Context

## Purpose

This is a personal developer portfolio website showcasing Jeff Balagosa's projects, skills, and professional background. The site serves as:

- A portfolio of completed projects with live demos and GitHub repositories
- A professional landing page for potential employers and collaborators
- A blog platform for sharing technical content and insights
- A demonstration of front-end development skills

## Tech Stack

- **React 19** - Modern component-based UI library
- **TypeScript** - Type-safe development
- **Vite** - Fast build tool and dev server
- **CSS3** - Custom styling with animations and responsive design
- **Node.js/npm** - Package management
- **Vitest** - Unit and component testing framework
- **Playwright** - End-to-end testing
- **React Testing Library** - Component testing utilities
- **Google Fonts** - Typography (Press Start 2P, Rubik)
- **normalize.css** - CSS reset for cross-browser consistency

## Project Conventions

### Code Style

- **TypeScript/React**: PascalCase for components (e.g., `Navigation`, `ProjectCard`), camelCase for functions and variables
- **CSS**: kebab-case for class names (e.g., `flex-container`, `main-nav`, `header-container`)
- **HTML/JSX**: Semantic HTML5 elements with descriptive class/id names
- **Indentation**: 2 spaces
- **Quotes**: Double quotes for JSX attributes, single quotes for TypeScript strings
- **File Organization**: Component-based structure in `/src/components/`, organized by feature

### Architecture Patterns

- **Component-Based Architecture**: React components organized by layout, sections, and UI elements
- **Separation of Concerns**: Components, styles, hooks, types, and data separated into distinct directories
- **Custom Hooks**: Reusable logic extracted into hooks (e.g., `useScrollAnimation`, `useTaglineRotator`)
- **Type Safety**: TypeScript interfaces and types for data structures and props
- **Progressive Enhancement**: Core content accessible without JavaScript, enhanced with animations when available
- **Intersection Observer API**: Used for scroll-based animations instead of scroll event listeners (better performance)

### Testing Strategy

- **Unit Testing**: Vitest for testing individual functions and hooks
- **Component Testing**: React Testing Library for component behavior and rendering
- **E2E Testing**: Playwright for end-to-end user flows and integration testing
- **Test Organization**: Tests co-located with source files (`.test.tsx`, `.test.ts` extensions)
- **Accessibility Testing**: Semantic HTML and keyboard navigation validation
- **CI/CD Ready**: Test scripts configured in package.json for automated testing

### Git Workflow

- Direct commits to main branch for this personal project
- `.gitignore` excludes video files (_.mov, _.mp4) to keep repository size manageable
- GitHub repository used for version control and collaboration
- OpenSpec workflow for structured change proposals (see `/openspec/AGENTS.md`)

## Domain Context

- **Portfolio Presentation**: Each project card includes description, technologies used, live demo links, and GitHub repository links
- **Interactive Elements**:
  - Random inspirational taglines on header that rotate automatically or on click
  - Scroll-based animations reveal content as user navigates
  - Staggered card animations for visual polish
- **Visual Theme**: Dark theme with green terminal-style text (#6f6), retro gaming aesthetic with "Press Start 2P" font
- **Navigation**: Fixed top navigation with smooth scrolling to sections, external blog link to Substack
- **Component Structure**:
  - Layout: Navigation, Header
  - Sections: Portfolio, AboutMe, Contact
  - UI: ProjectCard for reusable project display

## Important Constraints

- **Static Hosting**: Designed for static hosting (no backend server required)
- **Browser Compatibility**: Must support modern browsers with ES6+ and React 19 features
- **Performance**: Optimized Vite build, code splitting, fast loading times
- **Accessibility**: Maintain semantic HTML structure for screen readers
- **Mobile-First**: Responsive design that works across device sizes
- **Type Safety**: Strict TypeScript configuration for catching errors at compile time

## External Dependencies

- **Google Fonts API**: Used for custom typography
- **React & React DOM** (v19.2.0): Core UI library
- **Vite** (v7.2.4): Build tool and development server
- **TypeScript** (v5.9.3): Type system
- **Vitest** (v4.0.18): Testing framework
- **Playwright** (v1.53.0): E2E testing
- **React Testing Library** (v16.3.2): Component testing utilities
- **ESLint**: Code linting and quality
- **normalize.css**: Third-party CSS reset
- **External Blog**: Links to Substack blog instead of local blog pages
- **External Resume Link**: Resume hosted on rxresu.me (https://rxresu.me/jeff.balagosa/devresume)
- **Project Assets**: Background image (`vscode_blurred.png`), project screenshots, logo images stored in `/public/img/`
