import { useEffect } from "react";
import { useSelector } from "react-redux";
import Form from "./components/Form";
import TodoList from "./components/TodoList";
import { Todo } from "./types/TodoType";
import "./styles/App.css";

const App = () => {
  const todos = useSelector((state) => state.todos.value) as Todo[];

  useEffect(() => {
    localStorage.setItem("TODOS", JSON.stringify(todos));
  }, [todos]);

  return (
    <main>
      <TodoList />
      <Form />
    </main>
  );
};

export default App;
