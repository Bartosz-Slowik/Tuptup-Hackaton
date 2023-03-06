import React from "react";

interface Props {
  Icon: React.ElementType;
  text: string;
  callCack: (input: string) => void;
  hide: boolean;
}

export default function searchBar({ Icon, text, callCack, hide }: Props) {
  return (
    <div className={`${hide && "hidden"} p-2.5 w-full md:!block `}>
      <div className={`relative w-full`}>
        <span className="absolute inset-y-0 left-0 flex items-center pl-2">
          {Icon && <Icon className="h-6 w-6 " />}
        </span>
        <input
          type="text"
          className="py-2.5 font-bolder bg-gray-200 rounded-md pl-10 focus:outline-none w-full shadow-sm"
          placeholder={text}
        />
      </div>
    </div>
  );
}
