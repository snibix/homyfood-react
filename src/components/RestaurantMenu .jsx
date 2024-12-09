import PropTypes from "prop-types";

import ContentDetail from "./ContentDetail";

function RestaurantMenu({ category }) {
  return (
    <div className="page-restaurant__starter anim-starter">
      <h3 className="page-restaurant__starter__title">{category.title}</h3>
      {category.items.map((item, index) => (
        <ContentDetail
          key={index} // Clé unique pour chaque élément
          title={item.name}
          description={item.description}
          price={item.price}
        />
      ))}
    </div>
  );
}

RestaurantMenu.propTypes = {
  category: PropTypes.shape({
    title: PropTypes.string,
    items: PropTypes.arrayOf(
      PropTypes.shape({
        name: PropTypes.string.isRequired,
        description: PropTypes.string.isRequired,
        price: PropTypes.number.isRequired,
      })
    ),
  }),
};

export default RestaurantMenu;
