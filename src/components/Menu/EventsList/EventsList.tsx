import ListEvent from "./ListEvent";

import { Event } from "../../../types/types";

interface Props {
  onClick: (id: Number) => void;
  events: Array<Event>;
  className?: string;
}

const EventsList = ({ onClick, events, className }: Props) => {
  return (
    <div
      className={`flex flex-grow flex-col p-2 ${className ? className : ""}`}
    >
      {events.map((event) => {
        return (
          <ListEvent
            key={event.id}
            event={event}
            onClick={(id) => onClick(id)}
          />
        );
      })}
    </div>
  );
};

export default EventsList;
