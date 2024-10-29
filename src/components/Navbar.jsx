import React, { useState } from "react";
import { FaSearch, FaBars, FaTimes } from "react-icons/fa";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [searchTerm, setSearchTerm] = useState("");

  const toggleNavbar = () => {
    setIsOpen(!isOpen);
  };

  const handleSearchChange = (e) => {
    setSearchTerm(e.target.value);
  };

  return (
    <nav className="bg-black p-4 shadow-md fixed w-full top-0 left-0 z-50">
      <div className="container mx-auto flex justify-between items-center">
        <div className="relative text-white text-2xl font-bold flex items-center">
          <a href="#" className="relative flex items-center">
            <img
              src="https://photosnow.org/wp-content/uploads/2024/04/Watermark_1714617793148.jpg"
              alt="Deals-Era Logo"
              className="h-8 mr-2"
            />
            Deals-Era
            <span className="block absolute left-0 bottom-[-4px] w-full h-[2px] bg-cyan-400"></span>
          </a>
        </div>
        <div className="lg:hidden">
          <button
            className="text-white focus:outline-none p-3"
            onClick={toggleNavbar}
            aria-label={isOpen ? "Close menu" : "Open menu"}
          >
            {isOpen ? <FaTimes size={24} /> : <FaBars size={24} />}
          </button>
        </div>
        {isOpen && (
          <div
            className="fixed inset-0 z-20 bg-black bg-opacity-50 lg:hidden"
            onClick={toggleNavbar}
          />
        )}
        <ul
          className={`fixed left-0 w-full bg-black transition-all duration-300 lg:flex lg:static lg:w-auto ${
            isOpen ? "top-0" : "top-[-100%]"
          } lg:top-0 lg:flex-row lg:space-x-8 z-30 `}
        >
          <li className="flex-grow">
            <a
              href="/"
              className="block text-cyan-400 hover:text-black transition duration-300 relative group text-justify lg:text-left bg-slate-100 rounded-full z-[1] mt-3 p-2 shadow"
            >
              Home
              <span className="absolute left-0 bottom-[-6px] w-full h-[2px] bg-cyan-400 transform scale-x-0 transition-transform duration-300 group-hover:scale-x-100"></span>
            </a>
          </li>
          <li className="flex-grow">
            <a
              href="/explore"
              className="block text-cyan-400 hover:text-black transition duration-300 relative group text-justify lg:text-left bg-slate-100 rounded-full z-[1] mt-3 p-2 shadow"
            >
              Explore
              <span className="absolute left-0 bottom-[-6px] w-full h-[2px] bg-cyan-400 transform scale-x-0 transition-transform duration-300 group-hover:scale-x-100"></span>
            </a>
          </li>
          <li className="flex-grow">
            <a
              href="/services"
              className="block text-cyan-400 hover:text-black transition duration-300 relative group text-justify lg:text-left bg-slate-100 rounded-full z-[1] mt-3 p-2 shadow"
            >
              Services
              <span className="absolute left-0 bottom-[-6px] w-full h-[2px] bg-cyan-400 transform scale-x-0 transition-transform duration-300 group-hover:scale-x-100"></span>
            </a>
          </li>
          <li className="flex-grow">
            <a
              href="/contact"
              className="block text-cyan-400 hover:text-black transition duration-300 relative group text-justify lg:text-left bg-slate-100 rounded-full z-[1] mt-3 p-2 shadow"
            >
              Contact us 
              <span className="absolute left-0 bottom-[-6px] w-full h-[2px] bg-cyan-400 transform scale-x-0 transition-transform duration-300 group-hover:scale-x-100"></span>
            </a>
          </li>
          <li className="flex items-center lg:ml-8">
            <div className="relative flex items-center bg-gray-800 rounded-xl">
              <input
                type="text"
                value={searchTerm}
                onChange={handleSearchChange}
                placeholder="Search..."
                className="p-2 lg:p-3 rounded-l bg-gray-800 text-white focus:outline-none focus:ring-2 focus:ring-cyan-400 rounded-xl w-full lg:w-auto"
              />
              <button
                className="bg-cyan-400 text-black p-2 lg:p-3 rounded-r-xl hover:bg-lime-400 transition duration-300"
                onClick={() => {
                  console.log("Searching for:", searchTerm);
                }}
              >
                <FaSearch />
              </button>
            </div>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
