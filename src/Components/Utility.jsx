import React from "react";

const Utility = () => {
  return (
    <div className="flex basis-[100%] justify-between">
      <div className="flex flex-col">
        <span>Welcome Shakirat</span>
        <span>Upload your audio and video to convert your text</span>
      </div>
      <div className="flex">
        <button>Transcribe File</button>
      </div>
    </div>
  );
};

export default Utility;
