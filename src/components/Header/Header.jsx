import "./Header.css";
import logo from "../../assets/logo.svg";
import ToggleSwitch from "../ToggleSwitch/ToggleSwitch";
import { Link } from "react-router-dom";
import { useContext } from "react";
import CurrentUserContext from "../../contexts/CurrentUserContext.jsx";

//header portion
function Header({
  handleAddClick,
  weatherData,
  isLoggedIn,
  onRegisterClick,
  onLoginClick,
}) {
  const currentDate = new Date().toLocaleString("default", {
    month: "long",
    day: "numeric",
  });

  const currentUser = useContext(CurrentUserContext); // get current user from context

  return (
    <header className="header">
      <Link to="/">
        <img className="header__logo" src={logo} alt="wtwr logo" />
      </Link>
      <p className="header__date-location">
        {currentDate}, {weatherData.city}
      </p>
      <ToggleSwitch />
      {/* conditional rendering based on isLoggedIn */}
      {isLoggedIn ? (
        <>
          <button
            onClick={handleAddClick}
            type="button"
            className="header__clothes-btn"
          >
            + Add clothes
          </button>
          <Link to="/profile" className="header__link">
            <div className="header__user-container">
              <p className="header__username">{currentUser?.name}</p>
              {/* Check for avatar, if not, show placeholder */}
              {currentUser?.avatar ? (
                <img
                  className="header__avatar"
                  src={currentUser.avatar}
                  alt="User avatar"
                />
              ) : (
                <div className="header__avatar-placeholder">
                  {currentUser?.name[0].toUpperCase()}
                </div>
              )}
            </div>
          </Link>
        </>
      ) : (
        // show this if logged out
        <>
          <button
            onClick={onRegisterClick}
            type="button"
            className="header__auth-btn"
          >
            Sign Up
          </button>
          <button
            onClick={onLoginClick}
            type="button"
            className="header__auth-btn"
          >
            Log In
          </button>
        </>
      )}
    </header>
  );
}

export default Header;
