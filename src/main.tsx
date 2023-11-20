import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.tsx";
import { Provider } from "react-redux";
import { store } from "./features/store.ts";
import "./styles/main.css";
import "./styles/scrollbar.css";
import "bootstrap-icons/font/bootstrap-icons.min.css";

// ! development only.
// import "./styles/breakpoints.css";

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <Provider store={store}>
      <App />
    </Provider>
  </React.StrictMode>
);
