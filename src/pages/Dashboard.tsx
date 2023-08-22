import React from "react";
import StatCard from "../components/StatCard";
import { getEthBalance } from "../api/lineascan";

const Dashboard = () => {
  const [address] = React.useState(window.location.search.split("=")[1]);
  const [ethBalance, setEthBalance] = React.useState(0);

  React.useEffect(() => {
    getEthBalance(address).then((res) => {
      setEthBalance(res / 10 ** 18);
    });
  }, []);

  return (
    <div className="w-full flex justify-center items-center max-w-[1280px]">
      <div>
        <div className="grid grid-cols-2 w-full gap-8 mb-8">
          <div className="text-white bg-[#1E1E1E] border border-solid border-[#4F4F4F] px-4 py-2">{address}</div>
          <div className="text-white bg-[#1E1E1E] border border-solid border-[#4F4F4F] px-4 py-2">{ethBalance}</div>
        </div>
        <div className="grid grid-cols-3 w-full gap-8">
          <StatCard header="Interactions" value={23} change={7} />
          <StatCard header="Interactions" value={108} change={29} />
          <StatCard header="Interactions" value={2.75} change={0.32} />
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
