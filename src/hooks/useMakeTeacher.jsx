import { useQuery } from "@tanstack/react-query";
import useAxiosSecure from "./useAxiosSecure";
import useTeacher from "./useTeacher";
import useAuth from "./useAuth";

const useMakeTeacher = () => {
  // const [teacherEmail] = useTeacher();
  const { user } = useAuth();
  const axiosSecure = useAxiosSecure();

  const {
    data: isTeacher,
    isPending: isTeacherPending,
    error,
  } = useQuery({
    queryKey: [user?.email, "isTeacher"],
    queryFn: async () => {
      const res = await axiosSecure.get(`/teacher-req/teacher/${user?.email}`);
      return res.data?.teacher;
    },
  });

  console.log("isTeacher:", isTeacher);
  console.log("isTeacherPending:", isTeacherPending);
  console.log("teacherEmail:", user);
  console.log("Fetch error:", error);

  return [isTeacher, isTeacherPending];
};

export default useMakeTeacher;
