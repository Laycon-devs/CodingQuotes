import style from "./Modal.module.css";

function Modal({ children, closeModalHandler }) {
  return (
    <>
      <div className={style.backdrop} onClick={closeModalHandler} />
      <dialog open className={style.modal}>
        {children}
      </dialog>
    </>
  );
}

export default Modal;
