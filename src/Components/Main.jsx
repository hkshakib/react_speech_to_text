import React from "react";
import Navbar from "./Navbar";
import Utility from "./Utility";
import Banner from "./Banner";

import Files from "../static/files.svg";
import Saved from "../static/saved.svg";
import Transcribe from "../static/transcribe.svg";

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
          <div className="flex basis-[28%] justify-between items-center gap-4">
            <Banner Icon={Files} Text="Uploaded Files" totalServed="100" />
            <Banner Icon={Transcribe} Text="Transcribed" totalServed="50" />
            <Banner Icon={Saved} Text="Saved" totalServed="20" />
          </div>
          <div className="flex basis-[40%] border border-blue-700">
            Recent Files
          </div>
        </div>
      </div>
    </div>
  );
};

export default Main;
