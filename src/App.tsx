import React, { useState } from 'react';
import './App.css';
import Table from './components/Table';
import { PlanetProvider } from './context/PlanetContext';

function App() {
  const [filterText, setFilterText] = useState('');

  const handleFilterChange = (event) => {
    setFilterText(event.target.value);
  };

  return (
    <div className="App">
      <PlanetProvider>
        <h1>Star Wars Planets</h1>
        <input
          type="text"
          value={ filterText }
          onChange={ handleFilterChange }
          placeholder="Filtrar por nome..."
          data-testid="name-filter"
        />
        <Table filterText={ filterText } />
      </PlanetProvider>
    </div>
  );
}

export default App;
