import React, { useState } from "react";
import {
  Bars3Icon,
  UserIcon,
  UserGroupIcon,
  EnvelopeIcon,
  InformationCircleIcon,
} from "@heroicons/react/24/solid";

import { IoMdImages } from "react-icons/io";

export default function Navi() {
  const [open, setOpen] = useState(false);

  const toggle = (action: "show" | "hide") => {
    action === "show" ? setOpen(true) : setOpen(false);
  };

  return (
    <div className="w-screen fixed z-20">
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
          open ? "right-0" : "-right-[300px]"
        } absolute h-screen w-[300px] transition-all duration-300
          flex flex-col bg-gray-100`}
      >
        <div className="p-4 w-full flex flex-col bg-white shadow-md">
          <div className=" flex flex-row">
            <div className="flex justify-center items-center p-3 rounded-full bg-gray-200">
              <UserIcon className="h-6 w-6 " />
            </div>
            <div className="flex flex-col ml-3">
              <div className=" font-bold ">Adrian</div>
              <div className=" text-green-500 text-sm ">Edit profile</div>
            </div>
          </div>
          <div className=" text-blue-500 text-sm px-1 pt-3">
            #Informatyka #Sport #PK #Student
          </div>
        </div>
        <div className="p-2 w-full flex flex-col bg-white mt-1.5 shadow-md">
          <div className="flex  flex-row p-2 cursor-pointer">
            <UserGroupIcon className="w-6 h-6" />
            <div className="ml-4">Friends</div>
          </div>

          <div className="flex flex-row p-2 cursor-pointer">
            <EnvelopeIcon className="w-6 h-6" />
            <div className="ml-4">Messages</div>
          </div>
          <div className="flex flex-row p-2 cursor-pointer">
            <IoMdImages className="w-6 h-6" />
            <div className="ml-4">Stories</div>
          </div>
        </div>
        <div className="p-2 w-full flex flex-col justify-end bg-white mt-1.5 shadow-md flex-grow">
          <div className="flex flex-row p-2 cursor-pointer">
            <InformationCircleIcon className="w-6 h-6" />
            <div className="ml-4">About us</div>
          </div>
          <div className="p-2 mt-2 flex cursor-pointer flex-col bg-violet-900 rounded text-white">
            <div className="font-bold">Contact Us</div>
            <div>For advertising and colaboration</div>
          </div>
        </div>
      </div>
    </div>
  );
}
