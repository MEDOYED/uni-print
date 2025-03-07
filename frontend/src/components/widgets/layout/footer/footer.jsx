import { Link } from "react-router-dom";

import Logo from "../logo/logo";

import "./footer.scss";

const Footer = () => {
  return (
    <>
      <footer className="footer">
        <Logo />
        <Link to={"/"} className="footer__sub-heading">
          ВИРОБНИЦТВО РЕКЛАМИ UNI PRINT
        </Link>
      </footer>
    </>
  );
};

export default Footer;
