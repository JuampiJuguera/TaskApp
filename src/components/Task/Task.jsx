import React, { useContext } from "react";
import { TasksFunctions } from "../../context/TaskContext";

const Task = () => {
  const { searchedTasks, onDelete, toggleTaskStatus } =
    useContext(TasksFunctions);
  return searchedTasks.map((task, index) => {
    return (
      <li
        key={index}
        className="w-11/12 bg-secondary py-2 my-5 flex items-center rounded-3xl text-xl md:w-1/3"
      >
        <i
          onClick={() => toggleTaskStatus(task.name)}
          className={`fa-regular mx-2 cursor-pointer " + ${
            task.done ? "fa-square-check" : "fa-square"
          }
          }`}
        />
        <p className={`w-10/12 truncate ${task.done ? "line-through" : ""}`}>
          {task.name}
        </p>
        <i
          onClick={() => onDelete(task.name)}
          className="fa-regular fa-trash-can ml-auto mr-3 cursor-pointer"
        />
      </li>
    );
  });
};

export { Task };
