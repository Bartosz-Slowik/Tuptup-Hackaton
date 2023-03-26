import { useState } from "react";
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
        sdahgkasdjf
      </Menu>
    </div>
  );
}
