import { useEffect } from "react";
import "./ItemModal.css";
import close from "../../assets/close-icon.png";

function ItemModal({ isOpen, onClose, card, onDeleteRequest }) {

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
      <div className="modal__content modal__content_type_image">
        <button type="button" onClick={onClose} className="modal__close">
          <img src={close} alt="close icon" />
          <div className="modal__preview"></div>
        </button>
        <img src={card.link || card.imageUrl} alt={card.name} className="modal__image" />
        <div className="modal__details">
          <h2 className="modal__caption">{card.name}</h2>
          <p className="modal__weather">Weather: {card.weather}</p>
          <button
            className="modal__delete-button"
            onClick={() => onDeleteRequest(card)} 
          >
            Delete Item
          </button>
        </div>
      </div>
    </div>
  );
}

export default ItemModal;
