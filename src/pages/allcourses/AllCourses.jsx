import allStyles from "./allcourses.module.css";
import { useCourseContext } from "../../context/CourseContextProvider";

import AllCoursesSlider from "../../components/allcoursesslider/AllCoursesSlider";
import AllCoursesLists from "../../components/allcourseslists/AllCoursesLists";

const AllCourses = () => {
  const { load, allCourses } = useCourseContext();

  return (
    <>
      {!load ? (
        <div className="loading"></div>
      ) : (
        <div className={allStyles["allcourse"]}>
          <AllCoursesSlider />

          {allCourses?.map((course) => (
            <AllCoursesLists key={course.id} course={course} />
          ))}
        </div>
      )}
    </>
  );
};

export default AllCourses;
