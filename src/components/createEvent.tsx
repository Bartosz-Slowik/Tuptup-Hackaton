import React, { useState } from "react";
import "./createEvent.css";
interface Props {
  hideCreateEventPopup: () => void;
}
export default function CreateEvent({ hideCreateEventPopup }: Props) {
  return (
    <div
      className={` z-30 bg-black/70 right-0 bottom-0 fixed left-0 top-0 flex justify-center items-center`}
      
    >
      <div className="bg-white rounded-sm p-4 flex flex-col" onClick={()=>{}}>
        <input type="text" placeholder="Title" className="p-2" id="title"></input>
        <input type="text" placeholder="Description" className="p-2" id="desc"></input>
        <select className="p-2" id="type">
          <option value="sport">Sport</option>
          <option value="event">Event</option>
          <option value="party">Party</option>
        </select>
      </div>
    </div>
  );
}
