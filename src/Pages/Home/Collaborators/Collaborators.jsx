import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import { Pagination } from "swiper/modules";

import colA from "../../../assets/collaborators/1623835269343_0.jpg";
import colB from "../../../assets/collaborators/BYJUs_1617611925125_1644301489989.jpg";
import colC from "../../../assets/collaborators/1715255117815.png";
import colD from "../../../assets/collaborators/FreeCodeCamp_logo.png";
import colE from "../../../assets/collaborators/images (1).png";
import colF from "../../../assets/collaborators/images.png";
import colG from "../../../assets/collaborators/thumbnail.png";
import TitleSection from "../../../components/TitleSection/TitleSection";

const Collaborators = () => {
  return (
    <section className="max-w-screen-2xl mx-auto">
      <div className="my-6">
        <TitleSection
          heading={"Collaborate Our Team Around The World"}
          subHeading={"Meet Our Global Partners"}></TitleSection>
      </div>
      <Swiper
        slidesPerView={4}
        spaceBetween={30}
        centeredSlides={true}
        pagination={{
          clickable: true,
        }}
        modules={[Pagination]}
        className="mySwiper">
        <SwiperSlide>
          <div className="bg-black p-2">
            <img src={colA} alt="" />
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="bg-black p-2">
            <img src={colB} alt="" />
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="bg-black p-2">
            <img className="h-full w-full" src={colC} alt="" />
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="bg-black p-2">
            <img src={colD} alt="" />
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="bg-black p-2">
            <img className="" src={colE} alt="" />
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="bg-black p-2">
            <img src={colF} alt="" />
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="bg-black p-2">
            <img src={colG} alt="" />
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="bg-black p-2">
            <img src={colA} alt="" />
          </div>
        </SwiperSlide>
      </Swiper>
    </section>
  );
};

export default Collaborators;
