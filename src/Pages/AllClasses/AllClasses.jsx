// import React from "react";
// import useCourse from "../../hooks/useCourse";
// import ClassCard from "../../components/ClassCard/ClassCard";

// const AllClasses = () => {
//   const [course] = useCourse();
//   console.log(course);
//   const approvedCourses = course.filter((item) => item.status === "approve");
//   return (
//     <div>
//       <h2 className="text-3xl text-center">All Classes Here For You</h2>
//       <div className="flex justify-end items-center my-4 mr-10">
//         <button className="btn btn-info mr-2">Ascending</button>
//         <button className="btn btn-info">Descending</button>
//       </div>
//       <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 p-4">
//         {approvedCourses.map((item, idx) => (
//           <ClassCard key={item._id} item={item}></ClassCard>
//         ))}
//       </div>
//     </div>
//   );
// };

// export default AllClasses;

import React, { useState } from "react";
import useCourse from "../../hooks/useCourse";
import ClassCard from "../../components/ClassCard/ClassCard";

const AllClasses = () => {
  const [course] = useCourse();
  const [sortOrder, setSortOrder] = useState(null); // null for no sorting, 'asc' for ascending, 'desc' for descending

  // Function to handle sorting
  const handleSort = (order) => {
    setSortOrder(order);
  };

  // Filter and sort approved courses based on price
  const approvedCourses = course.filter((item) => item.status === "approve");
  if (sortOrder === "asc") {
    approvedCourses.sort((a, b) => a.price - b.price);
  } else if (sortOrder === "desc") {
    approvedCourses.sort((a, b) => b.price - a.price);
  }

  return (
    <div>
      <h2 className="text-3xl text-center">All Classes Here For You</h2>
      <div className="flex justify-end items-center my-4 mr-10">
        <button
          className={`btn ${
            sortOrder === "asc" ? "btn-primary" : "btn-info"
          } mr-2`}
          onClick={() => handleSort("asc")}>
          Ascending
        </button>
        <button
          className={`btn ${sortOrder === "desc" ? "btn-primary" : "btn-info"}`}
          onClick={() => handleSort("desc")}>
          Descending
        </button>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 p-4">
        {approvedCourses.map((item, idx) => (
          <ClassCard key={item._id} item={item}></ClassCard>
        ))}
      </div>
    </div>
  );
};

export default AllClasses;
