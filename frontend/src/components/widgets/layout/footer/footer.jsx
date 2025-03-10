import { Link } from "react-router-dom";

import Logo from "../logo/logo";
import LineWhiteHorizontal from "../../../UI/line/line-white-horizontal/line-white-horizontal";

import "./footer.scss";

const Footer = () => {
  return (
    <>
      <LineWhiteHorizontal />
      <footer className="footer">
        <Logo />
        <Link to={"/"} className="footer__sub-heading">
          © ВИРОБНИЦТВО РЕКЛАМИ UNI PRINT
        </Link>
      </footer>
    </>
  );
};

export default Footer;
