import React from "react";

interface Props {
  Icon: React.ElementType;
  text: string;
  onClick: () => void;
}

export default function bigButton({ Icon, text, onClick }: Props) {
  return (
    <div
      className="flex flex-row p-2.5 cursor-pointer "
      onClick={() => onClick()}
    >
      {Icon && <Icon className="h-6 w-6" />}
      <div className="ml-3 font-semibold">{text}</div>
    </div>
  );
}
