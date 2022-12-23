import React from "react";

function Error() {
  return (
    <div className="w-full flex flex-col items-center h-1/2 justify-center md:h-1/2 md: -mt-18 -mb-16">
      <i className="fa-solid fa-file-circle-exclamation text-19xl text-secondary md:text-15xl" />
      <p className="mt-2 text-lg">
        Error detected, please <b>Reload</b> the page
      </p>
    </div>
  );
}

export { Error };
