import allStyles from "./allcourses.mmodule.css";
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
    <div className="allcourse">
      <div className="container">
        <FaChevronLeft className="icon col" onClick={handleLeft} />
        <div className="productinfo-img col">
          {/* <img
            src={allCourses[index]?.thumbnail}
            alt={allCourses[index]?.title}
          /> */}
          <div>
            <h3>{allCourses[index]?.title.rendered}</h3>
            <p>{allCourses[index]?.guid.rendered}</p>
            <button>SHOP NOW</button>
          </div>
        </div>
        <FaChevronRight className="col icon" onClick={handleRight} />
      </div>
    </div>
  );
};

export default AllCourses;
