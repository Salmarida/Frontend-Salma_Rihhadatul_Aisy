import React, { useState } from "react";
import { NAVBAR } from "@/constants";
import { images } from "../../constants";
import NavbarMobile from "./NavbarMobile";
import { NavLink } from "react-router-dom";
const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleNavbar = () => {
    setIsOpen(!isOpen);
  };
  return (
    <nav className=" py-5 border-b border-input fixed top-0 w-full z-20 bg-white">
      <div className="navbar max-container padding-container">
        <p className="navbar-title">covid ID</p>
        <ul className=" gap-4 items-center hidden lg:flex">
          {NAVBAR.map((nav, index) => (
            <li
              key={index}
              className="font-semibold hover:text-teal-500 transition-all duration-300 ease-in-out capitalize text-slate-600"
            >
              <NavLink
                className={({ isActive }) => (isActive ? "text-teal-500" : "")}
                to={nav.path}
              >
                {nav.item}
              </NavLink>
            </li>
          ))}
        </ul>
        <div className="w-6 h-6 cursor-pointer   lg:hidden">
          {isOpen ? (
            <img
              src={images.x}
              alt="close menu"
              onClick={() => setIsOpen(!isOpen)}
            />
          ) : (
            <img
              src={images.hamburger}
              alt="hamburger menu"
              onClick={() => setIsOpen(!isOpen)}
            />
          )}
        </div>
      </div>
      <NavbarMobile isOpen={isOpen} onClose={toggleNavbar} />
    </nav>
  );
};

export default Navbar;
