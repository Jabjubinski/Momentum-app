

export default function CommentForm() {
  return (
    <form className="pt-[18px] w-full pb-[15px] px-[20px] rounded-[10px] border-[0.3px] border-[#ADB5BD] bg-[#FFFFFF] flex flex-col gap-[30px]">
      <input placeholder="დაწერე კომენტარი" className="border-0 outline-0 placeholder:text-[#898989] font-firago text-[14px] font-[350] leading-[100%]"/>
      <div className="flex justify-end items-center">
        <button className="rounded-[20px] cursor-pointer px-[20px] py-[8px] bg-[#8338EC] font-firago font-[400] text-[#FFFFFF] text-[16px]">დააკომენტარე</button>
      </div>
    </form>
  )
}
