import Task, { Todo } from "./Task";
import "./header.css";
import { FC, useEffect } from "react";
import { todoSelectors } from "../redux/slices/todoSlice";
import { useAppSelector } from "../app/hooks";

export interface TasksProps {}

const Tasks: FC<TasksProps> = () => {
  const todosIds = useAppSelector(todoSelectors.selectIds);

  useEffect(() => {
    console.log(`Tasks get rendered`);
  });

  return (
    <div className="todo-items-container">
      <ul className="todo-items-list">
        {todosIds.map((id) => (
          <Task key={id} id={id as string} />
        ))}
      </ul>
    </div>
  );
};

export default Tasks;
