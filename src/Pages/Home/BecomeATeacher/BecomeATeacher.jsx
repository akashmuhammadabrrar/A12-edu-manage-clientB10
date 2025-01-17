import React from "react";
import teacherImg from "../../../assets/ImagesHome/content-teacher-checking-task-standing-pupil.jpg";
import { Link } from "react-router-dom";

const BecomeATeacher = () => {
  return (
    <div>
      <div className="hero bg-base-200 min-h-screen">
        <div className="hero-content flex-col lg:flex-row-reverse">
          <img src={teacherImg} className="max-w-sm rounded-lg shadow-2xl" />
          <div>
            <h1 className="text-5xl font-bold">
              Become A Teacher To This Platform
            </h1>
            <p className="py-6 text-xl font-semibold text-slate-600">
              If You Have Enough Ability To Teaching And Make Understanding With
              Students Then Take Massive Opportunity To Become An Honorable
              Teacher. And Make Them Shine By Your Experience And Knowledge.
            </p>
            <Link to="/teacherReq">
              <button className="btn btn-info font-semibold">
                Become A Teacher
              </button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BecomeATeacher;
