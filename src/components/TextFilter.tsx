import React, { useContext } from 'react';
import PlanetContext from '../context/PlanetContext';

function TextFilter() {
  const { setFilter } = useContext(PlanetContext);

  return (
    <div>
      <label htmlFor="name-filter">Filtrar por nome:</label>
      <input
        type="text"
        id="name-filter"
        data-testid="name-filter"
        onChange={ (e) => setFilter(e.target.value) }
      />
    </div>
  );
}

export default TextFilter;
