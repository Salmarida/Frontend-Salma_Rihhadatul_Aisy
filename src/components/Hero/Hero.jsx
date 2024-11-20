import React from "react";
import Button from "../Button/Button";
import { images } from "../../constants";
const Hero = () => {
  return (
    <section className="flex h-screen mt-32 lg:mt-0 lg:justify-between flex-col  lg:flex-row justify-center  items-center max-container padding-container ">
      <div className="my-5 gap-5 flex flex-col items-center lg:items-start">
        <h1 className=" font-bold text-teal-500 text-xs uppercase bg-teal-100 py-2 px-4 rounded-full">
          Covid ID
        </h1>
        <p className="text-slate-800 lg:text-5xl lg:w-72  text-4xl my-5 lg:my-0 text-center lg:text-left  font-bold leading-snug tracking-wide uppercase">
          monitoring perkembangan covid
        </p>
        <p className="lg:w-5/12 md:w-5/12 mb-5 text-xs text-center text-slate-400 lg:text-left">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Ab porro
          reprehenderit fuga harum deserunt odio velit veritatis illum iusto
          voluptatibus.
        </p>

        <Button isAnchor={false} title="ini buttton" />
      </div>
      <div>
        <img
          src={images.heroimage}
          alt="hero image"
          className="h-[400px] object-contain"
        />
      </div>
    </section>
  );
};

export default Hero;
