// App.js
import React from 'react';
import './App.css';
import { PlanetProvider } from './context/PlanetContext';
import Table from './components/Table';

function App() {
  return (
    <div className="App">
      <PlanetProvider>
        <h1>Star Wars Planets</h1>
        <Table />
      </PlanetProvider>
    </div>
  );
}

export default App;
