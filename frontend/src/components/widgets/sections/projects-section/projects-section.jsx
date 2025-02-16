import kaktus from "../../../../assets/img/kaktus.jpeg";

import "./projects-section.scss";

const ProjectsSection = () => {
  return (
    <>
      <section className="projects-section">
        <ul className="list">
          <li className="list__item">
            <img src={kaktus} alt="" />
          </li>
          <li className="list__item">
            <img src={kaktus} alt="" />
          </li>
          <li className="list__item">
            <img src={kaktus} alt="" />
          </li>
          <li className="list__item">
            <img src={kaktus} alt="" />
          </li>
          <li className="list__item">
            <img src={kaktus} alt="" />
          </li>
          <li className="list__item">
            <img src={kaktus} alt="" />
          </li>
          <li className="list__item">
            <img src={kaktus} alt="" />
          </li>
          <li className="list__item">
            <img src={kaktus} alt="" />
          </li>
        </ul>
      </section>
    </>
  );
};

export default ProjectsSection;
