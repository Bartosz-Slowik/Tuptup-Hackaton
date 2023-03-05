import React from 'react';
import './App.css';
import Navi from "./components/Navi/navi";
import Map from "./components/Map/Map";
import Add_event from './components/Add_event/add_event';
function App() {
  return (

    <div className="w-screen flex flex-col">
      <Map />
      <Navi />
      <Add_event />
    </div>
    
  );
}

export default App;

