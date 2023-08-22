import React from "react";

const StatCard = () => {
  return (
    <div className="bg-[#1E1E1E] border border-solid border-[#4F4F4F] w-full">
      <div className="pb-4 px-4 md:pb-[1.625rem] md:px-[1.625rem] flex flex-col justify-center h-[15.5rem] sm:h-[17.5rem] overflow-hidden">
        <h3 className="text-l text-gray-400 dark:text-white">Interactions</h3>
        <div className="text-center pt-7">
          <h3 className="mb-2 text-5xl font-extrabold text-linea-blue">23</h3>
          <div className={"text-l text-green-500 dark:text-green-400"}>+7</div>
          <div className="text-sm text-white dark:text-gray-400">
            the last 7 days
          </div>
        </div>
      </div>
    </div>
  );
};

export default StatCard;
