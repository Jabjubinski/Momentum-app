import DateInputControl from "./DateInputControl";
import DateItem from "./DateItem";



function DateInputPopup({
  currentMonth,
  currentYear,
  navigateMonth,
  dateArray,
  selectedDate,
  selectDateHandler,
  onClose
}) {
  return (
    <div className="bg-[#FFFFFF] border-[1px] mt-1 border-[#8338EC] w-full min-h-[336px] p-[16px] flex flex-col gap-[22px]">
      <DateInputControl
        currentMonth={currentMonth}
        currentYear={currentYear}
        navigateToNextMonth={() => navigateMonth(1)}
        navigateToPrevMonth={() => navigateMonth(-1)}
      />
      <div className="grid grid-cols-7 w-[224px]">
        <div className="w-full aspect-square flex justify-center items-center">
          <span className="font-firago font-[400] text-[14px] leading-[20px]">S</span>
        </div>
        <div className="w-full aspect-square flex justify-center items-center">
          <span className="font-firago font-[400] text-[14px] leading-[20px]">M</span>
        </div>
        <div className="w-full aspect-square flex justify-center items-center">
          <span className="font-firago font-[400] text-[14px] leading-[20px]">T</span>
        </div>
        <div className="w-full aspect-square flex justify-center items-center">
          <span className="font-firago font-[400] text-[14px] leading-[20px]">W</span>
        </div>
        <div className="w-full aspect-square flex justify-center items-center">
          <span className="font-firago font-[400] text-[14px] leading-[20px]">T</span>
        </div>
        <div className="w-full aspect-square flex justify-center items-center">
          <span className="font-firago font-[400] text-[14px] leading-[20px]">F</span>
        </div>
        <div className="w-full aspect-square flex justify-center items-center">
          <span className="font-firago font-[400] text-[14px] leading-[20px]">S</span>
        </div>
        {dateArray.map((dateText, index) => (
          <DateItem
            key={index}
            dateObj={dateText ? new Date(dateText) : null}
            selected={selectedDate === dateText}
            onClick={() => selectDateHandler(dateText ? dateText : null)}
          />
        ))}
      </div>
      <div className="w-full flex justify-between">
        <button type="button" onClick={onClose} className="font-firago text-[#8338EC] font-[400] text-[13px] leading-[100%]">Cancel</button>
        <button type="button" onClick={onClose} className="font-firago text-[#8338EC] font-[400] text-[13px] leading-[100%]">OK</button>
      </div>
    </div>
  );
}

export default DateInputPopup;