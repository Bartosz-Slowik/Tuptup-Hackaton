import { useEffect, useRef, useState } from "react";
import DefaultIcon from "../../assets/svg/beer.svg";
import { Event } from "../../types/types";

interface Props {
  event: Event;
  popupEl: HTMLDivElement;
  mapFlyTo: (lng: number, lat: number, offsetY: number) => void;
}

const Marker = ({ event, popupEl, mapFlyTo }: Props) => {
  return (
    <div
      onClick={() => {
        mapFlyTo(
          event.coordinates.lng,
          event.coordinates.lat,
          Math.round(popupEl.clientHeight / 2)
        );
        console.log(popupEl.clientHeight);
      }}
      className="cursor-pointer"
    >
      <img src={DefaultIcon} alt="" className="h-8 w-8" />
    </div>
  );
};

export default Marker;
