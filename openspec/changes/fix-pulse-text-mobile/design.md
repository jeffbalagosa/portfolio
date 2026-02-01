## Context

The header `h1` element currently uses `transform: scale(2, 10)` to create a stretched, dramatic text effect. This works well on desktop but creates an oversized header on mobile viewports. The tagline below (`#header-tagline`) uses `font-size: 2.5em` which also needs adjustment for smaller screens.

Current styles in `src/styles/globals.css`:
- `h1`: `transform: scale(2, 10)`, `margin-top: 30%`
- `#header-tagline`: `font-size: 2.5em`, `margin-top: 4em`

No responsive breakpoints currently exist for these elements.

## Goals / Non-Goals

**Goals:**
- Make header text readable and proportional on mobile devices (< 768px)
- Maintain the dramatic stretched text effect on desktop
- Keep the pulsating animation unchanged

**Non-Goals:**
- Redesigning the header layout
- Changing the animation or color scheme
- Adding tablet-specific breakpoints (mobile-first approach)

## Decisions

### Decision 1: Mobile-first breakpoint at 768px

Use `@media (max-width: 768px)` for mobile styles. This is a standard breakpoint that covers phones in both portrait and landscape orientations.

**Alternative considered**: 480px breakpoint - rejected because tablets in portrait would still have issues.

### Decision 2: Reduce scale transform on mobile

Change `transform: scale(2, 10)` to `transform: scale(1.5, 5)` on mobile. This maintains the stretched effect while being proportionally smaller.

**Alternative considered**: Using `font-size` instead of `transform` - rejected to preserve the consistent visual effect across breakpoints.

### Decision 3: Reduce tagline font-size on mobile

Change `#header-tagline` from `font-size: 2.5em` to `font-size: 1.5em` on mobile for better readability.

## Risks / Trade-offs

- **[Visual consistency]** → The mobile version will look noticeably different from desktop. This is acceptable as it's necessary for usability.
- **[Breakpoint coverage]** → Some edge cases (very small screens, landscape phones) may need further tuning. Mitigation: Test on common device sizes first, iterate if needed.
