import React, { useState } from "react";
import { AiOutlineClose, AiOutlineMenu } from "react-icons/ai";

const Navbar = () => {
  const [nav, setNav] = useState(false);

  const switchNav = () => {
    setNav(!nav);
  };

  return (
    <>
       <div className="flex justify-between items-center h-24 x text-white max-w-[1240px] mx-auto px-4">
      <h1 className="w-full text-3xl font-bold ">AMUSE.</h1>

      <ul className="hidden md:flex uppercase text-xl">
        <li className="p-4">Home</li>
        <li className="p-4">About</li>
        <li className="p-4">Contact</li>
      </ul>

      <div onClick={switchNav} className="block md:hidden">
        {nav ? (
          <AiOutlineClose size={24} />
        ) : (
          <AiOutlineMenu size={24}></AiOutlineMenu>
        )}
      </div>

      <div
        className={
          nav
            ? "fixed left-0 top-0 w-[60%] border-r h-full border-r-gray-600 bg-white ease-in-out duration-300"
            : "fixed left-[-100%]"
        }
      >
        <h1 className="w-full  text-3xl font-bold text-gray-600 m-4 ">AMUSE.</h1>

        <ul className="uppercase text-gray-600 p-4 text-xl">
          <li className="p-4  border-gray-600 border-b">Home</li>
          <li className="p-4 border-gray-600 border-b">About</li>
          <li className="p-4 border-gray-600 border-b">Contact</li>
        </ul>
      </div>
    </div>
      
    </>
 

  );
};

export default Navbar;
