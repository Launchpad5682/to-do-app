import { useState, createContext } from "react";

export const TasksContext = createContext();

export const TasksProvider = (props) => {
  const [tasks, setTasks] = useState([
    { id: null, task: null, completed: false },
  ]);

  return (
    <TasksContext.Provider value={[tasks, setTasks]}>
      {props.children}
    </TasksContext.Provider>
  );
};
