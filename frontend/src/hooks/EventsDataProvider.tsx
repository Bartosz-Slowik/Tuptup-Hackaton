import React, { useCallback, useMemo, useState } from "react";
import { Event } from "../types/types";
import getEvents from "./getEvents";

interface EventsDataContextType {
  events: Event[];
  typeQuery: string;
  setTypeQuery: (type: string) => void;
  searchQuery: string;
  setSearchQuery: (search: string) => void;
  loading: boolean;
}

const EventsDataContext = React.createContext<EventsDataContextType>(
  {} as EventsDataContextType
);

interface Props {
  children: React.ReactNode;
}

const EventsDataProvider = ({ children }: Props) => {
  const [typeQuery, setTypeQuery] = useState<string>("");
  const [searchQuery, setSearchQuery] = useState<string>("");
  const [loading, setLoading] = useState<boolean>(false);

  const loadEvents = useCallback(() => {
    setLoading(true);
    const events = getEvents(typeQuery, searchQuery);
    setLoading(false);
    return events;
  }, [typeQuery, searchQuery]);

  const value = useMemo(() => {
    const eventsData = {} as EventsDataContextType;
    eventsData.events = loadEvents();
    eventsData.typeQuery = typeQuery;
    eventsData.setTypeQuery = setTypeQuery;
    eventsData.searchQuery = searchQuery;
    eventsData.setSearchQuery = setSearchQuery;
    eventsData.loading = loading;
    return eventsData;
  }, [typeQuery, searchQuery, loadEvents, loading]);

  return (
    <EventsDataContext.Provider value={value}>
      {children}
    </EventsDataContext.Provider>
  );
};

export { EventsDataProvider };
export const useEvents = () => React.useContext(EventsDataContext);
