import { faArrowLeft } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useLocation } from "react-router-dom";

function Header() {
  const location = useLocation();

  const isRestaurantDetail = location.pathname.includes("/restaurant/");
  return (
    <header
      className={
        isRestaurantDetail ? "page-restaurant__header l-header" : "l-header"
      }
      id={isRestaurantDetail ? "" : "accueil"}
    >
      {isRestaurantDetail ? (
        <a href="homyfood-react/">
          <FontAwesomeIcon
            icon={faArrowLeft}
            className="page-restaurant__icon"
          />
        </a>
      ) : (
        <img
          className="l-header__image"
          src="./images/logo/ohmyfood.png"
          alt="Logo"
        />
      )}

      {isRestaurantDetail && (
        <div className="page-restaurant__header__content">
          <img
            className="l-header__image page-restaurant__logo"
            src="./images/logo/ohmyfood.png"
            alt="Logo du site"
          />
        </div>
      )}
    </header>
  );
}

export default Header;
