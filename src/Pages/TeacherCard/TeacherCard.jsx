import React from "react";
import { Link } from "react-router-dom";

const TeacherCard = ({ item = {} }) => {
  const { description, name, image, experience, price, title, _id } = item;
  return (
    <div>
      <div className="card bg-base-100  w-80 shadow-xl justify-center items-center gap-4">
        <figure>
          <img src={image} alt="Shoes" />
        </figure>
        <div className="card-body">
          <h2 className="card-title">
            {title}--by
            <div className="badge h-8 w-20 badge-secondary">{name}</div>
          </h2>
          <p>{description.slice(0, 120)}..</p>
          <div className="card-actions justify-start">
            <Link to={`/dashboard/updateClass/${_id}`}>
              <button className="btn btn-info">Update</button>
            </Link>
            <button className="btn btn-error">Delete</button>
            <button className="btn btn-accent">See Progress</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TeacherCard;
