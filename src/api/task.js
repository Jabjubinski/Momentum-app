import axios from "../utils/axios";

export const post_tasks = async ({
  name,
  description,
  employee_id,
  due_date,
  status_id,
  priority_id,
}) => {
 
  const response = await axios.post("/tasks", {
    name: name,
    description: description,
    employee_id: employee_id,
    due_date: due_date,
    status_id: status_id,
    priority_id: priority_id,
  });
  return response.data;
};

export const get_tasks = async () => {
  const response = await axios.get("/tasks");
  return response.data;
};
