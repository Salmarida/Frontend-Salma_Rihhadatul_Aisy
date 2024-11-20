import React from "react";
import { NAVBAR } from "../../constants";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer className="bg-teal-500 p-5 flex flex-col gap-5  justify-center items-center lg:flex-row lg:justify-between">
      <div className="text-white text-center lg:text-left">
        <p className="font-bold text-2xl">Covid ID</p>
        <p className="capitalize">
          developed by <span className="font-bold">Salma Rihhadatul 'Aisy</span>{" "}
        </p>
      </div>
      <div className="flex list-none gap-5 text-white ">
        {NAVBAR.map((item, index) => (
          <li key={index} className="hover:font-bold">
            <Link to={item.path}>{item.item}</Link>
          </li>
        ))}
      </div>
    </footer>
  );
};

export default Footer;
