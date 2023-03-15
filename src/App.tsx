import React, { useState } from "react";
import "./App.css";
import SideMenu from "./components/SideMenu/SideMenu";
import Map from "./components/Map/Map";
import Events from "./components/Menu/Menu";
import CreateEvent from "./components/createEvent";

import geoJson from "./components/places.json";
import { Event } from "./types/types";

function App() {
  const [events, setEvents] = useState(geoJson.places as Array<Event>);

  const [createEventPopupOpen, setCreateEventPopupOpen] = useState(false);

  const showCreateEventPopup = () => {
    setCreateEventPopupOpen(true);
  };
  const hideCreateEventPopup = () => {
    setCreateEventPopupOpen(false);
  };

  //

  return (
    <div className="z-5 flex w-screen flex-col">
      <Map events={events} />
      <SideMenu />
      <Events showCreateEventPopup={showCreateEventPopup} />
      {createEventPopupOpen && (
        <CreateEvent hideCreateEventPopup={hideCreateEventPopup} />
      )}
    </div>
  );
}

export default App;
