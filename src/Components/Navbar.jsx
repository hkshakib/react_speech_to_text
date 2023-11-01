import React from "react";
import Search from "./Search";

const Navbar = () => {
  return (
    <div className="flex basis-[100%] justify-between">
      <div className="flex">
        <Search />
      </div>
      <div className="flex basis-[20%]">Profile</div>
    </div>
  );
};

export default Navbar;
