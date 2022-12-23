import React, { useContext } from "react";
import { TasksFunctions } from "../../context/TaskContext";

function AddTaskButton({ onOpenModal }) {
  return (
    <div className="h-1/6 bg-tertiary w-full absolute bottom-0 flex flex-col justify-center items-center md:bg-primary md:relative">
      <button
        onClick={() => {
          onOpenModal();
        }}
        className="text-3xl bg-secondary w-1/2 rounded-full active:translate-y-1 py-2 md:w-40 md:text-2xl"
      >
        <i className="fa-solid fa-layer-group" /> Add Task
      </button>
    </div>
  );
}

export { AddTaskButton };
