  import pfp from "./pfp.png";
  import high from "./High.svg";
  import medium from "./medium.svg";
  import low from "./Low.svg";
  
  export const employeeOptions = [
    {
      value: "employee1",
      label: (
        <div className="flex items-center gap-2">
          <img src={pfp} alt="pfp" className="w-6 h-6 rounded-full" />
          <span>დიზაინის დეპარტამენტი</span>
        </div>
      ),
    },
    {
      value: "employee2",
      label: (
        <div className="flex items-center gap-2">
          <img src={pfp} alt="pfp" className="w-6 h-6 rounded-full" />
          <span>გაყიდვების დეპარტამენტი</span>
        </div>
      ),
    },
    {
      value: "employee3",
      label: (
        <div className="flex items-center gap-2">
          <img src={pfp} alt="pfp" className="w-6 h-6 rounded-full" />
          <span>მარკეტინგის დეპარტამენტი</span>
        </div>
      ),
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
      value:"დასაწყები" , label:"დასაწყები"
    },
    {
      value:"პროგრესში" , label:"პროგრესში"
    },
    {
      value:"მზად ტესტირებისთვის" , label:"მზად ტესტირებისთვის"
    },
    {
      value:"დასრულებული" , label:"დასრულებული"
    },
  ]

  