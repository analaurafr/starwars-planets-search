import React from 'react';
import Table from './components/Table';
import TextFilter from './components/TextFilter';
import PlanetProvider from './context/PlanetProvider';

function App() {
  return (
    <PlanetProvider>
      <div>
        <TextFilter />
        <Table />
      </div>
    </PlanetProvider>
  );
}

export default App;
