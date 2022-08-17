import sliderStyles from "./allcoursesslider.module.css";
import { useCourseContext } from "../../context/CourseContextProvider";
import { FaChevronLeft, FaChevronRight } from "react-icons/fa";
import { useState } from "react";
import AllModal from "../../components/allmodal/AllModal";
import defImg1 from "../../assets/default-img-1.webp";

const AllCoursesSlider = () => {
  const { allCourses, isModal, setIsModal } = useCourseContext();
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
    <div className={sliderStyles["slider"]}>
      <div className={sliderStyles["slider-div"]}>
        <FaChevronLeft className={sliderStyles["icon"]} onClick={handleLeft} />
        <div
          className={sliderStyles["slider-info"]}
          id={allCourses[index]?.id}
          onClick={() => setIsModal(true)}
        >
          <img
            className={sliderStyles["slider-info-img"]}
            src={defImg1}
            alt=""
          />
          <div className={sliderStyles["slider-info-text"]}>
            <h5>{allCourses[index]?.slug.replace(/-/g, " ")} </h5>
            {isModal && <AllModal kid={allCourses[index]?.content.rendered} />}
          </div>
        </div>
        <FaChevronRight
          className={sliderStyles["icon"]}
          onClick={handleRight}
        />
      </div>
    </div>
  );
};

export default AllCoursesSlider;
