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
  const [products, setProducts] = useState([]);

  useEffect(() => {
    fetch("https://dummyjson.com/products")
      .then((res) => res.json())
      .then((data) => setProducts(data.products));
  }, []);

  // product categories
  const c = products.map((product) => product.category);
  const categories = [...new Set(c)];

  const values = { products, categories };
  return (
    <CourseContext.Provider value={values}>{children}</CourseContext.Provider>
  );
};

export default CourseContextProvider;
