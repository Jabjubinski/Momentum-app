import Container from "../Container";
import addIcon from "./add.svg";
import hourGlass from "./hourglass.svg";

export default function Header() {
  return (
    <header className="flex flex-row justify-between px-[120px] py-[30px] leading-[100%]">
      <Container direction="row" justify="between" items="center" customStyle="h-full">
        <div className="flex flex-row gap-[4px] justify-center items-center">
          <span className="text-[#8338EC] text-[31px] font-fredoka leading-[100%]">
            Momentum
          </span>

          <img src={hourGlass} alt="..." />
        </div>
        <div className="flex flex-row gap-[40px]">
          <button className="px-[20px] py-[10px] border-1 border-[#8338EC] rounded-[5px] cursor-pointer">
            თანამშრომლის შექმნა
          </button>

          <a
            href="#"
            className="bg-[#8338EC] px-[20px] py-[10px] flex flex-row gap-[4px] rounded-[5px]  text-white text-[16px]"
          >
            <img src={addIcon} alt="" />
            <span>შექმენი ახალი დავალება</span>
          </a>
        </div>
      </Container>
    </header>
  );
}
