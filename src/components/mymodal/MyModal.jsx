import { useCourseContext } from "../../context/CourseContextProvider";

const MyModal = ({ kid }) => {
  const { isMyModal, setIsMyModal } = useCourseContext();
  const handleClose = () => {
    setIsMyModal(false);
  };
  return (
    <div className={isMyModal ? "modal modal-open" : "modal"}>
      <div
        data-aos="flip-down"
        className="modal-info"
        dangerouslySetInnerHTML={{
          __html: kid,
        }}
      />

      <button className="btn modal-close" onClick={handleClose}>
        Close
      </button>
    </div>
  );
};

export default MyModal;
