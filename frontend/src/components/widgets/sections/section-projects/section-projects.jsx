import CardProjects from "../../card/card-projects/card-projects";

import projects from "../../../../assets/data/projects.json";

import "./section-projects.scss";

const SectionProjects = () => {
  return (
    <>
      <section className="projects-section">
        <ul className="list">
          {projects
            .filter(project => project.id < 9)
            .map(project => (
              <CardProjects
                key={project.id}
                src={project.src}
                description={project.description}
              />
            ))}
        </ul>
      </section>
    </>
  );
};

export default SectionProjects;
