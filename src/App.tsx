import React from "react";
import "./App.css";
import Navi from "./components/Navi/navi";
import Map from "./components/Map/Map";
import Events from "./components/events/events";

function App() {
  return (
    <div className="w-screen flex flex-col z-5">
      <Map />
      <Navi />
      <Events
        setFocus={(coor) => {
          console.log(coor);
        }}
      />
    </div>
  );
}

export default App;
