import { StarIcon } from "@heroicons/react/24/solid";
import { MdEmojiPeople } from "react-icons/md";
import BeerIcon from "../assets/svg/beer.svg";
import SportIcon from "../assets/svg/chop.svg";
import DefaultIcon from "../assets/svg/pin.svg";

interface Props {
  event: string;
  size: "small" | "large";
  className?: string;
}

const EventIcon = ({ event, size, className }: Props) => {
  if (size === "small") {
    switch (event) {
      case "event":
        return <MdEmojiPeople className={className} />;
      case "party":
        return <StarIcon className={className} />;
      default:
        return <StarIcon className={className} />;
    }
  }

  switch (event) {
    case "event":
      return <img src={DefaultIcon} alt="" className={className} />;
    case "party":
      return <img src={BeerIcon} alt="" className={className} />;
    default:
      return <img src={SportIcon} alt="" className={className} />;
  }
};

export default EventIcon;
