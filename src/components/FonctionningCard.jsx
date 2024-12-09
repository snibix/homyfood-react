import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import PropTypes from "prop-types";

function FonctionningCard({ number, content, icon }) {
  return (
    <div className="functionning__card">
      <span className="functionning__number">{number}</span>
      <FontAwesomeIcon icon={icon} className="functionning__icon" />
      <span className="functionning__choice">{content}</span>
    </div>
  );
}

FonctionningCard.propTypes = {
  number: PropTypes.number,
  content: PropTypes.string,
  icon: PropTypes.object,
};

export default FonctionningCard;
