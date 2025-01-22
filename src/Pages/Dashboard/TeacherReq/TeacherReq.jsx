import { useQuery } from "@tanstack/react-query";
import useAxiosSecure from "../../../hooks/useAxiosSecure";
import Swal from "sweetalert2";

const TeacherReq = () => {
  const axiosSecure = useAxiosSecure();
  const { data: teacherReq = [], refetch } = useQuery({
    queryKey: ["teacher-req"],
    queryFn: async () => {
      const res = await axiosSecure.get("/teacher-req");
      return res.data;
    },
  });
  const teacherEmail = teacherReq.map((teacher) => teacher.email);
  // console.log({ teacherEmail });

  const handleTeacher = (req) => {
    axiosSecure.patch(`/teacher-req/teacher/${req._id}`).then((res) => {
      // console.log(res.data);
      if (res.data.modifiedCount > 0) {
        refetch();
        Swal.fire({
          position: "top-end",
          icon: "success",
          title: `${req.name} is a Teacher Now!`,
          showConfirmButton: false,
          timer: 1500,
        });
      }
    });
  };

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
        <div className="overflow-x-auto">
          <table className="table sm:ml-20 md:ml-20 lg:m-0">
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
                  <td>{req.role === "teacher" ? "Teacher" : req.status}</td>
                  <td>
                    {req.role === "teacher" ? (
                      "Teacher"
                    ) : (
                      <button
                        onClick={() => handleTeacher(req)}
                        className="btn btn-sm text-white bg-green-600">
                        Approve
                      </button>
                    )}
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
