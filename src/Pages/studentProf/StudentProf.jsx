import React from "react";
import useAuth from "../../hooks/useAuth";

const StudentProf = () => {
  const { user } = useAuth();
  return (
    <div>
      <h2 className="text-3xl text-center my-6">
        Welcome: {user?.displayName}
      </h2>
      <div className="w-1/3 mx-auto  border-2">
        <img src={user?.photoURL} alt="" />
      </div>
      <p>Role:{user?.role === user?.role}</p>
    </div>
  );
};

export default StudentProf;
