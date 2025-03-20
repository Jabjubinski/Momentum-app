import downIcon from '../../../assets/icons/down.png'
import upIcon from '../../../assets/icons/up.png'


const monthNames = [
  "იანვარი", "თებერვალი", "მარტი", "აპრილი", "მაისი", "ივნისი", "ივლისი", "აგვისტო", "სექტემბერი", "ოქტომბერი", "ნოემბერი", "დეკემბერი"
];


function DateInputControl({
  currentMonth,
  currentYear,
  navigateToNextMonth,
  navigateToPrevMonth
}) {
  return (
    <div className="w-[224px] flex justify-between">
        <span className='text-[#000000] font-firago font-[700] text-[13px]'>{monthNames[currentMonth]} {currentYear}</span>
        <div className='flex gap-[4px]'>
            <button type="button" onClick={navigateToPrevMonth}>
            <img src={upIcon} alt="up" />
            </button>
            <button type="button" onClick={navigateToNextMonth}>
            <img src={downIcon} alt="down"/>
            </button>
        </div>
    </div>
  );
}

export default DateInputControl;