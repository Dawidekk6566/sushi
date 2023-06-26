import React, { useEffect, useState } from "react";
import Image from "next/image";

const Navbar = () => {
  const [nav, setNav] = useState(true);

  const handleNav = () => {
    setNav(!nav);
  };

  const Poppins = {
    fontFamily: "Lato , sans-serif",
  };

  const Lato = {
    fontFamily: "Lato, sans-serif",
  };

  function FiMenu(props) {
    return (
      <svg
        stroke="currentColor"
        fill="none"
        strokeWidth={2}
        viewBox="0 0 24 24"
        strokeLinecap="round"
        strokeLinejoin="round"
        height="1em"
        width="1em"
        {...props}
      >
        <line x1={3} y1={12} x2={21} y2={12} />
        <line x1={3} y1={6} x2={21} y2={6} />
        <line x1={3} y1={18} x2={21} y2={18} />
      </svg>
    );
  }

  function AiOutlineClose(props) {
    return (
      <svg
        stroke="currentColor"
        fill="currentColor"
        strokeWidth={0}
        viewBox="0 0 1024 1024"
        height="1em"
        width="1em"
        {...props}
      >
        <path d="M563.8 512l262.5-312.9c4.4-5.2.7-13.1-6.1-13.1h-79.8c-4.7 0-9.2 2.1-12.3 5.7L511.6 449.8 295.1 191.7c-3-3.6-7.5-5.7-12.3-5.7H203c-6.8 0-10.5 7.9-6.1 13.1L459.4 512 196.9 824.9A7.95 7.95 0 0 0 203 838h79.8c4.7 0 9.2-2.1 12.3-5.7l216.5-258.1 216.5 258.1c3 3.6 7.5 5.7 12.3 5.7h79.8c6.8 0 10.5-7.9 6.1-13.1L563.8 512z" />
      </svg>
    );
  }
  return (
    <nav className="h-16 my-8 flex justify-between w-full items-center m-auto px-8 max-w-[1200px]">
      <Image
        src="/Logo.png"
        width={112}
        height={112}
        className="object-contain hover:cursor-pointer"
      ></Image>
      <ul style={Poppins} className="flex gap-12 mr-8 items-center max-lg:hidden leading-[150%]">
        <li
          className="relative transition-all duration-200 before:content-[''] before:absolute before:-bottom-2 before:left-0 before:w-0 before:h-1.5 before:rounded-full
             before:opacity-0 before:transition-all before:duration-300 before:bg-[#88112B] hover:before:w-full hover:before:opacity-100 font-bold text-[#330811] text-lg hover:cursor-pointer"
        >
          O nas
        </li>
        <li
          className="relative transition-all duration-200 before:content-[''] before:absolute before:-bottom-2 before:left-0 before:w-0 before:h-1.5 before:rounded-full
             before:opacity-0 before:transition-all before:duration-300 before:bg-[#88112B] hover:before:w-full hover:before:opacity-100 font-bold text-[#330811] text-lg hover:cursor-pointer"
        >
          Menu
        </li>
        <li
          className="relative transition-all duration-200 before:content-[''] before:absolute before:-bottom-2 before:left-0 before:w-0 before:h-1.5 before:rounded-full
             before:opacity-0 before:transition-all before:duration-300 before:bg-[#88112B] hover:before:w-full hover:before:opacity-100 font-bold text-[#330811] text-lg hover:cursor-pointer"
        >
          Promocje
        </li>
        <li
          className="relative transition-all duration-200 before:content-[''] before:absolute before:-bottom-2 before:left-0 before:w-0 before:h-1.5 before:rounded-full
             before:opacity-0 before:transition-all before:duration-300 before:bg-[#88112B] hover:before:w-full hover:before:opacity-100 font-bold text-[#330811] text-lg hover:cursor-pointer"
        >
          Kontakt
        </li>
        <button className="bg-white leading-[150%] active:scale-75 hover:ease-in-out hover:bg-[#F8D9DF] hover:duration-300 outline-none py-[10px] px-[48px] font-bold text-[#0C0C0C] text-lg">
          Zamów
        </button>
      </ul>
      <div onClick={handleNav} className="block lg:hidden mr-24">
        {!nav ? <AiOutlineClose size={20} /> : <FiMenu size={20} />}
      </div>
      <div
        className={
          !nav
            ? "fixed left-0 top-0 w-[60%] border-r border-r-gray-900 h-full bg-black/80 ease-in-out duration-200"
            : "fixed left-[-100%]"
        }
      >
        <ul className="uppercase ml-12 mt-32 lg:ml-24 md:ml-24">
          <li className="font-bold pb-4 text-[#c56378] text-lg hover:cursor-pointer">
            O nas
          </li>
          <li className="font-bold pb-4 text-[#c56378] text-lg hover:cursor-pointer">
            Menu
          </li>
          <li className="font-bold pb-4 text-[#c56378] text-lg hover:cursor-pointer">
            Promocje
          </li>
          <li className="font-bold pb-4 text-[#c56378] text-lg hover:cursor-pointer">
            Kontakt
          </li>
          <button className="bg-white outline-none py-[10px] px-[48px] font-bold text-[#330811] text-lg">
            Zamów
          </button>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
