import { useEffect } from "react";
import { Outlet } from "react-router";

import useThemeStore from "../../store/themeStore";

import Header from "../widgets/layout/header/header";
import HomePage from "../pages/home-page/home-page";

import "./app.scss";

function App() {
  const { theme } = useThemeStore();

  useEffect(() => {
    document.documentElement.setAttribute("data-theme", theme);
  }, [theme]);

  return (
    <div className="container">
      <Header />
      <div className="page-wrapper">
        <Outlet />
      </div>
    </div>
  );
}

export default App;
