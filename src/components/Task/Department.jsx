const getColor = {
  1: "#F7BC30",
  2: "#FB5607",
  3: "#FF006E",
  4: "#3A86FF",
};

export default function Department({ name, id }) {
  const first = name?.split(" ")[0];
  const colorIndex = ((id - 1) % 4) + 1;
  const color = getColor[colorIndex];
  return (
    <div
      style={{ background: color }}
      className="px-[9px] min-w-[88px] py-[5px] rounded-[15px]"
    >
      <p className="text-[#FFFFFF] font-firago text-center font-[400] text-[12px] tracking-normal leading-[150%]">
        {first}
      </p>
    </div>
  );
}
