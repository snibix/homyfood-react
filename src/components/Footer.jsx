function Footer() {
  return (
    <footer className="l-footer">
      <h2 className="title l-footer__title">
        <a href="#accueil">ohmyfood</a>
      </h2>
      <ul className="l-footer__navbar">
        <li>
          <a href="#">
            <i className="fa-solid fa-utensils l-footer__icon"></i>Proposer un
            restaurant
          </a>
        </li>
        <li>
          <a href="#">
            <i className="fa-solid fa-handshake-angle l-footer__icon"></i>
            Devenir partenaire
          </a>
        </li>
        <li>
          <a href="#">Mentions légales</a>
        </li>
        <li>
          <a href="mailto:homyfood@gmail.com">Contact</a>
        </li>
      </ul>
    </footer>
  );
}

export default Footer;
