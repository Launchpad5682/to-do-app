import React, { useState, useContext } from "react";
import { TasksContext } from "../context/TasksContext";

function InputForm() {
  const [tasks, setTasks] = useContext(TasksContext);
  const [inputTodo, setInputTodo] = useState("");

  function onSubmitHandler(event) {
    event.preventDefault();
    setTasks([...tasks, { task: inputTodo, completed: false }]);
    // console.log(tasks);
    setInputTodo("");
  }

  function onChangeHandler(event) {
    setInputTodo(event.target.value);
  }

  return (
    <form onSubmit={onSubmitHandler}>
      <input type="text" onChange={onChangeHandler} value={inputTodo} />
      <button>Add</button>
    </form>
  );
}

export default InputForm;
