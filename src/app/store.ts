import { configureStore, ThunkAction, Action } from "@reduxjs/toolkit";
import postsReducer from "../redux/slices/postSlice";
import todosReducer from "../redux/slices/todoSlice";

export const store = configureStore({
  reducer: {
    // posts: postsReducer,
    todos: todosReducer,
  },
});

export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>;
export type AppThunk<ReturnType = void> = ThunkAction<
  ReturnType,
  RootState,
  unknown,
  Action<string>
>;
