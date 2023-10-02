import React, { useContext, useState } from 'react';
import PlanetContext from '../context/PlanetContext';

function NumericFilter({ onFilterChange }) {
  const { planets } = useContext(PlanetContext);
  const [selectedColumn, setSelectedColumn] = useState('population');
  const [comparisonOperator, setComparisonOperator] = useState('maior que'); // Defina o valor inicial corretamente
  const [filterValue, setFilterValue] = useState('0');

  const handleApplyFilter = () => {
    const numericValue = parseFloat(filterValue);

    if (!isNaN(numericValue)) {
      onFilterChange({
        column: selectedColumn,
        operator: comparisonOperator,
        value: numericValue,
      });
    }
  };

  return (
    <div>
      <select
        data-testid="column-filter"
        value={ selectedColumn }
        onChange={ (e) => setSelectedColumn(e.target.value) }
      >
        <option value="population">population</option>
        <option value="orbital_period">orbital_period</option>
        <option value="diameter">diameter</option>
        <option value="rotation_period">rotation_period</option>
        <option value="surface_water">surface_water</option>
      </select>
      <select
        data-testid="comparison-filter"
        value={ comparisonOperator }
        onChange={ (e) => setComparisonOperator(e.target.value) }
      >
        <option value="maior que">maior que</option>
        <option value="menor que">menor que</option>
        <option value="igual a">igual a</option>
      </select>
      <input
        data-testid="value-filter"
        type="number"
        value={ filterValue }
        onChange={ (e) => setFilterValue(e.target.value) }
      />
      <button data-testid="button-filter" onClick={ handleApplyFilter }>
        Filtrar
      </button>
    </div>
  );
}

export default NumericFilter;
