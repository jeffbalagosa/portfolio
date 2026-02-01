# Jeff Balagosa Portfolio

A personal portfolio website built with React, TypeScript, and Vite featuring scroll-reveal animations and a rotating tagline system.

## Tech Stack

- **React 19** with TypeScript
- **Vite** for build tooling and development server
- **Vitest** for unit testing
- **Playwright** for E2E testing
- **ESLint** for code quality

## Features

- Responsive single-page design
- Scroll-reveal animations with staggered delays
- Interactive rotating tagline header
- Project showcase with live demo and GitHub links
- Mobile-optimized layout

## Project Structure

```
src/
├── components/
│   ├── layout/          # Navigation, Header
│   ├── sections/        # Portfolio, AboutMe, Contact
│   └── ui/              # ProjectCard
├── hooks/               # useScrollAnimation, useTaglineRotator
├── data/                # projects, taglines
├── types/               # TypeScript interfaces
└── styles/              # CSS files
```

## Getting Started

```bash
# Install dependencies
npm install

# Start development server
npm run dev

# Build for production
npm run build

# Preview production build
npm run preview
```

## Testing

```bash
# Unit tests (watch mode)
npm run test

# Unit tests (single run)
npm run test:run

# E2E tests (requires Playwright browsers)
npx playwright install    # First time only
npm run e2e

# E2E tests with UI
npm run e2e:ui
```

To use a custom base URL for E2E tests, set `PLAYWRIGHT_BASE_URL`.

## Linting

```bash
npm run lint
```
