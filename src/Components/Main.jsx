import React from "react";
import Navbar from "./Navbar";
import Utility from "./Utility";

const Main = () => {
  return (
    <div className="flex flex-col basis-[100%]">
      <div className="flex flex-col basis-[8%] bg-[#ffffff]">
        <Navbar />
      </div>
      <div className="flex flex-1 p-10">
        <div className="flex flex-col flex-1 gap-10">
          <div className="flex basis-[15%]">
            <Utility />
          </div>
          <div className="flex basis-[28%] border border-red-500">History</div>
          <div className="flex basis-[40%] border border-blue-700">
            Recent Files
          </div>
        </div>
      </div>
    </div>
  );
};

export default Main;
