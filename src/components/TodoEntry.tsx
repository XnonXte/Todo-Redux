import { useState } from "react";
import { useDispatch } from "react-redux";
import { addTodo } from "../features/todos";

const TodoEntry = () => {
  const [content, setContent] = useState("");
  const dispatch = useDispatch();

  function handleNewTodo(e: any) {
    e.preventDefault();

    if (content === "") {
      alert("New goal cannot be empty!");
      return;
    }

    const id = crypto.randomUUID();
    dispatch(
      addTodo({
        id,
        content,
        checked: false,
      })
    );
    setContent("");
  }

  return (
    <section className="mb-4">
      <form className="flex flex-col gap-4" onSubmit={handleNewTodo}>
        <input
          type="text"
          name="newTodo"
          id="newTodo"
          placeholder="Add new goals"
          className="p-4 bg-blue-600 shadow-xl rounded-2xl"
          onChange={(e) => setContent(e.target.value)}
          value={content}
        />
        <button
          type="submit"
          className="flex items-center justify-center p-3 bg-black rounded-xl hover:bg-neutral-200 active:bg-white active:text-black"
        >
          <i className="text-4xl bi bi-plus"></i>
          <span className="text-sm">Add New Todo</span>
        </button>
      </form>
    </section>
  );
};

export default TodoEntry;
