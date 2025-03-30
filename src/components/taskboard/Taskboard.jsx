import Task from "../Task/TaskCard";
import TaskBoardTitle from "./TaskBoardTitle";

const getColor = {
  1: "#F7BC30",
  2: "#FB5607",
  3: "#FF006E",
  4: "#3A86FF",
};

export default function TaskBoard({ id, children, name }) {
  const color = id ? getColor[id] : "";
  return (
    <div className='rounded-[10px] w-[381px] max-w-[381px] flex flex-col gap-[30px]'>
      <TaskBoardTitle color={color} name={name}/>
      <div className='flex flex-col gap-[30px]'>
        {children}
        
      </div>
    </div>
  )
}
