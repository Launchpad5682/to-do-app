import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import { TasksProvider } from "./context/TasksContext";

ReactDOM.render(
  <TasksProvider>
    <React.StrictMode>
      <App />
    </React.StrictMode>
  </TasksProvider>,
  document.getElementById("root")
);
