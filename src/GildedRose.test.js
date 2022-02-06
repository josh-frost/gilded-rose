import { render, screen } from '@testing-library/react';
import { Provider } from 'react-redux';

import { store } from './redux/store';
import GildedRose from './GildedRose';

test('renders learn react link', () => {
  render(
    <Provider store={store}>
      <GildedRose />
    </Provider>
  );
  const titleElement = screen.getByText(/gilded rose/i);
  expect(titleElement).toBeInTheDocument();
});
