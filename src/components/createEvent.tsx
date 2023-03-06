import React, { useState } from "react";
import Event from "./EventModel";
interface Props {
  hideCreateEventPopup: () => void;
}
export default function CreateEvent({ hideCreateEventPopup }: Props) {
  const [title,setTitle]=useState("");
  const [desc,setDesc]=useState("");
  const [amount,setAmount]=useState("-1");
  const [type,setType]=useState("Event");
  const [leng,setLeng]=useState("0");
  const [heigh,setHeigh]=useState("0");

  console.log(type);
  return (
    <div
      className={` z-30 bg-black/70 right-0 bottom-0 fixed left-0 top-0 flex justify-center items-center`}
    >
      <div className="bg-white rounded-sm p-4 flex flex-col" onClick={()=>{}}>
        <input type="text" placeholder="Title" className="m-2 p-2 bg-gray-200 rounded-full text-center" id="title"
        onChange={(e)=>{setTitle(e.target.value)}}></input>
        <input onChange={(e)=>{setDesc(e.target.value)}}type="text" placeholder="Description" className="h-12 m-2 p-2 bg-gray-200 rounded-full text-center" id="desc"></input>
        <select onChange={(e)=>{setType(e.target.value)}} className="m-2 p-2 bg-gray-200 rounded-full text-center " id="type">
          <option value="sport">Sport</option>
          <option value="event">Event</option>
          <option value="party">Party</option>
        </select>
        <div className="text-center">How many people can come?</div>
        <input type="number" onChange={(e)=>{setAmount(e.target.value)}}className="h-12 m-2 p-2 bg-gray-200 rounded-full text-center" id="amount"></input>
        <div className="text-center">Location:</div>
        <div className="flex flex-row">
        <div className="flex flex-col text-center">
          Lng:
        <input type="number" onChange={(e)=>{setLeng(e.target.value)}}className="h-12 m-2 p-2 bg-gray-200 rounded-full text-center"></input>
        </div>
        <div className="flex flex-col text-center">
          Lat:
        <input type="number" onChange={(e)=>{setHeigh(e.target.value)}}className="h-12 m-2 p-2 bg-gray-200 rounded-full text-center"></input>
        </div>
        </div>
        <input type="submit" className="h-12 m-2 p-2 bg-green-200 rounded-full text-center" value="Add Event" onClick={() => {
        hideCreateEventPopup();
        const el = document.createElement('div');
      }}/>
      </div>
    </div>
  );
}
