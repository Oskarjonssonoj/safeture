import { render, screen } from '@testing-library/react';
import App from './App';

test('renders learn react link', () => {
  render(<App />);
  const linkElement = screen.getByText(/learn react/i);
  expect(linkElement).toBeInTheDocument();
});

test("renders a list of currencies", async () => {
  render(<App />);
  const currencies = await screen.findAllByRole('currencies')
  expect(currencies).toHaveLength(3)
})
