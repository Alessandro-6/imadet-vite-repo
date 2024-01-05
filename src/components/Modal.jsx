/* eslint-disable react/prop-types */
function Modal({ setIsOpen, children }) {
  return (
    <section
      className="modal"
      onClick={(e) => {
        if (e.target.classList.contains("modal")) setIsOpen(false);
      }}
    >
      <div className="modal__window">
        <button className="close" onClick={() => setIsOpen(false)}>
          &times;
        </button>
        {children}
      </div>
    </section>
  );
}

export default Modal;
