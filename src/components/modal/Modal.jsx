import modalStyles from "./modal.module.css";

const Modal = ({ kid }) => {
  console.log(kid);
  return (
    <div className={modalStyles["modal"]}>
      <label htmlFor="modal-checkbox">here</label>
      <input
        type="checkbox"
        className={modalStyles["modal-checkbox"]}
        id="modal-checkbox"
      />
      <div className={modalStyles["modal-window"]}>
        <div className={modalStyles["modal-content"]}>
          <label
            htmlFor="modal-checkbox"
            className={modalStyles["modal-close-icon"]}
          >
            <svg
              aria-hidden="true"
              focusable="false"
              data-prefix="fas"
              data-icon="times"
              class="svg-inline--fa fa-times fa-w-11"
              role="img"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 352 512"
            >
              <path
                fill="currentColor"
                d="M242.72 256l100.07-100.07c12.28-12.28 12.28-32.19 0-44.48l-22.24-22.24c-12.28-12.28-32.19-12.28-44.48 0L176 189.28 75.93 89.21c-12.28-12.28-32.19-12.28-44.48 0L9.21 111.45c-12.28 12.28-12.28 32.19 0 44.48L109.28 256 9.21 356.07c-12.28 12.28-12.28 32.19 0 44.48l22.24 22.24c12.28 12.28 32.2 12.28 44.48 0L176 322.72l100.07 100.07c12.28 12.28 32.2 12.28 44.48 0l22.24-22.24c12.28-12.28 12.28-32.19 0-44.48L242.72 256z"
              ></path>
            </svg>
          </label>
          <input
            type="checkbox"
            className={modalStyles["modal-checkbox"]}
            id="modal-checkbox"
          />
          <img src="" alt="" />
          {/* <div>{kid.slice(0, 200)}</div> */}
        </div>
      </div>
    </div>
  );
};

export default Modal;
