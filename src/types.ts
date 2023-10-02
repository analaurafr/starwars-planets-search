export type Planet = {
  name: string;
  rotation_period: string;
  orbital_period: string;
  diameter: string;
  climate: string | string[];
  gravity: string | string[];
  terrain: string | string[];
  surface_water: string | string[];
  population: string | string[];
  residents?: string[] | string[];
  films: string[] | string[];
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
