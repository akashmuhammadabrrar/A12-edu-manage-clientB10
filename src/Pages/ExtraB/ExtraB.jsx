import React from "react";
import { FaAcquisitionsIncorporated, FaAppStore } from "react-icons/fa";
import { IoIosColorPalette } from "react-icons/io";
import { IoBriefcaseOutline, IoGameControllerSharp } from "react-icons/io5";
import { SiGooglemarketingplatform } from "react-icons/si";

const ExtraB = () => {
  return (
    <div className="w-9/12 mx-auto">
      <h2 className="text-3xl text-center my-6">We Providing That Courses</h2>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 items-center gap-4 ">
        <div className=" p-4 h-24 bg-gray-200 rounded-md mx-auto">
          <p className="font-bold text-xl">Graphics Designing</p>
          <IoIosColorPalette className="text-xl" />
        </div>
        <div className=" p-4 h-24 bg-gray-200 rounded-md mx-auto">
          <p className="font-bold text-xl">Digital Marketing</p>
          <SiGooglemarketingplatform />
        </div>
        <div className=" p-4 h-24 bg-gray-200 rounded-md mx-auto">
          <p className="font-bold text-xl">SEO Development </p>
          <IoBriefcaseOutline />
        </div>
        <div className=" p-4 h-24 bg-gray-200 rounded-md mx-auto">
          <p className="font-bold text-xl">App Development </p>
          <FaAppStore />
        </div>
        <div className=" p-4 h-24 bg-gray-200 rounded-md mx-auto">
          <p className="font-bold text-xl">Game Development</p>
          <IoGameControllerSharp />
        </div>
        <div className=" p-4 h-24 bg-gray-200 rounded-md mx-auto">
          <p className="font-bold text-xl">UI/Ux Designing</p>
          <FaAcquisitionsIncorporated />
        </div>
      </div>
    </div>
  );
};

export default ExtraB;
