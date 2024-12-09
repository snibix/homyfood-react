// import PropTypes from 'prop-types'
import {
  faListUl,
  faMobileScreenButton,
  faStore,
} from "@fortawesome/free-solid-svg-icons";
import FonctionningCard from "./FonctionningCard";
function Fonctionning() {
  return (
    <section className="functionning">
      <div className="functionning__container">
        <h2 className="functionning__title">Fonctionnement</h2>
        <div className="functionning__cards">
          <FonctionningCard
            number={1}
            content=" Choisissez un restaurant"
            icon={faMobileScreenButton}
          />
          <FonctionningCard
            number={2}
            content="Composez votre menu"
            icon={faListUl}
          />
          <FonctionningCard
            number={3}
            content="Dégustez au restaurant"
            icon={faStore}
          />
        </div>
      </div>
    </section>
  );
}

// Fonctionning.propTypes = {}

export default Fonctionning;
