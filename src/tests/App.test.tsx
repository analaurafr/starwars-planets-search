import React from 'react';
import { render } from '@testing-library/react';
import App from '../App';

test('renderiza o título corretamente', () => {
  const { getByText } = render(<App />);
  const titleElement = getByText(/Starwars Planets/i);
  expect(titleElement).toBeInTheDocument();
});