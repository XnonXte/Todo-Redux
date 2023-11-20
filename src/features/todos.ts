import { createSlice } from "@reduxjs/toolkit";
import { Todo } from "../../types/TodoType";

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
            content: action.payload.content,
            id: action.payload.id,
            checked: action.payload.checked,
          },
        ],
      };
    },

    updateTodo: (state, action) => {
      return {
        value: state.value.map((todo) =>
          todo.id === action.payload.id
            ? { ...todo, checked: action.payload.checked }
            : todo
        ),
      };
    },

    removeTodo: (state, action) => {
      return {
        value: state.value.filter((todo) => todo.id !== action.payload.id),
      };
    },
  },
});

export const { addTodo, removeTodo, updateTodo } = todosSlice.actions;

export default todosSlice.reducer;
