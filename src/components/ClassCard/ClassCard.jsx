import React from "react";
import { Link } from "react-router-dom";
import useAxiosSecure from "../../hooks/useAxiosSecure";
import { useQuery } from "@tanstack/react-query";

const ClassCard = ({ item = {} }) => {
  const axiosSecure = useAxiosSecure();

  const { data: ClassDetail } = useQuery({
    queryKey: [item._id, "class"],
    queryFn: async () => {
      const res = await axiosSecure.get(`/classes/${item._id}`);
      return res.data;
    },
  });

  // show class on the ui
  const { name, image, price, title, description, enroll } = item;
  // console.table({ name, image, price, title, description });
  // console.log(item.status === "approve");

  return (
    <div>
      <div className="card bg-base-300 rounded w-[80%] mx-auto h-[500px] shadow-xl gap-4">
        <figure className="px-10 pt-10">
          <img
            src={image}
            alt="Shoes"
            className="rounded-xl w-[80%] h-[95%] object-cover mx-auto"
          />
        </figure>
        <div className="card-body items-start text-start">
          <h2 className="card-title">{title}</h2>
          <p>
            {" "}
            <span className="font-bold">Name</span>: {name}
          </p>
          <p>
            {" "}
            <span className="font-bold">Description</span>:{" "}
            {description.slice(0, 80)}
          </p>
          <p>
            {" "}
            <span className="font-bold">Price:</span> {price} $
          </p>
          <p>
            {" "}
            <span className="font-bold">Total Enroll:</span>{" "}
            {enroll ? enroll : 0}
          </p>
          <div className="card-actions">
            <Link to={`/classDetail/${item._id}`}>
              <button className="btn btn-info">Enroll Now</button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ClassCard;
