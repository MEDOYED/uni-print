import Heading from "../../widgets/layout/heading/heading";
import SectionProjects from "../../widgets/sections/section-projects/section-projects";
import TitleToSection from "../../widgets/layout/title-to-section/title-to-section";
import SectionServise from "../../widgets/sections/section-servise/section-servise";
import AboutUs from "../../widgets/sections/about-us-section/about-us-section";
import SectionOurClients from "../../widgets/sections/section-our-clients/section-our-clients";

import "./home-page.scss";

const HomePage = () => {
  return (
    <>
      <div className="home-page">
        <Heading />
        <TitleToSection title="Проекти" link="Всі проекти" />
        <SectionProjects />
        <TitleToSection title="Послуги" link="Всі послуги" />
        <SectionServise />
        <AboutUs />
        <TitleToSection title="Наші клієнти" />
        <SectionOurClients />
      </div>
    </>
  );
};

export default HomePage;
