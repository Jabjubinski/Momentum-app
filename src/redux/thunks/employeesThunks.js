import { createAsyncThunk } from "@reduxjs/toolkit";
import { get_employees, post_employees } from "../../api/employees";

export const postEmployee = createAsyncThunk(
  "employee/postEmployee",
  async ({ formData }, { rejectWithValue }) => {
    try {
      const response = await post_employees({
        formData: formData,
      });

      return response;
    } catch (error) {
      return rejectWithValue(error);
    }
  }
);

export const fetchEmployees = createAsyncThunk(
  "priorities/fetchEmplyees",
  async () => {
    const response = await get_employees();
    return response;
  }
);
