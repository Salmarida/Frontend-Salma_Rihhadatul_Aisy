import React from "react";
import Layout from "../components/Layout";
import { images } from "../constants";
import { Navbar } from "../components";
const ErrorPage = () => {
  return (
    <>
      <Navbar />
      <div className="flex max-h-screen justify-center items-center">
        <img
          src={images.error}
          alt="hero image"
          className="h-[400px] object-contain mt-32"
        />
      </div>
    </>
  );
};

export default ErrorPage;
