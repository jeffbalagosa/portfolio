# Project Context

## Purpose

This is a personal developer portfolio website showcasing Jeff Balagosa's projects, skills, and professional background. The site serves as:

- A portfolio of completed projects with live demos and GitHub repositories
- A professional landing page for potential employers and collaborators
- A blog platform for sharing technical content and insights
- A demonstration of front-end development skills

## Tech Stack

- **HTML5** - Semantic markup for structure
- **CSS3** - Custom styling with animations and responsive design
- **Vanilla JavaScript** - Interactive features and DOM manipulation
- **Node.js/npm** - Package management
- **Chance.js** - Random data generation library
- **Google Fonts** - Typography (Press Start 2P, Rubik)
- **normalize.css** - CSS reset for cross-browser consistency

## Project Conventions

### Code Style

- **JavaScript**: camelCase for variables and functions (e.g., `tagLineRandomizer`, `headerContainer`)
- **CSS**: kebab-case for class names (e.g., `flex-container`, `main-nav`, `header-container`)
- **HTML**: Semantic HTML5 elements with descriptive class/id names
- **Indentation**: 2 spaces
- **Quotes**: Double quotes for HTML attributes, single quotes for JavaScript strings
- **File Organization**: Resources grouped in `/resources/` directory (CSS, images)

### Architecture Patterns

- **Single Page Application (SPA)** structure with section-based navigation
- **Separation of Concerns**: HTML structure, CSS presentation, JS behavior separated into distinct files
- **Reusable Functions**: Generic utility functions like `scrollAnimation()` that accept selectors as parameters
- **Progressive Enhancement**: Core content accessible without JavaScript, enhanced with animations when available
- **Intersection Observer API**: Used for scroll-based animations instead of scroll event listeners (better performance)

### Testing Strategy

- Manual testing across browsers (Chrome, Firefox, Safari)
- Visual regression testing for responsive layouts
- Accessibility testing for semantic HTML and keyboard navigation
- No formal unit testing framework currently implemented

### Git Workflow

- Direct commits to main branch for this personal project
- `.gitignore` excludes video files (_.mov, _.mp4) to keep repository size manageable
- GitHub repository used for version control and collaboration
- OpenSpec workflow for structured change proposals (see `/openspec/AGENTS.md`)

## Domain Context

- **Portfolio Presentation**: Each project card includes description, technologies used, live demo links, and GitHub repository links
- **Interactive Elements**:
  - Random inspirational quotes on header that rotate every 5 seconds or on click
  - Scroll-based animations reveal content as user navigates
  - Staggered card animations for visual polish
- **Visual Theme**: Dark theme with green terminal-style text (#6f6), retro gaming aesthetic with "Press Start 2P" font
- **Navigation**: Fixed top navigation with smooth scrolling to sections

## Important Constraints

- **Static Hosting**: Designed for static hosting (no backend server required)
- **Browser Compatibility**: Must support modern browsers with Intersection Observer API
- **Performance**: Minimize dependencies, keep page weight low for fast loading
- **Accessibility**: Maintain semantic HTML structure for screen readers
- **Mobile-First**: Responsive design that works across device sizes

## External Dependencies

- **Google Fonts API**: Used for custom typography
- **Chance.js** (v1.1.8): JavaScript library for random data generation
- **normalize.css**: Third-party CSS reset
- **External Resume Link**: Resume hosted on rxresu.me (https://rxresu.me/jeff.balagosa/devresume)
- **Project Assets**: Background image (`vscode_blurred.png`), project screenshots, logo images stored in `/resources/img/`
