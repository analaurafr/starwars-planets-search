export type Planet = {
  name: string;
  rotation_period: string;
  orbital_period: string;
  diameter: string;
  climate: string;
  gravity: string;
  terrain: string;
  surface_water: string;
  population: string;
  residents: string[]; // ou um array de URLs, dependendo do uso
  films: string[]; // ou um array de URLs, dependendo do uso
  created: string;
  edited: string;
  url: string;
};

export type PlanetsResponse = {
  count: number;
  next: string | null;
  previous: string | null;
  results: Planet[];
};
