import PropTypes from "prop-types";

function Reservez({ title, content, button }) {
  return (
    <section className="booking">
      <h1 className="booking__title">{title}</h1>
      <p className="booking__description">{content}</p>
      <button className="button">{button}</button>
    </section>
  );
}

Reservez.propTypes = {
  title: PropTypes.string,
  content: PropTypes.string,
  button: PropTypes.string,
};

export default Reservez;
