import restaurantData from "../data/restaurantsData";
import RestaurantCard from "./RestaurantCard";
function Restaurants() {
  console.log("data:", restaurantData[0].img);

  return (
    <section className="restaurants">
      <h2 className="restaurants__title">Restaurants</h2>
      <div className="restaurants__cards">
        {restaurantData.map((restaurant) => (
          <RestaurantCard
            key={restaurant.id} // Clé unique pour chaque carte
            id={restaurant.id}
            img={restaurant.img}
            title={restaurant.title}
            badge={restaurant.badge}
            location={restaurant.location}
          />
        ))}
      </div>
    </section>
  );
}

export default Restaurants;
