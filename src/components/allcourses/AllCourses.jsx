import allStyles from "./allcourses.module.css";
import { useCourseContext } from "../../context/CourseContextProvider";
import { FaChevronLeft, FaChevronRight } from "react-icons/fa";
import { useState } from "react";

const AllCourses = () => {
  const { allCourses } = useCourseContext();
  console.log(allCourses);
  const [index, setIndex] = useState(0);
  const checkNumber = (number) => {
    if (number > allCourses.length - 1) {
      return 0;
    }
    if (number < 0) {
      return allCourses.length - 1;
    }
    return number;
  };
  function handleLeft() {
    return setIndex((prevIndex) => {
      let number = prevIndex - 1;
      return checkNumber(number);
    });
  }
  function handleRight() {
    return setIndex((prevIndex) => {
      let number = prevIndex + 1;
      return checkNumber(number);
    });
  }

  return (
    <div className={allStyles["allcourse"]}>
      <div className={allStyles["container"]}>
        <FaChevronLeft className={allStyles["icon"]} onClick={handleLeft} />
        <div className={allStyles["allcourse-info"]}>
          {/* <img
            className={allStyles["info-img"]}
            src={allCourses[index]?.card_image}
            alt={allCourses[index]?.title.rendered}
          /> */}
          <img
            className={allStyles["info-img"]}
            src="https://cdn.pixabay.com/photo/2022/08/07/16/03/bee-7370876_960_720.jpg"
            alt=""
          />
          <div className={allStyles["info-text"]}>
            <h5>{allCourses[index]?.slug.replace(/-/g, " ")} </h5>
            {/* <p>{allCourses[index]?.content.rendered}</p> */}

            <button className={allStyles["btn"]}></button>
          </div>
        </div>
        <FaChevronRight className={allStyles["icon"]} onClick={handleRight} />
      </div>
      <div className={allStyles["container"]}>
        {allCourses?.map((course) => {
          return (
            <div className="course-lists">
              <img
                src="https://cdn.pixabay.com/photo/2022/08/07/16/03/bee-7370876_960_720.jpg"
                alt=""
              />
              <h5>{course.slug.replace(/-/g, " ")} </h5>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default AllCourses;
