import navStyle from "./navbar.module.css";
import logo from "../../assets/globalaihub.png";

const Navbar = () => {
  return (
    <nav>
      <div className={navStyle["container"]}>
        <img src={logo} alt="" />
        <a
          href="https://twitter.com/Dave_Conner"
          className={navStyle["btn btn-2"]}
        >
          Hover
        </a>
      </div>
    </nav>
  );
};

export default Navbar;
