import { FC } from "react";
import "./header.css";
import TotalTodos from "./TotalTodos";

export interface HeaderProps {}

const Header: FC<HeaderProps> = () => {
  return (
    <h1 className="title">
      <i className="fas fa-list"></i> ToDo List
      <TotalTodos />
    </h1>
  );
};

export default Header;
