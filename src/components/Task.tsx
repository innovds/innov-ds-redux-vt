import React, { FC, useEffect } from "react";
import { useAppDispatch, useAppSelector } from "../app/hooks";
import {
  changeItemState,
  deleteTodo,
  todoSelectors,
} from "../redux/slices/todoSlice";
import "./task.css";

export interface Todo {
  id: string;
  text: string;
  completed: boolean;
}

export interface TaskProps {
  id: string;
}

const Task: FC<TaskProps> = ({ id }) => {
  const todo = useAppSelector((state) => todoSelectors.selectById(state, id));
  const dispatch = useAppDispatch();

  useEffect(() => {
    console.log(`Task with id ${id} get rendered`);
  });

  return (
    <>
      {todo && (
        <div
          className={
            todo.completed ? "item-container item-checked" : "item-container"
          }
        >
          <li className="todo-item">{todo.text}</li>
          <button
            onClick={() =>
              dispatch(
                changeItemState({
                  id: todo.id,
                  changes: { completed: !todo.completed },
                })
              )
            }
            className="item-check"
          >
            <i className="fas fa-check"></i>
          </button>
          <button
            onClick={() => dispatch(deleteTodo(id))}
            className="item-remove"
          >
            <i className="fas fa-trash-alt"></i>
          </button>
        </div>
      )}
    </>
  );
};

export default Task;
