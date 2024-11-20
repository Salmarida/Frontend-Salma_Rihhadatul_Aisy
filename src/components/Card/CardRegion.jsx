import React from "react";
import { images } from "../../constants";

const CardRegion = ({ name, numbers }) => {
  const formatNumber = (number) => {
    return new Intl.NumberFormat("id-ID", {
      style: "decimal",
    }).format(number);
  };

  return (
    <div className="bg-white flex flex-col rounded-2xl shadow-lg text-center w-full my-4 p-5">
      <h2 className="text-slate-900   uppercase  text-left">{name}</h2>
      <div className=" text-left flex flex-col gap-3 mt-5">
        <div className="font-medium flex justify-between items-center">
          <div className="">
            <p className="text-xs">Confirmed</p>
            <p className="text-teal-500 text-lg font-semibold">
              {formatNumber(numbers.confirmed)}
            </p>
          </div>
          <div className=" bg-yellow-200 rounded-md p-2">
            <img
              src={images.mask}
              alt="mask"
              className="w-6 h-6 object-contain"
            />
          </div>
        </div>
        <div className="font-medium flex justify-between items-center  ">
          <div>
            <p className="text-xs">Recovered</p>
            <p className="text-blue-500 text-lg font-semibold">
              {formatNumber(numbers.recovered)}
            </p>
          </div>
          <div className=" bg-green-200 rounded-md p-2">
            <img
              src={images.healthy}
              alt="healthy"
              className="w-6 h-6 object-contain"
            />
          </div>
        </div>
        <div className="font-medium flex justify-between items-center">
          <div>
            <p className="text-xs">Deaths</p>
            <p className="text-red-500 text-lg font-semibold">
              {formatNumber(numbers.death)}
            </p>
          </div>
          <div className=" bg-red-200 rounded-md p-2">
            <img
              src={images.death}
              alt="healthy"
              className="w-6 h-6 object-contain"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default CardRegion;
