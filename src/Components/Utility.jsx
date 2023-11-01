import React from "react";

const Utility = () => {
  return (
    <div className="flex basis-[100%] justify-between items-center">
      <div className="flex flex-col gap-1">
        <span className="text-[24px] font-semibold leading-7">
          Welcome Shakirat
        </span>
        <span className="leading-6 font-normal">
          Upload your audio and video to convert your text
        </span>
      </div>
      <div className="flex">
        <button className="flex w-[163px] h-[55px] items-center text-white font-semibold leading-6 justify-center bg-[#0048AD] rounded-[6px] px-[16px] py-[24px]">
          Transcribe File
        </button>
      </div>
    </div>
  );
};

export default Utility;
