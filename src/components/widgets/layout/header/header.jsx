import { Instagram } from "lucide-react";

import ToggleTheme from "../../../UI/togle-theme/toggle-theme";

import logoIcon from "../../../../assets/img/logo.png";

import "./header.scss";

const Header = () => {
  return (
    <>
      <header className="header">
        <img className="header__logo" src={logoIcon} alt="" />

        <ToggleTheme />

        <button className="header__burger" role="button">
          <span></span>
        </button>

        <Instagram className="header__instagram-icon" />
      </header>
    </>
  );
};

export default Header;
