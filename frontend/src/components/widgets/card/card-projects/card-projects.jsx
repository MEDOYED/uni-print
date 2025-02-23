import { MoveRight } from "lucide-react";

import "./card-projects.scss";

const CardProjects = ({ src }) => {
  return (
    <>
      <li className="card-projects__item">
        <img className="card-projects__item-img" src={src} alt="" />
        <a className="card-projects__item-link" href="#">
          <div className="description">Виготовлення вивісок</div>
          <span className="read-more">
            Детальніше <MoveRight />
          </span>
        </a>
      </li>
    </>
  );
};

export default CardProjects;
