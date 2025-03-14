import React from "react";
import clsx from "clsx";
import medium from "./medium.svg";
import low from "./low.svg";
import high from "./high.svg";

export default function Difficulty({ id }) {
  const imgSrc = id === 1 ? low : id === 2 ? medium : high;
  const textContent = id === 1 ? "დაბალი" : id === 2 ? "საშუალო" : "მაღალი";

  return (
    <span
      className={clsx(
        "p-[4px]  flex gap-[4px] rounded-[4px] text-[12px] border-1 items-center",
        id == 1 && "text-[#08A508]  border-[#08A508]",
        id == 2 && "text-[#FFBE0B] border-[#FFBE0B]",
        id == 3 && "text-[#FA4D4D] border-[#FA4D4D]"
      )}
    >
      <img src={imgSrc} alt="" />
      {textContent}
    </span>
  );
}
