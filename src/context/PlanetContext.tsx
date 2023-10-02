// PlanetContext.js
import { createContext, useContext, useState, useEffect } from 'react';

const PlanetContext = createContext();

export function PlanetProvider({ children }) {
  const [planets, setPlanets] = useState([]);

  useEffect(() => {
    // Fazer a requisição para a API e atualizar o estado "planets" com os dados
    async function fetchPlanets() {
      try {
        const response = await fetch('https://swapi.dev/api/planets');
        const data = await response.json();
        // Remover a coluna "residents" de cada planeta
        const planetsWithoutResidents = data.results.map((planet) => {
          const { residents, ...rest } = planet;
          return rest;
        });
        setPlanets(planetsWithoutResidents);
      } catch (error) {
        console.error('Erro ao buscar os planetas:', error);
      }
    }

    fetchPlanets();
  }, []);

  return (
    <PlanetContext.Provider value={ planets }>{children}</PlanetContext.Provider>
  );
}

export function usePlanets() {
  const context = useContext(PlanetContext);
  if (!context) {
    throw new Error('usePlanets deve ser usado dentro de um PlanetProvider');
  }
  return context;
}
