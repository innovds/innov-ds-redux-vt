import { configureStore, ThunkAction, Action } from "@reduxjs/toolkit";
import todosReducer from "../redux/slices/todoSlice";
import postReducer, { getAllPosts } from "../redux/slices/postSlice";

export const store = configureStore({
  reducer: {
    posts: postReducer,
    todos: todosReducer,
  },
});

store.dispatch(getAllPosts());

export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>;
export type AppThunk<ReturnType = void> = ThunkAction<
  ReturnType,
  RootState,
  unknown,
  Action<string>
>;
