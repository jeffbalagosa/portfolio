## ADDED Requirements

### Requirement: Playwright E2E runner

The system SHALL provide an end-to-end test runner using Playwright Test configured to run against Chromium.

#### Scenario: Running E2E tests locally

- **WHEN** a developer runs the E2E test command
- **THEN** Playwright executes tests in Chromium and reports pass/fail results

### Requirement: Smoke coverage for landing page

The system SHALL include a smoke E2E test that validates the main landing page renders primary content sections.

#### Scenario: Landing page smoke validation

- **WHEN** the E2E smoke test runs against the app
- **THEN** the page loads and the primary sections are visible
