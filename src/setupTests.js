// jest-dom adds custom jest matchers for asserting on DOM nodes.
// allows you to do things like:
// expect(element).toHaveTextContent(/react/i)
// learn more: https://github.com/testing-library/jest-dom
import '@testing-library/jest-dom';

if (!window.matchMedia) {
	window.matchMedia = () => ({
		matches: false,
		media: '',
		onchange: null,
		addListener: () => {},
		removeListener: () => {},
		addEventListener: () => {},
		removeEventListener: () => {},
		dispatchEvent: () => false,
	});
}

if (!window.requestAnimationFrame) {
	window.requestAnimationFrame = (callback) => window.setTimeout(() => callback(Date.now()), 16);
}

if (!window.cancelAnimationFrame) {
	window.cancelAnimationFrame = (id) => window.clearTimeout(id);
}
