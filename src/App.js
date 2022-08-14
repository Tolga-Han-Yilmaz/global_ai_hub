import AppRouter from "./router/AppRouter";
import CourseContextProvider from "./context/CourseContextProvider";

function App() {
  return (
    <CourseContextProvider>
      <AppRouter />
    </CourseContextProvider>
  );
}

export default App;
