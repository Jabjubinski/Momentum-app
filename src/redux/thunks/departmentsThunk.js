import { createAsyncThunk } from "@reduxjs/toolkit";
import { get_departments } from "../../api/departments";

export const fetchDepartments = createAsyncThunk(
  "departments/fetchDepartments",
  async () => {
    const response = await get_departments();
    return response;
  }
);
