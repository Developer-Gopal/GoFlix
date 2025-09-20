import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import { Menu, X } from "lucide-react"; // hamburger & close icons

const NavLinks = ({ onClick }) => {
  return (
    <div className="flex flex-col md:flex-row gap-6 text-white ">
      <div className="hover:text-gray-400">
        <NavLink to="/" onClick={onClick}>
          Home
        </NavLink>
      </div>
      <div className="hover:text-gray-400">
        {" "}
        <NavLink to="/tvshows" onClick={onClick}>
          Tv Shows
        </NavLink>
      </div>
      <div className="hover:text-gray-400">
        {" "}
        <NavLink to="/movies" onClick={onClick}>
          Movies
        </NavLink>
      </div>

      <div className="hover:text-gray-400">
        {" "}
        <NavLink to="/top_rated" onClick={onClick}>
          Top Rated
        </NavLink>
      </div>

      <div className="hover:text-gray-400"></div>

      <div className="hover:text-gray-400">
        {" "}
        <NavLink to="/mylist" onClick={onClick}>
          My List
        </NavLink>
      </div>
      <div className="hover:text-gray-400">
        {" "}
        <NavLink to="/language" onClick={onClick}>
          Browse by Languages
        </NavLink>
      </div>
    </div>
  );
};

const Nav = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="bg-black px-2 py-4 flex justify-between items-center relative gap-6">
      {/* Left side: Logo */}
      <h1 className="text-red-600 text-xl">GOFLIX</h1>

      {/* Desktop Menu */}
      <div className="hidden md:flex ">
        <NavLinks />
      </div>

      {/* Mobile Menu Button */}
      <button
        className="md:hidden text-white fixed right-0 p-4"
        onClick={() => setIsOpen(!isOpen)}
      >
        {isOpen ? <X size={24} /> : <Menu size={24} />}
      </button>

      {/* Mobile Dropdown */}
      {isOpen && (
        <div className="absolute top-16 right-0 w-full bg-black p-2 flex flex-col gap-4 md:hidden z-50">
          <NavLinks onClick={() => setIsOpen(false)} />
        </div>
      )}
    </nav>
  );
};

export default Nav;
