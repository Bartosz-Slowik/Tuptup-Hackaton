import React, { useState } from "react";
import { Bars3Icon, UserIcon } from "@heroicons/react/24/solid";

export default function Navi() {
  const [open, setOpen] = useState(false);

  const toggle = (action: "show" | "hide") => {
    action === "show" ? setOpen(true) : setOpen(false);
  };

  return (
    <div className="w-screen fixed">
      <div
        className={`${
          open ? "scale-0" : "scale-100"
        } fixed cursor-pointer rounded-full top-5 right-5 bg-violet-900
      text-white p-2 flex text-center justify-center shadow-lg transition-all`}
        onClick={() => toggle("show")}
      >
        <Bars3Icon className="h-8 w-8 " />
      </div>
      <div
        className={` ${
          !open ? "bg-black/0 w-0 h-0" : " bg-black/70 right-0 bottom-0"
        } fixed left-0 top-0  transition-colors`}
        onClick={() => toggle("hide")}
      ></div>
      <div
        className={`${
          open ? "right-0" : "-right-[400px]"
        } absolute right-0 h-screen w-[400px] bg-white transition-all duration-300
          flex flex-col`}
      >
        <div className="p-5 w-full flex flex-row">
          <div className="flex justify-center items-center p-3 rounded-full bg-gray-200">
            <UserIcon className="h-6 w-6 " />
          </div>
          <div className="flex flex-col ml-3">
            <div className=" font-bold ">Adrian</div>
            <div className=" text-green-500 text-sm ">Edit profile</div>
          </div>
        </div>
      </div>
    </div>
  );
}
