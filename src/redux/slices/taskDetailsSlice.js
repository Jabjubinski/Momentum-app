import { createSlice } from "@reduxjs/toolkit";
import { fetchTaskDetails, putTaskStatus } from "../thunks/taskDetailsthunk";

const initialState = {
  data: null,
  status: "idle",
};

const taskDetailsSlice = createSlice({
  name: "taskDetails",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchTaskDetails.pending, (state) => {
        state.status = "loading";
      })
      .addCase(fetchTaskDetails.fulfilled, (state, action) => {
        state.status = "succeeded";
        state.data = action.payload;
      })
      .addCase(fetchTaskDetails.rejected, (state) => {
        state.status = "failed";
      })
      .addCase(putTaskStatus.pending, (state) => {
        state.status = "loading";
      })
      .addCase(putTaskStatus.fulfilled, (state, action) => {
        state.status = "succeeded";
        state.data = action.payload;
      })
      .addCase(putTaskStatus.rejected, (state) => {
        state.status = "failed";
      });
  },
});

//   export const { } = taskDetailsSlice.actions;

export default taskDetailsSlice.reducer;
