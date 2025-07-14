import "./SideBar.css";
import avatar from "../../assets/avatar.svg";

function SideBar() {
  return (
    <div className="sidebar">
      <img className="sidebar__avatar" src={avatar} alt="avatar image" />
      <p className="sidebar__username">Drea Vega</p>
    </div>
  );
}

export default SideBar;
