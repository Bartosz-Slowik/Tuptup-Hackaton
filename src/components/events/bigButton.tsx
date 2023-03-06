import React from "react";

interface Props {
  Icon: React.ElementType;
  text: string;
  onClick: () => void;
  isSelected?: boolean;
}

export default function bigButton({ Icon, text, onClick, isSelected }: Props) {
  return (
    <div
      className={`${
        isSelected && "!bg-[#007EFF]"
      } flex flex-row flex-1 bg-gray-200 
      rounded-md p-2.5 cursor-pointer shadow-sm hover:bg-[#00B1D9]`}
      onClick={() => onClick()}
    >
      {Icon && <Icon className="h-6 w-6" />}
      <div className="ml-3 font-bold">{text}</div>
    </div>
  );
}
