import { useState, useEffect, useRef, useMemo } from "react";
import getDaysInMonth from "../../../utils/getDaysInMonth";
import formatDate from "../../../utils/formatDate";
import DateInputPopup from "./DateInputPopup";
import clsx from "clsx";
import CalendarIcon from "../../../assets/icons/calendar.png";

function getDateSlots(currentMonth, currentYear) {
  const dateArray = getDaysInMonth(currentMonth, currentYear);
  const slotSkipCount = dateArray[0] ? new Date(dateArray[0]).getDay() : 0;

  for (let i = 0; i < slotSkipCount; i++) {
    dateArray.unshift(null);
  }

  return dateArray;
}

function DateInput({ value, onChange, error }) {
  const popupRef = useRef(null);
  const [showPopup, setShowPopup] = useState(false);
  const [selectedDate, setSelectedDate] = useState("");
  const [currentMonth, setCurrentMonth] = useState(new Date().getMonth());
  const [currentYear, setCurrentYear] = useState(new Date().getFullYear());

  const dateArray = useMemo(
    () => getDateSlots(currentMonth, currentYear),
    [currentMonth, currentYear]
  );

  useEffect(() => {
    if (value) {
      const dateObj = new Date(value);

      setSelectedDate(formatDate(dateObj));
      setCurrentMonth(dateObj.getMonth());
      setCurrentYear(dateObj.getFullYear());
    }
  }, [value]);

  useEffect(() => {
    function handleClickOutside(event) {
      if (popupRef.current && !popupRef.current.contains(event.target)) {
        setShowPopup(false);
      }
    }

    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [popupRef]);

  function togglePopupHandler() {
    setShowPopup((currentShowPopup) => !currentShowPopup);
  }

  function navigateMonthHandler(navigateBy = 1) {
    if (currentMonth + navigateBy === 12) {
      setCurrentMonth(0);
      setCurrentYear((currentState) => currentState + 1);
    } else if (currentMonth + navigateBy === -1) {
      setCurrentMonth(11);
      setCurrentYear((currentState) => currentState - 1);
    } else {
      setCurrentMonth((currentState) => currentState + navigateBy);
    }
  }

  function selectDateHandler(date) {
    onChange(new Date(date));
    setSelectedDate(date);
  }

  return (
    <span className="relative w-[318px]" ref={popupRef}>
      <button
        className={clsx(
          "text-firago text-[300] flex items-center text-[14px] leading-[20px] w-full bg-[#FFFFFF] p-[14px] gap-[10px] focus:outline-[#8338EC]",
          showPopup
            ? "border-[#8338EC] border-[1px] rounded-[5px]"
            : "border-[1px]  rounded-[5px] border-[#DEE2E6]",
          error && "border-[#FA4D4D]!"
        )}
        type="button"
        onClick={togglePopupHandler}
      >
        <img
          src={CalendarIcon}
          alt="calendar"
          className="object-cover w-[16px] h-[16px]"
        />
        {selectedDate}
      </button>

      {showPopup && (
        <DateInputPopup
          currentMonth={currentMonth}
          currentYear={currentYear}
          onClose={() => setShowPopup(false)}
          navigateMonth={navigateMonthHandler}
          dateArray={dateArray}
          selectedDate={selectedDate}
          selectDateHandler={selectDateHandler}
        />
      )}
    </span>
  );
}

export default DateInput;
