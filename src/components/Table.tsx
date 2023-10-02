import React, { useContext } from 'react';
import PlanetContext from '../context/PlanetContext';

function Table() {
  const { planets } = useContext(PlanetContext);

  if (planets.length === 0) {
    return <div>Carregando...</div>;
  }

  // Obtém as colunas do primeiro planeta como referência
  const columns = Object.keys(planets[0]);

  // Remove a coluna 'residents' das colunas exibidas
  const filteredColumns = columns.filter((col) => col !== 'residents');

  return (
    <table>
      <thead>
        <tr>
          {filteredColumns.map((col) => (
            <th key={ col }>{col}</th>
          ))}
        </tr>
      </thead>
      <tbody>
        {planets.map((planet) => (
          <tr key={ planet.name }>
            {filteredColumns.map((col) => (
              <td key={ col }>{planet[col as keyof typeof planet]}</td>
            ))}
          </tr>
        ))}
      </tbody>
    </table>
  );
}

export default Table;
