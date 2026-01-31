## Context

The portfolio navigation currently includes a Blog link that routes internally. The proposal updates this to an external Substack URL and requires opening in a new tab. This is a small, localized UI behavior change within the React navigation components and related tests.

## Goals / Non-Goals

**Goals:**
- Update the Blog navigation item to use the Substack URL.
- Ensure the Blog link opens in a new browser tab.
- Keep navigation styling and layout unchanged.

**Non-Goals:**
- Redesigning the navigation UI.
- Adding new pages or routing rules.
- Changing other external links or footer content.

## Decisions

- **Use a standard external anchor link**: Render the Blog item as an external `href` with `target="_blank"` and `rel="noopener noreferrer"` to open in a new tab and avoid opener risks.
  - *Alternatives considered:* Keeping client-side routing (e.g., React Router `Link`) and intercepting to open a new tab, but that adds complexity and is unnecessary for a pure external URL.

- **Centralize the URL in existing navigation data**: If navigation labels/URLs are defined in a data structure, update the Blog entry there to keep the component logic unchanged.
  - *Alternatives considered:* Hardcoding the URL in the JSX for the Blog item. This is quicker but less consistent with existing data-driven rendering if present.

## Risks / Trade-offs

- **Inconsistent link behavior** → Ensure the Blog item is the only link with `target="_blank"` unless other items already do so; update tests to reflect the new attributes.
- **Security concerns with new tabs** → Mitigate by adding `rel="noopener noreferrer"`.
