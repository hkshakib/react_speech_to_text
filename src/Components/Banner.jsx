import React from "react";

const Banner = ({ Icon, Text, totalServed }) => {
  return (
    <div className="flex flex-col justify-center gap-4 pl-4 bg-[#ffffff] w-[355px] h-[140px] rounded-xl border">
      <img
        className="h-[40px] w-[40px] rounded-[20px]"
        src={Icon}
        alt="React Logo"
      />
      <div className="flex flex-col">
        <span className="flex font-semibold text-[24px] leading-6">
          {totalServed}
        </span>
        <span className="flex font-normal text-[14px] leading-6">{Text}</span>
      </div>
    </div>
  );
};

export default Banner;
