import React, { useState } from "react";
import {
  ArrowSmallUpIcon,
  CameraIcon,
  StarIcon,
} from "@heroicons/react/24/solid";
import { MdEmojiPeople } from "react-icons/md";
import { BiCalendarEvent } from "react-icons/bi";
import BigButton from "./bigButton";
import Event from "./event";

export default function Events() {
  const [fullScreen, setFullScreen] = useState(false);

  return (
    <div
      className={`${
        fullScreen && "!h-full !max-h-none !rounded-none !z-30"
      } fixed bottom-0 left-0 right-0 bg-white z-10
        p-2 rounded-t-3xl shadow-3xl h-[20rem] transition-all duration-500
        md:top-0 md:h-full md:transition-none md:rounded-none md:right-auto md:w-[400px]`}
    >
      <div
        className="flex flex-row justify-center cursor-pointer text-gray-500 md:hidden"
        onClick={() => setFullScreen(!fullScreen)}
      >
        <ArrowSmallUpIcon
          className={`${
            fullScreen && "rotate-180"
          } h-4 w-4 transition-all duration-500`}
        />
        <ArrowSmallUpIcon
          className={`${
            fullScreen && "rotate-180"
          } h-4 w-4 transition-all duration-500`}
        />
        <ArrowSmallUpIcon
          className={`${
            fullScreen && "rotate-180"
          } h-4 w-4 transition-all duration-500`}
        />
        <ArrowSmallUpIcon
          className={`${
            fullScreen && "rotate-180"
          } h-4 w-4 transition-all duration-500`}
        />
        <ArrowSmallUpIcon
          className={`${
            fullScreen && "rotate-180"
          } h-4 w-4 transition-all duration-500`}
        />
      </div>
      <div className="flex flex-col p-2">
        <div className="flex flex-row space-x-2">
          <BigButton Icon={CameraIcon} text="Take a photo" onClick={() => {}} />
          <BigButton
            Icon={BiCalendarEvent}
            text="Create event"
            onClick={() => {}}
          />
        </div>
        <div className="flex flex-row space-x-2 mt-2">
          <BigButton Icon={MdEmojiPeople} text="Friends" onClick={() => {}} />
          <BigButton Icon={StarIcon} text="Events" onClick={() => {}} />
        </div>
      </div>
      <div className="flex flex-col p-2">
        <Event Icon={MdEmojiPeople} text="Bartosz" onClick={() => {}} />
        <Event Icon={StarIcon} text="Tomasz Resto Bar" onClick={() => {}} />
        <Event Icon={MdEmojiPeople} text="Szymon" onClick={() => {}} />
        <Event Icon={MdEmojiPeople} text="Hubert" onClick={() => {}} />
        <Event Icon={MdEmojiPeople} text="Pawel" onClick={() => {}} />
      </div>
    </div>
  );
}
