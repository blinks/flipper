import { render, screen } from '@testing-library/react';
import App from './App';

test('renders faction selection option', () => {
  render(<App />);
  const selectionElement = screen.getByText(/Faction to act?/i);
  expect(selectionElement).toBeInTheDocument();
});
