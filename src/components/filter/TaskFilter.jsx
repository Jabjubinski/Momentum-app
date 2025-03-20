import { useState, useMemo } from "react";
import closeIcon from "../../assets/x_icon.svg";
import EmployeeFilter from "./EmployeeFilter";
import DepartmentFilter from "./DepartmentFilter";
import PriorityFilter from "./PriorityFilter";
import clsx from "clsx";

const filterChoose = {
  None: "None",
  Department: "Department",
  Employee: "Employee",
  Priority: "Priority",
};

export default function TaskFilter({ filteredData, setFilteredData }) {
  const [selected, setSelected] = useState(filterChoose.None);

  // Function to toggle filters
  const switchFilter = (type) => {
    if (type === selected) {
      setSelected(filterChoose.None);
    } else {
      setSelected(type);
    }
  };

  return (
    <div className="flex relative flex-col max-w-[688px] gap-[40px]">
      <div className="flex flex-row justify-between w-[688px] border-[#DEE2E6] gap-[45px] border-[1px] rounded-[10px] text-[16px]">
        <button
          onClick={() => switchFilter(filterChoose.Department)}
          className={clsx(
            "font-[400] cursor-pointer px-[18px] py-[10px] font-firago flex justify-center items-center flex-row gap-[8px]",
            selected === filterChoose.Department
              ? "text-[#8338EC]"
              : "text-[#0D0F10]"
          )}
        >
          დეპარტამენტი
          <svg
            className={clsx(
              selected === filterChoose.Department && "rotate-180"
            )}
            width="14"
            height="8"
            viewBox="0 0 14 8"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M1.70711 0.292893C1.31658 -0.0976311 0.683417 -0.0976311 0.292893 0.292893C-0.0976311 0.683417 -0.0976311 1.31658 0.292893 1.70711L6.29289 7.70711C6.68342 8.09763 7.31658 8.09763 7.70711 7.70711L13.7071 1.70711C14.0976 1.31658 14.0976 0.683417 13.7071 0.292893C13.3166 -0.0976311 12.6834 -0.0976311 12.2929 0.292893L7 5.58579L1.70711 0.292893Z"
              fill={
                selected === filterChoose.Department ? "#8338EC" : "#0D0F10"
              }
            />
          </svg>
        </button>

        <button
          onClick={() => switchFilter(filterChoose.Priority)}
          className={clsx(
            "font-[400] cursor-pointer px-[18px] py-[10px] font-firago flex justify-center items-center flex-row gap-[8px]",
            selected === filterChoose.Priority
              ? "text-[#8338EC]"
              : "text-[#0D0F10]"
          )}
        >
          პრიორიტეტი
          <svg
            className={clsx(selected === filterChoose.Priority && "rotate-180")}
            width="14"
            height="8"
            viewBox="0 0 14 8"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M1.70711 0.292893C1.31658 -0.0976311 0.683417 -0.0976311 0.292893 0.292893C-0.0976311 0.683417 -0.0976311 1.31658 0.292893 1.70711L6.29289 7.70711C6.68342 8.09763 7.31658 8.09763 7.70711 7.70711L13.7071 1.70711C14.0976 1.31658 14.0976 0.683417 13.7071 0.292893C13.3166 -0.0976311 12.6834 -0.0976311 12.2929 0.292893L7 5.58579L1.70711 0.292893Z"
              fill={selected === filterChoose.Priority ? "#8338EC" : "#0D0F10"}
            />
          </svg>
        </button>

        <button
          onClick={() => switchFilter(filterChoose.Employee)}
          className={clsx(
            "font-[400] cursor-pointer px-[18px] py-[10px] font-firago flex justify-center items-center flex-row gap-[8px]",
            selected === filterChoose.Employee
              ? "text-[#8338EC]"
              : "text-[#0D0F10]"
          )}
        >
          თანამშრომელი
          <svg
            className={clsx(selected === filterChoose.Employee && "rotate-180")}
            width="14"
            height="8"
            viewBox="0 0 14 8"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M1.70711 0.292893C1.31658 -0.0976311 0.683417 -0.0976311 0.292893 0.292893C-0.0976311 0.683417 -0.0976311 1.31658 0.292893 1.70711L6.29289 7.70711C6.68342 8.09763 7.31658 8.09763 7.70711 7.70711L13.7071 1.70711C14.0976 1.31658 14.0976 0.683417 13.7071 0.292893C13.3166 -0.0976311 12.6834 -0.0976311 12.2929 0.292893L7 5.58579L1.70711 0.292893Z"
              fill={selected === filterChoose.Employee ? "#8338EC" : "#0D0F10"}
            />
          </svg>
        </button>
      </div>

      {/* Filter tags */}
      <ul className="flex flex-row items-center gap-[8px] text-[#343A40]">
        {filteredData.departments.map((el, i) => (
          <li
            key={i}
            className="flex flex-row text-center py-[6px] px-[10px] items-center justify-center font-firago text-[14px] font-[350] border-[1px] border-[#CED4DA] gap-[4px] rounded-[43px]"
          >
            {el.name}
            <button
              onClick={() => {
                setFilteredData((prev) => ({
                  ...prev,
                  departments: prev.departments.filter(
                    (item) => !(item.id === el.id)
                  ),
                }));
              }}
              className="cursor-pointer"
            >
              <img src={closeIcon} alt="..." className="" />
            </button>
          </li>
        ))}
        {filteredData.priorities.map((el, i) => (
          <li
            key={i}
            className="flex flex-row text-center py-[6px] px-[10px] items-center justify-center font-firago text-[14px] font-[350] border-[1px] border-[#CED4DA] gap-[4px] rounded-[43px]"
          >
            {el.name}
            <button
              onClick={() => {
                setFilteredData((prev) => ({
                  ...prev,
                  priorities: prev.priorities.filter(
                    (item) => !(item.id === el.id)
                  ),
                }));
              }}
              className="cursor-pointer"
            >
              <img src={closeIcon} alt="..." className="" />
            </button>
          </li>
        ))}
        {filteredData.employee.id && (
          <li className="flex flex-row text-center py-[6px] px-[10px] items-center justify-center font-firago text-[14px] font-[350] border-[1px] border-[#CED4DA] gap-[4px] rounded-[43px]">
            {filteredData.employee.name}
            <button
              onClick={() => {
                setFilteredData((prev) => ({
                  ...prev,
                  employee: { id: null, name: null },
                }));
              }}
              className="cursor-pointer"
            >
              <img src={closeIcon} alt="..." className="" />
            </button>
          </li>
        )}
        {(filteredData.departments.length > 0 ||
          filteredData.employee.id ||
          filteredData.priorities.length > 0) && (
          <li>
            <button
              onClick={() =>
                setFilteredData({
                  employee: { id: null, name: null },
                  priorities: [],
                  departments: [],
                })
              }
              className="flex flex-row py-[6px] px-[10px] gap-[4px] items-center justify-center font-firago text-[14px] font-[350] cursor-pointer"
            >
              გასუფთავება
            </button>
          </li>
        )}
      </ul>

      {/* Filtered Data Rendering */}
      {selected === filterChoose.Employee && (
        <EmployeeFilter
          onClose={() => setSelected(filterChoose.None)}
          filteredData={filteredData}
          setFilteredData={setFilteredData}
        />
      )}
      {selected === filterChoose.Department && (
        <DepartmentFilter
          onClose={() => setSelected(filterChoose.None)}
          filteredData={filteredData}
          setFilteredData={setFilteredData}
        />
      )}
      {selected === filterChoose.Priority && (
        <PriorityFilter
          onClose={() => setSelected(filterChoose.None)}
          filteredData={filteredData}
          setFilteredData={setFilteredData}
        />
      )}
    </div>
  );
}
