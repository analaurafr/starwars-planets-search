import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import Filters from '../components/Filters';

test('Renderiza os filtros corretamente', () => {
  // Renderiza o componente
  render(<Filters />);

  // Verifica se os elementos de filtro são renderizados
  const columnFilter = screen.getByTestId('column-filter');
  const comparisonFilter = screen.getByTestId('comparison-filter');
  const valueFilter = screen.getByTestId('value-filter');
  const buttonFilter = screen.getByTestId('button-filter');

  expect(columnFilter).toBeInTheDocument();
  expect(comparisonFilter).toBeInTheDocument();
  expect(valueFilter).toBeInTheDocument();
  expect(buttonFilter).toBeInTheDocument();
});
