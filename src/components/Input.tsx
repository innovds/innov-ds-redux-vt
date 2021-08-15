import { FC, FormEvent, useState } from "react";
import "./input.css";

export interface InputProps {
  addTodo: (inputValue: string) => void;
}

const Input: FC<InputProps> = ({ addTodo }) => {
  const [inputValue, setInputValue] = useState("");

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    addTodo(inputValue);
    setInputValue("");
  };

  return (
    <form onSubmit={handleSubmit} className="todo-input-container">
      <input
        type="text"
        name="todo-input"
        id="todo-input-field"
        autoComplete="off"
        value={inputValue}
        onChange={(e) => setInputValue(e.target.value)}
        required
      />
      <button type="submit" className="todo-input-add-button">
        <i className="fas fa-plus-square"></i>
      </button>
    </form>
  );
};

export default Input;
