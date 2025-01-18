import React from "react";

const ClassCard = ({ item }) => {
  const { name, image, price, title, description } = item;
  console.table({ name, image, price, title, description });

  return (
    <div>
      <div className="card bg-base-100 w-full h-[500px] shadow-xl gap-4">
        <figure className="px-10 pt-10">
          <img src={image} alt="Shoes" className="rounded-xl w-72" />
        </figure>
        <div className="card-body items-start text-start">
          <h2 className="card-title">{title}</h2>
          <p>
            {" "}
            <span className="font-bold">Name</span>: {name}
          </p>
          <p>
            {" "}
            <span className="font-bold">Description</span>: {description}
          </p>
          <p>
            {" "}
            <span className="font-bold">Price:</span> {price} $
          </p>
          <div className="card-actions">
            <button className="btn btn-info">Enroll Now</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ClassCard;
