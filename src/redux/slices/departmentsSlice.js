import { createSlice } from "@reduxjs/toolkit";
import { fetchDepartments } from "../thunks/departmentsThunk";

const initialState = {
  data: [],
  status: "idle",
};

const departmentsSlice = createSlice({
  name: "departments",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchDepartments.pending, (state) => {
        state.status = "loading";
      })
      .addCase(fetchDepartments.fulfilled, (state, action) => {
        state.status = "succeeded";
        state.data = action.payload;
      })
      .addCase(fetchDepartments.rejected, (state) => {
        state.status = "failed";
      });
  },
});

export default departmentsSlice.reducer;
