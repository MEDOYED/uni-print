import { MoveRight } from "lucide-react";

import kaktus from "../../../../assets/img/kaktus.jpeg";

import "./projects-section.scss";

const ProjectsSection = () => {
  return (
    <>
      <section className="projects-section">
        <ul className="list">
          <li className="list__item">
            <img className="list__item-img" src={kaktus} alt="" />
            <a className="list__item-link" href="#">
              Детальніше <MoveRight />
            </a>
          </li>

          <li className="list__item">
            <img className="list__item-img" src={kaktus} alt="" />
            <a className="list__item-link" href="#">
              Детальніше <MoveRight />
            </a>
          </li>

          <li className="list__item">
            <img className="list__item-img" src={kaktus} alt="" />
            <a className="list__item-link" href="#">
              Детальніше <MoveRight />
            </a>
          </li>

          <li className="list__item">
            <img className="list__item-img" src={kaktus} alt="" />
            <a className="list__item-link" href="#">
              Детальніше <MoveRight />
            </a>
          </li>

          <li className="list__item">
            <img className="list__item-img" src={kaktus} alt="" />
            <a className="list__item-link" href="#">
              Детальніше <MoveRight />
            </a>
          </li>

          <li className="list__item">
            <img className="list__item-img" src={kaktus} alt="" />
            <a className="list__item-link" href="#">
              Детальніше <MoveRight />
            </a>
          </li>

          <li className="list__item">
            <img className="list__item-img" src={kaktus} alt="" />
            <a className="list__item-link" href="#">
              Детальніше <MoveRight />
            </a>
          </li>

          <li className="list__item">
            <img className="list__item-img" src={kaktus} alt="" />
            <a className="list__item-link" href="#">
              Детальніше <MoveRight />
            </a>
          </li>
        </ul>
      </section>
    </>
  );
};

export default ProjectsSection;
