import Task, { Todo } from "./Task";
import "./header.css";
import { FC } from "react";

export interface TasksProps {
  todos: Todo[];
  changeItemState: (id: number) => void;
  deleteItem: (id: number) => void;
}

const Tasks: FC<TasksProps> = ({ todos, changeItemState, deleteItem }) => {
  return (
    <div className="todo-items-container">
      <ul className="todo-items-list">
        {todos.map((todo) => (
          <Task
            key={todo.id}
            todo={todo}
            handleChange={changeItemState}
            deleteItem={deleteItem}
          />
        ))}
      </ul>
    </div>
  );
};

export default Tasks;
