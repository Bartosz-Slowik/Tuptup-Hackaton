import { useState } from "react";
import Events from "../components/Events/Events";
import MyMap from "../components/Map/Map";
import Memories from "../components/Memories/Memories";
import SideMenu from "../components/SideMenu/SideMenu";
import { EventsDataProvider } from "../hooks/EventsDataProvider";
import { EventsFocusProvider } from "../hooks/EventsFocusProvider";

const Main = () => {
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
    </div>
  );
};

export default Main;
