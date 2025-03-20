import { Link } from "react-router-dom";
import Container from "../Container";
import addIcon from "../../assets/icons/add.svg";
import hourGlass from "../../assets/logo/Hourglass.svg"
import useEmployeeModal from "../../hooks/useEmployeeModal";

export default function Header() {
  const { onOpen: employeeOpen } = useEmployeeModal();
  return (
    <header className="flex flex-row justify-between px-[120px] py-[30px] leading-[100%]">
      <Container
        direction="row"
        justify="between"
        items="center"
        customStyle="h-full"
      >
        <Link
          to="/"
          className="flex flex-row gap-[4px] justify-center items-center"
        >
          <span className="text-[#8338EC] text-[31px] font-fredoka leading-[100%]">
            Momentum
          </span>

          <img src={hourGlass} alt="..." />
        </Link>
        <div className="flex flex-row gap-[40px]">
          <button onClick={employeeOpen} className="px-[20px] py-[10px] border-1 border-[#8338EC] rounded-[5px] cursor-pointer">
            თანამშრომლის შექმნა
          </button>

          <Link
            to="/task/add"
            className="bg-[#8338EC] px-[20px] py-[10px] flex flex-row gap-[4px] rounded-[5px]  text-white text-[16px]"
          >
            <img src={addIcon} alt="" />
            <span>შექმენი ახალი დავალება</span>
          </Link>
        </div>
      </Container>
    </header>
  );
}
