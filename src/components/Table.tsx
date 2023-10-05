import { useContext } from 'react';
import GlobalContext from '../context/PlanetContext';

function Table() {
  // Obtém os dados do contexto global, incluindo a lista de planetas, estado de carregamento e planetas filtrados.
  const { planets, carry, filterPlanets } = useContext(GlobalContext);

  // array com os nomes das colunas da tabela com base nos dados do primeiro planeta.
  const arrayPlanet = planets?.length > 0 ? Object.keys(planets[0]) : [];

  // Decide qual lista de planetas deve ser renderizada, a filtrada ou a completa.
  const listRender = filterPlanets?.length > 0 ? filterPlanets : planets;

  // array com os nomes dos planetas a serem renderizados.
  const mapPlanets = listRender?.map((planet) => planet.name);

  return (
    <div>
      {carry && <p>Carregando...</p>}
      {' '}
      {/* Exibe "Carregando.." quando o estado de carregamento é verdadeiro */}
      {listRender && (
        <table>
          <thead>
            <tr>
              {/* Renderiza as colunas da tabela com base no array de nomes das colunas */}
              {arrayPlanet.map((header, index) => (
                <th key={ index }>{header}</th>
              ))}
            </tr>
          </thead>
          <tbody>
            {listRender.map((planet, index) => (
              <tr key={ index }>
                {/* Renderiza as células da tabela com base nos valores dos planetas */}
                {Object.values(planet).map((value, indexPlanet) => (
                  <td
                    data-testid={ mapPlanets
                      .includes(value as string) ? 'planet-name' : '' }
                    key={ indexPlanet }
                  >
                    {value}
                  </td>
                ))}
              </tr>
            ))}
          </tbody>
        </table>
      )}
    </div>
  );
}

export default Table;
