import { render, screen } from '@testing-library/react';
import App from './App';

test('renders StartTech Application', () => {
  render(<App />);
  const linkElement = screen.getByText(/StartTech Application/i);
  expect(linkElement).toBeInTheDocument();
});
