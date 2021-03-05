import { render, screen } from '@testing-library/react';
import App from './App';

test('renders faction selection', () => {
  const deck = { Govt: {}, Insurgent: {} };

  render(<App deck={deck} />);
  const queryElement = screen.getByText(/Faction to act?/i);
  expect(queryElement).toBeInTheDocument();
  const govtElement = screen.getByText(/Govt/i);
  expect(govtElement).toBeInTheDocument();
  const insurgentElement = screen.getByText(/Insurgent/i);
  expect(insurgentElement).toBeInTheDocument();
});
