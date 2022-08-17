/* eslint-disable react/jsx-no-target-blank */
import { useCourseContext } from "../../context/CourseContextProvider";
import myStyles from "./mymodal.module.css";

const MyModal = ({ kid, myModalInfo }) => {
  const { isMyModal, setIsMyModal } = useCourseContext();
  const handleClose = () => {
    setIsMyModal(false);
  };
  console.log(myModalInfo);
  const { title, description, tags, link } = myModalInfo[0];
  console.log(title, description);
  return (
    <div className={isMyModal ? "modal modal-open" : "modal"}>
      <div className="modal-info">
        <h3>{title}</h3>
        <p
          dangerouslySetInnerHTML={{
            __html: description,
          }}
        />
        <div className={myStyles["tag"]}>
          <a href={link} target="_blank">
            {tags[0]?.name ? tags[0].name : "AI Hub"}
          </a>
        </div>
      </div>

      <button className="btn modal-close" onClick={handleClose}>
        Close
      </button>
    </div>
  );
};
export default MyModal;
