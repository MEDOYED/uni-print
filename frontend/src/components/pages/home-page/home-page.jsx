import Heading from "../../widgets/layout/heading/heading";
import SectionProjects from "../../widgets/sections/section-projects/section-projects";
import TitleToSection from "../../widgets/layout/title-to-section/title-to-section";
import SectionServise from "../../widgets/sections/section-servise/section-servise";
import AboutUs from "../../widgets/sections/about-us-section/about-us-section";
import SectionOurClients from "../../widgets/sections/section-our-clients/section-our-clients";
import LineWhiteHorizontal from "../../UI/line/line-white-horizontal/line-white-horizontal";
import SectionContact from "../../widgets/sections/section-contact/section-contact";

import "./home-page.scss";

const HomePage = () => {
  return (
    <>
      <div className="home-page">
        <Heading />
        <TitleToSection
          title="Проекти"
          linkText="Всі проекти"
          link="/projects"
        />
        <SectionProjects limit={8} />
        <TitleToSection
          title="Послуги"
          linkText="Всі послуги"
          link="/services"
        />
        <SectionServise />
        <AboutUs />
        <TitleToSection title="Наші клієнти" />
        <SectionOurClients />
        <LineWhiteHorizontal />
        <SectionContact />
        <LineWhiteHorizontal />
      </div>
    </>
  );
};

export default HomePage;
