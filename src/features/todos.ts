import { createSlice } from "@reduxjs/toolkit";
import { Todo } from "../types/TodoType";

const todosLocal = JSON.parse(localStorage.getItem("TODOS") || "[]") as Todo[];

const todosSlice = createSlice({
  name: "todos",
  initialState: {
    value: todosLocal,
  },
  reducers: {
    addTodo: (state, action) => {
      return {
        value: [
          ...state.value,
          {
            title: action.payload.title,
            message: action.payload.message,
            id: action.payload.id,
            finished: action.payload.finished,
          },
        ],
      };
    },

    updateTodo: (state, action) => {
      return {
        value: state.value.map((todo) =>
          todo.id === action.payload.id
            ? { ...todo, finished: action.payload.finished }
            : todo
        ),
      };
    },

    removeTodo: (state, action) => {
      return {
        value: state.value.filter((todo) => todo.id !== action.payload.id),
      };
    },

    clearTodo: () => {
      return {
        value: [] as Todo[],
      };
    },
  },
});

export const { addTodo, clearTodo, removeTodo, updateTodo } =
  todosSlice.actions;

export default todosSlice.reducer;
