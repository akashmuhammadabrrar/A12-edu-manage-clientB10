import React from "react";
import useAxiosPublic from "../../../hooks/useAxiosPublic";
import { useQuery } from "@tanstack/react-query";
import useAxiosSecure from "../../../hooks/useAxiosSecure";
import Swal from "sweetalert2";

const ClassRequests = () => {
  const axiosPublic = useAxiosPublic();
  const axiosSecure = useAxiosSecure();

  const {
    data: course = [],
    refetch,
    isPending: loading,
  } = useQuery({
    queryKey: ["classes"],
    queryFn: async () => {
      const res = await axiosPublic.get("/classes");
      return res.data;
    },
  });
  console.log(course);

  // updated the stats

  const handleUpdateApprove = (item) => {
    console.log("updating item with _idL", item);
    const updateStats = {
      status: "approve",
    };

    axiosSecure.patch(`/classes/${item._id}`, updateStats).then((res) => {
      console.log(res.data);
      if (res.data.modifiedCount > 0) {
        refetch();
        Swal.fire({
          position: "top-end",
          icon: "success",
          title: `${item.name} is Approved Now`,
          showConfirmButton: false,
          timer: 1500,
        });
      }
    });
  };
  const handleUpdateReject = (item) => {
    console.log("rejecting item with _idL", item);
    const updateStatsR = {
      status: "rejected",
    };

    axiosSecure
      .patch(`/classes/reject/${item._id}`, updateStatsR)
      .then((res) => {
        console.log(res.data);
        if (res.data.modifiedCount > 0) {
          refetch();
          Swal.fire({
            position: "top-end",
            icon: "success",
            title: `${item.name} is Rejected Now`,
            showConfirmButton: false,
            timer: 1500,
          });
        }
      });
  };

  return (
    <div>
      <h2 className="text-3xl text-center">All Classes Requests</h2>

      {/* table */}
      <div>
        <div className="overflow-x-auto">
          <table className="table">
            {/* head */}
            <thead>
              <tr>
                <th>#</th>
                <th>Name & Image</th>
                <th>Title</th>
                <th>Experience</th>
                <th>Status:-</th>
                <th>Action:-</th>
                <th>Action:-</th>
              </tr>
            </thead>
            <tbody>
              {/* row 1 */}
              {course.map((item, idx) => (
                <tr key={item._id}>
                  <th>{idx + 1}</th>
                  <td>
                    <div className="flex items-center gap-3">
                      <div className="avatar">
                        <div className="mask mask-squircle h-12 w-12">
                          <img
                            src={item.image}
                            alt="Avatar Tailwind CSS Component"
                          />
                        </div>
                      </div>
                      <div>
                        <div className="font-bold">{item.name}</div>
                      </div>
                    </div>
                  </td>
                  <td>{item.title}</td>
                  <td>{item.experience}</td>
                  <th>{item.status}</th>
                  <th>
                    <button
                      onClick={() => handleUpdateApprove(item)}
                      className="btn btn-success btn-xs"
                      disabled={item.status !== "Pending" ? true : false}>
                      Approve
                    </button>
                  </th>
                  <th>
                    <button
                      onClick={() => handleUpdateReject(item)}
                      className="btn btn-error btn-xs"
                      disabled={item.status !== "Pending" ? true : false}>
                      Reject
                    </button>
                  </th>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default ClassRequests;
