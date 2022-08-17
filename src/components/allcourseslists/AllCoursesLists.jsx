import listsStyles from "./allcourseslists.module.css";

import { useEffect, useState } from "react";
import AllModal from "../allmodal/AllModal";

const AllCoursesLists = ({ idd, course, isAllModal, setIsAllModal }) => {
  const [getImg, setGetImg] = useState([]);
  const [allModalInfo, setAllModalInfo] = useState([]);
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
  const handleClick = (id) => {
    // console.log(course.filter((single) => single.id === id));
    setAllModalInfo(true);
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
                // href={course.link}
                // target="_blank"
                rel="noopener noreferrer"
                className={listsStyles["card__button"]}
                onClick={() => handleClick(course.id)}
              >
                Read more
              </a>
              {isAllModal && <AllModal course={course} />}
            </figcaption>
          </figure>
        </div>
      </div>
    </div>
  );
};

export default AllCoursesLists;
