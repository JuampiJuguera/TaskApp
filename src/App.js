import React, { useState } from "react";
import { Title } from "./components/Title/Title";
import { TaskCounter } from "./components/TaskCounter/TaskCounter";
import { TaskSearchBar } from "./components/TaskSearchBar/TaskSearchBar";
import { AddTaskButton } from "./components/AddTaskButton/AddTaskButton";
import { Modal } from "./components/Modal/Modal";
import { TaskList } from "./components/TaskList/TaskList";
import { Footer } from "./components/Footer/Footer";
import { TasksProvider } from "./context/TaskContext";

const App = () => {
  const [modal, setModal] = useState(false);

  const onOpenModal = () => {
    setModal(true);
  };

  const onCloseModal = () => {
    setModal(false);
  };

  return (
    <div className="bg-primary w-full h-screen overflow-x-hidden font-abel">
      <Title />
      <TasksProvider>
        <TaskCounter />
        <TaskSearchBar />
        <TaskList />
        {modal && <Modal onCloseModal={onCloseModal} />}
        <AddTaskButton onOpenModal={onOpenModal} />
      </TasksProvider>
      <Footer />
    </div>
  );
};

export { App };
