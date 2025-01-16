import React from "react";
import Banner from "./Banner/Banner.jsx";
import Collaborators from "./Collaborators/Collaborators.jsx";

const Home = () => {
  return (
    <div className="">
      {/* Top Banner/ slider */}
      <Banner></Banner>
      {/* collaborators */}
      <Collaborators></Collaborators>
    </div>
  );
};

export default Home;
