import { createAsyncThunk } from "@reduxjs/toolkit";
import { get_comments } from "../../api/comments";

export const fetchComments = createAsyncThunk(
  "departments/fetchDepartments",
  async ({task_id}) => {
    const response = await get_comments({task_id});
    return response;
  }
);