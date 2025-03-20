import Placeholder from '../../../assets/images/placeholder.png'
import ReplayIcon from '../../../assets/icons/replay.png'

export default function Comment() {
  return (
    <div className="w-[598px] flex gap-[12px]">
      <img className='w-[38px] h-[38px] rounded-[40px] object-cover' src={Placeholder}/>
      <div className='flex flex-col gap-[10px]'>
          <h2 className='text-[#021526] font-[500] text-[18px] font-firago leading-[100%]'>ემილია მორგანი</h2>
          <p className='text-[#343A40] font-[350] text-ellipsis w-[548px] text-[16px] font-firago'>დიზაინი სუფთად ჩანს, მაგრამ კოდირებისას მნიშვნელოვანი იქნება, რომ ელემენტებს ჰქონდეს შესაბამისი რეზოლუცია.</p>
          <button className='flex items-center justify-start font-[400] font-firago text-[12px] gap-[6px] py-[6px] cursor-pointer text-[#8338EC] leading-[100%]'>
            <img src={ReplayIcon} alt='repl' className='object-cover w-[16px] h-[16px]'/>
            უპასუხე
          </button>
      </div>
    </div>
  )
}
