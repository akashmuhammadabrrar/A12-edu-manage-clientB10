import statImg from "../../../assets/ImagesHome/mother-sitting-beside-daughter-holding-school-book-reading-together_482257-26813.jpg";

import React from "react";
import useAxiosSecure from "../../../hooks/useAxiosSecure";
import { useQuery } from "@tanstack/react-query";
import useCourse from "../../../hooks/useCourse";
import useAxiosPublic from "../../../hooks/useAxiosPublic";

const CourseStats = () => {
  const axiosSecure = useAxiosSecure();
  const axiosPublic = useAxiosPublic();

  // const { data: users = [], refetch } = useQuery({
  //   queryKey: ["users"],
  //   queryFn: async () => {
  //     const res = await axiosPublic.get("/api/user-count");
  //     return res.data;
  //   },
  // });
  // console.log(users);

  // all classes
  const [course] = useCourse();
  // console.log(course);
  const approvedCourses = course.filter((item) => item.status === "approve");
  // console.log(approvedCourses);
  const enrollments = approvedCourses.map((course) => course.enroll);
  const totalEnrollments = enrollments.reduce(
    (sum, enrollment) => sum + enrollment,
    0
  );
  // console.log(totalEnrollments);
  return (
    <div className="mt-16">
      <div className="hero bg-base-200 min-h-[260px]">
        <div className="hero-content flex-col lg:flex-row-reverse justify-evenly">
          <img src={statImg} className="max-w-sm rounded-lg w-1/2 shadow-2xl" />
          <div className="stats stats-vertical lg:stats-horizontal shadow">
            <div className="stat">
              <div className="stat-title">Total Users</div>
              <div className="stat-value">23</div>
            </div>

            <div className="stat">
              <div className="stat-title">Total Classes</div>
              <div className="stat-value">{approvedCourses.length}</div>
            </div>

            <div className="stat">
              <div className="stat-title">Total Enrollments</div>
              <div className="stat-value">{totalEnrollments}</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CourseStats;
