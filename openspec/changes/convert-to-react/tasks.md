# Convert to React - Implementation Tasks

This implementation follows Test-Driven Development (TDD): write failing tests first, then implement code to make them pass.

## 1. Testing Infrastructure

- [x] 1.1 Install Vitest and React Testing Library (`vitest`, `@testing-library/react`, `@testing-library/jest-dom`, `jsdom`)
- [x] 1.2 Create `vitest.config.ts` with React and jsdom configuration
- [x] 1.3 Create `src/test/setup.ts` for testing library setup
- [x] 1.4 Add `"test": "vitest"` and `"test:run": "vitest run"` scripts to `package.json`
- [x] 1.5 Verify test runner works with a sample test

## 2. Project Infrastructure

- [x] 2.1 Create directory structure: `src/components/layout`, `src/components/sections`, `src/components/ui`, `src/hooks`, `src/data`, `src/styles`, `src/types`
- [x] 2.2 Copy `resources/styles.css` to `src/styles/globals.css`
- [x] 2.3 Copy `resources/normalize.css` to `src/styles/normalize.css`
- [x] 2.4 Move static assets from `resources/img/` to `public/img/`
- [x] 2.5 Update `src/main.tsx` to import `normalize.css` and `globals.css` (in order)
- [x] 2.6 Update `index.html`: ensure `<div id="root"></div>` exists, remove legacy script tags

## 3. Data and Types Layer

- [x] 3.1 Create `src/types/project.ts` with `Project` interface
- [x] 3.2 Create `src/data/taglines.ts` with quotes array extracted from `main-script.js`
- [x] 3.3 Create `src/data/projects.ts` with project data extracted from `index.html`

## 4. Hooks (TDD)

### 4.1 useTaglineRotator

- [x] 4.1.1 Write test: hook returns a tagline string from the taglines array
- [x] 4.1.2 Write test: `randomize()` changes the current tagline
- [x] 4.1.3 Write test: tagline auto-rotates after 5 seconds (use fake timers)
- [x] 4.1.4 Write test: interval is cleared on unmount
- [x] 4.1.5 Implement `src/hooks/useTaglineRotator.ts` to pass all tests

### 4.2 useScrollAnimation

- [x] 4.2.1 Write test: hook returns a ref object
- [x] 4.2.2 Write test: element gets `show` class when intersecting (mock IntersectionObserver)
- [x] 4.2.3 Write test: element loses `show` class when not intersecting
- [x] 4.2.4 Write test: stagger delay is applied via `transitionDelay` style when index is provided
- [x] 4.2.5 Write test: observer is disconnected on unmount
- [x] 4.2.6 Implement `src/hooks/useScrollAnimation.ts` to pass all tests

## 5. UI Components (TDD)

### 5.1 ProjectCard

- [x] 5.1.1 Write test: renders project title as heading
- [x] 5.1.2 Write test: renders project image with correct src and alt
- [x] 5.1.3 Write test: renders project description paragraphs
- [x] 5.1.4 Write test: renders GitHub repo button with correct href
- [x] 5.1.5 Write test: renders Live Site button only when `liveUrl` is provided
- [x] 5.1.6 Write test: external links have `target="_blank"` and `rel="noopener noreferrer"`
- [x] 5.1.7 Write test: applies `hidden` class and accepts `style` prop for animation
- [x] 5.1.8 Implement `src/components/ui/ProjectCard.tsx` to pass all tests

## 6. Layout Components (TDD)

### 6.1 Navigation

