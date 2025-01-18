import React from "react";
import useCourse from "../../hooks/useCourse";
import ClassCard from "../../components/ClassCard/ClassCard";

const AllClasses = () => {
  const [course] = useCourse();
  console.log(course);
  return (
    <div>
      <h2 className="text-3xl text-center">All Classes Here For You</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 p-4">
        {course.map((item, idx) => (
          <ClassCard key={item._id} item={item}></ClassCard>
        ))}
      </div>
    </div>
  );
};

export default AllClasses;
