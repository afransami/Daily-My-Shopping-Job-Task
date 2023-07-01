import React from "react";
import { RiShoppingBagLine } from "react-icons/ri";
import { BiGift, BiMenuAltRight } from "react-icons/bi";
import { PiUsersBold } from "react-icons/pi";

const State = () => {
  return (
    <div className="lg:flex justify-evenly items-center gap-8">
      <div className="border shadow-lg flex justify-center items-center gap-4 px-8 py-4 rounded-lg">
        <div>
          <RiShoppingBagLine className="text-5xl text-red-500"></RiShoppingBagLine>
        </div>

        <div className="flex flex-col justify-between items-start">
          <p className="text-sm">Total Sales</p>
          <p>$ 2,456</p>
        </div>
      </div>
      <div className="border shadow-lg flex justify-center items-center gap-4 px-8 py-4 rounded-lg">
        <BiGift className="text-5xl text-purple-600"></BiGift>
        <div className="flex flex-col items-start">
          <p className="text-sm">Total Sales</p>
          <p>$ 2,456</p>
        </div>
      </div>
      <div className="border shadow-lg flex justify-center items-center gap-4 px-8 py-4 rounded-lg">
        <PiUsersBold className="text-5xl text-success"></PiUsersBold>
        <div className="flex flex-col items-start">
          <p className="text-sm">Total Sales</p>
          <p>$ 2,456</p>
        </div>
      </div>
      <div className="border shadow-lg flex justify-center items-center gap-4 px-8 py-4 rounded-lg">
        <BiMenuAltRight className="text-5xl text-purple-600"></BiMenuAltRight>
        <div className="flex flex-col items-start">
          <p className="text-sm">Total Sales</p>
          <p>$ 2,456</p>
        </div>
      </div>
    </div>
  );
};

export default State;
