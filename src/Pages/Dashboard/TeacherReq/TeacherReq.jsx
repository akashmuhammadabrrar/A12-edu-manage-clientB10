import { useQuery } from "@tanstack/react-query";
import React from "react";
import useAxiosSecure from "../../../hooks/useAxiosSecure";

const TeacherReq = () => {
  const axiosSecure = useAxiosSecure();
  const { data: teacherReq = [] } = useQuery({
    queryKey: ["teacher-req"],
    queryFn: async () => {
      const res = await axiosSecure.get("/teacher-req");
      return res.data;
    },
  });
  console.table({ teacherReq });

  return (
    <div>
      <div className="flex justify-evenly items-center">
        <h2 className="text-3xl text-center my-6">Teacher's Requests</h2>
        <h2 className="text-3xl text-center my-6 lg:ml-20">
          Total Teacher's Requests: {teacherReq.length}
        </h2>
      </div>
      <div className="">
        {/* table */}
        <div className="overflow-x-auto w-full">
          <table className="table">
            {/* head */}
            <thead>
              <tr>
                <th>#</th>
                <th>Name & Image</th>
                <th>Experience</th>
                <th>Title</th>
                <th>Category</th>
                <th>Stats.</th>
                <th>Action</th>
                <th>Action</th>
              </tr>
            </thead>
            <tbody>
              {teacherReq.map((req, idx) => (
                <tr key={req._id}>
                  <th>#</th>
                  <td>
                    <div className="flex items-center gap-3">
                      <div className="avatar">
                        <div className="mask mask-squircle h-12 w-12">
                          <img
                            referrerPolicy="no-referrer"
                            src={req.image}
                            alt="Avatar Tailwind CSS Component"
                          />
                        </div>
                      </div>
                      <div>
                        <div className="font-bold">{req.name}</div>
                      </div>
                    </div>
                  </td>
                  <td>{req.experience}</td>
                  <td>{req.title}</td>
                  <td>
                    <div>{req.category}</div>
                  </td>
                  <td>{req.status}</td>
                  <td>
                    <button className="btn btn-sm text-white bg-green-600">
                      Approve
                    </button>
                  </td>
                  <td>
                    <button className="btn btn-sm text-white bg-error">
                      Reject
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default TeacherReq;
