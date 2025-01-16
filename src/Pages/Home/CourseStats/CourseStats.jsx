import statImg from "../../../assets/ImagesHome/mother-sitting-beside-daughter-holding-school-book-reading-together_482257-26813.jpg";

import React from "react";

const CourseStats = () => {
  return (
    <div className="mt-16">
      <div className="hero bg-base-200 min-h-[260px]">
        <div className="hero-content flex-col lg:flex-row-reverse justify-evenly">
          <img src={statImg} className="max-w-sm rounded-lg shadow-2xl" />
          <div className="stats stats-vertical lg:stats-horizontal shadow">
            <div className="stat">
              <div className="stat-title">Total Users</div>
              <div className="stat-value">31K</div>
            </div>

            <div className="stat">
              <div className="stat-title">Total Classes</div>
              <div className="stat-value">4,200</div>
            </div>

            <div className="stat">
              <div className="stat-title">Total Enrollments</div>
              <div className="stat-value">1,200</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CourseStats;
