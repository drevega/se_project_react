import { useEffect } from "react";
import "./ModalWithForm.css";
import close from "../../assets/close-icon.png";

function ModalWithForm({
  children,
  buttonText,
  title,
  isOpen,
  onClose,
  onSubmit,
  isButtonDisabled,
  switchButton,
}) {
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
        <form onSubmit={onSubmit} className="modal__form">
          {/* This will now ONLY render the form fields */}
          {children}
          {/* Both buttons now live inside this container */}
          <div className="modal__button-container">
            <button
              type="submit"
              className="modal__submit"
              disabled={isButtonDisabled}
            >
              {buttonText}
            </button>
            {switchButton}
          </div>
        </form>
      </div>
    </div>
  );
}

export default ModalWithForm;
