import { configureStore } from "@reduxjs/toolkit";
import todosSlice from "./todos";

export const store = configureStore({
  reducer: {
    todos: todosSlice,
  },
});

export type Store = ReturnType<typeof store.getState>;
