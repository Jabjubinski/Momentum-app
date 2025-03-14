import clsx from "clsx";
import React from "react";

export default function TaskBoardTitle({ id }) {
  const titleTextContent =
    id === 1
      ? "დასაწყები"
      : id === 2
      ? "პროგრესში"
      : id === 3
      ? "მზად ტესტირებისთვის"
      : "დასრულებული";

  return (
    <div
      className={clsx(
        "rounded-[10px] p-[15px] flex justify-center items-center",
        id === 1 && "bg-[#F7BC30]",
        id === 2 && "bg-[#FB5607]",
        id === 3 && "bg-[#FF006E]",
        id === 4 && "bg-[#3A86FF]"
      )}
    >
      <h2 className="text-white text-center font-firago font-[500] text-[20px]">
        {titleTextContent}
      </h2>
    </div>
  );
}
