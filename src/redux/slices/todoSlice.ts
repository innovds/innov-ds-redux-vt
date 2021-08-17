import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { RootState } from "../../app/store";
import { Todo } from "../../components/Task";

const initialState: { todos: Todo[] } = {
  todos: [],
};

const todoSlice = createSlice({
  name: "todo",
  initialState,
  reducers: {
    addTodo(state, action: PayloadAction<string>) {
      const todo: Todo = {
        id: state.todos.length,
        text: action.payload,
        completed: false,
      };
      state.todos.push(todo);
      // return [...state.todos,action.payload];
    },
    changeItemState(state, action: PayloadAction<number>) {
      for (let i = 0; i < state.todos.length; i++) {
        if (state.todos[i].id === action.payload) {
          state.todos[i].completed = !state.todos[i].completed;
          break;
        }
      }
    },
    deleteTodo(state, action: PayloadAction<number>) {
      state.todos = state.todos.filter(
        (todo: Todo) => todo.id !== action.payload
      );
    },
  },
});

export const { addTodo } = todoSlice.actions;

export const selectTodos = (state: RootState) => state.todos.todos;

export const selectTodoById = (state: RootState, id: number) =>
  state.todos.todos[id];

export default todoSlice.reducer;
