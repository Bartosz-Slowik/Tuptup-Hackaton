import { useState } from "react";
import SearchBar from "./SearchBar";
import EventsList from "./EventsList/EventsList";
import FiltersRow from "./FIltersRow";
import NewEventRow from "./NewEventRow";
import Menu from "../UI/Menu";

interface Props {
  showCreateEventPopup: () => void;
}

export default function Events({ showCreateEventPopup }: Props) {
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
        <SearchBar className={`order-2 md:!block ${!fullScreen && "hidden"}`} />

        <NewEventRow
          className={`${fullScreen && "!order-5"} order-3 md:!order-5`}
          onTakePhoto={() => {}}
          onUploadPhoto={() => {
            showCreateEventPopup();
          }}
        />

        <FiltersRow
          className={`${
            fullScreen && "!order-3"
          } order-4 !pb-2 !pt-0 md:!order-3`}
        />

        <EventsList
          className={`${fullScreen && "!order-4"} order-5  md:!order-4`}
          onClick={() => {
            setFullScreen(false);
          }}
        />
      </Menu>
    </div>
  );
}
