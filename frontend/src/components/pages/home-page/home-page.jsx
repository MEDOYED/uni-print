import Heading from "../../widgets/layout/heading/heading";
import SectionProjects from "../../widgets/sections/section-projects/section-projects";
import SectionTitle from "../../widgets/sections/section-title/section-title";
import SectionServise from "../../widgets/sections/section-servise/section-servise";
import AboutUs from "../../widgets/sections/about-us-section/about-us-section";

import "./home-page.scss";

const HomePage = () => {
  return (
    <>
      <div className="home-page">
        <Heading />
        <SectionTitle title="Проекти" link="Всі проекти" />
        <SectionProjects />
        <SectionTitle title="Послуги" link="Всі послуги" />
        <SectionServise />
        <AboutUs />
      </div>
    </>
  );
};

export default HomePage;
