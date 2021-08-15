import { FC } from "react";
import "./header.css";

const Header: FC = () => {
  return (
    <h1 className="title">
      <i className="fas fa-list"></i> ToDo List
    </h1>
  );
};

export default Header;
