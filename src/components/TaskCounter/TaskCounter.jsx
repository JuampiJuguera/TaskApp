import React, { useContext } from "react";
import { TasksFunctions } from "../../context/TaskContext";

function TaskCounter() {
  const { completedTasks, totalTasks } = useContext(TasksFunctions);
  const calculatePercentage = ((completedTasks * 100) / totalTasks).toFixed(0);
  const percentage = isNaN(calculatePercentage) ? "0" : calculatePercentage;
  return (
    <div className="w-full flex flex-col items-center my-10">
      <div className="w-11/12 h-6 bg-tertiary rounded-md md:w-1/3">
        <div
          className="h-6 bg-secondary rounded-md transition-all duration-500 ease-linear"
          style={{ width: percentage + "%" }}
        />
      </div>
      <div className="flex justify-between w-11/12 md:w-1/3">
        <p className="counter__text">
          {completedTasks} of {totalTasks} tasks
        </p>
        <p className="counter__percentage">{percentage}% completed</p>
      </div>
    </div>
  );
}

export { TaskCounter };
