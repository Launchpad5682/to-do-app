import React from "react";
import Checkbox from "./Checkbox";
import InputForm from "./InputForm";
import { useContext } from "react";
import { TasksContext } from "../context/TasksContext";

function Completed() {
  const [tasks, setTasks] = useContext(TasksContext);
  let size = tasks.filter((item) => item.completed === true).length;

  function deleteHandler() {
    let updatedTasks = [...tasks];
    updatedTasks = updatedTasks.filter((item) => item.completed === false);
    setTasks(updatedTasks);
    size = tasks.filter((item) => item.completed === true).length;
  }

  return (
    <div>
      <InputForm />
      <Checkbox completed />
      {size > 0 ? <button onClick={deleteHandler}>Delete All</button> : null}
    </div>
  );
}

export default Completed;
