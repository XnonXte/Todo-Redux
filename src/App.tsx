import { useEffect } from "react";
import { useSelector } from "react-redux";
import { Todo } from "../types/TodoType";
import { Store } from "./features/store";
import Header from "./components/Header";
import Footer from "./components/Footer";
import TodoList from "./components/TodoList";
import TodoEntry from "./components/TodoEntry";
import TodoStatus from "./components/TodoStatus";

const App = () => {
  const todos: Todo[] = useSelector((state: Store) => state.todos.value);

  useEffect(() => {
    localStorage.setItem("TODOS", JSON.stringify(todos));
  }, [todos]);

  return (
    <div className="text-white bg-blue-800 font-poppins">
      <div className="max-w-[578px] p-4 mx-auto">
        <Header />
        <TodoList />
        <TodoEntry />
        <TodoStatus />
        <Footer />
      </div>
    </div>
  );
};

export default App;
