import React from "react";

const Card = ({ title, nominal, loading, error }) => {
  const formatNumber = (number) => {
    return new Intl.NumberFormat("id-ID", {
      style: "decimal",
    }).format(number);
  };

  return (
    <>
      <div className="bg-white h-[200px] flex flex-col rounded-2xl shadow-lg text-center w-full">
        <h2 className="text-teal-500 font-black text-xl capitalize border-b border-input text-left py-2 px-5">
          {title}
        </h2>
        {loading ? (
          <p className="text-teal-500 font-bold text-3xl p-5 mt-10">
            Loading...
          </p>
        ) : error ? (
          <p className="text-teal-500 font-bold text-3xl p-5 mt-10">
            Error: {error.message}
          </p>
        ) : (
          <p className="text-teal-500 font-bold text-3xl p-5 mt-10">
            {formatNumber(nominal)}
          </p>
        )}
      </div>
    </>
  );
};

export default Card;
