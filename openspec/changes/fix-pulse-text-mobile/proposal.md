## Why

The pulsating header text ("Jeff Balagosa") is too large on mobile viewports, causing layout issues and poor readability. The current `h1` styling uses a fixed `transform: scale(2, 10)` that doesn't adapt to smaller screens, making the text overflow or appear disproportionately large on mobile devices.

## What Changes

- Add responsive CSS media queries to scale down the header text on mobile viewports
- Adjust the `transform: scale()` values for smaller screen sizes
- Ensure the header tagline (`#header-tagline`) also scales appropriately on mobile

## Capabilities

### New Capabilities

_None - this is a CSS-only fix to existing styling._

### Modified Capabilities

_None - no spec-level behavior changes, only implementation styling adjustments._

## Impact

- **Affected code**: `src/styles/globals.css` (h1 and header-related styles)
- **Visual impact**: Header will appear smaller and more proportional on mobile devices
- **No breaking changes**: Desktop appearance remains unchanged
