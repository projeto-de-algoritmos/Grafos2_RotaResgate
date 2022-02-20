import { useState } from 'react';
import './App.css';
import Header from './components/Header';
import Map from './components/Map';
import SearchBar from './components/SearchBar';
import MapChoice from './components/MapChoice';
import { dijkstra } from './dijkstra/graph';

const graph = require("./data/europeGraph.json");


function App() {
  const [initialStation, setInitialStation] = useState(0);
  const [finalStation, setFinalStation] = useState(0);
  const [currentMap, setCurrentMap] = useState("europe");
  const [currentGraph, setCurrentGraph] = useState(graph);

  const allMaps = [
    {
      name: "europe",
      label: "Europa"
    },
    {
      name: "usa",
      label: "Estados Unidos"
    },
    {
      name: "pennsylvania",
      label: "Pensilvânia"
    }
  ];

  const handleInitialStation = (e, newStation) => {
    setInitialStation(newStation);
  }

  const handleFinalStation = (e, newStation) => {
    setFinalStation(newStation);
  }

  const handleSearch = () => {
    dijkstra(initialStation.id, finalStation.id, currentGraph)
  }

  const handleMap = (e, newMap) => {
    setCurrentMap(newMap.name);
    setCurrentGraph(require(`./data/${newMap.name}Graph.json`));
  }

  const changeMap = () => {

  }

  return (
    <div className="App">
      <Header/>

      <div className="map">
        <SearchBar 
          graph={currentGraph} 
          handleInitialStation={handleInitialStation} 
          handleSearch={handleSearch}
          handleFinalStation={handleFinalStation}
        />
        <Map 
          currentMap={currentMap}
        />
        <MapChoice 
          allMaps={allMaps}
          handleMap={handleMap}
        />
      </div>
    </div>
  );
}

export default App;
