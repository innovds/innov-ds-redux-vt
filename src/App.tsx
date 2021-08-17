import { useLocalStorage } from "./app/hooks";
import Header from "./components/Header";
import Input from "./components/Input";
import Tasks from "./components/Tasks";
import "./App.css";
import { Todo } from "./components/Task";

function App() {
  const [todos, setTodos] = useLocalStorage<Todo[]>("todos", []);

  const addTodo = (text: string) => {
    const newTodo = { id: todos.length, text: text, completed: false };
    setTodos((currentTodos) => [...currentTodos, newTodo]);
  };

  const changeItemState = (id: number) => {
    setTodos((currentTodos) => {
      return currentTodos.map((todo) => {
        if (todo.id === id) {
          return { ...todo, completed: !todo.completed };
        } else return todo;
      });
    });
  };

  const deleteItem = (id: number) => {
    setTodos((currentTodos) => {
      return currentTodos.filter((todo) => todo.id !== id);
    });
  };

  return (
    <div>
      <Header total={todos.length} />
      <div className="container">
        <Input addTodo={addTodo} />
        <Tasks
          todos={todos}
          changeItemState={changeItemState}
          deleteItem={deleteItem}
        />
      </div>
    </div>
  );
}

export default App;
