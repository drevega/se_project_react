import { useEffect } from "react";
import "./ConfirmDeleteModal.css";
import close from "../../assets/close-icon.png";

function ConfirmDeleteModal({ isOpen, onClose, onConfirm }) {
      useEffect(() => {
    const handleEsc = (e) => {
      if (e.key === "Escape") onClose();
    };
    if (isOpen) document.addEventListener("keydown", handleEsc);
    return () => document.removeEventListener("keydown", handleEsc);
  }, [isOpen, onClose]);

  return (
    <div
      className={`modal modal_type_confirm ${isOpen ? "modal_opened" : ""}`}
      onClick={(e) => e.target === e.currentTarget && onClose()}
    >
      <div className="modal__content">
        <button type="button" onClick={onClose} className="modal__close">
          <img src={close} alt="close icon" />
        </button>
        <h2 className="modal__caption">
          Are you sure you want to delete this item?<br /> This action is
          irreversible.
        </h2>
        <div className="modal__actions">
          <button type="submit" className="modal__confirm" onClick={onConfirm}>
            Yes, delete item
          </button>
          <button className="modal__cancel" onClick={onClose}>
            Cancel
          </button>
        </div>
      </div>
    </div>
  );
}

export default ConfirmDeleteModal;
