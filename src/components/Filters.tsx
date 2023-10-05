import useFilters from '../hooks/hook';

function Filters() {
  // Utiliza o hook personalizado `useFilters` para obter funções e estados relacionados aos filtros e ordenação.
  const {
    filterByName,
    handleChange,
    filterInfoNumber,
    pilarOptions,
    filterOptions,
    deleteFilter,
    pilarFilter,
    takeOrder,
    orderPlanets,
  } = useFilters();

  // Opções para o filtro de comparação.
  const likenFilter = ['maior que', 'menor que', 'igual a'];

  return (
    <div>
      <form>
        <label htmlFor="filterByName">
          Name:
          <input
            type="text"
            id="filterByName"
            data-testid="name-filter"
            onChange={ (event) => filterByName(event.target.value) }
          />
        </label>

        <div>
          <select
            name="column"
            data-testid="column-filter"
            onChange={ (event) => handleChange(event) }
          >
            {/* Mapeia as opções disponíveis para a coluna de filtro */}
            {pilarOptions.map((columnValue: any, index: any) => (
              <option key={ index } value={ columnValue }>
                {columnValue}
              </option>
            ))}
          </select>

          <select
            name="comparison"
            data-testid="comparison-filter"
            onChange={ (event) => handleChange(event) }
          >
            {/* Mapeia as opções para o tipo de comparação */}
            {likenFilter.map((comparison, index) => (
              <option key={ index } value={ comparison }>
                {comparison}
              </option>
            ))}
          </select>

          <input
            name="value"
            type="number"
            defaultValue={ 0 }
            data-testid="value-filter"
            onChange={ (event) => handleChange(event) }
          />
          <button
            type="button"
            data-testid="button-filter"
            onClick={ filterInfoNumber }
          >
            Filtrar
          </button>
        </div>

        <div>
          <select
            name="columnSort"
            data-testid="column-sort"
            onChange={ (event) => takeOrder(event) }
          >
            {/* Mapeia as opções para a coluna de ordenação */}
            {pilarFilter.map((columnValue: any, index: any) => (
              <option key={ index } value={ columnValue }>
                {columnValue}
              </option>
            ))}
          </select>

          <label htmlFor="ASCinput">
            Ascendente
            <input
              onChange={ (event) => takeOrder(event) }
              type="radio"
              value="ASC"
              name="columnSortOrder"
              data-testid="column-sort-input-asc"
              id="ASCinput"
            />
          </label>

          <label htmlFor="DESCinput">
            Descendente
            <input
              onChange={ (event) => takeOrder(event) }
              type="radio"
              value="DESC"
              name="columnSortOrder"
              data-testid="column-sort-input-desc"
              id="DESCinput"
            />
          </label>

          <button
            type="button"
            data-testid="column-sort-button"
            onClick={ orderPlanets }
          >
            Ordenar
          </button>
        </div>

        <button
          name="removeFilters"
          type="button"
          data-testid="button-remove-filters"
          onClick={ (event) => deleteFilter(event) }
        >
          Remover Filtros
        </button>
      </form>

      {filterOptions.length > 0 && (
        <ul>
          {/* Mapeia e exibe os filtros ativos */}
          {filterOptions.map((filter: any, index: any) => (
            <li key={ index } data-testid="filter">
              {`${filter.column} ${filter.comparison} ${filter.value}`}
              <button
                name="X"
                onClick={ (event) => deleteFilter(event, filter.column) }
              >
                X
              </button>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}

export default Filters;
