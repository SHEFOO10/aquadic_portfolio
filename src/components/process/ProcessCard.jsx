import React from "react";
import clsx from "clsx";

const ProcessCard = ({ index, name, body }) => {
  return (
    <div className="w-full flex justify-center">
      <div className="relative bg-white shadow-lg rounded-lg p-3 sm:p-6 w-[37dvw] sm:w-[32dvw]  ">
        <h2 className="sm:text-lg font-bold text-brandColor ">{name}</h2>
        <p className="mt-4 text-[#121212] max-sm:text-sm">{body}</p>

        <div
          className={clsx(
            "absolute top-4 w-4 h-4 bg-white transform rotate-45",
            index % 2 === 0 ? "-right-2" : "-left-2",
          )}
        ></div>
      </div>
    </div>
  );
};

export default ProcessCard;
