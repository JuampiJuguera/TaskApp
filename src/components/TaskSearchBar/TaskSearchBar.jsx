import React, { useState, useContext } from "react";
import { TasksFunctions } from "../../context/TaskContext";

function TaskSearchBar() {
  const { setSearchValue, searchValue } = useContext(TasksFunctions);

  const OnSearchValueChange = (event) => {
    setSearchValue(event.target.value);
  };

  return (
    <div className="w-full flex justify-center md:-mt-1">
      <div className="h-10 w-10/12 bg-secondary flex items-center rounded-full md:w-1/4">
        <i className="fa-solid fa-magnifying-glass text-2xl mx-2" />
        <input
          type="text"
          className="w-10/12 text-2xl font-thin mx-1 outline-none bg-secondary"
          value={searchValue}
          onChange={OnSearchValueChange}
          placeholder="Search for tasks..."
        />
      </div>
    </div>
  );
}

export { TaskSearchBar };
