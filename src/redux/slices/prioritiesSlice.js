import { createSlice } from "@reduxjs/toolkit";
import { fetchPriorities } from "../thunks/prioritiesThunk";

const initialState = {
  data: [],
  status: "idle",
};

const prioritiesSlice = createSlice({
  name: "priorities",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchPriorities.pending, (state) => {
        state.status = "loading";
      })
      .addCase(fetchPriorities.fulfilled, (state, action) => {
        state.status = "succeeded";
        state.data = action.payload;
      })
      .addCase(fetchPriorities.rejected, (state) => {
        state.status = "failed";
      });
  },
});

export default prioritiesSlice.reducer;