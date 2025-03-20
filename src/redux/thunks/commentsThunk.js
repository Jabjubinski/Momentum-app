import { createAsyncThunk } from "@reduxjs/toolkit";
import {get_comments, post_comment} from '../../api/comments'
 

export const postComment = createAsyncThunk(
  "comments/postComment",
  async ({ data }, { rejectWithValue }) => {
    try {
      const response = await post_comment({
        ...data,
      });

      return response;
    } catch (error) {
      return rejectWithValue(error);
    }
  }
);

export const fetchComments = createAsyncThunk(
  "comments/fetchComments",
  async ({ taskId }) => {
    const response = await get_comments({ taskId: taskId });
    return response;
  }
);
