import React from "react";
import { useQuery } from "@tanstack/react-query";
import useAuth from "../../../hooks/useAuth";
import useAxiosSecure from "../../../hooks/useAxiosSecure";
import useAxiosPublic from "../../../hooks/useAxiosPublic";
import TeacherCard from "../../TeacherCard/TeacherCard";

const MyAddedClass = () => {
  const { user } = useAuth();

  const axiosSecure = useAxiosSecure(); // Secure Axios instance

  const { data: classes = [] } = useQuery({
    queryKey: ["classes", user?.email],
    queryFn: async () => {
      const res = await axiosSecure.get(`/classes/teacher/${user?.email}`);
      return res.data;
    },
  });

  console.log(classes); // Log fetched classes

  return (
    <div>
      <h2 className="text-3xl text-center my-6">My Added Class:</h2>
      <div className="grid grid-cols-1 lg:grid-cols-3 md:grid-cols-2">
        {classes.map((item) => (
          <TeacherCard item={item} key={item._id}></TeacherCard>
        ))}
      </div>
    </div>
  );
};

export default MyAddedClass;
