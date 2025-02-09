import logoIcon from "../../../../assets/img/logo.png";

import "./header.scss";

const Header = () => {
  return (
    <>
      <header>
        <img src={logoIcon} alt="" />
        <button className="header__theme-toggle" type="button" aria-label="Переключення теми">
          <img src="" alt="" />
        </button>
        <div className="header__burger"></div>
        <img className="header__instagram-icon" src="" alt="" />
      </header>
    </>
  );
};

export default Header;
