import { createSlice } from "@reduxjs/toolkit";
import { fetchStatuses } from "../thunks/statusesThunk";

const initialState = {
  data: [],
  status: "idle",
};

const statusesSlice = createSlice({
  name: "statuses",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchStatuses.pending, (state) => {
        state.status = "loading";
      })
      .addCase(fetchStatuses.fulfilled, (state, action) => {
        state.status = "succeeded";
        state.data = action.payload;
      })
      .addCase(fetchStatuses.rejected, (state) => {
        state.status = "failed";
      });
  },
});

export default statusesSlice.reducer;
