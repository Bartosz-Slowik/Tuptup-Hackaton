import React from "react";

interface Props {
  title: string;
  description: string;
  image: string;
  friends: string;
}

export default function Overview({
  title,
  description,
  image,
  friends,
}: Props) {
  return (
    <div className="flex flex-col w-[12rem]  rounded-xl p-1 bg-white shadow-2xl ">
      {" "}
      <div className="flex justify-center font-bold text-lg px-2 pt-1 items-center text-center">
        {title}
      </div>
      <div className="flex  justify-center font-bolder px-3 py-1 items-center text-center">
        {description}
      </div>
      <div className="-mx-1 py-1">
        <img src={image} alt="" />
      </div>
      <div className="flex flex-row justify-center font-bolder p-1 m-2 rounded bg-blue-600 cursor-pointer text-center text-white">
        JOIN
      </div>
      <div className="flex flex-col text-xs px-2 mb-2 text-center">
        <div className="font-bold ">Your friends are here:</div>
        <div className="text-center text-blue-400">{friends}</div>
      </div>
    </div>
  );
}
