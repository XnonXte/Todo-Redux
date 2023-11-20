import { useSelector } from "react-redux";
import { Todo } from "../types/TodoType";

const TodoStatus = () => {
  const todos: Todo[] = useSelector((state) => state.todos.value);
  const completedCount = todos.reduce(
    (count, todo) => (todo.checked ? count + 1 : count),
    0
  );
  const pendingCount = todos.reduce(
    (count, todo) => (!todo.checked ? count + 1 : count),
    0
  );

  return (
    <section className="mb-6">
      <div className="space-y-2 text-center">
        <h4>Completed Tasks: {completedCount}</h4>
        <h4>Pending Tasks: {pendingCount}</h4>
      </div>
    </section>
  );
};

export default TodoStatus;
