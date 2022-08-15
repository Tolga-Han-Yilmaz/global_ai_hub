import allStyles from "./allcourses.module.css";
import { useCourseContext } from "../../context/CourseContextProvider";
import { FaChevronLeft, FaChevronRight } from "react-icons/fa";
import { useState } from "react";
import Modal from "../modal/Modal";

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

  const handleModal = (id) => {};
  console.log(allCourses[index]?.id);
  return (
    <div className={allStyles["allcourse"]}>
      <div className={allStyles["container"]}>
        <FaChevronLeft className={allStyles["icon"]} onClick={handleLeft} />
        <div className={allStyles["allcourse-info"]} id={allCourses[index]?.id}>
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

            <Modal
              kid={allCourses[index]?.content.rendered}
              onClick={() => handleModal(allCourses[index]?.id)}
            />
            <button className={allStyles["btn"]}></button>
          </div>
        </div>
        <FaChevronRight className={allStyles["icon"]} onClick={handleRight} />
      </div>
      <div className={allStyles["container"]}>
        {allCourses?.map((course) => {
          return (
            <div className={allStyles["div-card"]}>
              <div className={allStyles["card"]}>
                <figure className={allStyles["card__thumb"]}>
                  <img
                    src="https://cdn.pixabay.com/photo/2022/08/07/16/03/bee-7370876_960_720.jpg"
                    alt=""
                    className={allStyles["card__image"]}
                  />
                  <figcaption className={allStyles["card__caption"]}>
                    <h5 className={allStyles["card__title"]}>
                      {course.slug.replace(/-/g, " ")}{" "}
                    </h5>
                    <p className={allStyles["card__snippet"]}>
                      {course.content.rendered.slice(0, 50)}
                    </p>
                    <a
                      href={course.link}
                      target="_blank"
                      className={allStyles["card__button"]}
                    >
                      Read more
                    </a>
                  </figcaption>
                </figure>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default AllCourses;
