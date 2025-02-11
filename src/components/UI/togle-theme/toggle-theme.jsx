import useThemeStore from "../../../store/themeStore";
import { Sun, Moon } from "lucide-react";

import "./toggle-theme.css";

const ToggleTheme = () => {
  const { theme, toggleTheme } = useThemeStore();

  return (
    <>
      <button
        className="header__theme-toggle"
        onClick={toggleTheme}
        type="button"
        aria-label="Переключення теми">
        {/* <img src={toggleThemeIcon} alt="" /> */}
        {theme === "light" ? <Moon size={24} /> : <Sun size={24} />}
      </button>
    </>
  );
};

export default ToggleTheme;
