import { createSlice } from "@reduxjs/toolkit";
import { postComment, fetchComments } from "../thunks/commentsThunk";

const initialState = {
  data: [],
  status: "idle",
};

const commentsSlice = createSlice({
  name: "comments",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchComments.pending, (state) => {
        state.status = "loading";
      })
      .addCase(fetchComments.fulfilled, (state, action) => {
        state.status = "succeeded";
        state.data = action.payload;
      })
      .addCase(fetchComments.rejected, (state) => {
        state.status = "failed";
      })
      .addCase(postComment.pending, (state) => {
        state.status = "loading";
      })
      .addCase(postComment.fulfilled, (state, action) => {
        state.status = "succeeded";

        if (action.payload.parent_id) {
          state.data = state.data.map((comment) => {
            if (comment.id === action.payload.parent_id) {
              return {
                ...comment,
                sub_comments: [...comment.sub_comments, action.payload],
              };
            }
            return comment;
          });
        } else {
          state.data.push({
            id: action.payload.id,
            text: action.payload.text,
            task_id: action.payload.task_id,
            parent_id: action.payload.parent_id,
            author_avatar: action.payload.author_avatar,
            author_nickname: action.payload.author_nickname,
            sub_comments: [],
          });
        }
      })
      .addCase(postComment.rejected, (state) => {
        state.status = "failed";
      });
  },
});

// export const { } = commentsSlice.actions;

export default commentsSlice.reducer;
