import { useState } from "react";
import modalStyles from "./modal.module.css";

const Modal = ({ kid }) => {
  const [show, setShow] = useState(false);
  return (
    <>
      <button className={"btn"} onClick={() => setShow(true)}>
        info
      </button>
      {show && (
        <div className={modalStyles["container"]}>
          {
            <>
              <div
                data-aos="flip-down"
                className={modalStyles.content}
                dangerouslySetInnerHTML={{
                  __html: kid,
                }}
              />

              <button
                // className={modalStyles["btn"]}
                className="btn"
                onClick={() => setShow(false)}
              >
                Close
              </button>
            </>
          }
        </div>
      )}
    </>
  );
};

export default Modal;
