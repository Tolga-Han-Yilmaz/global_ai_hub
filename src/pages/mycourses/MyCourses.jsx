import { useCourseContext } from "../../context/CourseContextProvider";
import myStyles from "./mycourses.module.css";
import defImg1 from "../../assets/default-img-1.webp";
import { useEffect, useState } from "react";

const MyCourses = () => {
  const { myCourses, load } = useCourseContext();
  const [items, setItems] = useState([]);
  useEffect(() => {
    setItems(myCourses?.slice(0, 4));
  }, []);

  const handlePage = (e) => {
    let number = Number(e.target.value);
    setItems(myCourses?.slice(4 * number - 4, 4 * number));
  };
  console.log(items);

  return (
    <>
      {!load ? (
        <div className="loading"></div>
      ) : (
        <div className={myStyles["mycourses"]}>
          <h1>My Courses</h1>
          <div className={myStyles["container"]}>
            {items?.map((mycourse) => {
              const { id, title, link, description, card_image, categories } =
                mycourse;
              return (
                <div className={myStyles["my-card"]} key={id}>
                  <img
                    className={myStyles["my-card--img"]}
                    src={defImg1}
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

          <div className={myStyles["div-btn"]} onClick={(e) => handlePage(e)}>
            <button value="1" className="btn">
              1
            </button>
            <button value="2" className="btn">
              2
            </button>
            <button value="3" className="btn">
              3
            </button>
          </div>
        </div>
      )}
    </>
  );
};

export default MyCourses;
