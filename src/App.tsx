import React from 'react';
import './App.css';
import Navi from "./components/navi";
import Map from "./components/Map";

function App() {
  return (

    <div className="w-screen flex flex-col">
      <Map />
      <Navi />
      
    </div>
    
  );
}

export default App;

