import { createPortal } from "react-dom";
import { Link } from "react-router-dom";

import "./burger-menu.scss";

const BurgerMenu = ({ isOpen }) => {
  const menuClassName = isOpen ? "burger-menu--open" : "burger-menu";
  return createPortal(
    <div
      className={`burger-menu ${isOpen ? "burger-menu--open" : ""}`}
    >
      <div className={menuClassName}>
        <div className="line"></div>
        <ul className="list">
          <Link to={"/"} className="list__item">
            ГОЛОВНА
          </Link>
          <Link to={"/projects"} className="list__item">
            ПРОЕКТИ
          </Link>
          <Link to={"/services"} className="list__item">
            ПОСЛУГИ
          </Link>
          <Link to={"/about"} className="list__item">
            ПРО НАС
          </Link>
          {/* <Link to={""} className="list__item">
            НОВОСТИ
          </Link> */}
          {/* <Link to={""} className="list__item">
            FAQ
          </Link> */}
          <Link to={"/contacts"} className="list__item">
            КОНТАКТИ
          </Link>
        </ul>
      </div>
    </div>,
    document.getElementById("root"),
  );
};

export default BurgerMenu;
