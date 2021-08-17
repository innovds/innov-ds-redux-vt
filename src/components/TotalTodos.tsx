import { FC, useEffect } from "react";
import { useAppSelector } from "../app/hooks";
import { todoSelectors } from "../redux/slices/todoSlice";

export interface TotalTodosProps {}

const TotalTodos: FC<TotalTodosProps> = () => {
  const total = useAppSelector(todoSelectors.selectTotal);
  useEffect(() => {
    console.log(`Total Todos get rendered to ${total}`);
  });
  return <div>{total}</div>;
};

export default TotalTodos;
