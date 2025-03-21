import Department from "./Department";
import PriorityCard from "./PriorityCard";
import Placeholder from "../../assets/images/placeholder.png";
import CommentIcon from "../../assets/icons/comments.svg";
import { Link } from "react-router-dom";

export default function TaskCard({ task, color }) {
  const formatDate = (date) => {
    const parsedDate = new Date(date);
    const day = parsedDate.getDate();
    const year = parsedDate.getFullYear();

    const monthNames = [
      "იან",
      "თებ",
      "მარ",
      "აპრ",
      "მაი",
      "ივნ",
      "ივლ",
      "აგვ",
      "სექ",
      "ოქტ",
      "ნოე",
      "დეკ",
    ];

    const month = monthNames[parsedDate.getMonth()];

    return `${day} ${month}, ${year}`;
  };

  const formattedDate = formatDate(task.due_date);

  return (
    <Link
      to={`/task/${task.id}`}
      style={{
        borderColor: color,
      }}
      className="rounded-[15px] bg-[#FFFFFF] border-[1px] p-[20px] justify-between gap-[28px] h-[217px] flex flex-col"
    >
      <div className="h-[26px] flex justify-between items-center">
        <div className="flex gap-[10px] items-center">
          {/* Priority */}
          <PriorityCard
            name={task.priority.name}
            id={task.priority.id}
            icon={task.priority.icon}
          />
          {/* Dep */}
          <Department id={task.department.id} name={task.department.name} />
        </div>
        {/* Date 22 იანვ, 2022*/}
        <span className="font-firago font-[400] text-[12px] text-[#212529]">
          {formattedDate}
        </span>
      </div>
      {/* Title Desc */}
      <div className="flex flex-col gap-[12px]">
        <h2 className="text-[15px] font-firago font-[500] text-[#212529] leading-[100%] tracking-normal overflow-hidden text-ellipsis line-clamp-1">
          {task.name}
        </h2>
        <p className="text-[14px] font-firago font-[400] text-[#343A40] leading-[100%] tracking-normal ">
          {task.description?.slice(0, 100)}
          {task.description?.length >= 100 && "..."}
        </p>
      </div>
      <div className="flex items-center justify-between">
        {/* avatar */}
        <img
          src={task.employee.avatar || Placeholder}
          alt="avatar"
          className="object-cover w-[31px] h-[31px] rounded-full"
          width={31}
          height={31}
        />
        <div className="flex justify-center items-center gap-[4px]">
          <img
            src={CommentIcon}
            alt="comments"
            width={20.24}
            height={18.48}
            className="w-[20.24px] h-[18.48px]"
          />
          <p className="font-firago font-[400] text-[14px] leading-[100%] tracking-normal">
            {task.total_comments}
          </p>
        </div>
      </div>
    </Link>
  );
}
