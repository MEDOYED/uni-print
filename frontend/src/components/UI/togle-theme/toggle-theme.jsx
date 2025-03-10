import useThemeStore from "../../../store/themeStore";
import { Sun, Moon } from "lucide-react";

import "./toggle-theme.scss";

const ToggleTheme = () => {
  const { theme, toggleTheme } = useThemeStore();

  return (
    <>
      <button
        className="icon-toggle-theme"
        onClick={toggleTheme}
        type="button"
        aria-label="Переключення теми"
      >
        {theme === "light" ? (
          <Moon className="icon-toggle-theme__icon" size={30} />
        ) : (
          <Sun className="icon-toggle-theme__icon" size={30} />
        )}
      </button>
    </>
  );
};

export default ToggleTheme;
