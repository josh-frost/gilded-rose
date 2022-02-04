import { render, screen } from '@testing-library/react';
import GildedRose from './GildedRose';

test('renders learn react link', () => {
  render(<GildedRose />);
  const linkElement = screen.getByText(/gilded rose/i);
  expect(linkElement).toBeInTheDocument();
});
