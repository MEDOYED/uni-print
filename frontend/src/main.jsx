import ReactDOM from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router";

import App from "./components/app/App.jsx";

import HomePage from "./components/pages/home-page/home-page.jsx";
import PageProjects from "./components/pages/page-projects/page-projects.jsx";
import PageServices from "./components/pages/page-services/page-services.jsx";
import PageAbout from "./components/pages/page-about/page-about.jsx";
import PageContacts from "./components/pages/page-contacts/page-contacts.jsx";

import "leaflet/dist/leaflet.css";
import "./main.css";

const root = document.getElementById("root");

ReactDOM.createRoot(root).render(
  <BrowserRouter>
    <Routes>
      <Route path="/" element={<App />}>
        <Route index element={<HomePage />} />
        <Route path="projects/:filter?" element={<PageProjects />} />
        <Route path="services" element={<PageServices />} />
        <Route path="about" element={<PageAbout />} />
        <Route path="contacts" element={<PageContacts />} />
      </Route>
    </Routes>
  </BrowserRouter>,
);
