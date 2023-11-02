import React from "react";
import { dummyTableData } from "../static/Data";
import Icon from "../static/divider.svg";

const HistoryTable = () => {
  return (
    <div className="flex basis-[100%] flex-col ml-12 mr-12">
      <div className="flex basis-[10%] flex-col divide-y gap-6 w-[100%]">
        <span className="flex text-[18px] font-semibold divide-y divide-[#E4E7EC] mt-4">
          Recent Files
        </span>
        <span className=""></span>
      </div>
      <div className="flex basis-[90%] mt-8">
        <div className="flex basis-[100%] flex-col">
          <div className="flex justify-between items-center h-[48px] bg-[#E0EDFF]">
            <img
              className="flex basis-[10%] w-[20px] h-[20px]"
              src={Icon}
              alt=""
            />
            <span className="TableRow">Name</span>
            <span className="TableRow">Type</span>
            <span className="TableRow">Duration</span>
            <span className="TableRow">Date Created</span>
            <span className="TableRow">Last Updated</span>
            <span className="TableRow">Action</span>
          </div>
          {dummyTableData.map((data, index) => (
            <div
              className="flex justify-between items-center h-[48px]"
              key={index}
            >
              <img
                className="flex basis-[10%] w-[20px] h-[20px]"
                src={Icon}
                alt=""
              />
              <span className="TableRow">{data.Name}</span>
              <span className="TableRow">{data.Type}</span>
              <span className="TableRow">{data.Duration}</span>
              <span className="TableRow">{data.DateCreated}</span>
              <span className="TableRow">{data.LastUpdate}</span>
              <span className="TableRow">{data.Action}</span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default HistoryTable;
