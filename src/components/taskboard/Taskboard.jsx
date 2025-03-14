import Task from "../Task/TaskCard";
import TaskBoardTitle from "./TaskBoardTitle";

export default function TaskBoard({ id }) {
  return (
    <div className="rounded-[10px] w-[381px] max-w-[381px] flex flex-col gap-[30px]">
      <TaskBoardTitle id={id} name="TITLE" />
      <div className="flex flex-col gap-[30px]">
        <Task
          difficulty="საშუალო"
          department_id={1}
          date="2022/09/18"
          commentsCount="8"
          difficulty_id={1}
          progress_id={id}
        />
        <Task
          difficulty="საშუალო"
          department_id={2}
          date="2022/09/18"
          commentsCount="8"
          difficulty_id={2}
          progress_id={id}
        />
        <Task
          difficulty="საშუალო"
          department_id={3}
          date="2022/09/18"
          commentsCount="8"
          difficulty_id={3}
          progress_id={id}
        />
        <Task
          difficulty="საშუალო"
          department_id={4}
          date="2022/09/18"
          commentsCount="8"
          difficulty_id={2}
          progress_id={id}
        />
      </div>
    </div>
  );
}
