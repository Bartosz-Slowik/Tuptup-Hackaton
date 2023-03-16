import { Event } from "../../types/types";
import MapIcon from "./MapIcon";

interface Props {
  event: Event;
  onClick: () => void;
}

const Marker = ({ event, onClick }: Props) => {
  return (
    <div onClick={() => onClick()} className="cursor-pointer">
      <MapIcon type={event.type} className="h-8 w-8" />
    </div>
  );
};

export default Marker;
