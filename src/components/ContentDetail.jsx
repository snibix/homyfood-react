import { faCircleCheck } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import PropTypes from "prop-types";

function ContentDetail({ title, description, price }) {
  return (
    <div className="page-restaurant__card">
      <div className="card-content">
        <h4 className="menu-title">{title}</h4>
        <p className="menu-description">{description}</p>
      </div>
      <div className="page-restaurant__card__price">
        <p>{price}</p>
      </div>
      <div className="menu-check anim-check">
        <FontAwesomeIcon icon={faCircleCheck} />
      </div>
    </div>
  );
}

ContentDetail.propTypes = {
  title: PropTypes.string,
  description: PropTypes.string,
  price: PropTypes.number,
};

export default ContentDetail;
