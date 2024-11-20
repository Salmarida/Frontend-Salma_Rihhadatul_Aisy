import React from "react";
import { Footer, Navbar } from "../components";
import { images } from "../constants";

const About = () => {
  return (
    <>
      <Navbar />
      <div className="h-screen flex flex-col justify-center items-center padding-container">
        <div className="">
          <img
            src={images.pp}
            alt="pp"
            className="w-[300px] h-[300px] object-cover rounded-full border-teal-500 border-4"
          />
        </div>
        <div className="text-center">
          <h1 className="text-3xl font-bold mb-5 mt-5 text-teal-600">
            About Me
          </h1>
          <div className="flex gap-4 items-center justify-center my-5 font-semibold">
            <p>Salma Rihhadatul 'Aisy</p>
            <p className="border-l-slate-900 border-l border-r px-2 border-r-slate-900">
              0110221102
            </p>
            <p>Sekolah Tinggi Teknologi Terpadu</p>
          </div>
          <p className="mb-5 text-sm text-slate-700">
            Nama saya Salma Rihhadatul 'Aisy, saya adalah mahasiswa semester 6
            di Sekolah Tinggi Teknologi Terpadu. Saya sangat tertarik dengan
            dunia IT, terutama dalam bidang web development. Saya juga memiliki
            ketertarikan dalam bidang desain grafis. Saya berharap bisa
            mengembangkan kemampuan saya dalam bidang tersebut.
          </p>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default About;
