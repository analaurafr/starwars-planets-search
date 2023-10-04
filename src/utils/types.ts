export type PlanetsTypes = {
  filter: any;
  name: string,
  rotation_period: string,
  orbital_period: string,
  diameter: string,
  climate: string,
  gravity: string,
  terrain: string,
  surface_water: string,
  population: string,
  films: string[],
  created: string,
  edited: string,
  url: string,
};

export type PlanetsType = {
  [key:string]: string | string[],
};

export type Filters = {
  column: string,
  comparison: string,
  number: string,
};

export type ContextType = {
  contextAPI: () => Promise<void>,
  planetData: PlanetsTypes,
  planetFilter: PlanetsType[],
  tableHead: string[];
  setPlanetData: (planets: PlanetsType[]) => void;
  setPlanetFilter: (planets: PlanetsType[]) => void;
};
