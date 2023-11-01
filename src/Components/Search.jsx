import React from "react";

const Search = () => {
  return (
    <div className="flex">
      <div className="flex basis-[100%] justify-center items-center  pl-8 ">
        <div className="flex items-center p-2 relative">
          <input
            type="text"
            placeholder="Search here..."
            className="bg-gray-100 p-2 pl-10 h-[40px] w-[629px] focus:outline-none"
          />
          <svg
            width="20"
            height="20"
            viewBox="0 0 20 20"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            className="absolute left-3 top-2.5 mt-2.5 ml-2 text-gray-500"
          >
            <path
              d="M17 17L12.3333 12.3333M13.8889 8.44444C13.8889 11.4513 11.4513 13.8889 8.44444 13.8889C5.43756 13.8889 3 11.4513 3 8.44444C3 5.43756 5.43756 3 8.44444 3C11.4513 3 13.8889 5.43756 13.8889 8.44444Z"
              stroke="#475367"
              strokeWidth="1.67"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
        </div>
      </div>
    </div>
  );
};

export default Search;
