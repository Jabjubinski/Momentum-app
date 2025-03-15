import React from "react";
import Container from "../components/Container";
import pfp from "./pfp.png";
export default function CreateTaskPage() {
  return (
    <Container
      direction="col"
      title="შექმენი ახალი დავალება"
      customStyle="flex flex-col gap-[40px]"
    >
      <div className="flex flex-row">
        <div className="flex flex-col font-firago gap-[55px] w-[50%]">
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
          <div className="flex flex-col">
            <label htmlFor="textArea">აღწერა</label>
            <textarea
              name=""
              id="textArea"
              className="border border-gray-300 p-4 rounded-[5px]  font-[300] text-[14px]"
            >
              მიზანია რომ შეიქმნას თანამედროვე, სუფთა და ფუნქციონალური დიზაინი,
              რომელიც უზრუნველყოფს მარტივ ნავიგაციას და მკაფიო ინფორმაციის
              გადაცემას. დიზაინი უნდა იყოს ადაპტირებადი (responsive), გამორჩეული
              ვიზუალით, მინიმალისტური სტილით და ნათელი ტიპოგრაფიით.
            </textarea>
          </div>
          <div className="font-firago flex flex-col gap-4">
            <select
              name=""
              id=""
              className="p-[14px] border border-gray-300 rounded-[5px] font-[300] text-[14px]"
            >
              <option value="">დაბალი</option>
              <option value="">საშუალო</option>
              <option value="">მაღალი</option>
            </select>
            <select
              name=""
              id=""
              className="p-[14px] border border-gray-300 rounded-[5px] font-[300] text-[14px]"
            >
              <option value="">დაბალი</option>
              <option value="">საშუალო</option>
              <option value="">მაღალი</option>
            </select>
          </div>
        </div>
        <div className="flex flex-col font-firago gap-[55px] w-[50%]">
          <div className="flex flex-col">
            <label htmlFor="title" className="font-[400] text-[14px]">
              დეპარტამენტი*
            </label>
            <select
              name=""
              id="title"
              className="appearance-none p-[14px] border border-[#DEE2E6] font-[300] leading-[100%] text-[#0D0F10] rounded-[5px] text-[14px]"
            >
              <option value="">დიზაინის დეპარტამენტი</option>
              <option value="">დიზაინის დეპარტამენტი</option>
              <option value="">დიზაინის დეპარტამენტი</option>
            </select>
          </div>
          <div className="flex flex-col">
            <label htmlFor="title" className="font-[400] text-[14px]">
              პასუხისმგებელი თანამშრომელი*
            </label>
            <select
              name=""
              id="title"
              className="appearance-none p-[14px] border border-[#DEE2E6] font-[300] leading-[100%] text-[#0D0F10] rounded-[5px] text-[14px]"
            >
              <option value="">
                <img src={pfp} alt="..." /> დიზაინის დეპარტამენტი
              </option>
              <option value="">
                <img src={pfp} alt="..." /> დიზაინის დეპარტამენტი
              </option>
              <option value="">
                <img src={pfp} alt="..." /> დიზაინის დეპარტამენტი
              </option>
            </select>
          </div>
          <div className="font-firago flex flex-col gap-4">
            <label htmlFor="">დედლაინი</label>
            <input
              type="date"
              id="deadline"
              className="p-[14px] border border-gray-300 font-[300] leading-[100%] text-[#0D0F10] rounded-[5px]"
            />
          </div>
        </div>
      </div>
    </Container>
  );
}
