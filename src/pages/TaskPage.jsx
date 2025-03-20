import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import Container from "../components/Container";

import TaskBoard from "../components/taskboard/Taskboard";

import { fetchTasks } from "../redux/thunks/tasksThunk";
import { fetchStatuses } from "../redux/thunks/statusesThunk";
import { useMemo, useEffect } from "react";
import TaskFilter from "../components/filter/TaskFilter";

export default function TaskPage() {
  const { data, status } = useSelector((state) => state.tasks);
  const { data: statusesData } = useSelector((state) => state.statuses);
  const dispatch = useDispatch();

  console.log(data);

  const isLoading = useMemo(() => status === "loading", [status]);

  useEffect(() => {
    dispatch(fetchTasks());
    dispatch(fetchStatuses());
  }, [dispatch]);

  const [filteredData, setFilteredData] = useState({
    departments: [],
    employee: { id: null, name: null },
    priorities: [],
  });

  const filteredTasks = useMemo(() => {
    if (
      filteredData.departments.length === 0 &&
      !filteredData.employee.id &&
      filteredData.priorities.length === 0
    ) {
      return data;
    }
    console.log("(");

    return data.filter((task) => {
      const departmentMatch = filteredData.departments.length
        ? filteredData.departments.some(({ id }) => task.department.id === id)
        : true;

      const employeeMatch = filteredData.employee.id
        ? task.employee.id === filteredData.employee.id
        : true;

      const priorityMatch = filteredData.priorities.length
        ? filteredData.priorities.some(({ id }) => task.priority.id === id)
        : true;

      return departmentMatch && employeeMatch && priorityMatch;
    });
  }, [filteredData, data]);

  const tasksByStatus = useMemo(() => {
    return statusesData.map((status) => ({
      id: status.id,
      name: status.name,
      tasks: Array.isArray(filteredTasks)
        ? filteredTasks.filter((task) => task.status.id === status.id)
        : [],
    }));
  }, [filteredTasks, statusesData]);

  return (
    <Container
      direction="col"
      title="დავალებების გვერდი"
      customStyle="flex flex-col gap-[40px]"
    >
      <TaskFilter
        filteredData={filteredData}
        setFilteredData={setFilteredData}
      />
      <div className="flex gap-[30px]">
        {tasksByStatus.map((data) => (
          <TaskBoard
            id={data.id}
            name={data.name}
            key={data.id}
            tasks={data.tasks}
          />
        ))}
      </div>
    </Container>
  );
}
