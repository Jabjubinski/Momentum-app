import { createSlice } from "@reduxjs/toolkit";
import { fetchTasks, postTasks } from "../thunks/tasksThunk";
import { putTaskStatus } from "../thunks/taskDetailsthunk";

const initialState = {
  data: [],
  status: "idle",
};

const tasksSlice = createSlice({
  name: "tasks",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(postTasks.pending, (state) => {
        state.status = "loading";
      })
      .addCase(postTasks.fulfilled, (state, action) => {
        state.status = "succeeded";
        state.data.push(action.payload);
      })
      .addCase(postTasks.rejected, (state) => {
        state.status = "failed";
      })
      .addCase(fetchTasks.pending, (state) => {
        state.status = "loading";
      })
      .addCase(fetchTasks.fulfilled, (state, action) => {
        state.status = "succeeded";
        state.data = action.payload;
      })
      .addCase(fetchTasks.rejected, (state) => {
        state.status = "failed";
      })
      .addCase(putTaskStatus.fulfilled, (state, action) => {
        state.data = state.data.map((_data) => {
          if (_data.id === action.payload.id) {
            return action.payload;
          }
          return _data;
        });
      });
  },
});

export default tasksSlice.reducer;
