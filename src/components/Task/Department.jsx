import clsx from "clsx";
import React from "react";

function Department({ department_id }) {
  const departmentTextContent =
    department_id === 1
      ? "დიზაინი"
      : department_id === 2
      ? "მარკეტინგი"
      : department_id === 3
      ? "ლოჯისტიკა"
      : "ინფ.ტექ";

  return (
    <span
      className={clsx(
        "text-center py-[5px] px-[9px] text-[white] rounded-[15px] text-[12px] min-w-[88px]",
        department_id === 1 && "bg-[#FF66A8]",
        department_id === 2 && "bg-[#FD9A6A]",
        department_id === 3 && "bg-[#89B6FF]",
        department_id === 4 && "bg-[#FFD86D]"
      )}
    >
      {departmentTextContent}
    </span>
  );
}

export default Department;
