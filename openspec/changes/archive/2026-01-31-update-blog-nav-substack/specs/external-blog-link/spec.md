## ADDED Requirements

### Requirement: Navigation SHALL link to external blog
The navigation Blog item SHALL link to the external Substack URL https://jeffbalagosa.substack.com/.

#### Scenario: Blog link uses Substack URL
- **WHEN** the navigation renders the Blog item
- **THEN** the link target is https://jeffbalagosa.substack.com/

### Requirement: External blog link SHALL open in new tab
The Blog link SHALL open in a new browser tab.

#### Scenario: Blog link opens in new tab
- **WHEN** a user clicks the Blog link
- **THEN** the link opens in a new browser tab
