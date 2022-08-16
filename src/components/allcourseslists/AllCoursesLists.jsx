import listsStyles from "./allcourseslists.module.css";
import defImg1 from "../../assets/default-img-1.webp";
import { useCourseContext } from "../../context/CourseContextProvider";

const AllCoursesLists = () => {
  const { allCourses } = useCourseContext();

  return (
    <div className={listsStyles["lists"]}>
      {allCourses?.map((course) => {
        return (
          <div className={listsStyles["div-card"]}>
            <div className={listsStyles["card"]}>
              <figure className={listsStyles["card__thumb"]}>
                <img
                  // src={allLink[1]?.guid.rendered}
                  src={defImg1}
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
        );
      })}
    </div>
  );
};

export default AllCoursesLists;
