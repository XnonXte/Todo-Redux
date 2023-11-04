import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import { removeTodo, updateTodo } from "../features/todos";

const TodoList = () => {
  const todos = useSelector((state) => state.todos.value);
  const dispatch = useDispatch();

  return (
    <ol className="todo-list">
      {todos.map((todo) => {
        const { title, message, id, finished } = todo;

        return (
          <li>
            <div className="todo-content">
              {/* Todo content. */}
              <div>
                <h4>{title}</h4>
                <span>{message}</span>
              </div>

              <div className="todo-actions">
                {/* Todo actions. */}
                <input
                  type="checkbox"
                  name="finished"
                  id="finished"
                  onChange={(e) => {
                    dispatch(updateTodo({ id, finished: e.target.checked }));
                  }}
                  checked={finished}
                />
                <label htmlFor="checkbox">Finished</label>
                <button
                  type="button"
                  onClick={() => {
                    dispatch(removeTodo({ id }));
                  }}
                >
                  Remove
                </button>
              </div>
            </div>
          </li>
        );
      })}
    </ol>
  );
};

export default TodoList;
