import React from 'react';
import { render, screen } from '@testing-library/react';
import PlanetsContext from '../context/PlanetContext';
import PlanetsProvider from '../context/PlanetProvider';


test('Fornece dados corretamente via contexto', () => {
  // Renderiza um componente que consome o contexto
  render(
    <PlanetsProvider>
      <PlanetsContext.Consumer>
        {({ planetData }) => (
          <div data-testid="planet-data">{JSON.stringify(planetData)}</div>
        )}
      </PlanetsContext.Consumer>
    </PlanetsProvider>
  );

  // Verifica se o contexto fornece dados corretamente
  expect(screen.getByTestId('planet-data')).toHaveTextContent('[]'); // Verifique o valor esperado
});
