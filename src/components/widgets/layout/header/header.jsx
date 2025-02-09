import { useState } from "react";

import logoIcon from "../../../../assets/img/logo.png";
import toggleThemeIcon from "../../../../assets/img/toggle-theme.svg";

import "./header.scss";

const Header = () => {
  const [theme, setTheme] = useState("dark-theme");

  const toggleTheme = () => {
    setTheme((prevTheme) => (prevTheme === "dark-theme" ? "light-theme" : "dark-theme"));
  };
  return (
    <>
      <header className={theme}>
        <img src={logoIcon} alt="" />
        <button
          className="header__theme-toggle"
          onClick={toggleTheme}
          type="button"
          aria-label="Переключення теми">
          <img src={toggleThemeIcon} alt="" />
        </button>
        <div className="header__burger"></div>
        <img className="header__instagram-icon" src="" alt="" />
      </header>
    </>
  );
};

export default Header;
