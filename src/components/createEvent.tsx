import React, { useState } from "react";
import Event from "./EventModel";
interface Props {
  hideCreateEventPopup: () => void;
}
export default function CreateEvent({ hideCreateEventPopup }: Props) {
  const [title, setTitle] = useState("");
  const [desc, setDesc] = useState("");
  const [amount, setAmount] = useState("-1");
  const [type, setType] = useState("Event");
  const [leng, setLeng] = useState("0");
  const [heigh, setHeigh] = useState("0");

  console.log(type);
  return (
    <div
      className={` fixed right-0 bottom-0 left-0 top-0 z-30 flex items-center justify-center bg-black/70`}
    >
      <div className="flex flex-col rounded-sm bg-white p-4">
        <div
          className="text-right text-xl"
          onClick={() => {
            hideCreateEventPopup();
          }}
        >
          x
        </div>
        <input
          type="text"
          placeholder="Title"
          className="m-2 rounded-full bg-gray-200 p-2 text-center"
          id="title"
          onChange={(e) => {
            setTitle(e.target.value);
          }}
        ></input>
        <input
          onChange={(e) => {
            setDesc(e.target.value);
          }}
          type="text"
          placeholder="Description"
          className="m-2 h-12 rounded-full bg-gray-200 p-2 text-center"
          id="desc"
        ></input>
        <select
          onChange={(e) => {
            setType(e.target.value);
          }}
          className="m-2 rounded-full bg-gray-200 p-2 text-center "
          id="type"
        >
          <option value="sport">Sport</option>
          <option value="event">Event</option>
          <option value="party">Party</option>
        </select>
        <div className="text-center">How many people can come?</div>
        <input
          type="number"
          onChange={(e) => {
            setAmount(e.target.value);
          }}
          className="m-2 h-12 rounded-full bg-gray-200 p-2 text-center"
          id="amount"
        ></input>
        <div className="text-center">Location:</div>
        <input
          type="submit"
          className="m-2 h-12 rounded-full bg-blue-400 p-2 text-center"
          value="Set Location"
        ></input>
        <input
          type="submit"
          className="m-2 h-12 rounded-full bg-green-200 p-2 text-center"
          value="Add Event"
          onClick={() => {
            hideCreateEventPopup();
            const el = document.createElement("div");
          }}
        />
      </div>
    </div>
  );
}
