import EventIcon from "./EventIcon";
import { Event } from "../../../types/types";

interface Props {
  event: Event;
  onClick: (id: Number) => void;
}

export default function ListEvent({ event, onClick }: Props) {
  return (
    <button
      className={`flex cursor-pointer flex-row p-2`}
      onClick={() => onClick(event.id)}
    >
      <EventIcon type={event.type} className="h-6 w-6" />
      <div className="ml-4">{event.title}</div>
    </button>
  );
}
