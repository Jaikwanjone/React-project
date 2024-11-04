import { useState } from "react";
import { AiOutlineClose, AiOutlineMenu } from "react-icons/ai";

const Navbar = () => {
  const [nav, setNav] = useState<boolean>(false);
  const handleChange = () => {
    setNav(!nav);
  };
  return (
    <div className="flex justify-between items-center h-24 max-w-[1240] mx-auto px-6 text-white">
      <h1 className="w-full text-4xl font-bold text-[#00df9a]">React.</h1>
      <ul className="hidden md:flex text-2xl">
        <li className="p-4">Home</li>
        <li className="p-4">Company</li>
        <li className="p-4">Resources</li>
        <li className="p-4">About</li>
        <li className="p-4">Contact</li>
      </ul>
      <div onClick={handleChange} className="cursor-pointer block md:hidden">
        {nav ? (
          <AiOutlineClose className="text-5xl" />
        ) : (
          <AiOutlineMenu className="text-5xl" />
        )}
      </div>
      <div
        className={
          !nav
            ? "fixed left[-100%] hidden"
            : "fixed top-0 left-0 z-20  w-[60%] h-full border-r bg-[#010301] border-r-gray-900 ease-in-out duration-500 "
        }
      >
        <h1 className=" w-full text-4xl font-bold pl-4 mt-7 mr-7 text-[#00df9a]">
          React.
        </h1>
        <ul className="pt-24 uppercase p-4">
          <li className="p-4 border-b border-b-lightgray">Home</li>
          <li className="p-4 border-b border-b-lightgray">Company</li>
          <li className="p-4 border-b border-b-lightgray">Resources</li>
          <li className="p-4 border-b border-b-lightgray">About</li>
          <li className="p-4">Contact</li>
        </ul>
      </div>
    </div>
  );
};

export default Navbar;
