import { useQuery } from "@tanstack/react-query";
import useAxiosPublic from "./useAxiosPublic";

const useCourse = () => {
  const axiosPublic = useAxiosPublic();

  const {
    data: course = [],
    refetch,
    isPending: loading,
  } = useQuery({
    queryKey: ["classes"],
    queryFn: async () => {
      const res = await axiosPublic.get(
        "https://edu-manage-server-three.vercel.app/classes"
      );
      return res.data;
    },
  });

  return [course, refetch, loading];
};

export default useCourse;
