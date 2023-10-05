export type PlanetsType = {
  name: string;
  rotation_period: string;
  orbital_period: string;
  diameter: string;
  climate: string;
  gravity: string;
  terrain: string;
  surface_water: string;
  population: string;
  films: string[];
  created: string;
  edited: string;
  url: string;
};

export type ColumnType = {
  column: 'population' | 'orbital_period' | 'diameter'
  | 'rotation_period' | 'surface_water';
  comparison: 'maior que' | 'menor que' | 'igual a';
  value: number;
};

export type OrderType = {
  order: {
    column: 'population' | 'orbital_period' | 'diameter'
    | 'rotation_period' | 'surface_water';
    sort: 'ASC' | 'DESC';
  }
};

export type NumbersType = PlanetsType & { residents: string[] };

export type PlanetsContextType = {
  planets: PlanetsType[];
  carry: boolean;
  filterPlanets: PlanetsType[];
  setFilterPlanets: (planets: PlanetsType[]) => void;
};
