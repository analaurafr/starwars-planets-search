// Filters.js
import React, { useContext, useState } from 'react';
import PlanetsContext from '../context/PlanetContext';

function Filters() {
  const [filters, setFilters] = useState([]); // Lista de filtros
  const [columnForFiltering, setColumnForFiltering] = useState('population');
  const [comparisonForFiltering, setComparisonForFiltering] = useState('maior que');
  const [numberForFiltering, setNumberForFiltering] = useState('0');
  const { planetFilter, setPlanetFilter } = useContext(PlanetsContext);

  const availableColumns = [
    'population',
    'orbital_period',
    'diameter',
    'rotation_period',
    'surface_water',
  ].filter((col) => !filters.some((filter) => filter.column === col));

  const handleSubmit = (e) => {
    e.preventDefault();
    addFilter();
  };

  const addFilter = () => {
    const newFilter = {
      column: columnForFiltering,
      comparison: comparisonForFiltering,
      value: numberForFiltering,
    };
    setFilters([...filters, newFilter]);
    applyFilters([...filters, newFilter]);
  };

  const removeFilter = (column) => {
    const updatedFilters = filters.filter((filter) => filter.column !== column);
    setFilters(updatedFilters);
    applyFilters(updatedFilters);
  };

  const applyFilters = (filterList) => {
    let filteredPlanets = [...planetFilter];
    filterList.forEach((filter) => {
      filteredPlanets = filteredPlanets.filter((planet) => {
        if (filter.comparison === 'maior que') {
          return Number(planet[filter.column]) > Number(filter.value);
        }
        if (filter.comparison === 'menor que') {
          return Number(planet[filter.column]) < Number(filter.value);
        }
        if (filter.comparison === 'igual a') {
          return Number(planet[filter.column]) === Number(filter.value);
        }
        return planet;
      });
    });
    setPlanetFilter(filteredPlanets);
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <select
          data-testid="column-filter"
          name="column"
          value={columnForFiltering}
          onChange={(event) => setColumnForFiltering(event.target.value)}
        >
          {availableColumns.map((col) => (
            <option key={col} value={col}>
              {col}
            </option>
          ))}
        </select>
        <select
          data-testid="comparison-filter"
          name="comparison"
          value={comparisonForFiltering}
          onChange={(event) => setComparisonForFiltering(event.target.value)}
        >
          <option value="maior que">maior que</option>
          <option value="menor que">menor que</option>
          <option value="igual a">igual a</option>
        </select>
        <input
          type="number"
          data-testid="value-filter"
          name="number"
          value={numberForFiltering}
          onChange={(event) => setNumberForFiltering(event.target.value)}
        />
        <button data-testid="button-filter">Filtrar</button>
      </form>
      <div>
        {filters.map((filter, index) => (
          <div key={index}>
            <span>
              {filter.column} {filter.comparison} {filter.value}
            </span>
            <button onClick={() => removeFilter(filter.column)}>Remover</button>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Filters;

