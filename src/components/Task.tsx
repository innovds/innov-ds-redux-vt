import React, { FC } from "react";
import "./task.css";

export interface Todo {
  id: number;
  text: string;
  completed: boolean;
}

export interface TaskProps {
  todo: Todo;
  handleChange: (id: number) => void;
  deleteItem: (id: number) => void;
}

const Task: FC<TaskProps> = ({ todo, handleChange, deleteItem }) => {
  return (
    <div
      className={
        todo.completed ? "item-container item-checked" : "item-container"
      }
    >
      <li className="todo-item">{todo.text}</li>
      <button onClick={() => handleChange(todo.id)} className="item-check">
        <i className="fas fa-check"></i>
      </button>
      <button onClick={() => deleteItem(todo.id)} className="item-remove">
        <i className="fas fa-trash-alt"></i>
      </button>
    </div>
  );
};

export default Task;
