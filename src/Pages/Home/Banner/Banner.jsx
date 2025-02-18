// import React from "react";
// import "react-responsive-carousel/lib/styles/carousel.min.css";
// import { Carousel } from "react-responsive-carousel";

// import bannerA from "../../../assets/ImagesHome/people-focused-their-work.jpg";
// import bannerB from "../../../assets/ImagesHome/people-office-analyzing-checking-finance-graphs.jpg";
// import bannerC from "../../../assets/ImagesHome/representation-user-experience-interface-design.jpg";
// import bannerD from "../../../assets/ImagesHome/young-men-working-office.jpg";

// const Banner = () => {
//   return (
//     <Carousel>
//       <div className="">
//         <img src={bannerA} />
//         <div className="absolute bottom-56 w-full">
//           <h2 className="text-5xl text-white font-semibold bg-black opacity-40 p-10">
//             Learn With Us And Make A Smart Career
//           </h2>
//           <p className="text-xl font-bold text-white bg-black p-10 opacity-40">
//             Teaching, Learning And Management
//           </p>
//         </div>
//       </div>
//       <div>
//         <img src={bannerB} />
//         <div className="absolute bottom-56 w-full">
//           <h2 className="text-5xl text-white font-semibold bg-black opacity-40 p-10">
//             Become A Teacher And Help To Build Their Career
//           </h2>
//           <p className="text-xl font-bold text-white bg-black p-10 opacity-40">
//             Teaching, Learning And Management
//           </p>
//         </div>
//       </div>
//       <div>
//         <img src={bannerC} />
//         <div className="absolute bottom-56 w-full">
//           <h2 className="text-5xl text-white font-semibold bg-black opacity-40 p-10">
//             Develop Digital Skills And Earn The Badge To Built Career
//           </h2>
//           <p className="text-xl font-bold text-white bg-black p-10 opacity-40">
//             Teaching, Learning And Management
//           </p>
//         </div>
//       </div>
//       <div>
//         <img src={bannerD} />
//         {/* <p className="legend">Legend 3</p> */}
//       </div>
//     </Carousel>
//   );
// };

// export default Banner;

import React from "react";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from "react-responsive-carousel";

import bannerA from "../../../assets/ImagesHome/people-focused-their-work.jpg";
import bannerB from "../../../assets/ImagesHome/people-office-analyzing-checking-finance-graphs.jpg";
import bannerC from "../../../assets/ImagesHome/representation-user-experience-interface-design.jpg";
import bannerD from "../../../assets/ImagesHome/young-men-working-office.jpg";

const Banner = () => {
  return (
    <Carousel>
      <div className="relative" style={{ height: "600px" }}>
        <img src={bannerA} style={{ height: "100%", objectFit: "cover" }} />
        <div className="absolute bottom-56 w-full">
          <h2 className="text-5xl text-white font-semibold bg-black opacity-40 p-10">
            Learn With Us And Make A Smart Career
          </h2>
          <p className="text-xl font-bold text-white bg-black p-10 opacity-40">
            Teaching, Learning And Management
          </p>
        </div>
      </div>
      <div className="relative" style={{ height: "600px" }}>
        <img src={bannerB} style={{ height: "100%", objectFit: "cover" }} />
        <div className="absolute bottom-56 w-full">
          <h2 className="text-5xl text-white font-semibold bg-black opacity-40 p-10">
            Become A Teacher And Help To Build Their Career
          </h2>
          <p className="text-xl font-bold text-white bg-black p-10 opacity-40">
            Teaching, Learning And Management
          </p>
        </div>
      </div>
      <div className="relative" style={{ height: "600px" }}>
        <img src={bannerC} style={{ height: "100%", objectFit: "cover" }} />
        <div className="absolute bottom-56 w-full">
          <h2 className="text-5xl text-white font-semibold bg-black opacity-40 p-10">
            Develop Digital Skills And Earn The Badge To Built Career
          </h2>
          <p className="text-xl font-bold text-white bg-black p-10 opacity-40">
            Teaching, Learning And Management
          </p>
        </div>
      </div>
      <div className="relative" style={{ height: "600px" }}>
        <img src={bannerD} style={{ height: "100%", objectFit: "cover" }} />
        {/* <p className="legend">Legend 3</p> */}
      </div>
    </Carousel>
  );
};

export default Banner;
