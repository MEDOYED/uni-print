import { Link } from "react-router-dom";

import logo from "../../../../assets/img/logo.png";

import "./footer.scss";

const Footer = () => {
  return (
    <>
      <footer className="footer">
        <Link to={"/"} className="footer__link">
          <img src={logo} alt="logo" />
        </Link>
        <Link to={"/"} className="footer__sub-heading">
          МАЙСТЕРНЯ РЕКЛАМИ UNI PRINT
        </Link>
      </footer>
    </>
  );
};

export default Footer;
