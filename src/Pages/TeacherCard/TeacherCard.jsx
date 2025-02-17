import React from "react";
import { Link } from "react-router-dom";
import Swal from "sweetalert2";
import useAxiosSecure from "../../hooks/useAxiosSecure";
import { useQuery, useQueryClient } from "@tanstack/react-query";

const TeacherCard = ({ item = {} }) => {
  const axiosSecure = useAxiosSecure();
  const queryClient = useQueryClient();
  const { description, name, image, experience, price, status, title, _id } =
    item;

  const { data: classes = [] } = useQuery({
    queryKey: ["classes", _id],
    queryFn: async () => {
      const res = await axiosSecure.get(`/classes`);
      return res.data;
    },
  });
  console.log(classes);

  const approvedClasses = classes.filter(
    (classItem) => classItem.status === "approve"
  );
  console.log(approvedClasses);

  const handleDelete = (_id) => {
    Swal.fire({
      title: "Are you sure?",
      text: "You won't be able to revert this!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, delete it!",
    }).then((result) => {
      if (result.isConfirmed) {
        axiosSecure.delete(`/classes/${_id}`).then((res) => {
          if (res.data.deletedCount > 0) {
            Swal.fire({
              title: "Deleted!",
              text: "Your file has been deleted.",
              icon: "success",
            });
            queryClient.invalidateQueries(["classes", _id]);
          }
        });
      }
    });
  };

  return (
    <div>
      <div className="card bg-base-300 rounded-none w-[80%] h-[90%] mx-auto shadow-xl justify-center items-center gap-4">
        <figure>
          <img className="object-cover mx-auto" src={image} alt="Shoes" />
        </figure>
        <div className="card-body">
          <h2 className="card-title">
            {title}--by
            <div className="badge h-8 w-20 badge-secondary">{status}</div>
          </h2>
          <p>{description.slice(0, 85)}..</p>
          <span className="font-semibold">Price: {price}$</span>
          <p className="text-xl bg-green-300 w-1/2 p-2 rounded-xl">
            Name: {name}
          </p>
          <div className="card-actions justify-start">
            <Link to={`/dashboard/updateClass/${_id}`}>
              <button className="btn btn-info">Update</button>
            </Link>
            <button onClick={() => handleDelete(_id)} className="btn btn-error">
              Delete
            </button>
            <div>
              {item.status === "approve" ? (
                <Link to={`/dashboard/teacherClassTask/${_id}`}>
                  <button className="btn btn-accent">See Details</button>
                </Link>
              ) : (
                <button className="btn btn-accent" disabled>
                  See Progress
                </button>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TeacherCard;
