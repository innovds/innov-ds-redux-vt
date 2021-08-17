import Header from "./components/Header";
import Input from "./components/Input";
import Tasks from "./components/Tasks";
import "./App.css";

function App() {
  return (
    <div>
      <Header />
      <div className="container">
        <Input />
        <Tasks />
      </div>
    </div>
  );
}

export default App;
