import { useCourseContext } from "../../context/CourseContextProvider";
import myStyles from "./mycourses.module.css";
import defImg1 from "../../assets/default-img-1.webp";
import { useEffect, useState } from "react";

const MyCourses = () => {
  const { myCourses, load } = useCourseContext();
  const [myCoursesData, setMyCourseData] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [itemsPerPage] = useState(4);
  const [pageNumberLimit] = useState(3);
  const [maxPageNumberLimit, setMaxPageNumberLimit] = useState(3);
  const [minPageNumberLimit, setMinPageNumberLimit] = useState(0);

  useEffect(() => {
    setMyCourseData(myCourses);
  }, [myCourses]);

  const pages = [];
  for (
    let i = 1;
    i <= Math.ceil(myCoursesData && myCoursesData.length / itemsPerPage);
    i++
  ) {
    pages.push(i);
  }

  const indexOfLastItem = currentPage * itemsPerPage;
  const indexOfFirstItem = indexOfLastItem - itemsPerPage;
  const currentItems = myCoursesData.slice(indexOfFirstItem, indexOfLastItem);

  const handleClick = (e) => {
    setCurrentPage(e.target.id);
  };

  const handleNextBtn = () => {
    setCurrentPage(Number(currentPage) + 1);
    if (currentPage + 1 > maxPageNumberLimit) {
      setMaxPageNumberLimit(maxPageNumberLimit + pageNumberLimit);
      setMinPageNumberLimit(minPageNumberLimit + pageNumberLimit);
    }
  };

  const handlePrevBtn = () => {
    setCurrentPage(Number(currentPage) - 1);
    if ((currentPage - 1) % pageNumberLimit === 0) {
      setMaxPageNumberLimit(maxPageNumberLimit - pageNumberLimit);
      setMinPageNumberLimit(minPageNumberLimit - pageNumberLimit);
    }
  };
  console.log(myCourses);
  return (
    <>
      {!load ? (
        <div className="loading"></div>
      ) : (
        <div className={myStyles["mycourses"]}>
          <h1>My Courses</h1>
          <div className={myStyles["container"]}>
            {currentItems?.map((mycourse) => {
              const { id, title, link, description, card_image, categories } =
                mycourse;
              return (
                <div className={myStyles["my-card"]} key={id}>
                  <img
                    className={myStyles["my-card--img"]}
                    src={card_image ? card_image : defImg1}
                    alt={title}
                  />
                  <div className={myStyles["my-card--info"]}>
                    <h5>{title}</h5>
                    <div
                      data-aos="flip-down"
                      dangerouslySetInnerHTML={{
                        __html: description,
                      }}
                    />
                  </div>
                </div>
              );
            })}
          </div>

          <ul className={myStyles["pagination"]}>
            <button
              onClick={handlePrevBtn}
              disabled={currentPage === pages[0] ? true : false}
            >
              {"<"}
            </button>
            {pages.map((number) => {
              if (
                number < maxPageNumberLimit + 1 &&
                number > minPageNumberLimit
              ) {
                return (
                  <li
                    key={number}
                    id={number}
                    className={
                      Number(currentPage) === Number(number)
                        ? "active-li"
                        : null
                    }
                    style={
                      Number(currentPage) === Number(number)
                        ? { backgroundColor: "black", color: "white" }
                        : null
                    }
                  >
                    {number}
                  </li>
                );
              } else {
                return null;
              }
            })}
            <button
              onClick={handleNextBtn}
              disabled={currentPage === pages[pages.length - 1] ? true : false}
            >
              {">"}
            </button>
          </ul>
        </div>
      )}
    </>
  );
};

export default MyCourses;
