import allStyles from "./allcourses.module.css";
import { useCourseContext } from "../../context/CourseContextProvider";

import AllCoursesSlider from "../../components/allcoursesslider/AllCoursesSlider";
import AllCoursesLists from "../../components/allcourseslists/AllCoursesLists";
import { useEffect, useState } from "react";

const AllCourses = () => {
  const { load, allCourses } = useCourseContext();
  const [getImg, setGetImg] = useState([]);
  const data = [];

  useEffect(() => {
    allCourses?.map(async (course) => {
      return await fetch(course._links["wp:featuredmedia"][0].href)
        .then((response) => response.json())
        .then((result) => data.push(result))
        .catch((error) => console.log("error", error));
    });
    setGetImg(data);
  }, []);
  return (
    <>
      {!load ? (
        <div className="loading"></div>
      ) : (
        <div className={allStyles["allcourse"]}>
          <AllCoursesSlider allCourses={allCourses} getImg={getImg} />

          {allCourses?.map((course) => (
            <AllCoursesLists key={course.id} course={course} />
          ))}
        </div>
      )}
    </>
  );
};

export default AllCourses;
