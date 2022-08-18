/* eslint-disable jsx-a11y/anchor-is-valid */
import listsStyles from "./allcourseslists.module.css";
import { useEffect, useState } from "react";
import AllModal from "../allmodal/AllModal";
import { useCourseContext } from "../../context/CourseContextProvider";

const AllCoursesLists = ({ course }) => {
  const { isAllModal, setIsAllModal } = useCourseContext();

  const [getImg, setGetImg] = useState([]);
  const getDataImg = async () => {
    fetch(course?._links["wp:featuredmedia"][0].href)
      .then((response) => response.json())
      .then((result) => setGetImg(result))
      .catch((error) => console.log("error", error));
  };
  useEffect(() => {
    getDataImg();

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const handleClick = async (asd) => {
    await setIsAllModal(true);
  };
  return (
    <div className={listsStyles["lists"]}>
      <div className={listsStyles["div-card"]}>
        <div className={listsStyles["card"]}>
          <figure className={listsStyles["card__thumb"]}>
            <img
              src={getImg?.guid && getImg?.guid.rendered}
              referrerPolicy="no-referrer"
              alt=""
              className={listsStyles["card__image"]}
            />
            <figcaption className={listsStyles["card__caption"]}>
              <h5 className={listsStyles["card__title"]}>
                {course.slug.replace(/-/g, " ")}{" "}
              </h5>
              <br />

              <a
                className={listsStyles["card__button"]}
                onClick={() => handleClick(course.id)}
              >
                Read more
              </a>
            </figcaption>
          </figure>
        </div>
      </div>
      {/* AllModal */}
      {isAllModal && <AllModal rendered={course.content.rendered} />}
    </div>
  );
};

export default AllCoursesLists;
