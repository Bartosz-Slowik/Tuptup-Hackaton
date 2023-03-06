import React, { useState } from "react";
interface Props {
  hideCreateEventPopup: () => void;
}
export default function CreateEvent({ hideCreateEventPopup }: Props) {
  return (
    <div
      className={` z-30 bg-black/70 right-0 bottom-0 fixed left-0 top-0 flex justify-center items-center`}
      onClick={() => {
        hideCreateEventPopup();
      }}
    >
      <div className="bg-white rounded-sm p-4">asdfsadfasdf</div>
    </div>
  );
}
