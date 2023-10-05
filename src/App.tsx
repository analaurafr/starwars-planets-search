import { useEffect, useState } from 'react';
import { FetchAPI } from './utils/requestAPI';
import { PlanetsType } from './utils/types';
import PlanetContext from './context/PlanetContext';
import Filters from './components/Filters';
import Table from './components/Table';

export default function App() {
  const [filterPlanets, setFilterPlanets] = useState<PlanetsType[]>([]);
  const [planets, setPlanets] = useState<PlanetsType[]>([]);
  const [carry, setCarry] = useState<boolean>(false);

  useEffect(() => {
    const fetchApiPlanets = async () => {
      try {
        setCarry(true);
        const result = await FetchAPI();
        setPlanets(result);
      } catch (err) {
        // Tratamento de erro opcional
        console.error(err);
      } finally {
        setCarry(false);
      }
    };
    fetchApiPlanets();
  }, []);

  return (
    <PlanetContext.Provider
      value={ {
        planets,
        carry,
        filterPlanets,
        setFilterPlanets,
      } }
    >
      <div>
        <h1>Starwars Planets Search</h1>
        <Filters />
        <Table />
      </div>
    </PlanetContext.Provider>
  );
}
