import { render, screen } from '@testing-library/react';
import App from './App';

test('renders fintech landing page headline', () => {
  render(<App />);
  expect(screen.getByRole('heading', { name: /premium treasury, spend, and growth tooling/i })).toBeInTheDocument();
});
