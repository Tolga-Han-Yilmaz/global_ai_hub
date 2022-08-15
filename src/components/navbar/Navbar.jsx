import navStyle from "./navbar.module.css";
import logo from "../../assets/globalaihub.png";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";

const Navbar = () => {
  const navigate = useNavigate();
  return (
    <nav>
      <div className={navStyle["container"]}>
        <Link to="/" className={navStyle["link"]}>
          <img src={logo} alt="" />
        </Link>
        <div className={navStyle["course"]}>
          <Link to="/mycourses" className={navStyle["btn"]}>
            My Courses
          </Link>
          <Link to="/courses" className={navStyle["btn"]}>
            courses
          </Link>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
