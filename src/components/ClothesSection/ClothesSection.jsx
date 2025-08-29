import "./ClothesSection.css";
import ItemCard from "../ItemCard/ItemCard";
import { useContext } from "react";
import CurrentUserContext from "../../contexts/CurrentUserContext.jsx";

function ClothesSection({ clothingItems, onCardClick, onAddClick, onCardLike}) {

  const currentUser = useContext(CurrentUserContext); // get current user from context

  // filter items to only those owned by the current user
  const userClothingItems = clothingItems.filter(
    (item) => item.owner === currentUser?._id
  );

  return (
    <div className="clothes__section">
      <div className="clothes__section-header">
        <p className="clothes__title">Your items</p>
        <button className="clothes__add-button" onClick={onAddClick}>
          + Add new
        </button>
      </div>
      <ul className="clothes__section__items">
        {/* map over filtered list */}
        {userClothingItems.map((item) => {
          return (
            <ItemCard
              key={item._id}
              item={item}
              onCardClick={onCardClick}
              onCardLike={onCardLike}
            />
          );
        })}
      </ul>
    </div>
  );
}

export default ClothesSection;
