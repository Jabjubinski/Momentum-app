import Comment from "./Comment";
import CommentForm from "./CommentForm"


export default function CommentBoard() {
  return (
    <div className="w-[741px] px-[30px] py-[30px] flex flex-col justify-start items-center gap-5 rounded-[10px] border-[0.3px] border-[#DDD2FF] bg-[#F8F3FEA6]">
      <CommentForm/>
      <div className="w-full flex flex-col gap-12">
        <div className="flex gap-[7px]">
          <h2 className="font-firago text-[20px] font-[500] leading-[100%] text-[#000000]">კომენტარები</h2>
          <div className="rounded-[30px] bg-[#8338EC] w-[30px] h-[22px] flex justify-center items-center text-[14px] font-[500] font-firago text-[#FFFFFF] leading-0">3</div>
        </div>
        <div className="w-full flex flex-col gap-12 overflow-y-auto">
          {[1,2,3,4].map((_, i) => <Comment key={i}/>)}
        </div>
      </div>
    </div>
  )
}