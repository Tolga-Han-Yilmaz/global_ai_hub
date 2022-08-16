import navStyles from "./navbar.module.css";
import logo from "../../assets/globalaihub.png";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";

const Navbar = () => {
  const navigate = useNavigate();
  return (
    <nav>
      <div className={navStyles["container"]}>
        <Link to="/" className={navStyles["link"]}>
          <img src={logo} alt="" className={navStyles["nav-img"]} />
        </Link>
        <div className={navStyles["course"]}>
          <Link to="/mycourses" className={navStyles["btn"]}>
            My Courses
          </Link>
          <Link to="/courses" className={navStyles["btn"]}>
            courses
          </Link>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
