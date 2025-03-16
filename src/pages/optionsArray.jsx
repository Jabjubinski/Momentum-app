import pfp from "./pfp.png";
import high from "./High.svg";
import medium from "./medium.svg";
import low from "./Low.svg";

export const employeeOptions = [
  {
    value: "employee1",
    label: "ჯაბა ჯანელიძე",
    icon: 'https://d2bzx2vuetkzse.cloudfront.net/fit-in/0x450/unshoppable_producs/659d3015-7c2c-401b-bdac-5516bbd09644.jpeg',
  },
  {
    value: "employee1",
    label: "გიორგი ჩარკვიანი",
    icon: 'https://d2bzx2vuetkzse.cloudfront.net/fit-in/0x450/unshoppable_producs/659d3015-7c2c-401b-bdac-5516bbd09644.jpeg',
  },
  {
    value: "employee1",
    label: "ემილია მორგანი",
    icon: 'https://d2bzx2vuetkzse.cloudfront.net/fit-in/0x450/unshoppable_producs/659d3015-7c2c-401b-bdac-5516bbd09644.jpeg',
  },
];

export const priorityOptions = [
  {
    value: "დაბალი",
    label: (
      <div className="flex items-center gap-2">
        <img src={low} alt="pfp" />
        <span>დაბალი</span>
      </div>
    ),
  },
  {
    value: "საშუალო",
    label: (
      <div className="flex items-center gap-2">
        <img src={medium} alt="pfp" className="" />
        <span>საშუალო</span>
      </div>
    ),
  },
  {
    value: "მაღალი",
    label: (
      <div className="flex items-center gap-2">
        <img src={high} alt="pfp" className="" />
        <span>მაღალი</span>
      </div>
    ),
  },
];

export const status = [
  {
    value: "დასაწყები",
    label: "დასაწყები",
  },
  {
    value: "პროგრესში",
    label: "პროგრესში",
  },
  {
    value: "მზად ტესტირებისთვის",
    label: "მზად ტესტირებისთვის",
  },
  {
    value: "დასრულებული",
    label: "დასრულებული",
  },
];

export const department = [
  {
    value: "მარკეტინგის დეპარტამენტი",
    label: "მარკეტინგის დეპარტამენტი",
  },
  {
    value: "დიზაინის დეპარტამენტი",
    label: "დიზაინის დეპარტამენტი",
  },
  {
    value: "ლოჯისტიკის დეპარტამენტი",
    label: "ლოჯისტიკის დეპარტამენტი",
  },
  {
    value: "IT დეპარტამენტი",
    label: "IT დეპარტამენტი",
  },
];
