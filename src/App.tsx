import { useEffect } from "react";
import { useSelector } from "react-redux";
import Form from "./components/Form";
import TodoList from "./components/TodoList";
import { Todo } from "./types/TodoType";

const App = () => {
  const todos = useSelector((state) => state.todos.value) as Todo[];

  useEffect(() => {
    localStorage.setItem("TODOS", JSON.stringify(todos));
  }, [todos]);

  return (
    <>
      <TodoList />
      <Form />
    </>
  );
};

export default App;
