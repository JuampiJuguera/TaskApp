import React, { useState, useContext } from "react";
import { EmptyTask } from "../EmptyTask/EmptyTask";
import { Task } from "../Task/Task";
import { Loading } from "../Loading/Loading";
import { Error } from "../Error/Error";
import { TasksFunctions } from "../../context/TaskContext";

const TaskList = () => {
  const { totalTasks, loading, error } = useContext(TasksFunctions);
  if (totalTasks === 0)
    return (
      <>
        {error && <Error />}
        {loading && <Loading />}
        {!loading && <EmptyTask />}
      </>
    );
  if (totalTasks !== 0)
    return (
      <div className="overflow-y-scroll h-3/6 mt-7 md:h-2/5">
        <ul className="flex flex-col justify-around items-center">
          <Task />
        </ul>
      </div>
    );
};

export { TaskList };
