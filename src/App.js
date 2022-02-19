import { useState } from 'react';
import './App.css';
import Header from './components/Header';
import Map from './components/Map';
import SearchBar from './components/SearchBar';
import { dijkstra } from './dijkstra/graph';

const graph = require("./data/graph.json");


function App() {
  const [initialStation, setInitialStation] = useState(0);
  const [finalStation, setFinalStation] = useState(0);

  const handleInitialStation = (e, newStation) => {
    setInitialStation(newStation);
  }

  const handleFinalStation = (e, newStation) => {
    setFinalStation(newStation);
  }

  const handleSearch = () => {
    dijkstra(initialStation.id, finalStation.id, graph)
  }

  const teste = () => {
    console.log(graph.map(e => e.name).sort((a,b) => a.localeCompare(b)));
  }

  return (
    <div className="App">
      <Header/>

      <div className="map">
        <SearchBar 
          graph={graph} 
          handleInitialStation={handleInitialStation} 
          handleSearch={handleSearch}
          handleFinalStation={handleFinalStation}
        />
        <Map />
      </div>
    </div>
  );
}

export default App;
