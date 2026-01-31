import '@testing-library/jest-dom'

if (!globalThis.IntersectionObserver) {
	class MockIntersectionObserver {
		constructor() {}
		observe() {}
		unobserve() {}
		disconnect() {}
	}

	globalThis.IntersectionObserver = MockIntersectionObserver as unknown as typeof IntersectionObserver
}
