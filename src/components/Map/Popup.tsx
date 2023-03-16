import { User } from "../../types/types";
import { Event } from "../../types/types";
import MapIcon from "./MapIcon";

interface Props {
  event: Event;
}

const Popup = ({ event }: Props) => {
  const { title, description, image, participants, type } = event;
  return (
    <div className="relative flex w-[12rem] flex-col rounded-xl bg-white p-1 shadow-2xl">
      <MapIcon type={type} className=" absolute -top-6 -left-6 h-14 w-14" />
      <div className="flex items-center justify-center px-2 pt-1 text-center text-lg font-bold">
        {title}
      </div>
      <div className="font-bolder  flex items-center justify-center px-3 py-1 text-center">
        {description}
      </div>
      <div className="-mx-1 py-1">
        <img src={"uploads/" + image} alt="" />
      </div>
      <div className="font-bolder m-2 flex cursor-pointer flex-row justify-center rounded bg-blue-600 p-1 text-center text-white">
        JOIN
      </div>
      <div className="mb-2 flex flex-col px-2 text-center text-xs">
        <div className="font-bold ">Your friends are here:</div>
        <div className="text-center text-blue-400">
          {participants.map((participant) => {
            return <>{participant.name}</>;
          })}
        </div>
      </div>
    </div>
  );
};

export default Popup;
