import { useContext, useState } from 'react';
import GlobalContext from '../context/PlanetContext';
import { OrderType, PlanetsType, ColumnType } from '../utils/types';

// Estado inicial para a ordenação
const ORDER_STATE = {
  order: {
    column: 'population',
    sort: 'ASC',
  },
};

// Estado inicial para os filtros
const INITIAL_STATE = {
  column: 'population',
  comparison: 'maior que',
  value: 0,
};

// Opções de colunas para filtro e ordenação
const pilarFilter = [
  'population',
  'orbital_period',
  'diameter',
  'rotation_period',
  'surface_water',
];

const useFilters = () => {
  const { planets, filterPlanets, setFilterPlanets } = useContext(GlobalContext);

  // Estado para as seleções do usuário
  const [selectedValues, setSelectedValues] = useState<
  ColumnType>(INITIAL_STATE as ColumnType);

  // Estado para as opções de coluna disponíveis
  const [pilarOptions, setColumnOptions] = useState(pilarFilter);

  // Estado para os filtros aplicados
  const [filterOptions, setFilterOptions] = useState<ColumnType[]>([]);

  // Estado para a ordenação
  const [order, setOrder] = useState<OrderType>(ORDER_STATE as OrderType);

  // Função para filtrar por nome
  const filterByName = (filterS: string) => {
    const filterinfo = planets
      .filter((planet) => planet.name.toLocaleLowerCase()
        .includes(filterS.toLocaleLowerCase()));
    setFilterPlanets(filterinfo);
  };

  // Função para lidar com alterações nos campos de filtro
  const handleChange = (
    event: React.ChangeEvent<HTMLSelectElement | HTMLInputElement>,
  ) => {
    const { value, name } = event.target;
    setSelectedValues({
      ...selectedValues,
      [name]: value,
    });
  };

  // Função para aplicar o filtro numérico
  const filterInfoNumber = () => {
    const { column, comparison, value } = selectedValues;
    setFilterOptions([...filterOptions, selectedValues]);

    const newPilar = pilarOptions
      .filter((option: string) => option !== column);
    setColumnOptions(newPilar);

    const planetsTheFilter = filterPlanets.length > 0 ? filterPlanets : planets;

    const filterinfo = planetsTheFilter
      .filter((planet) => {
        if (comparison === 'maior que') {
          return Number(planet[column]) > Number(value);
        }
        if (comparison === 'menor que') {
          return Number(planet[column]) < Number(value);
        } if (comparison === 'igual a') {
          return Number(planet[column]) === Number(value);
        }
        return planet;
      });
    setFilterPlanets(filterinfo);
  };

  // Função para deletar filtros
  const deleteFilter = (
    event: React.MouseEvent<HTMLButtonElement>,
    filter?: string,
  ) => {
    const { name } = event.target as HTMLButtonElement;
    if (name === 'removeFilters') {
      setColumnOptions(pilarFilter);
      setFilterPlanets([]);
      setFilterOptions([]);
    } else if (name === 'X' && filter) {
      setColumnOptions([...pilarOptions, filter]);
      const newFilterOp = filterOptions.filter(
        (option) => option.column !== filter,
      );
      setFilterOptions(newFilterOp);

      let filterinfo = planets;
      newFilterOp.forEach((option) => {
        filterinfo = planets.filter((planet) => {
          const { column, comparison, value } = option;
          if (comparison === 'maior que') {
            return Number(planet[column]) > Number(value);
          } if (comparison === 'menor que') {
            return Number(planet[column]) < Number(value);
          } if (comparison === 'igual a') {
            return Number(planet[column]) === Number(value);
          }
          return true;
        });
      });
      setFilterPlanets(filterinfo);
    }
  };

  // Função para lidar com a seleção de coluna e ordenação
  const takeOrder = (event: React.ChangeEvent<HTMLSelectElement | HTMLInputElement>) => {
    const { value, name } = event.target;

    if (name === 'columnSort' && value !== order.order.column) {
      setOrder({
        order: {
          column: value as 'population' | 'orbital_period' | 'diameter'
          | 'rotation_period' | 'surface_water',
          sort: order.order.sort,
        },
      });
    } else if (name === 'columnSortOrder' && value !== order.order.sort) {
      setOrder({
        order: {
          column: order.order.column,
          sort: value as 'ASC' | 'DESC',
        },
      });
    }
  };

  // Função para ordenar os planetas
  const orderPlanets = () => {
    const { column, sort } = order.order;

    const orderPlanet = filterPlanets.length > 0 ? filterPlanets : planets;
    const deletePlanet: PlanetsType[] = [];
    const filterOrderPlanet: PlanetsType[] = [];

    orderPlanet.forEach((planet) => {
      if (planet[column] === 'unknown') {
        deletePlanet.push(planet);
      } else {
        filterOrderPlanet.push(planet);
      }
    });

    const orderAsc = filterOrderPlanet.sort((a, b) => {
      if (sort === 'ASC') {
        return Number(a[column]) - Number(b[column]);
      }
      return Number(b[column]) - Number(a[column]);
    });
    setFilterPlanets([...orderAsc, ...deletePlanet]);
  };

  return {
    deleteFilter,
    filterByName,
    filterInfoNumber,
    pilarFilter,
    handleChange,
    selectedValues,
    pilarOptions,
    filterOptions,
    takeOrder,
    orderPlanets,
  };
};

export default useFilters;
