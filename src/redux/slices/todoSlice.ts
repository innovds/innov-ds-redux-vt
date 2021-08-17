import {
  createEntityAdapter,
  createSlice,
  PayloadAction,
} from "@reduxjs/toolkit";
import { RootState } from "../../app/store";
import { Todo } from "../../components/Task";
import { generate } from "shortid";

const todoAdapter = createEntityAdapter<Todo>({
  selectId: (todo) => todo.id,
});

const todoSlice = createSlice({
  name: "todos",
  initialState: todoAdapter.getInitialState(),
  reducers: {
    addTodo(state, action: PayloadAction<string>) {
      const todo: Todo = {
        id: generate(),
        text: action.payload,
        completed: false,
      };
      todoAdapter.addOne(state, todo);
      // return [...state.todos,action.payload];
    },
    changeItemState: todoAdapter.updateOne,
    deleteTodo: todoAdapter.removeOne,
  },
});

export const { addTodo, changeItemState, deleteTodo } = todoSlice.actions;

export const todoSelectors = todoAdapter.getSelectors(
  (state: RootState) => state.todos
);

export default todoSlice.reducer;
