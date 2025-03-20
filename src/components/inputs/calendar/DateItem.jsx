function DateItem({ dateObj, selected, onClick }) {
  if (!dateObj) {
    return <button className="w-full aspect-square text-[#0D0F10] font-firago font-[400] leading-[20px] text-[14px]"> </button>;
  }

  const displayDate = dateObj.getDate();
  const today = new Date();
  today.setHours(0, 0, 0, 0);

  const isPastDate = dateObj < today;
  const cssClasses = ["w-full aspect-square font-firago font-[400] leading-[20px] text-[14px]"];

  if (selected) {
    cssClasses.push("bg-[#8338EC] text-white rounded-[2px] border-[2px] border-[#8338EC]");
  } else if (isPastDate) {
    cssClasses.push("text-gray-400 cursor-not-allowed");
  } else {
    cssClasses.push("text-[#0D0F10] hover:bg-gray-100");
  }

  return (
    <button type="button" onClick={isPastDate ? undefined : onClick} disabled={isPastDate} className={cssClasses.join(" ")}>
      {displayDate}
    </button>
  );
}

export default DateItem;
