import ListEvent from "./ListEvent";
import { Event } from "../../../types/types";

interface Props {
  events: Array<Event>;
  focusedEvent: Event | null;
  setFocusedEvent: (event: Event | null) => void;
  className?: string;
}

const EventsList = ({
  events,
  focusedEvent,
  setFocusedEvent,
  className,
}: Props) => {
  const isFocusedOn = (event: Event) => {
    if (!focusedEvent) return false;
    return event.id === focusedEvent.id;
  };
  const toggleFocus = (event: Event) => {
    if (!focusedEvent) setFocusedEvent(event);
    else if (focusedEvent.id !== event.id) setFocusedEvent(event);
    else setFocusedEvent(null);
  };
  return (
    <div
      className={`flex flex-grow flex-col p-2 ${className ? className : ""}`}
    >
      {events.map((event) => {
        return (
          <ListEvent
            key={event.id}
            event={event}
            onClick={() => toggleFocus(event)}
            className={`${isFocusedOn(event) ? "bg-gray-200" : ""}`}
          />
        );
      })}
    </div>
  );
};

export default EventsList;
