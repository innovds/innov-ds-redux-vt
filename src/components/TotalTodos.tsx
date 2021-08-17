export interface TotalTodosProps {
  total: number;
}

const TotalTodos: React.SFC<TotalTodosProps> = ({ total }) => {
  return <div>{total}</div>;
};

export default TotalTodos;
