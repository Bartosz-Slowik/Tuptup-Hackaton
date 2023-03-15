import { useState } from "react";
import { MagnifyingGlassIcon } from "@heroicons/react/24/solid";
import SearchBar from "./SearchBar";
import places from "../places.json";
import { EventsClass } from "../../utils/repo";
import ExpandArrows from "./ExpandArrows";
import EventsList from "./EventsList/EventsList";
import FiltersRow from "./FIltersRow";
import NewEventRow from "./NewEventRow";

import { Event } from "../../types/types";

const eventTypes = ["event"];
const friendsTypes = ["sport", "party"];

const filterEventsByType = (types: string[], array: Array<Event>) => {
  return array.filter((item: Event) => {
    return types.includes(item.type);
  });
};
const filteredEventsByName = (name: string, array: Array<Event>) => {
  return array.filter((item: Event) => {
    return item.title.toLowerCase().includes(name.toLowerCase());
  });
};

interface Props {
  showCreateEventPopup: () => void;
}

export default function Events({ showCreateEventPopup }: Props) {
  const [fullScreen, setFullScreen] = useState(false);
  const [filter, setFilter] = useState<"friends" | "events" | "all">("all");
  const [search, setSearch] = useState("");
  //const [events, setEvents] = useState<EventsClass>(new EventsClass());

  // const setFocus = (id: Number) => {
  //   const el1 = document.querySelector(`[data-id="${id}"]`);

  //   const clk = new MouseEvent("click", {
  //     view: window,
  //     bubbles: true,
  //     cancelable: true,
  //   });

  //   el1?.dispatchEvent(clk);

  //   console.log(el1);
  // };

  const allEvents: Array<Event> = places.places;

  let filteredEvents = filteredEventsByName(search, allEvents);
  switch (filter) {
    case "friends":
      filteredEvents = filterEventsByType(friendsTypes, filteredEvents);
      break;
    case "events":
      filteredEvents = filterEventsByType(eventTypes, filteredEvents);
      break;
    default:
      break;
  }

  //events.init();
  // filteredEvents.forEach((event: any) => {
  //   events.show(event.properties.id);
  // });

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
        Icon={MagnifyingGlassIcon}
        text="Search"
        callCack={(input) => {
          setSearch(input);
        }}
      />

      <NewEventRow
        className={`${fullScreen && "!order-5"} order-3 md:!order-5`}
        onTakePhoto={() => {}}
        onUploadPhoto={() => {}}
      />

      <FiltersRow
        className={`${
          fullScreen && "!order-3"
        } order-4 !pb-2 !pt-0 md:!order-3`}
        filter={filter}
        setFilter={(filter) => setFilter(filter)}
      />

      <EventsList
        className={`${fullScreen && "!order-4"} order-5  md:!order-4`}
        onClick={(id: Number) => {
          //setFocus(id);
          setFullScreen(false);
        }}
        events={filteredEvents}
      />
    </div>
  );
}
