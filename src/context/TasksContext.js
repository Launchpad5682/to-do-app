import { useState, createContext } from "react";

export const TasksContext = createContext();

export const TasksProvider = (props) => {
  /*{ task: null, completed: false} */

  const [tasks, setTasks] = useState(getToDoData());

  return (
    <TasksContext.Provider value={[tasks, setTasks]}>
      {props.children}
    </TasksContext.Provider>
  );
};

// getting data from localStorage
const getToDoData = () => {
  let toDoData = localStorage.getItem("toDo");
  if (toDoData) {
    return JSON.parse(toDoData);
  } else {
    return [];
  }
};
