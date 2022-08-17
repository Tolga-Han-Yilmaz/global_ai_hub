import { useCourseContext } from "../../context/CourseContextProvider";

const AllModal = ({ kid }) => {
  const { isAllModal, setIsAllModal } = useCourseContext();
  const handleClose = () => {
    setIsAllModal(false);
  };
  return (
    <div className={isAllModal ? "modal modal-open" : "modal"}>
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

export default AllModal;
