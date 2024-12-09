import { faHeart } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useParams } from "react-router-dom";
import RestaurantMenu from "../components/RestaurantMenu ";
import platsData from "../data/platsData";
import NotFound from "./NotFound";

function RestaurantDetail() {
  const { id } = useParams(); // Récupérer l'ID depuis l'URL
  const restaurant = platsData.find((resto) => resto.id === parseInt(id));

  if (!restaurant) {
    return <NotFound />;
  }
  // const entree=restaurant.cat['Entrées'];
  const entreeCategory = restaurant.categories.find(
    (category) => category.title === "Entrées"
  );
  const platCategory = restaurant.categories.find(
    (category) => category.title === "Plats"
  );
  const dessertCategory = restaurant.categories.find(
    (category) => category.title === "Desserts"
  );

  return (
    <main className="page-restaurant">
      <img
        className="page-restaurant__image"
        src={restaurant.image}
        alt={`photos de ${restaurant.title}`}
      />
      <section className="page-restaurant__content">
        <div className="page-restaurant__content__header">
          <h2 className="page-restaurant__title title">{restaurant.title}</h2>
          <div className="favorite">
            <FontAwesomeIcon icon={faHeart} />
          </div>
        </div>
        {entreeCategory && <RestaurantMenu category={entreeCategory} />}
        {platCategory && <RestaurantMenu category={platCategory} />}
        {dessertCategory && <RestaurantMenu category={dessertCategory} />}
        <button type="submit" className="button page-restaurant__button">
          Commandez
        </button>
      </section>
    </main>
  );
}

export default RestaurantDetail;
