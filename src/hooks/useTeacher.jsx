import { useQuery } from "@tanstack/react-query";
import useAxiosSecure from "./useAxiosSecure";
import useAuth from "./useAuth";

const useTeacher = () => {
  //   const { user } = useAuth();
  const axiosSecure = useAxiosSecure();
  const { data: teacherReqA = [] } = useQuery({
    queryKey: ["teacher-req"],
    queryFn: async () => {
      const res = await axiosSecure.get(`/teacher-req/`);
      return res.data;
    },
  });
  const teacherEmail = teacherReqA.map((teacher) => teacher.email);
  console.log(teacherEmail);
  return [teacherEmail];
};

export default useTeacher;
