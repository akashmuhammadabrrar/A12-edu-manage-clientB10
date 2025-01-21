import React from "react";
import imageErr from "../../assets/ImagesHome/1-10.webp";
import { Link } from "react-router-dom";

const ErrorPage = () => {
  return (
    <div className="my-10">
      <h2 className="text-4xl text-center font-semibold">Page Not Found 404</h2>
      <div className="flex justify-center items-center my-6 bg-red-600 p-6">
        <img src={imageErr} alt="" />
      </div>

      <div className="flex justify-center items-center my-4">
        <Link to="/">
          <button className="btn btn-info btn-wide">Go Back To Hom</button>
        </Link>
      </div>
    </div>
  );
};

export default ErrorPage;
