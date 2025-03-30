import React, { useState, useEffect, useMemo } from "react";
import { useDispatch, useSelector } from "react-redux";
import { DragDropContext, Droppable, Draggable } from "@hello-pangea/dnd"; // React Beautiful DnD's latest version package
import Container from "../components/Container";
import TaskBoard from "../components/taskboard/Taskboard";
import TaskFilter from "../components/filter/TaskFilter";
import { fetchTasks } from "../redux/thunks/tasksThunk";
import { putTaskStatus } from "../redux/thunks/taskDetailsthunk";
import { fetchStatuses } from "../redux/thunks/statusesThunk";
import Task from "../components/Task/TaskCard";
import toast from "react-hot-toast";

export default function TaskPage() {
  const { data, status } = useSelector((state) => state.tasks);
  const { data: statusesData } = useSelector((state) => state.statuses);
  const dispatch = useDispatch();

  // Fetch tasks and statuses on mount
  useEffect(() => {
    dispatch(fetchTasks());
    dispatch(fetchStatuses());
  }, [dispatch]);

  // Filter state management
  const [filteredData, setFilteredData] = useState({
    departments: [],
    employee: { id: null, name: null },
    priorities: [],
  });

  // Filter tasks based on selected filters
  const filteredTasks = useMemo(() => {
    if (
      filteredData.departments.length === 0 &&
      !filteredData.employee.id &&
      filteredData.priorities.length === 0
    ) {
      return data;
    }
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

  // Group tasks by status for drag and drop functionality
  const tasksByStatus = useMemo(() => {
    return statusesData.map((status) => ({
      id: status.id,
      name: status.name,
      tasks: Array.isArray(filteredTasks)
        ? filteredTasks.filter((task) => task.status.id === status.id).reverse()
        : [],
    }));
  }, [filteredTasks, statusesData]);

  // Handle drag end event
  const onDragEnd = (result) => {
    if (!result.destination) return;

    const { source, destination, draggableId } = result;
    if (source.droppableId !== destination.droppableId) {
      // dispatch(updateTaskStatus(draggableId, destination.droppableId));
      dispatch(
        putTaskStatus({ id: draggableId, status_id: destination.droppableId })
      ).then((response) => {
        if (response.meta.requestStatus == "fulfilled") {
          toast.success("სტატუსი წარმატებით შეიცვალა!");
        } else {
          toast.error("დაფიქსირდა შეცდომა!");
        }
      });
      console.log(destination.droppableId, draggableId);
    }
  };

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
      <DragDropContext onDragEnd={onDragEnd}>
        <div className="flex gap-[30px]">
          {tasksByStatus.map((data) => (
            <Droppable droppableId={data.id.toString()} key={data.id}>
              {(provided) => (
                <div ref={provided.innerRef} {...provided.droppableProps}>
                  <TaskBoard id={data.id} name={data.name}>
                    {data.tasks.map((task, index) => (
                      <Draggable
                        key={task.id}
                        draggableId={task.id.toString()}
                        index={index}
                      >
                        {(provided) => (
                          <div
                            ref={provided.innerRef}
                            {...provided.draggableProps}
                            {...provided.dragHandleProps}
                          >
                            <Task color={"red"} task={task} />
                          </div>
                        )}
                      </Draggable>
                    ))}
                    {provided.placeholder}
                  </TaskBoard>
                </div>
              )}
            </Droppable>
          ))}
        </div>
      </DragDropContext>
    </Container>
  );
}
