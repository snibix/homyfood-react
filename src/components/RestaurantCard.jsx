import {
  faHeart as faHeartRegular,
  faHeart as faHeartSolid,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import PropTypes from "prop-types";
import { useState } from "react";
import { Link } from "react-router-dom";

function RestaurantCard({ id, img, badge, title, location }) {
  const [liked, setLiked] = useState(false); // État pour gérer le like

  const toggleLike = () => {
    setLiked(!liked); // Inverse l'état du like
  };
  return (
    <Link className="restaurants__card" to={`/restaurant/${id}`}>
      <article className="restaurants__article">
        <img src={img} alt={title} className="restaurants__img" />
        {badge && <div className="restaurants__badge">{badge}</div>}
        <div className="restaurants__content">
          <div>
            <h3 className="restaurants__content__title">{title}</h3>

            <p className="restaurants__location">{location}</p>
          </div>
          <div>
            <FontAwesomeIcon
              icon={liked ? faHeartSolid : faHeartRegular} // Change l'icône en fonction du like
              className={`restaurants__icon ${liked ? "liked" : ""}`} // Ajoute la classe "liked" si aimé
              onClick={toggleLike} // Gère le clic pour changer l'état
            />
          </div>
        </div>
      </article>
    </Link>
  );
}

RestaurantCard.propTypes = {
  img: PropTypes.string,
  badge: PropTypes.string,
  title: PropTypes.string,
  location: PropTypes.string,
  id: PropTypes.number,
};

export default RestaurantCard;
