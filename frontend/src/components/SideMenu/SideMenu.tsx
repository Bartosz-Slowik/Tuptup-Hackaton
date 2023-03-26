import { useState } from "react";
import UserProfile from "./UserProfile";
import {
  UserGroupIcon,
  EnvelopeIcon,
  InformationCircleIcon,
} from "@heroicons/react/24/solid";

import { IoMdImages } from "react-icons/io";
import { StarIcon } from "@heroicons/react/24/solid";
import MenuSection from "./MenuSection";
import UserTags from "./UserTags";
import Button from "../UI/Button";
import FixedIcon from "./FixedIcon";
import Background from "./Background";

interface Props {
  onChangeAppState: (state: "main" | "memories") => void;
}

export default function SideMenu({ onChangeAppState }: Props) {
  const [open, setOpen] = useState(false);

  const toggle = (action: "show" | "hide") => {
    action === "show" ? setOpen(true) : setOpen(false);
  };

  const onSetAppState = (state: "main" | "memories") => {
    onChangeAppState(state);
    toggle("hide");
  };

  return (
    <div className="z-20">
      {!open && <FixedIcon onClick={() => toggle("show")} />}
      <Background active={open} onClick={() => toggle("hide")} />
      <div
        className={`fixed top-0 bottom-0 flex w-[300px] flex-col
        gap-2 bg-gray-100 transition-all duration-300 ${
          open ? "right-0" : "-right-[300px]"
        }`}
      >
        <MenuSection>
          <UserProfile />
          <UserTags />
        </MenuSection>

        <MenuSection>
          <Button
            text="Events"
            Icon={StarIcon}
            onClick={() => onSetAppState("main")}
          />
          <Button text="Friends" Icon={UserGroupIcon} />
          <Button text="Messages" Icon={EnvelopeIcon} />
          <Button
            text="Memories"
            Icon={IoMdImages}
            onClick={() => onSetAppState("memories")}
          />
        </MenuSection>

        <MenuSection className="flex-grow justify-end">
          <Button text="About us" Icon={InformationCircleIcon} />
          <div className="-m-2 mt-2 flex cursor-pointer flex-col rounded bg-violet-900 p-2 text-white">
            <div className="font-bold">Contact Us</div>
            <div>For advertising and colaboration</div>
          </div>
        </MenuSection>
      </div>
    </div>
  );
}
