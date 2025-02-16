import Heading from "../../widgets/layout/heading/heading";
import ProjectsSection from "../../widgets/sections/projects-section/projects-section";

import "./home-page.scss";

const HomePage = () => {
  return (
    <>
      <div className="home-page">
        <Heading />
        <ProjectsSection />
      </div>
    </>
  );
};

export default HomePage;
