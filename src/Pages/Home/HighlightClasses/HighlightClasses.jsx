import React from "react";
import TitleSection from "../../../components/TitleSection/TitleSection";
import useCourse from "../../../hooks/useCourse";
import ClassCard from "../../../components/ClassCard/ClassCard";

const HighlightClasses = () => {
  const [course] = useCourse();
  console.log(course);
  const approvedCourses = course.filter((item) => item.status === "approve");
  const sliceCourse = approvedCourses.slice(0, 6);

  return (
    <div>
      <div className="my-10">
        <TitleSection
          heading={"Highest Enrollment This Session"}
          subHeading={"Most Demandable Classes"}></TitleSection>
      </div>

      <div>
        <h2 className="text-3xl text-center">Highest Enrolled Classes</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 p-4">
          {sliceCourse.map((item, idx) => (
            <ClassCard key={item._id} item={item}></ClassCard>
          ))}
        </div>
      </div>
    </div>
  );
};

export default HighlightClasses;
