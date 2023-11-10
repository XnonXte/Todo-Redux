import { useState } from "react";
import { useDispatch } from "react-redux";
import { addTodo, clearTodo } from "../features/todos";

const Form = () => {
  const [title, setTitle] = useState("");
  const [message, setMessage] = useState("");
  const [finished, setFinished] = useState(false);

  const dispatch = useDispatch();

  return (
    <section className="my-4 mx-2">
      <form
        onSubmit={(e) => {
          e.preventDefault();

          const id = crypto.randomUUID();

          dispatch(
            addTodo({
              title,
              message,
              id,
              finished,
            })
          );

          setTitle("");
          setMessage("");
        }}
        className="flex flex-col items-center gap-2"
      >
        <input
          type="text"
          name="title"
          id="title"
          className="bg-slate-100 rounded-xl py-1 px-2 placeholder:italic"
          placeholder="Enter the title..."
          onChange={(e) => setTitle(e.target.value)}
          value={title}
          required
        />

        <input
          type="text"
          name="message"
          id="message"
          className="bg-slate-100 rounded-xl py-1 px-2 placeholder:italic"
          placeholder="Enter the message..."
          onChange={(e) => setMessage(e.target.value)}
          value={message}
          required
        />

        <span>
          <input
            type="checkbox"
            name="finished"
            id="finished"
            className="mr-1"
            onChange={(e) => setFinished(e.target.checked)}
            checked={finished}
          />
          <label htmlFor="finished">Set as finished</label>
        </span>

        <div>
          <button
            type="submit"
            className="mr-2 text-white bg-slate-500 hover:bg-slate-600 p-2 rounded-xl"
          >
            Add Todo
          </button>
          <button
            type="button"
            className="text-white bg-slate-700 hover:bg-slate-800 p-2 rounded-xl"
            onClick={() => dispatch(clearTodo())}
          >
            Clear Todo
          </button>
        </div>
      </form>
    </section>
  );
};

export default Form;
