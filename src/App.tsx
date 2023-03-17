import { useEffect, useState } from "react";
import "./App.css";
import SideMenu from "./components/SideMenu/SideMenu";
import Map from "./components/Map/Map";
import Menu from "./components/Menu/Menu";
import CreateEvent from "./components/createEvent";
import geoJson from "./components/places.json";
import { Event } from "./types/types";

const publicEventEventTypes = ["event"];
const friendsActivityEventTypes = ["sport", "party"];

const filterEventsByType = (eventTypes: string[], array: Array<Event>) => {
  return array.filter((item: Event) => {
    return eventTypes.includes(item.type);
  });
};
const filteredEventsByName = (query: string, array: Array<Event>) => {
  return array.filter((item: Event) => {
    return item.title.toLowerCase().includes(query.toLowerCase());
  });
};

function App() {
  const allEvents = geoJson.places as Array<Event>;
  const [events, setEvents] = useState(allEvents);
  const [focusedEvent, setFocusedEvent] = useState<Event | null>(null);
  const [createEventPopupOpen, setCreateEventPopupOpen] = useState(false);
  const [filteredType, setFilteredType] = useState<
    "friendsActivity" | "publicEvents" | "all"
  >("all");
  const [searchQuery, setSearchQuery] = useState("");

  useEffect(() => {
    let filteredEvents = filteredEventsByName(searchQuery, allEvents);
    if (filteredType === "friendsActivity") {
      filteredEvents = filterEventsByType(
        friendsActivityEventTypes,
        filteredEvents
      );
    } else if (filteredType === "publicEvents") {
      filteredEvents = filterEventsByType(
        publicEventEventTypes,
        filteredEvents
      );
    }
    setEvents(filteredEvents);
  }, [filteredType, searchQuery, allEvents]);

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
        searchQuery={searchQuery}
        setSearchQuery={setSearchQuery}
        filteredType={filteredType}
        setFilteredType={setFilteredType}
        showCreateEventPopup={() => setCreateEventPopupOpen(true)}
      />
      {createEventPopupOpen && (
        <CreateEvent
          hideCreateEventPopup={() => setCreateEventPopupOpen(false)}
        />
      )}
    </div>
  );
}

export default App;
