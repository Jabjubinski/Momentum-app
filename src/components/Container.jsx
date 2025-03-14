import React from "react";

import clsx from "clsx";

export default function Container({
  children,
  direction = "col",
  title,
  justify,
  items,
  customStyle,
}) {
  return (
    <div
      className={clsx(
        "container mx-auto",
        direction === "row" && "flex flex-row",
        direction === "col" && "flex flex-col",
        justify === "start" && "justify-start",
        justify === "end" && "justify-end",
        justify === "between" && "justify-between",
        justify === "center" && "justify-center",
        items === "center" && "items-center",
        items === "start" && "items-start",
        items === "end" && "items-end",
        items === "between" && "items-between",
        customStyle
      )}
    >
      {title && (
        <h2 className="font-[600] text-[#212529] text-[36px] font-firago">
          {title}
        </h2>
      )}
      {children}
    </div>
  );
}
