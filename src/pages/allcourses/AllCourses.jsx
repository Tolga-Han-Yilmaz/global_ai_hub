import allStyles from "./allcourses.module.css";
import { useCourseContext } from "../../context/CourseContextProvider";
import AllCoursesLists from "../../components/allcourseslists/AllCoursesLists";

const AllCourses = () => {
  const { load, allCourses } = useCourseContext();

  return (
    <div className={allStyles["allcourses"]}>
      {!load ? (
        <div className="loading"></div>
      ) : (
        <div className={allStyles["allcourse"]}>
          {allCourses?.map((course) => (
            <AllCoursesLists
              key={course.id}
              allCourses={allCourses}
              course={course}
            />
          ))}
        </div>
      )}
    </div>
  );
};

export default AllCourses;
