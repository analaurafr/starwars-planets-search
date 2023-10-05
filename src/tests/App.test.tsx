import React from 'react';
import { render, screen } from '@testing-library/react';
import App from '../App';

test('renderiza o componente App', () => {
  render(<App />);
  const heading = screen.getByText('Starwars Planets Search');
  const filtersComponent = screen.getByText('Filtrar');
  const tableComponent = screen.getByText('Carregando...');

  expect(heading).toBeInTheDocument();
  expect(filtersComponent).toBeInTheDocument();
  expect(tableComponent).toBeInTheDocument();
});

test('exibe o estado de carregamento inicialmente', () => {
  render(<App />);
  const loadingText = screen.getByText('Carregando...');
  expect(loadingText).toBeInTheDocument();
});

