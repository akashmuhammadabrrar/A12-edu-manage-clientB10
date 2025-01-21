import React from "react";
import Banner from "./Banner/Banner.jsx";
import Collaborators from "./Collaborators/Collaborators.jsx";
import HighlightClasses from "./HighlightClasses/HighlightClasses.jsx";
import FeedBackSection from "./FeedBackSection/FeedBackSection.jsx";
import BecomeATeacher from "./BecomeATeacher/BecomeATeacher.jsx";
import CourseStats from "./CourseStats/CourseStats.jsx";
import ExtraA from "../ExtraA/ExtraA.jsx";
import ExtraB from "../ExtraB/ExtraB.jsx";

const Home = () => {
  return (
    <div className="">
      {/* Top Banner/ slider */}
      <Banner></Banner>
      {/* collaborators */}
      <Collaborators></Collaborators>
      {/* Highlight Classes Here */}
      <HighlightClasses></HighlightClasses>
      {/* teachers feedback section */}
      <FeedBackSection></FeedBackSection>
      {/* Become a teacher section */}
      <BecomeATeacher></BecomeATeacher>
      {/* course stats(total user,total class etc) */}
      <CourseStats></CourseStats>
      {/* extra A */}
      <ExtraA></ExtraA>
      {/* extra- B */}
      <ExtraB></ExtraB>
    </div>
  );
};

export default Home;
