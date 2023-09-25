import { render, screen } from '@testing-library/react';
import App from './App';

test("renders a list of currencies", async () => {
  render(<App />);
  const currencies = await screen.findAllByRole('currencies')
  expect(currencies).toHaveLength(3)
})
