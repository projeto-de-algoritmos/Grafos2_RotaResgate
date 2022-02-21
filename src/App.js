import { useState } from 'react';
import './App.css';
import Header from './components/Header';
import Map from './components/Map';
import SearchPath from './components/SearchPath';
import MapChoice from './components/MapChoice';
import { dijkstra } from './dijkstra/graph';
import Result from './components/Result';

const graph = require("./data/europeGraph.json");


function App() {
  const [initialStation, setInitialStation] = useState(0);
  const [finalStation, setFinalStation] = useState(0);
  const [currentMap, setCurrentMap] = useState("europe");
  const [currentGraph, setCurrentGraph] = useState(graph);
  const [resultTitle, setResultTitle] = useState('Realize uma pesquisa:');
  const [route, setRoute] = useState([]);

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
    try{
      const path = dijkstra(initialStation.id, finalStation.id, currentGraph)
  
      setRoute(path);
      setResultTitle('Menor Rota:')

    }catch{
      window.alert("Selecione as Estações")
    }
  }

  const handleMap = (e, newMap) => {
    setCurrentMap(newMap.name);
    setCurrentGraph(require(`./data/${newMap.name}Graph.json`));
  }

  return (
    <div className="App">
      <Header/>

      <div className="map">
        <div className="leftContainer">
          <div className="insideContainer">
            <div>
              Selecione a Estação Inicial e a Estação Final e clique em Encontrar:
            </div>
            <SearchPath
              graph={currentGraph}
              handleInitialStation={handleInitialStation}
              handleSearch={handleSearch}
              handleFinalStation={handleFinalStation}
            />
          </div>
          <div className="insideContainer">
            <div>
              Mapas Disponíveis:
            </div>
            <MapChoice
              allMaps={allMaps}
              handleMap={handleMap}
            />
          </div>
        </div>
        <Map
          currentMap={currentMap}
        />
        <Result 
          route={route}
          resultTitle={resultTitle}
        />
      </div>
    </div>
  );
}

export default App;
