import clsx from "clsx"
import CloseIcon from '../../assets/icons/close.png'



export default function Modal({
    onClose,
    isOpen = true,
    title,
    body
}) {
  return (
    <div className={clsx(
        "fixed justify-center items-center z-50 left-0 top-0 w-full h-dvh backdrop-blur-[10px] bg-[#0D0F1026]/15",
        isOpen ? "flex" : "hidden"
    )}>
      <div className="w-[913px] relative flex justify-start items-end gap-[37px] flex-col mx-auto pb-[40px] pt-[60px] rounded-[10px] px-[50px] bg-white">
            <button
                onClick={onClose}
                className="w-[40px] h-[40px] cursor-pointer"
                type="button"
            >
                <img src={CloseIcon} alt="Close" className="w-full object-cover h-full rounded-full"/>
            </button>
            <div className="w-full flex gap-[37px] flex-col items-center h-full">
                <h2 className="font-firago text-center font-[500] text-[32px] leading-[100%] text-[#212529]">{title}</h2>
                <div className="w-full overflow-auto h-full">
                    {body}
                </div>
            </div>
      </div>
    </div>
  )
}