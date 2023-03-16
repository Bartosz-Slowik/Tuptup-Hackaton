import { StarIcon } from "@heroicons/react/24/solid";
import { MdEmojiPeople } from "react-icons/md";

interface Props {
  type: string;
  className?: string;
}

const EventIcon = ({ type, className }: Props) => {
  switch (type) {
    case "event":
      return <MdEmojiPeople className={className} />;
    case "party":
      return <StarIcon className={className} />;
    default:
      return <StarIcon className={className} />;
  }
};

export default EventIcon;
