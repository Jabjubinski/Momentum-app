import { createAsyncThunk } from "@reduxjs/toolkit";
import { get_statuses } from "../../api/statuses";

export const fetchStatuses = createAsyncThunk(
  "statuses/fetchStatuses",
  async () => {
    const response = await get_statuses();
    return response;
  }
);
