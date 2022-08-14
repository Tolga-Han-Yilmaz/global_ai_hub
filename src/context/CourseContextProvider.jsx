import { createContext, useContext } from "react";
import { useState, useEffect } from "react";

//? 1- Defining
export const CourseContext = createContext();

//? 3-Consume function (Custom Hook)
export const useCourseContext = () => {
  return useContext(CourseContext);
};

//? 2- Provider Component
const CourseContextProvider = ({ children }) => {
  const [allCourses, setAllCourses] = useState([]);
  const [myCourses, setMyCourses] = useState([]);

  useEffect(() => {
    fetch(
      "https://40060bec-d8e7-4ad2-96c2-63b9fdb4ef24.mock.pstmn.io/wp-json/ldlms/v2/sfwd-courses"
    )
      .then((response) => response.json())
      .then((result) => setAllCourses(result))
      .catch((error) => console.log("error", error));
  }, []);

  useEffect(() => {
    fetch(
      "https://40060bec-d8e7-4ad2-96c2-63b9fdb4ef24.mock.pstmn.io/wp-json/ldlms/v2/my_courses"
    )
      .then((response) => response.json())
      .then((result) => setMyCourses(result))
      .catch((error) => console.log("error", error));
  }, []);

  const values = { allCourses, myCourses };
  return (
    <CourseContext.Provider value={values}>{children}</CourseContext.Provider>
  );
};

export default CourseContextProvider;
