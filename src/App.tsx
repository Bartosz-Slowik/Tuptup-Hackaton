import React from 'react';
import './App.css';
import Navi from "./components/Navi/navi";
import Map from "./components/Map/Map";

function App() {
  return (

    <div className="w-screen flex flex-col">
      <Map />
      <Navi />
      
    </div>
    
  );
}

export default App;

