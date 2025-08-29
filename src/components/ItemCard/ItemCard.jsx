import "./ItemCard.css";
import { useContext } from "react";
import CurrentUserContext from "../../contexts/CurrentUserContext";

//renders each clothing item (name and img)
function ItemCard({ item, onCardClick, onCardLike }) {
  const currentUser = useContext(CurrentUserContext);

  // check if current user has liked item
  // The likes array should be an array of ids
  const isLiked = currentUser
    ? item.likes.some((id) => id === currentUser._id)
    : false;

  // variable which you then set in `className` for the like button
  const itemLikeButtonClassName = `card__like-btn ${
    isLiked ? "card__like-btn_active" : ""
  }`;

  const handleLike = (e) => {
    e.stopPropagation(); // stop modal from opening when clicking like btn
    onCardLike({ id: item._id, isLiked });
  };

  return (
    <div className="card" onClick={() => onCardClick(item)}>
      <img src={item.imageUrl} className="card__image" alt={item.name} />
      <div className="card__header">
        <p className="card__name">{item.name}</p>

        {/* only show like btn if logged in */}
        {currentUser && (
          <button
            type="button"
            className={itemLikeButtonClassName}
            onClick={handleLike}
            aria-label={isLiked ? "Unlike item" : "Like item"}
          ></button>
        )}
      </div>
    </div>
  );
}

export default ItemCard;
