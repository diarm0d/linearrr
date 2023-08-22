import React from "react";

const Dashboard = () => {
  return (
    <div className="w-full flex justify-center items-center max-w-[1280px]">
      <div className="grid grid-cols-3 w-full gap-8">
        <div className="bg-[#1E1E1E] border border-solid border-[#4F4F4F] w-full">
          <div className="pb-4 px-4 md:pb-[1.625rem] md:px-[1.625rem] flex flex-col justify-center h-[15.5rem] sm:h-[17.5rem] overflow-hidden">
            <h3 className="text-l text-gray-400 dark:text-white">
              Interactions
            </h3>
            <div className="text-center pt-7">
              <h3 className="mb-2 text-5xl font-extrabold text-linea-blue">23</h3>
              <div className={"text-l text-green-500 dark:text-green-400"}>
                +7
              </div>
              <div className="text-sm text-white text-gray-500 dark:text-gray-400">
                the last 7 days
              </div>
            </div>
          </div>
        </div>
        <div className="bg-[#1E1E1E] border border-solid border-[#4F4F4F]">
          <div className="pb-4 px-4 md:pb-[1.625rem] md:px-[1.625rem] flex flex-col justify-center h-[15.5rem] sm:h-[17.5rem] overflow-hidden">
            <h3 className="text-l text-gray-400 dark:text-white">
              Interactions
            </h3>
            <div className="text-center pt-7">
              <h3 className="mb-2 text-5xl font-extrabold text-linea-blue">23</h3>
              <div className={"text-l text-green-500 dark:text-green-400"}>
                +7
              </div>
              <div className="text-sm text-white text-gray-500 dark:text-gray-400">
                the last 7 days
              </div>
            </div>
          </div>
        </div>
        <div className="bg-[#1E1E1E] border border-solid border-[#4F4F4F]">
          <div className="pb-4 px-4 md:pb-[1.625rem] md:px-[1.625rem] flex flex-col justify-center h-[15.5rem] sm:h-[17.5rem] overflow-hidden">
            <h3 className="text-l text-gray-400 dark:text-white">
              Interactions
            </h3>
            <div className="text-center pt-7">
              <h3 className="mb-2 text-5xl font-extrabold text-linea-blue">23</h3>
              <div className={"text-l text-green-500 dark:text-green-400"}>
                +7
              </div>
              <div className="text-sm text-white text-gray-500 dark:text-gray-400">
                the last 7 days
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
