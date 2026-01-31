## MODIFIED Requirements

### Requirement: Application SHALL provide navigation component

The application SHALL provide a fixed top navigation bar.

#### Scenario: Navigation links scroll to sections

**Given** the Navigation component is rendered
**When** the user clicks a section link (Projects, About Me, Contact)
**Then** the page scrolls smoothly to that section

#### Scenario: External links open in new tab

**Given** the Navigation component is rendered
**When** the user clicks the Resume or Blog link
**Then** the link opens in a new browser tab

#### Scenario: Blog link targets Substack

- **WHEN** the navigation renders the Blog link
- **THEN** the Blog link points to https://jeffbalagosa.substack.com/
