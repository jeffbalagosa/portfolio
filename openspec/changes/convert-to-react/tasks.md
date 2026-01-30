# Convert to React - Implementation Tasks

This implementation follows Test-Driven Development (TDD): write failing tests first, then implement code to make them pass.

## 1. Testing Infrastructure

- [ ] 1.1 Install Vitest and React Testing Library (`vitest`, `@testing-library/react`, `@testing-library/jest-dom`, `jsdom`)
- [ ] 1.2 Create `vitest.config.ts` with React and jsdom configuration
- [ ] 1.3 Create `src/test/setup.ts` for testing library setup
- [ ] 1.4 Add `"test": "vitest"` and `"test:run": "vitest run"` scripts to `package.json`
- [ ] 1.5 Verify test runner works with a sample test

## 2. Project Infrastructure

- [ ] 2.1 Create component directory structure (`components/layout`, `components/sections`, `components/ui`, `hooks`, `data`, `styles`, `test`)
- [ ] 2.2 Copy `resources/styles.css` to `src/styles/globals.css` and import in `main.tsx`
- [ ] 2.3 Copy `resources/normalize.css` to `src/styles/normalize.css` and import in `main.tsx`
- [ ] 2.4 Move static assets from `resources/img/` to `public/img/` for Vite compatibility

## 3. Data Layer

- [ ] 3.1 Create `src/data/taglines.ts` with quotes array from `main-script.js`
- [ ] 3.2 Create `src/data/projects.ts` with project information extracted from HTML

## 4. Hooks (TDD)

### 4.1 useTaglineRotator

- [ ] 4.1.1 Write test: hook returns a tagline string from the taglines array
- [ ] 4.1.2 Write test: `randomize()` changes the current tagline
- [ ] 4.1.3 Write test: tagline auto-rotates after 5 seconds (use fake timers)
- [ ] 4.1.4 Write test: interval is cleared on unmount
- [ ] 4.1.5 Implement `src/hooks/useTaglineRotator.ts` to pass all tests

### 4.2 useScrollAnimation

- [ ] 4.2.1 Write test: hook returns a ref object
- [ ] 4.2.2 Write test: element starts with `hidden` class
- [ ] 4.2.3 Write test: element gets `show` class when intersecting (mock IntersectionObserver)
- [ ] 4.2.4 Write test: element loses `show` class when not intersecting
- [ ] 4.2.5 Write test: stagger delay is applied when index is provided
- [ ] 4.2.6 Implement `src/hooks/useScrollAnimation.ts` to pass all tests

## 5. UI Components (TDD)

### 5.1 ProjectCard

- [ ] 5.1.1 Write test: renders project title
- [ ] 5.1.2 Write test: renders project image with correct src and alt
- [ ] 5.1.3 Write test: renders project description
- [ ] 5.1.4 Write test: renders GitHub repo button with correct href
- [ ] 5.1.5 Write test: renders Live Site button when `liveUrl` is provided
- [ ] 5.1.6 Write test: does not render Live Site button when `liveUrl` is undefined
- [ ] 5.1.7 Write test: external links have `target="_blank"` and `rel="noopener noreferrer"`
- [ ] 5.1.8 Implement `src/components/ui/ProjectCard.tsx` to pass all tests

## 6. Layout Components (TDD)

### 6.1 Navigation

- [ ] 6.1.1 Write test: renders logo image
- [ ] 6.1.2 Write test: renders all navigation links (Home, Projects, Resume, About Me, Contact, Blog)
- [ ] 6.1.3 Write test: internal links have correct href anchors
- [ ] 6.1.4 Write test: external links (Resume, Blog) open in new tab
- [ ] 6.1.5 Implement `src/components/layout/Navigation.tsx` to pass all tests

### 6.2 Header

- [ ] 6.2.1 Write test: renders name "Jeff Balagosa"
- [ ] 6.2.2 Write test: renders a tagline
- [ ] 6.2.3 Write test: clicking header changes the tagline
- [ ] 6.2.4 Write test: name has `pulseText` class for animation
- [ ] 6.2.5 Implement `src/components/layout/Header.tsx` to pass all tests

## 7. Section Components (TDD)

### 7.1 Portfolio

- [ ] 7.1.1 Write test: renders section heading "Projects"
- [ ] 7.1.2 Write test: renders correct number of ProjectCard components
- [ ] 7.1.3 Write test: passes project data to each card
- [ ] 7.1.4 Implement `src/components/sections/Portfolio.tsx` to pass all tests

### 7.2 AboutMe

- [ ] 7.2.1 Write test: renders section heading "About Me"
- [ ] 7.2.2 Write test: renders profile images
- [ ] 7.2.3 Write test: renders bio paragraphs
- [ ] 7.2.4 Implement `src/components/sections/AboutMe.tsx` to pass all tests

### 7.3 Contact

- [ ] 7.3.1 Write test: renders section heading "Contact"
- [ ] 7.3.2 Write test: renders phone number link with `tel:` href
- [ ] 7.3.3 Write test: renders email link with `mailto:` href
- [ ] 7.3.4 Implement `src/components/sections/Contact.tsx` to pass all tests

## 8. App Integration (TDD)

- [ ] 8.1 Write test: App renders Navigation component
- [ ] 8.2 Write test: App renders Header component
- [ ] 8.3 Write test: App renders Portfolio section
- [ ] 8.4 Write test: App renders AboutMe section
- [ ] 8.5 Write test: App renders Contact section
- [ ] 8.6 Write test: App has correct wrapper class (`bg-overlay`)
- [ ] 8.7 Update `src/App.tsx` to pass all tests
- [ ] 8.8 Update `src/App.css` for any app-level styles needed

## 9. Animations Integration

- [ ] 9.1 Apply `useScrollAnimation` hook to ProjectCard components with stagger
- [ ] 9.2 Apply `useScrollAnimation` hook to AboutMe section
- [ ] 9.3 Apply `useScrollAnimation` hook to Contact section
- [ ] 9.4 Apply `useScrollAnimation` hook to profile images
- [ ] 9.5 Verify all animations match original behavior (manual testing)

## 10. Final Validation

- [ ] 10.1 Run full test suite (`npm run test:run`) - all tests pass
- [ ] 10.2 Test in development mode (`npm run dev`)
- [ ] 10.3 Build and test production bundle (`npm run build && npm run preview`)
- [ ] 10.4 Verify all links work (external, internal, buttons)
- [ ] 10.5 Verify responsive behavior at different viewport sizes
- [ ] 10.6 Archive or remove legacy files (`main-script.js`, old `index.html` body content)

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
