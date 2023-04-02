import React, { useEffect, useState } from "react";
import { Map, Overlay, Point, Bounds } from "pigeon-maps";

import Overview from "./Overview";
import { useFocus } from "../../hooks/EventsFocusProvider";
import { useEvents } from "../../hooks/EventsDataProvider";
import CustomMarker from "./CustomMarker";

const defaultCenter: Point = [50.04, 19.94];
const defaultZoom: number = 11;

export default function MyMap() {
  const { events } = useEvents();
  const { focusedEvent, setFocusedEvent } = useFocus();
  const [center, setCenter] = useState<Point>(defaultCenter);

  const onBoundariesChangeHandler = ({
    center,
    zoom,
    bounds,
    initial,
  }: {
    center: [number, number];
    bounds: Bounds;
    zoom: number;
    initial: boolean;
  }) => {
    setCenter(center);
  };

  useEffect(() => {
    if (!focusedEvent) return;
    const flyTo = [
      focusedEvent.coordinates[1],
      focusedEvent.coordinates[0],
    ] as Point;
    setCenter(flyTo);
  }, [focusedEvent]);

  return (
    <div className="absolute top-0 left-0 right-0 bottom-[30vh] md:left-[22rem] md:bottom-0">
      <Map
        defaultCenter={defaultCenter}
        defaultZoom={defaultZoom}
        center={center}
        onBoundsChanged={onBoundariesChangeHandler}
      >
        {events.map((event) => {
          return (
            <Overlay
              key={event.id}
              anchor={[event.coordinates[1], event.coordinates[0]]}
              className={`${event === focusedEvent ? "z-20" : "z-10"} h-0 w-0 `}
            >
              {event === focusedEvent ? (
                <Overview
                  title={event.title}
                  description={event.description}
                  image={`/uploads/${event.image}`}
                  friends={"PLACEHOLDER"}
                />
              ) : (
                <CustomMarker
                  type={event.type}
                  onClick={() => setFocusedEvent(event)}
                />
              )}
            </Overlay>
          );
        })}
      </Map>
    </div>
  );
}
