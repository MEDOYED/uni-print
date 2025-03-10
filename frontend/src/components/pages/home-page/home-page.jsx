import Heading from "../../widgets/layout/heading/heading";
import SectionProjects from "../../widgets/sections/section-projects/section-projects";
import TitleToSection from "../../widgets/layout/title-to-section/title-to-section";
import SectionServise from "../../widgets/sections/section-servise/section-servise";
import AboutUs from "../../widgets/sections/about-us-section/about-us-section";
import LineWhiteHorizontal from "../../UI/line/line-white-horizontal/line-white-horizontal";
import SectionContact from "../../widgets/sections/section-contact/section-contact";
import Footer from "../../widgets/layout/footer/footer";

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

        <LineWhiteHorizontal />
        <SectionContact
          title={"Залишились питання?\nПотрібна консультація?"}
        />
        <Footer />
      </div>
    </>
  );
};

export default HomePage;
