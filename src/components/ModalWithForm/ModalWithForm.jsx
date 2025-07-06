import { useEffect } from "react";
import "./ModalWithForm.css";
import close from "../../assets/close-icon.png";

function ModalWithForm({ children, buttonText, title, activeModal, onClose }) {
  const isOpen = activeModal === "add-garment";

  useEffect(() => {
    const handleEsc = (e) => e.key === "Escape" && onClose();
    if (isOpen) document.addEventListener("keydown", handleEsc);
    return () => document.removeEventListener("keydown", handleEsc);
  }, [isOpen, onClose]);

  return (
    <div
      className={`modal ${isOpen ? "modal_opened" : ""}`}
      onClick={(e) => e.target === e.currentTarget && onClose()}
    >
      <div className="modal__content">
        <h2 className="modal__title">{title}</h2>
        <button onClick={onClose} className="modal__close">
          <img src={close} alt="close icon" />
        </button>
        <form className="modal__form" noValidate>
          {children}
          <button type="submit" className="modal__submit">{buttonText}</button>
        </form>
      </div>
    </div>
  );
}

export default ModalWithForm;
