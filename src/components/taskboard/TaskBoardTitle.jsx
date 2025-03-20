import clsx from "clsx";
import React from "react";

export default function TaskBoardTitle({ name, color }) {
  return (
    <div
      style={{
        backgroundColor: color,
      }}
      className={"rounded-[10px] p-[15px] flex justify-center items-center"}
    >
      <h2 className="text-white text-center font-firago font-[500] text-[20px]">
        {name}
      </h2>
    </div>
  );
}
