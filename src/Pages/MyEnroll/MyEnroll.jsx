import React, { useEffect, useState } from "react";
import useAuth from "../../hooks/useAuth";
import useAxiosSecure from "../../hooks/useAxiosSecure";

const MyEnroll = () => {
  const { user } = useAuth();
  const axiosSecure = useAxiosSecure();
  const [enrolledClasses, setEnrolledClasses] = useState([]);

  useEffect(() => {
    if (user?.email) {
      axiosSecure
        .get(`/enrollments?email=${user.email}`)
        .then((res) => setEnrolledClasses(res.data))
        .catch((error) => console.error("Error fetching enrollments:", error));
    }
  }, [user, axiosSecure]);

  return (
    <div>
      <h2 className="text-3xl text-center my-6">My Enrollments: Class</h2>

      <div>
        <ul>
          {enrolledClasses.length > 0 ? (
            enrolledClasses.map((enrollment) => (
              <li
                key={enrollment._id}
                className="border p-4 rounded shadow mb-2">
                <h3 className="text-lg font-semibold">
                  {enrollment.myClass.title}
                </h3>
                <p>Instructor: {enrollment.myClass.name}</p>
                <p>Price: ${enrollment.price}</p>
                <p>Description: {enrollment.myClass.description}</p>
                <div className="flex">
                  <img
                    src={enrollment.myClass.image}
                    alt={enrollment.myClass.title}
                    className="w-32 h-32 object-cover rounded"
                  />
                  <button className="btn btn-info btn-sm mt-24 ml-2">
                    Continue
                  </button>
                </div>
              </li>
            ))
          ) : (
            <p>No enrolled classes found.</p>
          )}
        </ul>
      </div>
    </div>
  );
};

export default MyEnroll;