- [x] 6.1.1 Write test: renders logo image with correct src
- [x] 6.1.2 Write test: renders all navigation links (Home, Projects, Resume, About Me, Contact, Blog)
- [x] 6.1.3 Write test: internal links have correct href anchors (#, #portfolio, #about-me, #contact)
- [x] 6.1.4 Write test: Resume link opens in new tab with correct external URL
- [x] 6.1.5 Write test: Blog link opens in new tab with correct path
- [x] 6.1.6 Implement `src/components/layout/Navigation.tsx` to pass all tests

### 6.2 Header

- [x] 6.2.1 Write test: renders name "Jeff Balagosa" with `pulseText` class
- [x] 6.2.2 Write test: renders a tagline from the taglines array
- [x] 6.2.3 Write test: clicking header container triggers tagline change
- [x] 6.2.4 Implement `src/components/layout/Header.tsx` to pass all tests

## 7. Section Components (TDD)

### 7.1 Portfolio

- [x] 7.1.1 Write test: renders section with id="portfolio"
- [x] 7.1.2 Write test: renders heading "Projects"
- [x] 7.1.3 Write test: renders one ProjectCard per project in data
- [x] 7.1.4 Implement `src/components/sections/Portfolio.tsx` to pass all tests

### 7.2 AboutMe

- [x] 7.2.1 Write test: renders section with id="about-me"
- [x] 7.2.2 Write test: renders heading "About Me"
- [x] 7.2.3 Write test: renders two profile images with correct src
- [x] 7.2.4 Write test: renders all bio paragraphs
- [x] 7.2.5 Implement `src/components/sections/AboutMe.tsx` to pass all tests

### 7.3 Contact

- [x] 7.3.1 Write test: renders section with id="contact"
- [x] 7.3.2 Write test: renders heading "Contact"
- [x] 7.3.3 Write test: renders phone link with `href="tel:1-702-686-6452"`
- [x] 7.3.4 Write test: renders email link with `href="mailto:jeff.balagosa@gmail.com"`
- [x] 7.3.5 Implement `src/components/sections/Contact.tsx` to pass all tests

## 8. App Integration (TDD)

- [x] 8.1 Write test: App renders Navigation component
- [x] 8.2 Write test: App renders Header component inside `<header>` element
- [x] 8.3 Write test: App renders Portfolio section
- [x] 8.4 Write test: App renders AboutMe section
- [x] 8.5 Write test: App renders Contact section
- [x] 8.6 Write test: App root has `bg-overlay` class
- [x] 8.7 Implement `src/App.tsx` to pass all tests
- [x] 8.8 Clear `src/App.css` of Vite boilerplate (keep empty or add app-specific styles only)

## 9. Scroll Animations

- [x] 9.1 Integrate `useScrollAnimation` into ProjectCard with stagger index prop
- [x] 9.2 Integrate `useScrollAnimation` into AboutMe section container
- [x] 9.3 Integrate `useScrollAnimation` into AboutMe profile images
- [x] 9.4 Integrate `useScrollAnimation` into Contact section container
- [ ] 9.5 Manual test: verify animations trigger on scroll and match original timing

## 10. Cleanup and Validation

- [x] 10.1 Run full test suite (`npm run test:run`) - all tests pass
- [x] 10.2 Run linter (`npm run lint`) - no errors
- [ ] 10.3 Test in development mode (`npm run dev`) - verify visual parity
- [x] 10.4 Build production bundle (`npm run build`) - no errors
- [ ] 10.5 Test production preview (`npm run preview`) - all functionality works
- [ ] 10.6 Verify all links work (internal anchors, external tabs, buttons)
- [ ] 10.7 Verify responsive layout at mobile, tablet, and desktop widths
- [ ] 10.8 Remove legacy files: delete `main-script.js`, `chance.js` (if unused)
- [ ] 10.8 Remove legacy files: delete `main-script.js`, `chance.js` (if unused)
- [x] 10.1 Run full test suite (`npm run test:run`) - all tests pass
- [x] 10.2 Run linter (`npm run lint`) - no errors
- [ ] 10.3 Test in development mode (`npm run dev`) - verify visual parity
- [x] 10.4 Build production bundle (`npm run build`) - no errors
- [ ] 10.5 Test production preview (`npm run preview`) - all functionality works
- [ ] 10.6 Verify all links work (internal anchors, external tabs, buttons)
- [ ] 10.7 Verify responsive layout at mobile, tablet, and desktop widths
- [ ] 10.8 Remove legacy files: delete `main-script.js`, `chance.js` (if unused)

## Validation Criteria

- All unit tests pass
- All existing content is present and correctly displayed
- Tagline rotates every 5 seconds and on header click
- Scroll animations trigger on viewport entry
- Project cards animate with stagger effect
- All external links open in new tabs
- Visual appearance matches original site
- No console errors or warnings
- Build completes without errors
