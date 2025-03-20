import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";

import { fetchEmployees } from "../../redux/thunks/employeesThunks";

export default function EmployeeFilter({
  filteredData,
  setFilteredData,
  onClose,
}) {
  const dispatch = useDispatch();
  const { data } = useSelector((state) => state.employees);

  const [currentFilter, setCurrentFilter] = useState(
    () => filteredData.employee
  );

  useEffect(() => {
    dispatch(fetchEmployees());
  }, [dispatch]);

  const toggleFilter = (employee) => {
    setCurrentFilter((prev) => {
      const exists = prev.id == employee.id;
      if (exists) {
        return { id: null, name: null };
      } else {
        return {
          id: employee.id,
          name: `${employee.name} ${employee.surname}`,
        };
      }
    });
  };

  const onFilter = () => {
    setFilteredData((prev) => ({
      ...prev,
      employee: currentFilter,
    }));
    onClose();
  };

  return (
    <div className="w-full border-[0.5px] border-[#8338EC] px-[30px] pt-[40px] pb-[30px] gap-[25px] flex flex-col rounded-[10px] absolute top-[54px] z-40 bg-[#FFFFFF]">
      <ul className="flex flex-col gap-[22px]">
        {data.map((item) => (
          <li key={item.id}>
            <label className="flex items-center gap-[15px] font-firago text-[16px] text-[#212529] font-[400] cursor-pointer">
              <input
                type="checkbox"
                className="peer hidden"
                checked={currentFilter.id === item.id}
                onChange={() => toggleFilter(item)}
              />
              <div className="group w-[22px] h-[22px] rounded-[6px] border-[1.5px] border-[#212529] flex items-center justify-center peer-checked:border-[#8338EC]">
                <svg
                  className="hidden group-peer-checked:block"
                  width="14"
                  height="10"
                  viewBox="0 0 14 10"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M12.3333 1.33325L4.99996 8.66659L1.66663 5.33325"
                    stroke="#8338EC"
                    stroke-width="1.5"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  />
                </svg>
              </div>
              <div className="flex gap-[10px] items-center">
                <img
                  width={28}
                  height={28}
                  className="w-[28px] rounded-full h-[28px] object-cover"
                  src={item.avatar}
                  alt="avatar"
                />
                <span>
                  {item.name} {item.surname}
                </span>
              </div>
            </label>
          </li>
        ))}
      </ul>
      <div className="w-full flex justify-end items-center">
        <button
          onClick={onFilter}
          className="rounded-[20px] cursor-pointer py-[8px] px-[20px] bg-[#8338EC] font-firago text-[16px] font-[400] leading-[100%] text-[#FFFFFF]"
        >
          არჩევა
        </button>
      </div>
    </div>
  );
}
