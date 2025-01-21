import React from "react";
import bannerImg from "../../assets/ImagesHome/people-office-analyzing-checking-finance-graphs.jpg";

const ExtraA = () => {
  return (
    <div className="my-12">
      <div
        className="hero min-h-screen"
        style={{
          backgroundImage: `url(${bannerImg})`,
        }}>
        <div className="hero-overlay bg-opacity-60"></div>
        <div className="hero-content text-neutral-content text-center">
          <div className="max-w-md">
            <h1 className="mb-5 text-5xl font-bold">
              Take The Best Opportunity To Build Your Career
            </h1>
            <p className="mb-5 text-xl">
              There is most demandable skills development course. Which is
              globally most demandable and best way to Learning.So don't be late
              to enroll as your choice.
            </p>
            <button className="btn btn-info btn-wide btn-outline text-white font-bold">
              <span className="text-xl">☺</span> See More 🏡{" "}
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ExtraA;
