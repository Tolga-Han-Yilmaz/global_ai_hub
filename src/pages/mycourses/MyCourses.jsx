import { useCourseContext } from "../../context/CourseContextProvider";
import myStyles from "./mycourses.module.css";
import defImg1 from "../../assets/default-img-1.webp";
import { useEffect, useState } from "react";
import { FaChevronLeft, FaChevronRight } from "react-icons/fa";
import MyModal from "../../components/mymodal/MyModal";

const MyCourses = () => {
  const { myCourses, load, isMyModal, setIsMyModal } = useCourseContext();
  const [myCoursesData, setMyCourseData] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [itemsPerPage] = useState(4);
  const [pageNumberLimit] = useState(3);
  const [maxPageNumberLimit, setMaxPageNumberLimit] = useState(3);
  const [minPageNumberLimit, setMinPageNumberLimit] = useState(0);
  const [myModalInfo, setMyModalInfo] = useState([]);

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
  const handleClick = (id) => {
    setMyModalInfo(currentItems.filter((mycourse) => mycourse.id === id));
    setIsMyModal(true);
  };

  return (
    <>
      {!load ? (
        <div className="loading"></div>
      ) : (
        <div className={myStyles["mycourses"]}>
          {/* MyModal */}
          {isMyModal && <MyModal myModalInfo={myModalInfo} />}
          <h1>My Courses</h1>
          <div className={myStyles["container"]}>
            {currentItems?.map((mycourse) => {
              const { id, title, description, card_image } = mycourse;
              return (
                <div
                  className={myStyles["property-card"]}
                  key={id}
                  onClick={() => handleClick(id)}
                >
                  <div className={myStyles["property-image"]}>
                    <img
                      className={myStyles["my-card--img"]}
                      src={card_image ? card_image : defImg1}
                      alt={title}
                    />
                  </div>

                  <div className={myStyles["property-description"]}>
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
              <FaChevronLeft className={myStyles["icon"]} />
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
              <FaChevronRight className={myStyles["icon"]} />
            </button>
          </ul>
        </div>
      )}
    </>
  );
};

export default MyCourses;
