import { useState } from "react";
import EventsList from "../EventsList/EventsList";
import Menu from "../UI/Menu";

interface Props {
  showCreateEventPopup: () => void;
}

export default function Memories({ showCreateEventPopup }: Props) {
  const [fullScreen, setFullScreen] = useState(false);

  const onFullScreenChangeHandler = () => {
    setFullScreen((prev) => !prev);
  };

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
