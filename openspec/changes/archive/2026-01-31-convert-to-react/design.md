# Convert to React - Technical Design

## Architecture Overview

The React application will follow a component-based architecture with clear separation of concerns:

```
src/
├── components/
│   ├── layout/
│   │   ├── Navigation.tsx       # Top navigation bar
│   │   └── Header.tsx           # Hero section with tagline
│   ├── sections/
│   │   ├── Portfolio.tsx        # Projects section container
│   │   ├── AboutMe.tsx          # About me section
│   │   └── Contact.tsx          # Contact section
│   └── ui/
│       └── ProjectCard.tsx      # Individual project card
├── hooks/
│   ├── useTaglineRotator.ts     # Tagline rotation logic
│   └── useScrollAnimation.ts    # Intersection Observer hook
├── data/
│   ├── taglines.ts              # Inspirational quotes array
│   └── projects.ts              # Project data array
├── styles/
│   └── globals.css              # Global styles (migrated from resources/)
├── test/
│   └── setup.ts                 # Testing library setup
├── App.tsx                      # Root component
├── App.css                      # App-level styles
└── main.tsx                     # React entry point
```

## Testing Strategy (TDD)

### Test Framework

- **Vitest**: Fast, Vite-native test runner with Jest-compatible API
- **React Testing Library**: Component testing with user-centric queries
- **jsdom**: Browser environment simulation

### Test File Organization

Tests are co-located with source files using `.test.ts(x)` suffix:

```
src/
├── hooks/
│   ├── useTaglineRotator.ts
│   ├── useTaglineRotator.test.ts
│   ├── useScrollAnimation.ts
│   └── useScrollAnimation.test.ts
├── components/
│   ├── ui/
│   │   ├── ProjectCard.tsx
│   │   └── ProjectCard.test.tsx
│   └── ...
```

### Testing Patterns

**Hooks**: Use `@testing-library/react`'s `renderHook` for isolated hook testing

```typescript
import { renderHook, act } from "@testing-library/react";
import { useTaglineRotator } from "./useTaglineRotator";

it("changes tagline on randomize", () => {
  const { result } = renderHook(() => useTaglineRotator());
  const initial = result.current.tagline;
  act(() => result.current.randomize());
  // Assert tagline changed (may need multiple attempts for random)
});
```

**Components**: Use `render` and query by accessible roles/text

```typescript
import { render, screen } from "@testing-library/react";
import { ProjectCard } from "./ProjectCard";

it("renders project title", () => {
  render(<ProjectCard {...mockProject} />);
  expect(screen.getByRole("heading")).toHaveTextContent("Project Name");
});
```

**Timers**: Use Vitest's fake timers for interval/timeout testing

```typescript
beforeEach(() => vi.useFakeTimers());
afterEach(() => vi.useRealTimers());

it("auto-rotates after 5 seconds", () => {
  const { result } = renderHook(() => useTaglineRotator());
  const initial = result.current.tagline;
  act(() => vi.advanceTimersByTime(5000));
  // Assert rotation occurred
});
```

**IntersectionObserver**: Mock the browser API

```typescript
const mockObserver = vi.fn();
beforeEach(() => {
  global.IntersectionObserver = vi.fn().mockImplementation((cb) => ({
    observe: mockObserver,
    disconnect: vi.fn(),
    unobserve: vi.fn(),
  }));
});
```

## Component Design

### App.tsx (Root Component)

- Wraps entire application in `bg-overlay` container
- Composes all section components
- No state management (state handled in individual components)

### Navigation Component

- Fixed top navigation bar
- External links open in new tabs
- Blog link remains external (`/blog/index.html`)
- Logo with hover effects

### Header Component

- Full viewport height hero section
- Uses `useTaglineRotator` hook for quote rotation
- Click handler and 5-second interval for tagline changes
- Pulse text animation on name

### ProjectCard Component

- Receives project data as props
- Uses `useScrollAnimation` hook for reveal effect
- Displays image, title, description, and action buttons
- Staggered animation delay based on index

### Section Components (Portfolio, AboutMe, Contact)

- Container components for each section
- Handle section-specific layout
- Apply scroll animations via hook

## Custom Hooks

### useTaglineRotator

```typescript
interface UseTaglineRotatorReturn {
  tagline: string;
  randomize: () => void;
}
```

- Manages current tagline state
- Sets up 5-second interval on mount
- Exposes manual randomize function for click handler
- Cleans up interval on unmount

### useScrollAnimation

```typescript
interface UseScrollAnimationOptions {
  threshold?: number;
  staggerDelay?: number;
}
```

- Uses `IntersectionObserver` API
- Returns ref to attach to animated element
- Toggles `show` class based on visibility
- Supports optional stagger delay for multiple items

## Data Structure

### Project Interface

```typescript
interface Project {
  id: string;
  title: string;
  image: string;
  description: string | string[]; // Array for multi-paragraph
  liveUrl?: string;
  githubUrl: string;
}
```

## Styling Strategy

### Global Styles

- Migrate `resources/styles.css` to `src/styles/globals.css`
- Import in `main.tsx` before component CSS
- Keep existing class names for minimal refactoring

### Component Styles

- Use CSS modules or standard CSS imports per component
- Maintain existing CSS variable naming (kebab-case)
- Preserve all animations and transitions

### Static Assets

- Move images to `public/` for direct URL access
- OR import images in components for Vite bundling
- Decision: Use `public/` to minimize changes to existing paths

## Migration Path

1. **Phase 1: Testing Infrastructure** - Set up Vitest, React Testing Library, and test configuration
2. **Phase 2: Project Infrastructure** - Set up component structure, data files, and migrate assets
3. **Phase 3: Data Layer** - Create taglines and projects data modules
4. **Phase 4: Hooks (TDD)** - Write tests first, then implement hooks
5. **Phase 5: UI Components (TDD)** - Write tests first, then implement atomic components
6. **Phase 6: Layout Components (TDD)** - Write tests first, then implement layout components
7. **Phase 7: Section Components (TDD)** - Write tests first, then implement section components
8. **Phase 8: App Integration (TDD)** - Write integration tests, then wire everything together
9. **Phase 9: Animations** - Apply scroll animations (manual visual testing)
10. **Phase 10: Cleanup** - Remove old HTML/JS files or archive them

## Trade-offs

| Decision                  | Alternative       | Rationale                                    |
| ------------------------- | ----------------- | -------------------------------------------- |
| No CSS-in-JS              | Styled-components | Faster migration, reuse existing CSS         |
| No React Router           | Add routing       | Single page, no navigation needed            |
| Public folder assets      | Bundled imports   | Simpler path management, no refactoring      |
| Custom hooks over library | framer-motion     | Maintain existing animation behavior exactly |
| Vitest over Jest          | Jest              | Native Vite integration, faster execution    |
| Co-located tests          | `__tests__` dir   | Easier to maintain, tests next to source     |
