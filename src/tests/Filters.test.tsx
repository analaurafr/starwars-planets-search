import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import App from '../App';


test('Renderiza os filtros corretamente', () => {
  render(<App />);

  const columnFilter = screen.getByTestId('column-filter');
  const comparisonFilter = screen.getByTestId('comparison-filter');
  const valueFilter = screen.getByTestId('value-filter');
  const buttonFilter = screen.getByTestId('button-filter');

  expect(columnFilter).toBeInTheDocument();
  expect(comparisonFilter).toBeInTheDocument();
  expect(valueFilter).toBeInTheDocument();
  expect(buttonFilter).toBeInTheDocument();
});

test('deve chamar filterByName ao clicar no botão Filtrar', () => {
  render(<App />);

  const input = screen.getByTestId('name-filter');
  const button = screen.getByTestId('button-filter');

  userEvent.type(input, 'Tatooine');
  userEvent.click(button);

  // Adicione asserções para verificar se filterByName foi chamada com 'Tatooine'
});

test('deve aplicar filtros numéricos corretamente ao clicar no botão Filtrar', () => {
  render(<App />);

  const columnSelect = screen.getByTestId('column-filter');
  const comparisonSelect = screen.getByTestId('comparison-filter');
  const valueInput = screen.getByTestId('value-filter');
  const button = screen.getByTestId('button-filter');

  userEvent.selectOptions(columnSelect, 'population');
  userEvent.selectOptions(comparisonSelect, 'maior que');
  userEvent.type(valueInput, '100000');
  userEvent.click(button);

  // Adicione asserções para verificar se os filtros numéricos foram aplicados corretamente
});

test('deve ordenar os planetas corretamente ao clicar no botão Ordenar', () => {
  render(<App />);

  const columnSortSelect = screen.getByTestId('column-sort');
  const ascRadio = screen.getByTestId('column-sort-input-asc');
  const descRadio = screen.getByTestId('column-sort-input-desc');
  const button = screen.getByTestId('column-sort-button');

  userEvent.selectOptions(columnSortSelect, 'population');
  userEvent.click(ascRadio);
  userEvent.click(button);

  // Adicione asserções para verificar se a ordenação foi aplicada corretamente
});

