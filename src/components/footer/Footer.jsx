import footerStyles from "./footer.module.css";
import {
  FaFacebookF,
  FaTwitter,
  FaYoutube,
  FaPinterestP,
} from "react-icons/fa";
const Footer = () => {
  return (
    <footer>
      <div className={footerStyles["container"]}>
        <div className={footerStyles["footer-contact"]}>
          <p>About Us</p>
          <p>Hub Points</p>
          <p>Privacy Policy</p>
          <p>Terms and Conditions</p>
          <p>Help Center</p>
          <p>Impressum</p>
          <p>Contact</p>
          <p>Corelation</p>
        </div>

        <div className={footerStyles["footer-icon"]}>
          <FaFacebookF className={footerStyles["icon"]} />
          <FaTwitter className={footerStyles["icon"]} />
          <FaYoutube className={footerStyles["icon"]} />
          <FaPinterestP className={footerStyles["icon"]} />
        </div>
      </div>
    </footer>
  );
};

export default Footer;
