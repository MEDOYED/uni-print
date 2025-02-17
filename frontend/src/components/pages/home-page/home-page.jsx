import Heading from "../../widgets/layout/heading/heading";
import ProjectsSection from "../../widgets/sections/projects-section/projects-section";
import SectionTitle from "../../widgets/sections/section-title/section-title";

import "./home-page.scss";

const HomePage = () => {
  return (
    <>
      <div className="home-page">
        <Heading />
        <SectionTitle title={"Проекти"} link={"Всі проекти"} />
        <ProjectsSection />
      </div>
    </>
  );
};

export default HomePage;
