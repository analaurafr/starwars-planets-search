import { useState } from 'react';
import { getFetch } from '../utils/requestAPI';
import { PlanetsType } from '../utils/types';
import PlanetsContext from './PlanetContext';

type PlanetsProviderProps = {
  children: React.ReactNode,
};

function PlanetsProvider({ children }: PlanetsProviderProps) {
  const [planetData, setPlanetData] = useState<PlanetsType[]>([]);
  const [planetFilter, setPlanetFilter] = useState<PlanetsType[]>([]);
  const [tableHead, setTableHead] = useState<string[]>([]);

  const contextAPI = async () => {
    const response = await getFetch();
    setPlanetData(response);
    setPlanetFilter(planetData);
    setTableHead(Object.keys(response[0]));
  };

  return (
    <PlanetsContext.Provider
      value={ {
        tableHead,
        planetData,
        setPlanetData,
        planetFilter,
        setPlanetFilter,
        contextAPI,
      } }
    >
      {children}
    </PlanetsContext.Provider>
  );
}

export default PlanetsProvider;
