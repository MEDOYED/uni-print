import { useState } from "react";

import CardProjects from "../../card/card-projects/card-projects";

import projects from "../../../../assets/data/projects.json";

import "./section-projects.scss";

const SectionProjects = ({ limit }) => {
  const [activeBtn, setActiveBtn] = useState(false);

  const handleChangeState = () => {
    setActiveBtn(prevState => !prevState);
  };

  const classNameItemBtn = activeBtn
    ? "projects-section__btn-item active"
    : "projects-section__btn-item";

  const dislayedProjects = limit
    ? projects.slice(0, limit)
    : projects;

  return (
    <>
      <section className="projects-section">
        <ul className="projects-section__btn-list">
          <li
            className={classNameItemBtn}
            onClick={handleChangeState}
          >
            <button className="projects-section__btn">
              Всі проекти
            </button>
          </li>
          <li
            className={classNameItemBtn}
            onClick={handleChangeState}
          >
            <button className="projects-section__btn">
              Виготовлення вивісок
            </button>
          </li>
          <li
            className={classNameItemBtn}
            onClick={handleChangeState}
          >
            <button className="projects-section__btn">
              Брендування авто
            </button>
          </li>
          <li
            className={classNameItemBtn}
            onClick={handleChangeState}
          >
            <button className="projects-section__btn">
              Друк фотозон
            </button>
          </li>
          <li
            className={classNameItemBtn}
            onClick={handleChangeState}
          >
            <button className="projects-section__btn">
              Рекламні конструкції і таблички
            </button>
          </li>
          <li
            className={classNameItemBtn}
            onClick={handleChangeState}
          >
            <button className="projects-section__btn">
              Широкоформатний друк
            </button>
          </li>
          <li
            className={classNameItemBtn}
            onClick={handleChangeState}
          >
            <button className="projects-section__btn">
              Друк картин на холсті
            </button>
          </li>
          <li
            className={classNameItemBtn}
            onClick={handleChangeState}
          >
            <button className="projects-section__btn">
              Оформлення вітрин
            </button>
          </li>
          <li
            className={classNameItemBtn}
            onClick={handleChangeState}
          >
            <button className="projects-section__btn">
              Поліграфія
            </button>
          </li>
        </ul>
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
