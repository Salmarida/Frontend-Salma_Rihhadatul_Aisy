import React from "react";
import Hero from "../Hero/Hero";
import Navbar from "../Navbar/Navbar";
import Footer from "../Footer/Footer";

const Layout = ({ children }) => {
  return (
    <div>
      <Navbar />
      <Hero />
      <main className=" bg-slate-50">{children}</main>
      <Footer />
    </div>
  );
};

export default Layout;
