import React, { useState } from "react";
import {
  PlusIcon
} from "@heroicons/react/24/solid";

export default function Add_event() {
  const [open, setOpen] = useState(false);

  const toggle = (action: "show" | "hide") => {
    action === "show" ? setOpen(true) : setOpen(false);
  };

  return (
    <div className="w-screen fixed z-10">
    <div
      className={`${
        open ? "scale-0" : "scale-100"
      } fixed cursor-pointer rounded-full bottom-5 left-5 bg-violet-900
    text-white p-2 flex text-center justify-center shadow-lg transition-all`}
      onClick={() => toggle("show")}
    >
      <PlusIcon className="h-8 w-8 " />
    </div>
    </div>
  );
}
