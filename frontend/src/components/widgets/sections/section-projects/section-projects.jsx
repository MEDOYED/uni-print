import { useParams } from "react-router";

import CardProjects from "../../card/card-projects/card-projects";

import projects from "../../../../assets/data/projects.json";

import "./section-projects.scss";

const mapFilter = {
  "only-projects": null,
  "only-vyvisky": "Виготовлення вивісок",
  "only-auto": "Брендування авто",
  "only-photozone": "Друк фотозон",
  "only-konstrukcii": "Рекламні конструкції і таблички",
  "only-shyrokoformat": "Широкоформатний друк",
  "only-pictures": "Друк картин на холсті",
  "only-vitryny": "Оформлення вітрин",
  "only-poligrafija": "Поліграфія",
  "only-closes": "Друк на одязі",
  "only-suveniry": "Сувенірна продукція",
  "only-rostovi-figury": "Ростові фігури",
};

const SectionProjects = ({ limit }) => {
  const { filter } = useParams();

  console.log(filter);

  const wantedDescription = mapFilter[filter];

  console.log("---------");
  console.log(wantedDescription);
  console.log("---------");

  const dislayedProjects = limit
    ? projects.slice(0, limit)
    : projects;

  const filteredProjects =
    wantedDescription === null
      ? dislayedProjects
      : dislayedProjects.filter(
          item => item.description === wantedDescription,
        );

  return (
    <>
      <section className="projects-section">
        <ul className="projects-section__card-list">
          {filteredProjects.map(project => (
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
