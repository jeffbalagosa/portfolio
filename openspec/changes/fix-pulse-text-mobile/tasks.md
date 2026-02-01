## 1. Implementation

- [x] 1.1 Add mobile `h1` styles: `@media (max-width: 768px)` with `transform: scale(1.5, 5)`
- [x] 1.2 Add mobile `#header-tagline` styles: `font-size: 1.5em` within same media query
- [x] 1.3 Fix mobile layout centering: article width, .hidden transform, about/contact widths
- [x] 1.4 Fix mobile .bg-overlay to cover full viewport (min-width/min-height: 100vw/100vh)

## 2. Manual Verification

- [x] 2.1 Verify mobile viewport (≤768px): header text is proportionally sized
- [x] 2.2 Verify desktop viewport (>768px): header appearance unchanged

## 3. Automated Verification

- [x] 3.1 Run existing test suite to ensure no regressions
- [x] 3.2 Fix broken blog link e2e test (URL changed to Substack)
- [x] 3.3 Add mobile viewport e2e tests:
  - renders header and sections on mobile
  - header text does not overflow viewport
  - tagline is positioned below header text
  - bg-overlay covers full viewport
  - project cards are properly sized
