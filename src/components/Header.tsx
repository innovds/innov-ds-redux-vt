import { FC } from "react";
import "./header.css";
import TotalTodos from "./TotalTodos";

export interface HeaderProps {
  total: number;
}

const Header: FC<HeaderProps> = ({ total }) => {
  return (
    <h1 className="title">
      <i className="fas fa-list"></i> ToDo List
      <TotalTodos total={total} />
    </h1>
  );
};

export default Header;
