import React from "react";

const TitleSection = ({ heading, subHeading }) => {
  return (
    <div>
      <h2 className="text-4xl font-semibold text-center">{heading}</h2>
      <div className="divider w-1/2 mx-auto bg-black opacity-50 rounded-2xl p-0 h-1"></div>
      <p className="text-xl font-semibold text-center">{subHeading}</p>
    </div>
  );
};

export default TitleSection;
