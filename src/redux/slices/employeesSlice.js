import { createSlice } from "@reduxjs/toolkit";
import { fetchEmployees, postEmployee } from "../thunks/employeesThunks";
import { fetchDepartments } from "../thunks/departmentsThunk";

const initialState = {
  data: [],
  status: "idle",
};

const employeesSlice = createSlice({
  name: "employees",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(postEmployee.pending, (state) => {
        state.status = "loading";
      })
      .addCase(postEmployee.fulfilled, (state, action) => {
        state.status = "succeeded";
        state.data.push(action.payload);
      })
      .addCase(postEmployee.rejected, (state) => {
        state.status = "failed";
      })
      .addCase(fetchEmployees.pending, (state) => {
        state.status = "loading";
      })
      .addCase(fetchEmployees.fulfilled, (state, action) => {
        state.status = "succeeded";
        state.data = action.payload;
      })
      .addCase(fetchEmployees.rejected, (state) => {
        state.status = "failed";
      });
  },
});

export default employeesSlice.reducer;
