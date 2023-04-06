import { useState } from "react";
import SideMenu from "./components/SideMenu/SideMenu";
import MyMap from "./components/Map/Map";
import Events from "./components/Events/Events";
import CreateEvent from "./components/createEvent";
import { EventsDataProvider } from "./hooks/EventsDataProvider";
import { EventsFocusProvider } from "./hooks/EventsFocusProvider";
import Memories from "./components/Memories/Memories";

import "./App.css";

function App() {
  const [createEventPopupOpen, setCreateEventPopupOpen] = useState(false);
  //TODO - move to react router
  const [appState, setAppState] = useState<"main" | "memories">("main");

  const onChangeAppStateHandler = (state: "main" | "memories") => {
    setAppState(state);
  };

  return (
    <div className="z-5 flex w-screen flex-col">
      <EventsDataProvider>
        <EventsFocusProvider>
          <MyMap />
          <SideMenu onChangeAppState={onChangeAppStateHandler} />
          {appState === "main" && (
            <Events
              showCreateEventPopup={() => setCreateEventPopupOpen(true)}
            />
          )}
          {appState === "memories" && (
            <Memories
              showCreateEventPopup={() => setCreateEventPopupOpen(true)}
            />
          )}
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
