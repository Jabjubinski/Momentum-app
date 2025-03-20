import clsx from "clsx";

export default function PriorityCard({ name, icon, id }) {
  return (
    <div
      className={clsx(
        "p-[4px] flex gap-[4px] rounded-[5px] bg-[#FFFFFF] items-center justify-center w-[86px] border-[0.5px]",
        id === 3 && "border-[#FA4D4D] text-[#FA4D4D]",
        id === 2 && "border-[#FFBE0B] text-[#FFBE0B]",
        id === 1 && "border-[#08A508] text-[#08A508]"
      )}
    >
      <img src={icon} width={16} height={18} className="w-[16px] h-[18px]" />
      <p className="font-firago tracking-normal font-[500] text-[12px] leading-[150%]">
        {name}
      </p>
    </div>
  );
}
