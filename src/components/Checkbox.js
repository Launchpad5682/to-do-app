import React, { useContext, useState } from "react";
import { TasksContext } from "../context/TasksContext";

function Checkbox() {
  const [tasks, setTasks] = useContext(TasksContext);
  const [toggle, setToggle] = useState(false);

  function handleToggleCheck(event) {
    //console.log(event);
    const updatedTasks = tasks;
    // console.log(event.target.name);
    // console.log(event.target.checked);
    updatedTasks[event.target.name].completed =
      !updatedTasks[event.target.name].completed;
    setTasks(updatedTasks);
    // console.table(tasks);
  }

  return (
    <form>
      {tasks.map((item, index) => {
        return (
          <div key={index}>
            <input
              type="checkbox"
              key={index}
              name={index}
              onChange={handleToggleCheck}
              checked={item.completed}
            ></input>
            <label htmlFor={index}>{item.task}</label>
          </div>
        );
      })}
    </form>
  );
}

export default Checkbox;
