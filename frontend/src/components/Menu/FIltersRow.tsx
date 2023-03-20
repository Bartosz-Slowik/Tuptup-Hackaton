import { StarIcon } from "@heroicons/react/24/solid";
import { MdEmojiPeople } from "react-icons/md";
import BigButton from "../UI/BigButton";

interface Props {
  className?: string;
  filter: "friendsActivity" | "publicEvents" | "all";
  setFilter: (filter: "friendsActivity" | "publicEvents" | "all") => void;
}

const FiltersRow = ({ className, filter, setFilter }: Props) => {
  return (
    <div
      className={`flex flex-row space-x-2 p-2 ${className ? className : ""}`}
    >
      <BigButton
        className={`${
          filter === "friendsActivity" && "!bg-[#007EFF]"
        } hover:bg-[#00B1D9]`}
        Icon={MdEmojiPeople}
        text="Friends"
        onClick={() =>
          setFilter(filter === "friendsActivity" ? "all" : "friendsActivity")
        }
      />
      <BigButton
        className={`${
          filter === "publicEvents" && "!bg-[#007EFF]"
        } hover:bg-[#00B1D9]`}
        Icon={StarIcon}
        text="Events"
        onClick={() =>
          setFilter(filter === "publicEvents" ? "all" : "publicEvents")
        }
      />
    </div>
  );
};

export default FiltersRow;
