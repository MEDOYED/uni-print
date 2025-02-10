import ToggleTheme from "../../../UI/toggleTheme";

import logoIcon from "../../../../assets/img/logo.png";
import toggleThemeIcon from "../../../../assets/img/toggle-theme.svg";

import "./header.scss";

const Header = () => {
  return (
    <>
      <header className="bob">
        <img src={logoIcon} alt="" />

        <ToggleTheme />
        <div className="header__burger"></div>
        <img className="header__instagram-icon" src="" alt="" />
      </header>
    </>
  );
};

export default Header;
