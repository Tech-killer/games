import React, { useState, useContext } from "react";
import { FaSearch, FaBars, FaTimes } from "react-icons/fa";
import { AuthContext } from "../context/AuthProvider";
import { Link, useNavigate } from "react-router-dom";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const { user, logout } = useContext(AuthContext);
  const navigate = useNavigate();

  const toggleNavbar = () => {
    setIsOpen(!isOpen);
  };

  const handleLogout = () => {
    logout();
    navigate("/");
  };

  return (
    <nav className="bg-black p-4 shadow-md fixed w-full top-0 left-0 z-50">
      <div className="container mx-auto flex justify-between items-center">
        <div className="relative text-white text-2xl font-bold">
          <Link to="/" className="flex items-center">
            Deals-Era
          </Link>
        </div>

        <div className="lg:hidden">
          <button
            className="text-white focus:outline-none p-3"
            onClick={toggleNavbar}
          >
            {isOpen ? <FaTimes size={24} /> : <FaBars size={24} />}
          </button>
        </div>

        <ul className={`fixed left-0 w-full bg-black lg:flex lg:static ${isOpen ? "top-0" : "top-[-100%]"}`}>
          <li><Link to="/" className="block text-cyan-400 p-2">Home</Link></li>
          <li><Link to="/explore" className="block text-cyan-400 p-2">Explore</Link></li>
          <li><Link to="/services" className="block text-cyan-400 p-2">Services</Link></li>

          <li className="flex items-center">
            <input
              type="text"
              placeholder="Search..."
              className="p-3 rounded-l bg-gray-800 text-white"
            />
            <button className="bg-cyan-400 p-3 text-black">
              <FaSearch />
            </button>
          </li>

          {!user ? (
            <li>
              <Link to="/login" className="block text-cyan-400 p-2">
                Login
              </Link>
            </li>
          ) : (
            <li>
              <button onClick={handleLogout} className="block text-cyan-400 p-2">
                Logout
              </button>
            </li>
          )}
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
