import { useCourseContext } from "../../context/CourseContextProvider";
import myStyles from "./mycourses.module.css";
import defImg1 from "../../assets/default-img-1.webp";
import { useEffect, useState } from "react";

const MyCourses = () => {
  const { myCourses } = useCourseContext();
  const [items, setItems] = useState([]);
  useEffect(() => {
    setItems(myCourses.slice(0, 4));
  }, []);

  const handlePage = (e) => {
    let number = Number(e.target.value);
    setItems(myCourses?.slice(4 * number - 4, 4 * number));
  };
  console.log(items);

  return (
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
                src={card_image ? card_image : defImg1}
                alt={title}
              />
              <div className={myStyles["my-card--info"]}>
                <h5>{title}</h5>
                <p>{description}</p>
              </div>
            </div>
          );
        })}
        <div className={myStyles["div-btn"]} onClick={(e) => handlePage(e)}>
          <button value="1">1</button>
          <button value="2">2</button>
          <button value="3">3</button>
        </div>
      </div>
    </div>
  );
};

export default MyCourses;
