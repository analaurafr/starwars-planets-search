import Table from './components/Table';
import PlanetProvider from './context/PlanetProvider';

function App() {
  return (
    <PlanetProvider>
      <div>
        <h1>Starwars Planets</h1>
        <Table />
      </div>
    </PlanetProvider>
  );
}

export default App;
