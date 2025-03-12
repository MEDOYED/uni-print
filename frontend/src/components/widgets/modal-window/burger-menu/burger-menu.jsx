import { createPortal } from "react-dom";
import { useLocation, Link } from "react-router-dom";
import useThemeStore from "../../../../store/themeStore";

import "./burger-menu.scss";

const BurgerMenu = ({ isOpen }) => {
  const menuClassName = isOpen ? "burger-menu--open" : "burger-menu";

  const location = useLocation();

  const locationReady = location.pathname.slice(0, 9);

  const getClassName = path =>
    locationReady === path ? "list__item active" : "list__item";

  const theme = useThemeStore(state => state.theme);

  const sectionClassName =
    theme === "light"
      ? "burger-menu__section--light"
      : "burger-menu__section";

  return createPortal(
    <section className={sectionClassName}>
      <div className={menuClassName}>
        <div className="line"></div>
        <ul className="list">
          <Link to={"/"} className={getClassName("/")}>
            ГОЛОВНА
          </Link>
          <Link
            to={"/projects"}
            className={getClassName("/projects")}
          >
            ПРОЕКТИ
          </Link>
          <Link
            to={"/services"}
            className={getClassName("/services")}
          >
            ПОСЛУГИ
          </Link>
          <Link to={"/about"} className={getClassName("/about")}>
            ПРО НАС
          </Link>
          <Link
            to={"/contacts"}
            className={getClassName("/contacts")}
          >
            КОНТАКТИ
          </Link>
        </ul>
      </div>
    </section>,
    document.getElementById("root"),
  );
};

export default BurgerMenu;
