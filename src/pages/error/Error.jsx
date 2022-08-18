import error from "../../assets/404.jpeg";
import { useNavigate } from "react-router-dom";
import errorStyles from "./error.module.css";

const Error = () => {
  const navigate = useNavigate();
  return (
    <div className={errorStyles["error"]}>
      <img className="w-75" src={error} alt="" />
      <div>
        <button
          style={{ width: "100px" }}
          onClick={() => navigate("/")}
          className="btn"
        >
          Home
        </button>
      </div>
    </div>
  );
};

export default Error;
