import { useCourseContext } from "../../context/CourseContextProvider";

const Modal = ({ kid }) => {
  const { isModal, setIsModal } = useCourseContext();
  console.log(isModal);
  const handleClose = () => {
    setIsModal(false);
  };
  return (
    <div className={isModal ? "modal modal-open" : "modal"}>
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

export default Modal;
