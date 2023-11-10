import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import { removeTodo, updateTodo } from "../features/todos";
import { Todo } from "../types/TodoType";

const TodoList = () => {
  const todos = useSelector((state) => state.todos.value);
  const dispatch = useDispatch();

  return (
    <section className="my-4 mx-2">
      <div>
        {todos.map((todo: Todo, index: number) => {
          const { title, message, id, finished } = todo;
          return (
            <div className="flex items-center" key={id}>
              <span className="mr-2 text-white bg-slate-500 p-2 rounded-full">
                {/* Janky ass list numbering system. */}
                {index + 1}.
              </span>

              <div className="w-full">
                <div className="font-bold">{title}</div>
                <span>{message}</span>
              </div>

              <input
                type="checkbox"
                name="finished"
                id={`finished-${id}`}
                className="mr-1"
                onChange={(e) => {
                  dispatch(updateTodo({ id, finished: e.target.checked }));
                }}
                checked={finished}
              />
              <label htmlFor={`finished-${id}`}>Finished</label>

              <button
                type="button"
                className="ml-2 text-white bg-red-400 hover:bg-red-500 p-2 rounded-xl"
                onClick={() => {
                  dispatch(removeTodo({ id }));
                }}
              >
                Remove
              </button>
            </div>
          );
        })}
      </div>
    </section>
  );
};

export default TodoList;
