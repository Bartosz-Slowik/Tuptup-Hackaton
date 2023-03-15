import React, { useState } from "react";
import "./App.css";
import SideMenu from "./components/SideMenu/SideMenu";
import Map from "./components/Map/Map";
import Menu from "./components/Menu/Menu";
import CreateEvent from "./components/createEvent";

import geoJson from "./components/places.json";
import { Event } from "./types/types";

function App() {
  const [events, setEvents] = useState(geoJson.places as Array<Event>);
  const [focusedEvent, setFocusedEvent] = useState<Event | null>(null);

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
      <Map
        events={events}
        focusedEvent={focusedEvent}
        setFocusedEvent={setFocusedEvent}
      />
      <SideMenu />
      <Menu
        events={events}
        focusedEvent={focusedEvent}
        setFocusedEvent={setFocusedEvent}
        showCreateEventPopup={showCreateEventPopup}
      />
      {createEventPopupOpen && (
        <CreateEvent hideCreateEventPopup={hideCreateEventPopup} />
      )}
    </div>
  );
}

export default App;
