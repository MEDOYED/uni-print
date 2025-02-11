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

        <button className="header__burger open" role="button">
          {/* <span></span> */}
          <svg
            width="35"
            height="35"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2.5"
            strokeLinecap="round"
            strokeLinejoin="round"
            // className="lucide lucide-menu">
            className="header__burger-svg">
            <line className="top" x1="4" x2="20" y1="12" y2="12" />
            <line className="middle" x1="4" x2="20" y1="6" y2="6" />
            <line className="bottom" x1="4" x2="20" y1="18" y2="18" />
          </svg>
        </button>

        <Instagram className="header__instagram-icon" />
      </header>
    </>
  );
};

export default Header;
