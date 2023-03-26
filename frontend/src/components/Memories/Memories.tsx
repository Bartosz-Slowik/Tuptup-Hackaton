import { useEffect, useState } from "react";
import { useEvents } from "../../hooks/EventsDataProvider";
import EventsList from "../EventsList/EventsList";
import Menu from "../UI/Menu";

interface Props {
  showCreateEventPopup: () => void;
}

export default function Memories({ showCreateEventPopup }: Props) {
  const [fullScreen, setFullScreen] = useState(false);
  const { collection, setCollection } = useEvents();

  const onFullScreenChangeHandler = () => {
    setFullScreen((prev) => !prev);
  };

  useEffect(() => {
    if (collection !== "memories") {
      setCollection("memories");
      console.log("memories");
    }
  }, [collection, setCollection]);

  return (
    <div>
      <Menu
        fullScreen={fullScreen}
        onFullScreenChange={onFullScreenChangeHandler}
      >
        <EventsList onClick={() => {}} />
      </Menu>
    </div>
  );
}
