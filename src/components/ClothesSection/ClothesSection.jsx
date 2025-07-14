import "./ClothesSection.css";
import SideBar from "../SideBar/SideBar"; //
import ItemCard from "../ItemCard/ItemCard";

function ClothesSection({ clothingItems, onCardClick, onAddClick, onDelete }) {
  return (
    <div className="clothes__section">
      <div className="clothes__section-header">
        <p className="clothes__title">Your items</p>
        <button className="clothes__add-button" onClick={onAddClick}>
          + Add new
        </button>
      </div>
      <ul className="clothes__section__items">
        {clothingItems.map((item) => {
          return (
            <ItemCard
              key={item._id}
              item={item}
              onCardClick={onCardClick}
              onDelete={onDelete}
            />
          );
        })}
      </ul>
    </div>
  );
}

export default ClothesSection;
