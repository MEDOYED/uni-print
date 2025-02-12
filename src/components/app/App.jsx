import { useEffect } from "react";

import useThemeStore from "../../store/themeStore";

import Header from "../widgets/layout/header/header";
import HomePage from "../pages/home-page/home-page";

import "./app.css";

function App() {
  const { theme } = useThemeStore();

  useEffect(() => {
    document.documentElement.setAttribute("data-theme", theme);
  }, [theme]);

  return (
    <>
      <div className="container">
        <Header />
        <HomePage />
      </div>
    </>
  );
}

export default App;
