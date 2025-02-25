import { createPortal } from "react-dom";
import { Link } from "react-router";

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
            ГЛАВНАЯ
          </Link>
          <Link to={"/projects"} className="list__item">
            ПРОЕКТЫ
          </Link>
          <Link to={"/services"} className="list__item">
            УСЛУГИ
          </Link>
          <Link to={"/about"} className="list__item">
            О НАС
          </Link>
          {/* <Link to={""} className="list__item">
            НОВОСТИ
          </Link> */}
          {/* <Link to={""} className="list__item">
            FAQ
          </Link> */}
          <Link to={"/contacts"} className="list__item">
            КОНТАКТЫ
          </Link>
        </ul>
      </div>
    </div>,
    document.getElementById("burger-root"),
  );
};

export default BurgerMenu;
