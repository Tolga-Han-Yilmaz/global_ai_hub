import build from "../../assets/built.jpg";
import homeStyles from "./home.module.css";
const Home = () => {
  return (
    <div className={homeStyles["home"]}>
      <div className={homeStyles["container"]}>
        <div className={homeStyles["home-info"]}>
          <h2>Build Your Future</h2>
          <p>
            Join the leading community for AI experts and aspiring talents
            around the world Get exclusive access to world-class information,
            education, career advice, and job opportunities Become an active
            shaper of your own career as well as our joint digital future
          </p>
        </div>
        <img src={build} alt="" className={homeStyles["homeImg"]} />
      </div>
    </div>
  );
};

export default Home;
