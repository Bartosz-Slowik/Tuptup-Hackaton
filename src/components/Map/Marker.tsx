import { useEffect } from "react";
import { Event } from "../../types/types";
import MapIcon from "./MapIcon";
import * as ReactDOM from "react-dom/client";

interface Props {
  event: Event;
  onClick: () => void;
}

const Marker = ({ event, onClick }: Props) => {
  // useEffect(() => {
  //   if (event.id === 1) {
  //     const interval = setInterval(() => {
  //       console.log("still here");
  //     }, 1000);
  //     return () => clearInterval(interval);
  //   }
  // });

  return (
    <div onClick={() => onClick()} className="cursor-pointer">
      <MapIcon type={event.type} className="h-8 w-8" />
    </div>
  );
};

export default Marker;
