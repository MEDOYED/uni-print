import { Instagram } from "lucide-react";
import { useState, useEffect } from "react";

import ToggleTheme from "../../../UI/togle-theme/toggle-theme";
import BurgerMenu from "../../modal-window/burger-menu/burger-menu";
import Logo from "../logo/logo";
import IconViber from "../../../UI/svg/icon-viber/icon-viber";

import "./header.scss";

const vwOnFirstRender = window.visualViewport.width;

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [viewportWidth, setViewportWidth] = useState(vwOnFirstRender);

  const toggleBurger = () => {
    setIsOpen(isOpen => (isOpen === false ? true : false));
    // setIsOpen((prev) => !prev);  // more correct
  };

  useEffect(() => {
    const handleResize = () => {
      setViewportWidth(window.visualViewport.width);
    };

    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return (
    <>
      <header className="header">
        <div className="header__logo">
          <Logo />
        </div>

        <ToggleTheme />

        <button
          className={`header__burger  ${
            isOpen === true ? "open" : ""
          }`}
          role="button"
          onClick={toggleBurger}
        >
          <svg
            className="header__burger-svg"
            width="35"
            height="35"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2.5"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <line className="top" x1="4" x2="20" y1="6" y2="6" />
            <line className="middle" x1="4" x2="20" y1="12" y2="12" />
            <line className="bottom" x1="4" x2="20" y1="18" y2="18" />
          </svg>
        </button>

        {viewportWidth > 650 && (
          <a
            href="https://www.instagram.com/uniprint_lviv?igsh=amRlMGp5NjB5b3Vl"
            target="_blank"
          >
            <IconViber />
          </a>
        )}

        <a
          href="https://www.instagram.com/uniprint_lviv?igsh=amRlMGp5NjB5b3Vl"
          target="_blank"
        >
          <Instagram className="header__instagram-icon" />
        </a>

        <BurgerMenu isOpen={isOpen} />
      </header>
    </>
  );
};

export default Header;
