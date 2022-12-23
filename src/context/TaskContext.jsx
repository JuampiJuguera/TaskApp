import { createContext, useState } from "react";
import { useLocalStorage } from "../hooks/useLocalStorage";

export const TasksFunctions = createContext(null);

export function TasksProvider({ children }) {
  const {
    item: tasks,
    saveItem: saveTasks,
    loading,
    error,
  } = useLocalStorage("TODOS_V1", []);

  const completedTasks = tasks.filter((task) => task.done === true).length;
  const totalTasks = tasks.length;

  let searchedTasks = [];
  const [searchValue, setSearchValue] = useState("");

  if (!searchValue.length >= 1) {
    searchedTasks = tasks;
  } else {
    searchedTasks = tasks.filter((task) => {
      const taskText = task.name.toLowerCase();
      const searchText = searchValue.toLowerCase();
      return taskText.includes(searchText);
    });
  }

  //Tasks Functions

  const toggleTaskStatus = (text) => {
    const taskIndex = tasks.findIndex((task) => task.name === text);
    const newTasks = [...tasks];
    newTasks[taskIndex].done = !tasks[taskIndex].done;
    saveTasks(newTasks);
  };

  function onDelete(text) {
    const todoIndex = tasks.findIndex((task) => task.name === text);
    const newTasks = [...tasks];
    newTasks.splice(todoIndex, 1);
    saveTasks(newTasks);
  }

  return (
    <TasksFunctions.Provider
      value={{
        searchedTasks,
        searchValue,
        setSearchValue,
        onDelete,
        toggleTaskStatus,
        completedTasks,
        totalTasks,
        tasks,
        saveTasks,
        loading,
        error,
      }}
    >
      {children}
    </TasksFunctions.Provider>
  );
}
