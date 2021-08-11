import { useState, createContext } from "react";

export const TasksContext = createContext();

export const TasksProvider = (props) => {
  /*{ task: null, completed: false} */
  const [tasks, setTasks] = useState([]);

  return (
    <TasksContext.Provider value={[tasks, setTasks]}>
      {props.children}
    </TasksContext.Provider>
  );
};
