import React from "react";
import CourseStats from "../../Home/CourseStats/CourseStats";
import useAuth from "../../../hooks/useAuth";

const UserHome = () => {
  const { user } = useAuth();
  return (
    <div className="">
      <h2 className="text-center text-3xl my-6">
        My Home: {user?.displayName}
      </h2>
      <div className="">
        <CourseStats></CourseStats>
      </div>
    </div>
  );
};

export default UserHome;
