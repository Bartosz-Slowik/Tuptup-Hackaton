import React, { useEffect, useState } from "react";
import {
  ArrowSmallUpIcon,
  CameraIcon,
  StarIcon,
  MagnifyingGlassIcon,
} from "@heroicons/react/24/solid";
import { MdEmojiPeople } from "react-icons/md";
import { BiCalendarEvent } from "react-icons/bi";
import BigButton from "./bigButton";
import Event from "./event";
import SearchBar from "./searchBar";
import places from "../places.json";
import { EventsClass } from "../../utils/repo";

const eventTypes = ["event"];
const friendsTypes = ["sport", "party", "meeting"];
const filterEventsByType = (types: string[], array: any) => {
  return array.filter((item: any) => {
    return types.includes(item.properties.type);
  });
};
const filteredEventsByName = (name: string, array: any) => {
  return array.filter((item: any) => {
    return item.properties.title.toLowerCase().includes(name.toLowerCase());
  });
};

interface Props {
  showCreateEventPopup: () => void;
}

export default function Events({ showCreateEventPopup }: Props) {
  const [fullScreen, setFullScreen] = useState(false);
  const [filter, setFilter] = useState<"friends" | "events" | "all">("all");
  const [search, setSearch] = useState("");
  const [events, setEvents] = useState<EventsClass>(new EventsClass());

  const setFocus = (id: Number) => {
    const el1 = document.querySelector(`[data-id="${id}"]`);

    const clk = new MouseEvent("click", {
      view: window,
      bubbles: true,
      cancelable: true,
    });

    el1?.dispatchEvent(clk);

    console.log(el1);
  };

  let filteredEvents = filteredEventsByName(search, places.features);
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

  events.init();
  filteredEvents.forEach((event: any) => {
    events.show(event.properties.id);
  });

  return (
    <div
      className={`${
        fullScreen && " !bottom-0 !rounded-none !z-30"
      } fixed flex flex-col -bottom-[65vh] left-0 right-0 bg-white z-10
        p-2 rounded-t-3xl shadow-3xl h-full transition-all duration-500
        md:top-0 md:h-full md:transition-none md:rounded-none md:right-auto md:w-[22rem]`}
    >
      <div
        className="flex flex-row justify-center cursor-pointer text-gray-500 md:hidden"
        onClick={() => setFullScreen(!fullScreen)}
      >
        <ArrowSmallUpIcon
          className={`${
            fullScreen && "rotate-180"
          } h-4 w-4 transition-all duration-500`}
        />
        <ArrowSmallUpIcon
          className={`${
            fullScreen && "rotate-180"
          } h-4 w-4 transition-all duration-500`}
        />
        <ArrowSmallUpIcon
          className={`${
            fullScreen && "rotate-180"
          } h-4 w-4 transition-all duration-500`}
        />
        <ArrowSmallUpIcon
          className={`${
            fullScreen && "rotate-180"
          } h-4 w-4 transition-all duration-500`}
        />
        <ArrowSmallUpIcon
          className={`${
            fullScreen && "rotate-180"
          } h-4 w-4 transition-all duration-500`}
        />
      </div>
      <SearchBar
        Icon={MagnifyingGlassIcon}
        text="Search"
        callCack={(input) => {
          setSearch(input);
        }}
        hide={!fullScreen}
      />
      <div className={`flex flex-col flex-grow`}>
        <div
          className={`${
            fullScreen && "!order-3"
          } md:!order-3 flex flex-row space-x-2 py-2 px-2 order-1`}
        >
          <BigButton
            Icon={CameraIcon}
            className="bg-[#008B7C] text-white hover:!bg-[#00C2B0]"
            text="Take a photo"
            onClick={() => {}}
          />
          <BigButton
            Icon={BiCalendarEvent}
            className="bg-[#7209B7] text-white hover:!bg-[#9070A1]"
            text="Create event"
            onClick={() => {
              showCreateEventPopup();
            }}
          />
        </div>
        <div
          className={`${
            fullScreen && "!order-1"
          } md:!order-1 flex flex-row space-x-2 pb-2 px-2 order-1`}
        >
          <BigButton
            Icon={MdEmojiPeople}
            text="Friends"
            onClick={() => {
              filter === "friends" ? setFilter("all") : setFilter("friends");
            }}
            isSelected={filter === "friends"}
          />
          <BigButton
            Icon={StarIcon}
            text="Events"
            onClick={() => {
              filter === "events" ? setFilter("all") : setFilter("events");
            }}
            isSelected={filter === "events"}
          />
        </div>
        <div
          className={`${
            fullScreen && "!order-2"
          } md:!order-2 flex flex-col flex-grow p-2  order-3`}
        >
          {filteredEvents.map(
            (feature: {
              geometry: { coordinates: [] };
              properties: {
                type: string;
                id: any;
                title: string;
              };
            }) => {
              return (
                <Event
                  key={feature.properties.id}
                  Icon={
                    eventTypes.includes(feature.properties.type)
                      ? StarIcon
                      : MdEmojiPeople
                  }
                  text={feature.properties.title}
                  onClick={() => {
                    setFocus(feature.properties.id);
                  }}
                />
              );
            }
          )}
        </div>
      </div>
    </div>
  );
}
