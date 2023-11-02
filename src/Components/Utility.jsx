import React, { useState } from "react";
import Cross from "../static/Cross.svg";
import Upload from "../static/upload.svg";
import Icon from "../static/divider.svg";

const Utility = () => {
  const [showModal, setShowModal] = useState(false);
  const [selectedFile, setSelectedFile] = useState(null);

  const handleFileChange = (e) => {
    const file = e.target.files[0];
    setSelectedFile(file);
  };

  const handleDrop = (e) => {
    e.preventDefault();
    const file = e.dataTransfer.files[0];
    setSelectedFile(file);
  };

  const handleDragOver = (e) => {
    e.preventDefault();
  };

  const manualUpload = () => {
    document.getElementById("fileInput").click();
  };

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
        <button
          onClick={() => setShowModal(true)}
          className="flex w-[163px] h-[55px] items-center text-white font-semibold leading-6 justify-center bg-[#0048AD] rounded-[6px] px-[16px] py-[24px]"
        >
          Transcribe File
        </button>
      </div>
      {showModal ? (
        <>
          <div className="fixed inset-0 bg-black bg-opacity-25"></div>
          <div className="flex justify-center items-center overflow-x-hidden overflow-y-auto fixed inset-0 z-50 outline-none focus:outline-none">
            <div className="relative my-6 mx-auto w-[800px] h-[745px]">
              <div className="border-0 rounded-lg shadow-lg relative flex flex-col w-full bg-white outline-none focus:outline-none">
                <div className="flex items-start justify-between p-5 rounded-t">
                  <h3 className="text-[24px] font-semibold leading-8">
                    Transcribe File
                  </h3>
                  <button
                    className="bg-transparent border-0 text-black float-right"
                    onClick={() => setShowModal(false)}
                  >
                    <span className="text-black opacity-7 h-6 w-6 text-xl block py-0 rounded-full">
                      <img src={Cross} alt="" />
                    </span>
                  </button>
                </div>
                <div className="relative p-6 flex-auto">
                  <div className="flex flex-col gap-2">
                    <span>Transcription Language</span>
                    <select className="border h-[52px] p-2">
                      <option>Default</option>
                      <option>Bengali</option>
                      <option>English</option>
                      <option>Turkish</option>
                      <option>Hindi</option>
                      <option>Spanish</option>
                      <option>Urdu</option>
                    </select>
                  </div>
                </div>
                <div className="flex flex-col items-center justify-center p-6">
                  <div
                    className="flex flex-col justify-center items-center border-2 border-dashed border-gray-400 rounded-lg cursor-pointer  w-full h-[200px]"
                    onDrop={handleDrop}
                    onDragOver={handleDragOver}
                    onClick={manualUpload}
                  >
                    <img
                      className="bg-[#E0EDFF] w-[40px] h-[40px] rounded-full"
                      src={Upload}
                      alt=""
                    />
                    <input
                      type="file"
                      accept=".pdf,.doc,.docx"
                      className="hidden"
                      onChange={handleFileChange}
                      id="fileInput"
                    />
                    <p className="text-gray-600">
                      <span className="text-blue-600 text-sm">
                        click to upload
                      </span>
                      <span className="text-[14px]"> or Drag & Drop</span>
                    </p>
                    <p className="text-[12px]">
                      The maximum size is 1GB for audio and 10GB for Videos.{" "}
                    </p>
                    <p className="text-[12px]">
                      Supported formats: mp3, mp4, wav, caf, aiff, avi, rmvb,
                      flv, m4a, mov, wmv, wma{" "}
                    </p>
                    {selectedFile && (
                      <p className="text-green-500 mt-4">
                        Selected File: {selectedFile.name}
                      </p>
                    )}
                  </div>
                </div>
                <div className="flex flex-col p-6 gap-2">
                  <label>Import from Link</label>
                  <input
                    className="flex w-full h-[50px] border p-4 rounded-lg"
                    type="text"
                    placeholder="Paste a Dropbox, Google Drive or Youtube URL here"
                  />
                </div>
                <div className="flex p-6 gap-4 items-center">
                  <img className="flex w-[20px] h-[20px] " src={Icon} alt="" />
                  <span className="font-medium">Speaker identification</span>
                </div>
                <div className="flex items-center justify-end p-6 rounded-b">
                  <button
                    className="text-white w-full bg-[#D0D5DD] font-bold text-sm px-6 py-3 rounded outline-none mr-1 mb-1"
                    type="button"
                    onClick={() => setShowModal(false)}
                  >
                    Transcribed file
                  </button>
                </div>
              </div>
            </div>
          </div>
        </>
      ) : null}
    </div>
  );
};

export default Utility;
