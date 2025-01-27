import { useQuery } from "@tanstack/react-query";
import React from "react";
import useAxiosSecure from "../../hooks/useAxiosSecure";
import { Link, useNavigate, useParams } from "react-router-dom";

const ClassDetails = () => {
  const axiosSecure = useAxiosSecure();
  const navigate = useNavigate();
  const { id } = useParams();
  // console.log(id);

  const {
    data: classDetail,
    isLoading,
    error,
  } = useQuery({
    queryKey: ["classDetail", id],
    queryFn: async () => {
      const res = await axiosSecure.get(`/classes/${id}`);
      return res.data;
    },
  });
  console.log(classDetail);

  const handlePurchase = (classDetail) => {
    navigate("/payment", {
      state: { classDetail },
    });
  };

  const { name, image, price, title, description } = classDetail || {};

  if (isLoading) return <div>Loading...</div>;
  if (error) return <div>Error: {error.message}</div>;

  if (!classDetail) return <div>No class details found.</div>;

  return (
    <div>
      <h2 className="text-3xl font-semibold text-center my-6">
        {" "}
        Class Details And Information
      </h2>

      <div className="flex justify-evenly items-center bg-gray-300 gap-4 w-2/3 mx-auto p-4">
        {/* image */}
        <div className="w-1/2 border-2 border-red-200">
          <img className="" src={image} alt="" />
        </div>
        {/* details */}
        <div className="w-1/2 border-2 border-red-200 ">
          <p className="my-2">
            <span>Name</span>: <span className="font-bold">{name}</span>
          </p>
          <p className="my-2">
            price: <span className="font-bold">{price}$</span>
          </p>
          <p className="my-2">
            description: <span className="font-bold">{description}</span>
          </p>
          <p>
            Title: <span className="font-bold">{title}</span>
          </p>
        </div>
      </div>
      <div className="flex justify-center items-center mt-6 w-1/2 mx-auto">
        {/* <Link
          className="w-full"
          to={{ pathname: "/payment", state: { classDetail } }}>
        </Link> */}
        <button
          onClick={() => handlePurchase(classDetail)}
          className="btn btn-info w-full">
          Pay Now
        </button>
      </div>
    </div>
  );
};

export default ClassDetails;
