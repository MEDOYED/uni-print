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
        {theme === "light" ? <Moon size={30} /> : <Sun size={30} />}
      </button>
    </>
  );
};

export default ToggleTheme;
