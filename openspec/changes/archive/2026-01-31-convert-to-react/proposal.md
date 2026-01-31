# Convert Portfolio to React Application

## Summary

Convert the existing static HTML/CSS/JavaScript portfolio site to a React application using the Vite + TypeScript scaffolding already in place.

## Motivation

- **Maintainability**: React's component-based architecture will make the codebase more modular and easier to maintain
- **Scalability**: Future features (blog integration, interactive demos) will be easier to implement
- **Developer Experience**: TypeScript provides type safety and better IDE support
- **Modern Stack**: Aligns with current front-end development practices and the developer's skill set

## Scope

### In Scope

- Convert all existing HTML sections into React components
- Migrate existing CSS to component-scoped or global styles
- Port JavaScript functionality (tagline randomizer, scroll animations) to React hooks
- Maintain all existing visual design and behavior
- Preserve the dark theme with green terminal aesthetic
- Keep the existing project data and content

### Out of Scope

- Adding new features beyond current functionality
- Redesigning the visual appearance
- Blog functionality (already a separate subdirectory)
- Backend/API integration
- Routing (single-page application structure is maintained)

## Impact

| Area           | Impact                                                |
| -------------- | ----------------------------------------------------- |
| File Structure | New `src/components/` directory with React components |
| Build Process  | Now uses Vite build instead of direct file serving    |
| JavaScript     | Migrated to TypeScript/TSX                            |
| CSS            | Existing styles preserved, potentially reorganized    |
| HTML           | `index.html` becomes Vite entry point with React root |

## Risks

1. **Animation Compatibility**: Intersection Observer scroll animations may need adjustment for React's virtual DOM
2. **Performance**: Initial bundle size increase from React framework
3. **Asset Paths**: Static assets (images) need proper handling in Vite

## Stakeholders

- Jeff Balagosa (project owner)

## References

- Current site: `index.html`, `main-script.js`, `resources/styles.css`
- React scaffolding: `src/App.tsx`, `src/main.tsx`
- Vite config: `vite.config.ts`
