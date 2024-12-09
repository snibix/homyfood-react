import { faArrowLeft } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useLocation } from "react-router-dom";
import logo from "/images/logo/ohmyfood.png";

function Header() {
  const location = useLocation(); // Utilisation de useLocation pour obtenir la route actuelle

  const isRestaurantDetail = location.pathname.includes("/restaurant/");
  return (
    <header
      className={
        isRestaurantDetail ? "page-restaurant__header l-header" : "l-header"
      }
      id={isRestaurantDetail ? "" : "accueil"}
    >
      {isRestaurantDetail ? (
        <a href="/">
          <FontAwesomeIcon
            icon={faArrowLeft}
            className="page-restaurant__icon"
          />
        </a>
      ) : (
        <img className="l-header__image" src={logo} alt="Logo" />
      )}

      {isRestaurantDetail && (
        <div className="page-restaurant__header__content">
          <img
            className="l-header__image page-restaurant__logo"
            src={logo}
            alt="Logo du site"
          />
        </div>
      )}
    </header>
  );
}

export default Header;
