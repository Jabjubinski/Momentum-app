import React from "react";
import Container from "../components/Container";
import Select from "react-select";
import { employeeOptions } from "./optionsArray";
import { priorityOptions } from "./optionsArray";
import { status } from "./optionsArray";

export default function CreateTaskPage() {
  return (
    <Container
      direction="col"
      title="შექმენი ახალი დავალება"
      customStyle="flex flex-col gap-[40px]"
    >
      <div className="flex flex-row gap-[10%]">
        {/* First column */}
        <div className="flex flex-col font-firago gap-[55px] w-[50%] justify-between">
          {/* Title select */}
          <div className="flex flex-col">
            <label htmlFor="title" className="font-[400] text-[14px]">
              სათაური*
            </label>
            <select
              name=""
              id="title"
              className="appearance-none p-[14px] border border-[#DEE2E6] font-[300] leading-[100%] text-[#0D0F10] rounded-[5px] text-[14px]"
            >
              <option value="">რედბერის ლენდინგის დიზაინი</option>
            </select>
          </div>

          {/* Description textarea */}
          <div className="flex flex-col">
            <label htmlFor="textArea">აღწერა</label>
            <textarea
              name=""
              id="textArea"
              className="border border-gray-300 p-4 rounded-[5px]  font-[300] text-[14px] min-h-[189px]
              overflow-hidden resize-none
              "
            >
              მიზანია რომ შეიქმნას თანამედროვე, სუფთა და ფუნქციონალური დიზაინი,
              რომელიც უზრუნველყოფს მარტივ ნავიგაციას და მკაფიო ინფორმაციის
              გადაცემას. დიზაინი უნდა იყოს ადაპტირებადი (responsive), გამორჩეული
              ვიზუალით, მინიმალისტური სტილით და ნათელი ტიპოგრაფიით.
            </textarea>
          </div>

          {/* Priority selects */}
          <div className="font-firago flex flex-row gap-4">
            <div className="flex flex-col w-[50%]">
              <label htmlFor="priority">პრიორიტეტი*</label>
              <Select
                options={priorityOptions}
                isSearchable={false}
                className="w-full font-[300]"
                classNamePrefix="custom-select"
                placeholder=""
              />
            </div>
            <div className="flex flex-col w-[50%]">
              <label htmlFor="priority">სტატუსი*</label>
              <Select
                name="priority"
                id="priority"
                options={status}
                className="font-[300]"
              />
            </div>
          </div>
        </div>

        {/* Second column */}
        <div className="flex flex-col font-firago gap-[55px] w-[50%] justify-items-start">
          {/* Department select */}
          <div className="flex flex-col">
            <label htmlFor="title" className="font-[400] text-[14px]">
              დეპარტამენტი*
            </label>
            <Select
              options={priorityOptions}
              isSearchable={false}
              className="w-full font-[300] "
              classNamePrefix="custom-select"
              placeholder=""
            />
          </div>

          {/* Employee select using react-select */}
          <div className="flex flex-col flex-start items-start align-top">
            <label htmlFor="title" className="font-[400] text-[14px]">
              პასუხისმგებელი თანამშრომელი*
            </label>
            <Select
              options={employeeOptions}
              isSearchable={false}
              className="w-full font-300"
              classNamePrefix="custom-select"
              placeholder="დასაწყები"
            />
          </div>

          {/* Deadline input */}
          <div className="font-firago flex flex-col gap-4 h-[100%] justify-end">
            <label htmlFor="">დედლაინი</label>
            <input
              type="date"
              id="deadline"
              className=" w-[50%] p-[14px] border border-gray-300 font-[300] leading-[100%] text-[#0D0F10] rounded-[5px]"
            />
          </div>
        </div>
      </div>
    </Container>
  );
}
