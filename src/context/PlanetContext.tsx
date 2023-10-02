import { createContext, Context } from 'react';

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

type PlanetContextType = {
  planets: Planet[];
  setFilter: (filter: string) => void;
};

const PlanetContext: Context<PlanetContextType> = createContext<PlanetContextType>({
  planets: [],
  setFilter: () => {},
});

export default PlanetContext;
