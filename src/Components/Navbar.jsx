import React from "react";
import Avatar from "../static/avatar.jpeg";
import Bell from "../static/bell.svg";
import Search from "./Search";

const Navbar = () => {
  return (
    <div className="flex basis-[100%] justify-between">
      <div className="flex">
        <Search />
      </div>

      <div className="flex basis-[20%] justify-center items-center gap-8">
        <img src={Bell} alt="" />
        <img
          className="flex h-[40px] w-[40px] rounded-[200px] shadow-white"
          src={Avatar}
          alt=""
        />
      </div>
    </div>
  );
};

export default Navbar;
