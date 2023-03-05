import React from "react";

interface Props {
  Icon: React.ElementType;
  text: string;
  onClick: () => void;
}

export default function bigButton({ Icon, text, onClick }: Props) {
  return (
    <div
      className="flex flex-row flex-1 bg-gray-200 
      rounded-md p-2.5 cursor-pointer shadow-sm"
      onClick={() => onClick()}
    >
      {Icon && <Icon className="h-6 w-6" />}
      <div className="ml-3 font-bold">{text}</div>
    </div>
  );
}
