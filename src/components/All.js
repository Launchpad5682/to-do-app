import Checkbox from "./Checkbox";
import React, { useContext } from "react";
import { TasksContext } from "../context/TasksContext";
import InputForm from "./InputForm";

function All() {
  const [tasks, setTasks] = useContext(TasksContext);

  return (
    <div>
      <InputForm />
      <Checkbox />
    </div>
  );
}

export default All;
