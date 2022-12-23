import React, { useContext, useState } from "react";
import { TasksFunctions } from "../../context/TaskContext";

function Modal({ onCloseModal }) {
  const [newTaskValue, setNewTaskValue] = useState("");
  const [characterCount, setCharacterCount] = useState(0);

  const { tasks, saveTasks } = useContext(TasksFunctions);

  const onChange = (event) => {
    setNewTaskValue(event.target.value);
    setCharacterCount(event.target.value.length);
  };

  const onAddTask = (text) => {
    if (text.length > 0) {
      const newTasks = [...tasks];
      newTasks.push({
        name: text,
        done: false,
      });
      saveTasks(newTasks);
      onCloseModal();
    } else {
      alert("Error: Write a task");
    }
  };

  return (
    <div className="w-full h-screen z-20 bg-dark absolute top-0">
      <div className="flex flex-col items-center w-5/6 h-1/4 m-auto mt-52 bg-primary border-2 border-tertiary md:w-2/6">
        <i
          onClick={() => onCloseModal()}
          className="fa-solid fa-xmark self-end cursor-pointer mt-1 mr-2 text-xl"
        ></i>
        <textarea
          onChange={onChange}
          placeholder="Write your task here..."
          className="w-10/12 h-4/6 my-1 text-2xl bg-tertiary resize-none outline-none p-1"
          maxLength={25}
        ></textarea>
        <p>{characterCount}/25</p>
      </div>
      <div className="w-5/6 h-12 m-auto bg-tertiary flex justify-center items-center md:w-2/6">
        <button
          onClick={() => onAddTask(newTaskValue)}
          className="text-3xl bg-secondary w-1/2 rounded-full active:translate-y-1 py-2 md:w-40 md:text-2xl"
        >
          Add Task
        </button>
      </div>
    </div>
  );
}

export { Modal };
