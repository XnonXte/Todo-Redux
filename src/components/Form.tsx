import { useState } from "react";
import { useDispatch } from "react-redux";
import { addTodo, clearTodo } from "../features/todos";

const Form = () => {
  const [title, setTitle] = useState("");
  const [message, setMessage] = useState("");
  const [finished, setFinished] = useState(false);
  const dispatch = useDispatch();

  function handleTodoSubmit(e) {
    // Function to handle new todo.
    e.preventDefault();

    if (title === "" || message === "") {
      alert("Title or message input cannot be empty!");
      return;
    }

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
  }

  return (
    <>
      <hr />
      <form onSubmit={handleTodoSubmit} className="form">
        <label htmlFor="title">Todo Title: </label>
        <input
          type="text"
          name="title"
          id="title"
          onChange={(e) => setTitle(e.target.value)}
          value={title}
        />

        <label htmlFor="message">Todo Message: </label>
        <input
          type="text"
          name="message"
          id="message"
          onChange={(e) => setMessage(e.target.value)}
          value={message}
        />

        <div>
          <input
            type="checkbox"
            name="finished"
            id="finished"
            onChange={(e) => setFinished(e.target.checked)}
            checked={finished}
          />
          <label htmlFor="finished">Set as finished</label>
        </div>

        <div className="form-buttons">
          <button type="submit">Add Todo</button>
          <button type="button" onClick={() => dispatch(clearTodo())}>
            Clear Todo
          </button>
        </div>
      </form>
      <hr />
    </>
  );
};

export default Form;
