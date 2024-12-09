import { faLocationDot } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Fonctionning from "../components/Fonctionning";
import Reservez from "../components/Reservez";
import Restaurants from "../components/Restaurants";

function Accueil() {
  return (
    <main className="container">
      <div className="search">
        <i className="fa-solid fa-location-dot"></i>
        <FontAwesomeIcon icon={faLocationDot} />
        <input className="search__location" value="Paris, Belleville" />
      </div>
      <Reservez
        title="Réservez le menu qui vous convient"
        content=" Découvrez des restaurants d'exception, sélectionnés par nos soins"
        button="Explorer nos restaurants"
      />
      <Fonctionning />
      <Restaurants />
    </main>
  );
}

export default Accueil;
