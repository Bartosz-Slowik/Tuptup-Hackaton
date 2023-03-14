import { StarIcon } from "@heroicons/react/24/solid";
import { MdEmojiPeople } from "react-icons/md";
import BigButton from "../UI/BigButton";

interface Props {
  className?: string;
  filter: "friends" | "events" | "all";
  setFilter: (filter: "friends" | "events" | "all") => void;
}

const FiltersRow = ({ className, filter, setFilter }: Props) => {
  return (
    <div
      className={`flex flex-row space-x-2 p-2 ${className ? className : ""}`}
    >
      <BigButton
        className={`${
          filter === "friends" && "!bg-[#007EFF]"
        } hover:bg-[#00B1D9]`}
        Icon={MdEmojiPeople}
        text="Friends"
        onClick={() => setFilter(filter === "friends" ? "all" : "friends")}
      />
      <BigButton
        className={`${
          filter === "events" && "!bg-[#007EFF]"
        } hover:bg-[#00B1D9]`}
        Icon={StarIcon}
        text="Events"
        onClick={() => setFilter(filter === "events" ? "all" : "events")}
      />
    </div>
  );
};

export default FiltersRow;
