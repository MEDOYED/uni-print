import CardProjects from "../../card/card-projects/card-projects";

import projects from "../../../../assets/data/projects.json";

import "./section-projects.scss";

const SectionProjects = ({ limit }) => {
  const dislayedProjects = limit
    ? projects.slice(0, limit)
    : projects;

  return (
    <>
      <section className="projects-section">
        <ul className="projects-section__card-list">
          {dislayedProjects.map(project => (
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
