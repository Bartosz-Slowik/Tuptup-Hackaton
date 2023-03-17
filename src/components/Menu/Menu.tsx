import { useState } from "react";
import SearchBar from "./SearchBar";
import ExpandArrows from "./ExpandArrows";
import EventsList from "./EventsList/EventsList";
import FiltersRow from "./FIltersRow";
import NewEventRow from "./NewEventRow";
import { Event } from "../../types/types";

interface Props {
  showCreateEventPopup: () => void;
  events: Array<Event>;
  focusedEvent: Event | null;
  setFocusedEvent: (event: Event | null) => void;
  searchQuery: string;
  setSearchQuery: (searchQuery: string) => void;
  filteredType: "friendsActivity" | "publicEvents" | "all";
  setFilteredType: (
    filteredType: "friendsActivity" | "publicEvents" | "all"
  ) => void;
}

export default function Events({
  showCreateEventPopup,
  events,
  focusedEvent,
  setFocusedEvent,
  searchQuery,
  setSearchQuery,
  filteredType,
  setFilteredType,
}: Props) {
  const [fullScreen, setFullScreen] = useState(false);

  return (
    <div
      className={`${
        fullScreen && " !bottom-0 !z-30 !rounded-none"
      } fixed -bottom-[65vh] left-0 right-0 z-10 flex h-full
        flex-col rounded-t-3xl bg-white p-2 shadow-2xl transition-all
        duration-500 md:top-0 md:right-auto md:h-full md:w-[22rem] md:rounded-none
        md:transition-none`}
    >
      <div
        className="order-1 flex cursor-pointer flex-row justify-center md:hidden"
        onClick={() => setFullScreen(!fullScreen)}
      >
        <ExpandArrows direction={fullScreen ? "down" : "up"} />
      </div>

      <SearchBar
        className={`order-2 md:!block ${!fullScreen && "hidden"}`}
        text="Search"
        value={searchQuery}
        setValue={setSearchQuery}
      />

      <NewEventRow
        className={`${fullScreen && "!order-5"} order-3 md:!order-5`}
        onTakePhoto={() => {}}
        onUploadPhoto={() => {
          showCreateEventPopup();
        }}
      />

      <FiltersRow
        className={`${
          fullScreen && "!order-3"
        } order-4 !pb-2 !pt-0 md:!order-3`}
        filter={filteredType}
        setFilter={setFilteredType}
      />

      <EventsList
        className={`${fullScreen && "!order-4"} order-5  md:!order-4`}
        focusedEvent={focusedEvent}
        setFocusedEvent={(event: Event | null) => {
          setFocusedEvent(event);
          setFullScreen(false);
        }}
        events={events}
      />
    </div>
  );
}
