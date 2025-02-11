import ToggleTheme from "../../../UI/toggle-theme";

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

        <img className="header__instagram-icon" src="" alt="" />
      </header>
    </>
  );
};

export default Header;
