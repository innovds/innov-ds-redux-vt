import {
  createAsyncThunk,
  createEntityAdapter,
  createSlice,
  PayloadAction,
} from "@reduxjs/toolkit";
import postApi from "../../api/postApi";
import { RootState } from "../../app/store";

export type Post = {
  userId: number;
  id: number;
  title: string;
  body: string;
};

const postEntityAdapter = createEntityAdapter<Post>({
  selectId: (post) => post.id,
  sortComparer: (postA, postB) => postA.title.localeCompare(postB.title), // optionnel
});

export const getAllPosts = createAsyncThunk("posts/getAllPosts", async () => {
  return await postApi.getAllPosts();
});

const postSlice = createSlice({
  name: "posts",
  initialState: postEntityAdapter.getInitialState(),
  reducers: {
    removeOnePost: (state, action: PayloadAction<number>) => {
      postEntityAdapter.removeOne(state, action.payload);
    },
  },
  extraReducers: (builder) => {
    builder.addCase(getAllPosts.fulfilled, (state, action) => {
      postEntityAdapter.setAll(state, action.payload);
    });
  },
});

export const postSelectors = postEntityAdapter.getSelectors<RootState>(
  (state) => state.posts
);

export const { removeOnePost } = postSlice.actions;

export default postSlice.reducer;
