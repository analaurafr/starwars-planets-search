import React, { useContext, useState, useEffect } from 'react';
import PlanetContext from '../context/PlanetContext';
import { Planet } from '../types';
import NumericFilter from './NumericFilter';

type Filter = {
  column: keyof Planet;
  operator: 'maior que' | 'menor que' | 'igual a';
  value: number;
};

function Table() {
  const { planets, setFilter } = useContext(PlanetContext);
  const [filters, setFilters] = useState<Filter[]>([]);
  const [filteredPlanets, setFilteredPlanets] = useState<Planet[]>([]);
  const columns = planets.length > 0
    ? Object.keys(planets[0]) as Array<keyof Planet> : [];

  useEffect(() => {
    // Aplicar filtros de texto
    let filteredResults = planets;
    filters.forEach((filter) => {
      const { column, value } = filter;
      filteredResults = filteredResults
        .filter((planet) => {
          const columnValue = planet[column];

          if (typeof columnValue === 'string') {
            return columnValue.toLowerCase().includes(value.toString().toLowerCase());
          } if (Array.isArray(columnValue) && columnValue.length > 0) {
            // Converte o array em uma string concatenada para verificação
            const concatenatedString = columnValue.join(', ').toLowerCase();
            return concatenatedString.includes(value.toString().toLowerCase());
          }

          return false;
        });
    });

    setFilteredPlanets(filteredResults);
  }, [filters, planets]);

  const applyFilters = (filteredPlanets: Planet[]) => {
    return filteredPlanets.filter((planet) => {
      return filters.every((filter) => {
        const { column, operator, value } = filter;
        const columnValue = parseFloat(planet[column]);

        if (!isNaN(columnValue) && typeof columnValue === 'number') {
          switch (operator) {
            case 'maior que':
              return columnValue > value;
            case 'menor que':
              return columnValue < value;
            case 'igual a':
              return columnValue === value;
            default:
              return true;
          }
        }

        return true;
      });
    });
  };

  const handleAddFilter = (filter: Filter) => {
    setFilters([...filters, filter]);
  };

  return (
    <div>
      <NumericFilter onFilterChange={ handleAddFilter } />
      <input
        type="text"
        data-testid="name-filter"
        placeholder="Filtrar por nome"
        onChange={ (e) => setFilter(e.target.value.toLowerCase()) }
      />
      <table>
        <thead>
          <tr>
            {columns.map((col) => (
              <th key={ col }>{col}</th>
            ))}
          </tr>
        </thead>
        <tbody>
          {applyFilters(filteredPlanets).map((planet, index) => (
            <tr key={ index }>
              {columns.map((col) => (
                <td key={ col }>{planet[col]}</td>
              ))}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default Table;
