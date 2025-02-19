import React from "react";
import useAuth from "../../hooks/useAuth";
import useAdmin from "../../hooks/useAdmin";
import useMakeTeacher from "../../hooks/useMakeTeacher";

const StudentProf = () => {
  const { user } = useAuth();
  const [isAdmin] = useAdmin();
  const [isTeacher] = useMakeTeacher();

  const getRole = () => {
    if (isAdmin) {
      return "Admin";
    } else if (isTeacher) {
      return "Teacher";
    } else {
      return "Student";
    }
  };

  return (
    <div className="max-w-screen-md mx-auto p-8 bg-base-100 shadow-lg rounded-lg mt-20">
      <h2 className="text-3xl text-center my-6 text-primary">
        Welcome, {user?.displayName}
      </h2>
      <div className="flex flex-col items-center md:flex-row md:items-center">
        <div className="w-32 h-32 md:w-48 md:h-48 border-2 rounded-full overflow-hidden mb-6 md:mb-0 md:mr-8">
          <img
            src={user?.photoURL}
            alt="User Profile"
            className="w-full h-full object-cover"
          />
        </div>
        <div className="flex-1 text-center md:text-left">
          <p className="text-lg">
            <strong>Role:</strong> {getRole()}
          </p>
          <p className="text-lg">
            <strong>Phone:</strong> +8801785472952
          </p>
          <p className="text-lg">
            <strong>Email:</strong> {user?.email}
          </p>
        </div>
      </div>
    </div>
  );
};

export default StudentProf;
