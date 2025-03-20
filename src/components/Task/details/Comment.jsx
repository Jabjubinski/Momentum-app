import { useState } from "react";
import ReplayIcon from "../../../assets/icons/replay.png";
import CommentForm from "./CommentForm";

export default function Comment({
  id,
  text,
  sub_comments,
  author_avatar,
  author_nickname,
  taskId,
}) {
  const [onReply, setOnReply] = useState(false);
  return (
    <div className="w-[598px] flex gap-[12px]">
      <img
        className="w-[38px] h-[38px] rounded-[40px] object-cover"
        src={author_avatar}
      />
      <div className="flex flex-col gap-[10px]">
        <h2 className="text-[#021526] font-[500] text-[18px] font-firago leading-[100%]">
          {author_nickname}
        </h2>
        <p className="text-[#343A40] font-[350] text-ellipsis w-[548px] text-[16px] font-firago">
          {text}
        </p>
        <button
          onClick={() => setOnReply(!onReply)}
          className="flex items-center justify-start font-[400] font-firago text-[12px] gap-[6px] py-[6px] cursor-pointer text-[#8338EC] leading-[100%]"
        >
          <img
            src={ReplayIcon}
            alt="repl"
            className="object-cover w-[16px] h-[16px]"
          />
          უპასუხე
        </button>
        {onReply && (
          <CommentForm
            customOnSubmit={() => setOnReply(false)}
            taskId={taskId}
            parent_id={id}
          />
        )}
        {sub_comments?.length > 0 && (
          <div className="flex flex-col gap-6">
            {sub_comments
              .map((comment) => (
                <div key={comment.id} className="w-[598px] flex gap-[12px]">
                  <img
                    className="w-[38px] h-[38px] rounded-[40px] object-cover"
                    src={comment.author_avatar}
                  />
                  <div className="flex flex-col gap-[10px]">
                    <h2 className="text-[#021526] font-[500] text-[18px] font-firago leading-[100%]">
                      {comment.author_nickname}
                    </h2>
                    <p className="text-[#343A40] font-[350] text-ellipsis w-[548px] text-[16px] font-firago">
                      {comment.text}
                    </p>
                  </div>
                </div>
              ))
              .reverse()}
          </div>
        )}
      </div>
    </div>
  );
}
