import React from "react";
import { FaAcquisitionsIncorporated, FaAppStore } from "react-icons/fa";
import { IoIosColorPalette } from "react-icons/io";
import { IoBriefcaseOutline, IoGameControllerSharp } from "react-icons/io5";
import { SiGooglemarketingplatform } from "react-icons/si";
import TitleSection from "../../components/TitleSection/TitleSection";

const ExtraB = () => {
  return (
    <div className="max-w-screen-2xl mx-auto">
      <TitleSection
        heading={"We Are Providing Services For Your Progress"}
        subHeading={"Don't Be Late"}></TitleSection>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-3 mt-6">
        {/* item-1 */}
        <div className="stats shadow bg-base-200 hover:bg-blue-500 ">
          <div className="stat">
            <div className="stat-title text-black font-bold text-xl text-center">
              Graphics Designing
            </div>
            <div className="stat-value flex justify-center">
              <IoIosColorPalette className="text-5xl" />
            </div>
          </div>
        </div>
        {/* item-2 */}
        <div className="stats shadow bg-base-200">
          <div className="stat">
            <div className="stat-title text-black font-bold text-xl text-center">
              Digital Marketing
            </div>
            <div className="stat-value flex justify-center">
              <SiGooglemarketingplatform className="text-5xl" />
            </div>
          </div>
        </div>
        {/* item-3 */}
        <div className="stats shadow bg-base-200">
          <div className="stat">
            <div className="stat-title text-black font-bold text-xl text-center">
              SEO Development
            </div>
            <div className="stat-value flex justify-center">
              <IoBriefcaseOutline className="text-5xl" />
            </div>
          </div>
        </div>
        {/* item-4 */}
        <div className="stats shadow bg-base-200">
          <div className="stat">
            <div className="stat-title text-black font-bold text-xl text-center">
              Application Development
            </div>
            <div className="stat-value flex justify-center">
              <FaAppStore className="text-5xl" />
            </div>
          </div>
        </div>
        {/* item-5 */}
        <div className="stats shadow bg-base-200">
          <div className="stat">
            <div className="stat-title text-black font-bold text-xl text-center">
              Game Development
            </div>
            <div className="stat-value flex justify-center">
              <IoGameControllerSharp className="text-5xl" />
            </div>
          </div>
        </div>
        {/* item-6 */}
        <div className="stats shadow bg-base-200">
          <div className="stat">
            <div className="stat-title text-black font-bold text-xl text-center">
              UI/UX Designing
            </div>
            <div className="stat-value flex justify-center">
              <FaAcquisitionsIncorporated className="text-5xl" />
            </div>
          </div>
        </div>
      </div>

      {/* <div className=" mt-10">
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
      </div> */}
    </div>
  );
};

export default ExtraB;
