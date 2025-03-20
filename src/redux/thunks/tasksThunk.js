import { createAsyncThunk } from "@reduxjs/toolkit";
import { get_tasks, post_tasks } from "../../api/task";

export const postTasks = createAsyncThunk(
  "task/postTasks",
  async ({ data }, { rejectWithValue }) => {
    try {
      const response = await post_tasks({
        ...data,
      });

      return response;
    } catch (error) {
      return rejectWithValue(error);
    }
  }
);

export const fetchTasks = createAsyncThunk("tasks/fetchTasks", async () => {
  const response = await get_tasks();
  return response;
});

// async ({
//   name,
//   description,
//   employee_id,
//   due_date,
//   status_id,
//   priority_id,
// }) => {
//   const response = await post_tasks({
//     name,
//     description,
//     employee_id,
//     due_date,
//     status_id,
//     priority_id,
//   });
//   return response;
// }
