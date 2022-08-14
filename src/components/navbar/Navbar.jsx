import navStyle from "./navbar.module.css";
import logo from "../../assets/globalaihub.png";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <nav>
      <div className={navStyle["container"]}>
        <img src={logo} alt="" />
        <div className={navStyle["course"]}>
          <Link to="/" className={navStyle["btn"]}>
            My Courses
          </Link>
          <Link to="/" className={navStyle["btn"]}>
            courses
          </Link>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
