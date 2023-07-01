import React from "react";
import { FaSearch } from "react-icons/fa";
import { FiSettings } from "react-icons/fi";

const Header = () => {
  return (
    <div className="lg:flex items-center justify-between gap-8 mb-4 mt-20 text-lg px-2 rounded-lg">
      
      <div className="lg:flex justify-between gap-8 items-center">
        <div className="flex justify-between items-center gap-8">
          <p className="text-bold text-xl">Add new post</p>
          <p>+ Add Content</p>
          <p className="flex items-center gap-2">
            <FiSettings></FiSettings> Settings
          </p>
        </div>
      </div>

      <div className="w-80 relative flex justify-between">
        <input
          type="text"
          placeholder="Search Content"
          className=" input  input-bordered w-full text-black"
        />
        <div className="absolute right-4 top-4">
          <FaSearch className=" text-black cursor-pointer"></FaSearch>
        </div>
      </div>
    </div>
  );
};

export default Header;
