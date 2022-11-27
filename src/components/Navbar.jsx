import React, { useState } from "react";
import { AiOutlineClose, AiOutlineMenu } from "react-icons/ai";
import useWindowDimensions from "./../hooks/useWindowDimensions"
const Navbar = () => {
  const [nav, setNav] = useState(false);
  const { height, width } = useWindowDimensions();

  const switchNav = () => {
    console.log(width)
    setNav(!nav);
  };

  const scroll = (id) => {
    const element = document.getElementById(id);
    element.scrollIntoView();
  }

  return (
    <>
       <div className="flex justify-between items-center h-24 x text-white max-w-[1240px] mx-auto px-4">
      <h1 className="w-full text-3xl font-bold cursor-default ">AMUSE.</h1>

      <ul className="hidden md:flex uppercase text-xl cursor-pointer">
        <li className="p-4 "  onClick={() => scroll('hero-section')}>Home</li>
        <li className="p-4"  onClick={() => scroll('info-section')}>About</li>
        <li className="p-4"  onClick={() => scroll('contact-section')}>Contact</li>
      </ul>

      <div onClick={switchNav} className="block md:hidden">
        {nav ? (
          <AiOutlineClose size={24} className="fixed right-10" color="black" />
        ) : (
          <AiOutlineMenu size={24} className="fixed right-10" color="black"></AiOutlineMenu>
        )}
      </div>

      <div
        className={
          nav && width < 768
            ? "fixed left-0 top-0 w-[60%] border-r h-full border-r-gray-600 bg-white ease-in-out duration-300 z-40"
            : "fixed left-[-100%]"
        }
      >
        <h1 className="w-full  text-3xl font-bold text-gray-600 m-4 ">AMUSE.</h1>

        <ul className="uppercase text-gray-600 cursor-pointer p-4 text-xl">
        <li className="p-4  border-gray-600 border-b "  onClick={() => scroll('hero-section')}>Home</li>
        <li className="p-4  border-gray-600 border-b"  onClick={() => scroll('info-section')}>About</li>
        <li className="p-4  border-gray-600 border-b"  onClick={() => scroll('contact-section')}>Contact</li>
        </ul>
      </div>
    </div>
      
    </>
 

  );
};

export default Navbar;
