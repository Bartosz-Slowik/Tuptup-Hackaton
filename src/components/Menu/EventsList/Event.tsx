import { StarIcon } from "@heroicons/react/24/solid";
import { MdEmojiPeople } from "react-icons/md";
import Button from "../../UI/Button";

interface Props {
  eventObject: any;
  onClick: (id: Number) => void;
}

const eventTypes = ["event"];
const friendsTypes = ["sport", "party", "meeting"];

export default function bigButton({ eventObject, onClick }: Props) {
  return (
    <Button
      Icon={
        eventTypes.includes(eventObject.properties.type)
          ? StarIcon
          : MdEmojiPeople
      }
      text={eventObject.properties.title}
      onClick={() => {
        onClick(eventObject.properties.id);
      }}
    />
  );
}
