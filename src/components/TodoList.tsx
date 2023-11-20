import { useSelector } from "react-redux";
import { Todo } from "../types/TodoType";
import { useDispatch } from "react-redux";
import { removeTodo, updateTodo } from "../features/todos";

const TodoList = () => {
  const todos: Todo[] = useSelector((state) => state.todos.value);
  const dispatch = useDispatch();

  function handleRemoveTodo(id: string) {
    dispatch(removeTodo({ id }));
  }

  return (
    <section className="mb-6">
      <ul className="flex flex-col gap-3">
        {todos.map((todo) => {
          const { checked, content, id } = todo;

          return (
            <li
              key={id}
              className="flex items-center justify-between p-4 bg-blue-900 rounded-xl hover:bg-blue-950"
            >
              <div className="space-x-3">
                <input
                  type="checkbox"
                  name="finished"
                  id="finished"
                  checked={checked}
                  onChange={(e) => {
                    dispatch(updateTodo({ id, checked: e.target.checked }));
                  }}
                />
                <label
                  htmlFor="finished"
                  className={`text-sm ${checked ? "line-through" : ""}`}
                >
                  {content}
                </label>
              </div>
              <button
                type="button"
                onClick={() => handleRemoveTodo(id)}
                className="text-neutral-400 hover:text-white"
              >
                <i className="text-lg bi bi-trash"></i>
              </button>
            </li>
          );
        })}
      </ul>
    </section>
  );
};

export default TodoList;
