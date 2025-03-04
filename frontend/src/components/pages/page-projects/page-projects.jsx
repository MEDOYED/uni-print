import Heading from "../../widgets/layout/heading/heading";
import SectionProjectsFilter from "../../widgets/sections/section-projects-filter/section-projects-filter";
import SectionProjects from "../../widgets/sections/section-projects/section-projects";
import SectionContact from "../../widgets/sections/section-contact/section-contact";

import "./page-projects.scss";

const PageProjects = () => {
  return (
    <>
      <Heading />
      <SectionProjectsFilter />
      <SectionProjects />
      <SectionContact />
    </>
  );
};

export default PageProjects;
