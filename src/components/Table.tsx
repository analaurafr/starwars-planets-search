// Table.js
import React, { useContext, useState, useEffect } from 'react';
import PlanetsContext from '../context/PlanetContext';
import Filters from './Filters';

function Table() {
  const {
    tableHead,
    contextAPI,
    planetData,
    planetFilter,
    setPlanetFilter,
  } = useContext(PlanetsContext);

  const [searchedValue, setSearchedValue] = useState('');

  const textFilter = () => {
    setPlanetFilter(
      planetData.filter((planet) => planet.name.toLowerCase().includes(searchedValue)),
    );
  };

  useEffect(() => {
    contextAPI();
  }, []);

  useEffect(() => {
    textFilter();
  }, [searchedValue, planetData]);

  return (
    <>
      <input
        type="text"
        name="name"
        value={ searchedValue }
        onChange={ (event) => setSearchedValue(event.target.value) }
        data-testid="name-filter"
      />
      <Filters />
      <table>
        <thead>
          <tr>
            {tableHead.map((item) => (
              <th key={ item } scope="col">
                {item}
              </th>
            ))}
          </tr>
        </thead>
        <tbody>
          {planetFilter.map((planet) => (
            <tr key={ planet.name }>
              <td>{planet.name}</td>
              <td>{planet.rotation_period}</td>
              <td>{planet.orbital_period}</td>
              <td>{planet.diameter}</td>
              <td>{planet.climate}</td>
              <td>{planet.gravity}</td>
              <td>{planet.terrain}</td>
              <td>{planet.surface_water}</td>
              <td>{planet.population}</td>
              <td>{planet.films}</td>
              <td>{planet.created}</td>
              <td>{planet.edited}</td>
              <td>{planet.url}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </>
  );
}

export default Table;
