import Event from "./Event";

interface Props {
  onClick: (id: Number) => void;
  events: any;
  className?: string;
}

const EventsList = ({ onClick, events, className }: Props) => {
  return (
    <div
      className={`flex flex-grow flex-col p-2 ${className ? className : ""}`}
    >
      {events.map(
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
              eventObject={feature}
              onClick={(id) => onClick(id)}
            />
          );
        }
      )}
    </div>
  );
};

export default EventsList;
