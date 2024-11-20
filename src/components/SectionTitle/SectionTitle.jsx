import React from "react";

const SectionTitle = ({ title, description }) => {
  return (
    <div className="text-center py-10">
      <h2 className="text-5xl mb-3 font-semibold capitalize text-teal-500">
        {title}
      </h2>
      <p className=" tracking-widest text-slate-500 capitalize">
        {description}
      </p>
    </div>
  );
};

export default SectionTitle;
