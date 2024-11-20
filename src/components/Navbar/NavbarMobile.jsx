import React from "react";
import { NAVBAR } from "@/constants";
import { NavLink } from "react-router-dom";

const NavbarMobile = ({ isOpen, onClose }) => {
  return (
    <div className={`lg:hidden ${isOpen ? "block" : "hidden"}`}>
      <ul className="flex flex-col items-center mt-4">
        {NAVBAR.map((nav, index) => (
          <li
            key={index}
            className="font-semibold hover:text-teal-500 transition-all duration-300 ease-in-out capitalize text-slate-600 mb-2"
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
    </div>
  );
};

export default NavbarMobile;
