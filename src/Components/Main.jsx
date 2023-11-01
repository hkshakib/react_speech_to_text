import React from "react";
import Navbar from "./Navbar";
import Utility from "./Utility";

const Main = () => {
  return (
    <div className="flex flex-col basis-[100%] border border-red-600 gap-6">
      <div className="flex flex-col basis-[8%] border border-blue-500">
        <Navbar />
      </div>
      <div className="flex basis-[10%] border border-green-500">
        <Utility />
      </div>
      <div className="flex basis-[20%] border border-red-500">History</div>
      <div className="flex basis-[40%] border border-blue-700">
        Recent Files
      </div>
    </div>
  );
};

export default Main;
