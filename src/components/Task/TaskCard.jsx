import pfp from "./pfp.png";
import comment from "./Comments.svg";
import Difficulty from "./Difficulty";
import clsx from "clsx";
import Department from "./Department";

export default function Task({
  department_id,
  date,
  commentsCount,
  difficulty_id,
  progress_id,
}) {
  return (
    <div
      className={clsx(
        "font-firago leading-[100%] flex flex-col gap-[28px] p-[20px] border-1 rounded-[15px]",
        progress_id === 1 && "border-[#F7BC30]",
        progress_id === 2 && "border-[#FB5607]",
        progress_id === 3 && "border-[#FF006E]",
        progress_id === 4 && "border-[#3A86FF]"
      )}
    >
      <div className="flex flex-row justify-between items-center">
        <div className="flex gap-[10px]">
          <Difficulty id={difficulty_id} />
          <Department department_id={department_id} />
        </div>
        <p className="text-[12px]">{date}</p>
      </div>
      <div className="flex flex-col gap-[12px] leading-[100%]">
        <p className="font-[500] text-ellipsis line-clamp-2">
          Redberry-ს საიტის ლენდინგის დიზაინი
        </p>

        <p className="text-[14px] font-[400] overflow-hidden text-ellipsis line-clamp-2">
          შექმენი საიტის მთავარი გვერდი, რომელიც მოიცავს მთავარ სექციებს,
          ნავიგაციას.
        </p>
      </div>
      <div className="flex items-center justify-between">
        <img src={pfp} alt="..." className="object-cover" />
        <div className="flex items-center gap-[4px]">
          <img src={comment} alt="..." className="object-cover" />

          <p className="leading-[100%] text-[14px]">{commentsCount}</p>
        </div>
      </div>
    </div>
  );
}
