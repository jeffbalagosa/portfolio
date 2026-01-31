# Change: Add Playwright E2E testing

## Why

The project needs automated end-to-end testing to validate core user flows in a real browser and reduce regression risk.

## What Changes

- Add Playwright Test as the E2E runner targeting Chromium.
- Provide a base Playwright configuration aligned to the Vite app workflow.
- Add initial smoke E2E coverage for the primary landing experience.

## Impact

- Affected specs: e2e-testing
- Affected code: package.json, Playwright config, E2E test files, CI/dev scripts (if applicable)
