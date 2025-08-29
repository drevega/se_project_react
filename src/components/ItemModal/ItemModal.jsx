import { useEffect, useContext } from "react";
import "./ItemModal.css";
import close from "../../assets/close-icon.png";
import CurrentUserContext from "../../contexts/CurrentUserContext.jsx";

function ItemModal({ isOpen, onClose, card, onDeleteRequest }) {
  const currentUser = useContext(CurrentUserContext); // get the current user from context

  // check if current user is the owner of the card
  const isOwn = card.owner === currentUser?._id;

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
        </button>
        <img
          src={card.link || card.imageUrl}
          alt={card.name}
          className="modal__image"
        />
        <div className="modal__details">
          <div className="modal__details-row">
          <h2 className="modal__caption">{card.name}</h2>
          {/* conditionally render the delete button */}
          {isOwn && (
            <button
              className="modal__delete-btn"
              onClick={() => onDeleteRequest(card)}
            >
              Delete Item
            </button>
          )}
        </div>
          <p className="modal__weather">Weather: {card.weather}</p>
</div>
      </div>
    </div>
  );
}

export default ItemModal;
