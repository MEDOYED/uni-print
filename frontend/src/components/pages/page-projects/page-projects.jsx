import Heading from "../../widgets/layout/heading/heading";
import SectionProjects from "../../widgets/sections/section-projects/section-projects";
import SectionContact from "../../widgets/sections/section-contact/section-contact";

import "./page-projects.scss";

const PageProjects = () => {
  return (
    <>
      <Heading />
      <SectionProjects />
      <SectionContact />
    </>
  );
};

export default PageProjects;
