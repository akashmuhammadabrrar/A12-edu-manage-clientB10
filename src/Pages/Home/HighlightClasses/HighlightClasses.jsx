import React from "react";
import TitleSection from "../../../components/TitleSection/TitleSection";

const HighlightClasses = () => {
  return (
    <div>
      <div className="my-10">
        <TitleSection
          heading={"Highest Enrollment This Session"}
          subHeading={"Most Demandable Classes"}></TitleSection>
      </div>
      <h2 className="text-5xl">Highlight Classes Page</h2>
    </div>
  );
};

export default HighlightClasses;
