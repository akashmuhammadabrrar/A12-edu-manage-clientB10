import React from "react";
import { FaAcquisitionsIncorporated, FaAppStore } from "react-icons/fa";
import { IoIosColorPalette } from "react-icons/io";
import { IoBriefcaseOutline, IoGameControllerSharp } from "react-icons/io5";
import { SiGooglemarketingplatform } from "react-icons/si";

const ExtraB = () => {
  return (
    <div>
      <h2 className="text-3xl text-center my-6">We Providing That Courses</h2>

      <div className="flex justify-center items-center gap-4 flex-wrap">
        <div className="w-1/5 p-4 h-24 bg-gray-200 rounded-md">
          <p className="font-bold text-xl">Graphics Designing</p>
          <IoIosColorPalette className="text-xl" />
        </div>
        <div className="w-1/5 p-4 h-24 bg-gray-200 rounded-md">
          <p className="font-bold text-xl">Digital Marketing</p>
          <SiGooglemarketingplatform />
        </div>
        <div className="w-1/5 p-4 h-24 bg-gray-200 rounded-md">
          <p className="font-bold text-xl">SEO Development </p>
          <IoBriefcaseOutline />
        </div>
        <div className="w-1/5 p-4 h-24 bg-gray-200 rounded-md">
          <p className="font-bold text-xl">App Development </p>
          <FaAppStore />
        </div>
        <div className="w-1/5 p-4 h-24 bg-gray-200 rounded-md">
          <p className="font-bold text-xl">Game Development</p>
          <IoGameControllerSharp />
        </div>
        <div className="w-1/5 p-4 h-24 bg-gray-200 rounded-md">
          <p className="font-bold text-xl">UI/Ux Designing</p>
          <FaAcquisitionsIncorporated />
        </div>
      </div>
    </div>
  );
};

export default ExtraB;
