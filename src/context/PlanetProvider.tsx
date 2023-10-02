import React, { useState, useEffect } from 'react';
import PlanetContext from './PlanetContext';

type Planet = {
  name: string;
  rotation_period: string;
  orbital_period: string;
  diameter: string;
  climate: string;
  gravity: string;
  terrain: string;
  surface_water: string;
  population: string;
  residents: string[];
  films: string[];
  created: string;
  edited: string;
  url: string;
};

type PlanetsResponse = {
  count: number;
  next: string | null;
  previous: string | null;
  results: Planet[];
};

type PlanetProviderProps = {
  children: React.ReactNode;
};

function PlanetProvider({ children }: PlanetProviderProps) {
  const [planets, setPlanets] = useState<Planet[]>([]);
  const [filter, setFilter] = useState<string>('');

  useEffect(() => {
    async function fetchPlanets() {
      try {
        const response = await fetch('https://swapi.dev/api/planets');
        const data: PlanetsResponse = await response.json();
        setPlanets(data.results);
      } catch (error) {
        console.error('Erro ao buscar planetas:', error);
      }
    }

    fetchPlanets();
  }, []);

  const filteredPlanets = planets.filter(
    (planet) => planet.name.toLowerCase().includes(filter.toLowerCase()),
  );

  return (
    <PlanetContext.Provider value={ { planets: filteredPlanets, setFilter } }>
      {children}
    </PlanetContext.Provider>
  );
}

export default PlanetProvider;
