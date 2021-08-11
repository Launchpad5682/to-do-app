import React, { useContext, useState } from "react";
import { TasksContext } from "../context/TasksContext";

function Checkbox(props) {
  const [tasks, setTasks] = useContext(TasksContext);
  const [toggle, setToggle] = useState(false);
  const active = props.active;
  const completed = props.completed;

  function handleToggleCheck(event) {
    //console.log(event);
    const updatedTasks = [...tasks];
    // console.table(tasks);
    // console.log(event.target.name);
    // console.log(event.target.checked);
    updatedTasks[event.target.name].completed =
      !updatedTasks[event.target.name].completed;
    // console.log(typeof updatedTasks);
    // console.log(typeof [...updatedTasks]);
    // console.log(updatedTasks);
    // console.log([...updatedTasks]);
    setTasks(updatedTasks);
    /* Need to look for the solution, why the 
    above line worked and not the below one */
    /* Earlier, I was using Shallow Copy which caused lot of errors*/
    //console.table(tasks);
  }

  const activeTasks = tasks
    .filter((item) => item.completed === false)
    .map((item, index) => {
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
    });

  const allTasks = tasks.map((item, index) => {
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
  });

  const completedTasks = tasks
    .filter((item) => item.completed === true)
    .map((item, index) => {
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
    });

  return (
    <form>{active ? activeTasks : completed ? completedTasks : allTasks}</form>
  );
}

export default Checkbox;
