import { useEffect, useState } from "react";
import "./App.css";
import SideMenu from "./components/SideMenu/SideMenu";
import Map from "./components/Map/Map";
import Menu from "./components/Events/Events";
import CreateEvent from "./components/createEvent";
import { Event } from "./types/types";
import { EventsDataProvider } from "./hooks/EventsDataProvider";
import { EventsFocusProvider } from "./hooks/EventsFocusProvider";

function App() {
  const [focusedEvent, setFocusedEvent] = useState<Event | null>(null);
  const [createEventPopupOpen, setCreateEventPopupOpen] = useState(false);

  return (
    <div className="z-5 flex w-screen flex-col">
      <EventsDataProvider>
        <EventsFocusProvider>
          <Map />
          <SideMenu />
          <Menu showCreateEventPopup={() => setCreateEventPopupOpen(true)} />
        </EventsFocusProvider>
      </EventsDataProvider>
      {createEventPopupOpen && (
        <CreateEvent
          hideCreateEventPopup={() => setCreateEventPopupOpen(false)}
        />
      )}
    </div>
  );
}

export default App;
