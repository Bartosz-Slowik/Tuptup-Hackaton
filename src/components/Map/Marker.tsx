import DefaultIcon from "../../assets/svg/beer.svg";
import { Event } from "../../types/types";

interface Props {
  event: Event;
  onClick: () => void;
}

const Marker = ({ event, onClick }: Props) => {
  return (
    <div
      onClick={() => {
        onClick();
      }}
      className="cursor-pointer"
    >
      <img src={DefaultIcon} alt="" className="h-8 w-8" />
    </div>
  );
};

export default Marker;
