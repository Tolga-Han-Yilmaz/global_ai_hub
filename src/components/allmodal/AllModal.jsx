import { useCourseContext } from "../../context/CourseContextProvider";

const AllModal = ({ rendered }) => {
  const { isAllModal, setIsAllModal } = useCourseContext();

  const handleClose = () => {
    setIsAllModal(false);
  };
  return (
    <div className={isAllModal ? "modal modal-open" : "modal"}>
      <div className="modal-info">
        <p
          dangerouslySetInnerHTML={{
            __html: rendered,
          }}
        />
      </div>
      <button className="btn modal-close" onClick={handleClose}>
        Close
      </button>
    </div>
  );
};

export default AllModal;
