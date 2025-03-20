import { useDispatch, useSelector } from "react-redux";
import Comment from "./Comment";
import CommentForm from "./CommentForm";
import { useEffect } from "react";
import { fetchComments } from "../../../redux/thunks/commentsThunk"; 

export default function CommentBoard({ taskId }) {
  const dispatch = useDispatch();
  const { data } = useSelector((state) => state.comments);

  useEffect(() => {
    dispatch(fetchComments({ taskId: taskId }));
    console.log(taskId)
  }, [dispatch, taskId]);

  return (
    <div className="w-[741px] px-[30px] py-[30px] flex flex-col justify-start items-center gap-5 rounded-[10px] border-[0.3px] border-[#DDD2FF] bg-[#F8F3FEA6]">
      <CommentForm parent_id={null} taskId={taskId} />
      <div className="w-full flex flex-col gap-12">
        <div className="flex gap-[7px]">
          <h2 className="font-firago text-[20px] font-[500] leading-[100%] text-[#000000]">
            კომენტარები
          </h2>
          <div className="rounded-[30px] bg-[#8338EC] w-[30px] h-[22px] flex justify-center items-center text-[14px] font-[500] font-firago text-[#FFFFFF] leading-0">
            {data?.length}
          </div>
        </div>
        <div className="w-full flex flex-col gap-12 overflow-y-auto">
          {data
            .map((comment, i) => (
              <Comment taskId={taskId} {...comment} key={i} />
            ))
            .reverse()}
        </div>
      </div>
    </div>
  );
}
