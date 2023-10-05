import React from 'react';
import { render, screen } from '@testing-library/react';
import Table from '../components/Table';
import PlanetContext from '../context/PlanetContext';

const mockPlanets = [
  { name: 'Tatooine', climate: 'Árido' },
  { name: 'Alderaan', climate: 'Temperado' },
];

const mockFilterPlanets = [
  { name: 'Tatooine', climate: 'Árido' },
];

const mockContext = {
  planets: mockPlanets,
  carry: false,
  filterPlanets: mockFilterPlanets,
};


test('renderiza a tabela filtrada corretamente', () => {
  render(
    <PlanetContext.Provider value={mockContext}>
      <Table />
    </PlanetContext.Provider>
  );

  // Verifica se apenas os dados filtrados são renderizados na tabela
  const tatooineRow = screen.getByText('Tatooine');
  const alderaanRow = screen.queryByText('Alderaan');

  expect(tatooineRow).toBeInTheDocument();
  expect(alderaanRow).toBeNull(); // Alderaan não deve estar na tabela
});

test('exibe "Carregando..." durante o carregamento', () => {
  const contextWithLoading = { ...mockContext, carry: true };

  render(
    <PlanetContext.Provider value={contextWithLoading}>
      <Table />
    </PlanetContext.Provider>
  );

  const loadingText = screen.getByText('Carregando...');
  expect(loadingText).toBeInTheDocument();
});
