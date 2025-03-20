import { createAsyncThunk } from "@reduxjs/toolkit";
import { get_priorities } from "../../api/priorities";

export const fetchPriorities = createAsyncThunk(
  "priorities/fetchPriorities",
  async () => {
    const response = await get_priorities();
    return response;
  }
);
