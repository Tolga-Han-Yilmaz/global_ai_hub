import listsStyles from "./allcourseslists.module.css";

import { useEffect, useState } from "react";

const AllCoursesLists = ({ course }) => {
  const [getImg, setGetImg] = useState([]);
  const getDataImg = async () => {
    fetch(course?._links["wp:featuredmedia"][0].href)
      .then((response) => response.json())
      .then((result) => setGetImg(result))
      .catch((error) => console.log("error", error));
  };
  useEffect(() => {
    getDataImg();
  }, []);
  return (
    <>
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
                  href={course.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={listsStyles["card__button"]}
                >
                  Read more
                </a>
              </figcaption>
            </figure>
          </div>
        </div>
      </div>
    </>
  );
};

export default AllCoursesLists;
