## Why

The navigation currently routes the Blog button internally, but the blog is hosted on Substack. Updating the link now removes a broken/misleading path and sends visitors to the correct content destination.

## What Changes

- Point the Blog navigation button to https://jeffbalagosa.substack.com/.
- Open the Blog link in a new browser tab.

## Capabilities

### New Capabilities
- `external-blog-link`: Provide an external Blog destination from the main navigation.

### Modified Capabilities
- `react-portfolio`: Navigation behavior now treats Blog as an external link that opens in a new tab.

## Impact

- UI navigation components (header/nav) and related tests.
- No API or dependency changes.
