import { MoveRight } from "lucide-react";

import CardProjects from "../../card/card-projects/card-projects";

import kaktus from "../../../../assets/img/kaktus.jpeg";

import "./projects-section.scss";

const ProjectsSection = () => {
  return (
    <>
      <section className="projects-section">
        <ul className="list">
          <CardProjects src={kaktus} />
          <CardProjects src={kaktus} />
          <CardProjects src={kaktus} />
          <CardProjects src={kaktus} />
          <CardProjects src={kaktus} />
          <CardProjects src={kaktus} />
          <CardProjects src={kaktus} />
          <CardProjects src={kaktus} />
        </ul>
      </section>
    </>
  );
};

export default ProjectsSection;
