import { MoveRight } from "lucide-react";

import "./card-projects.scss";

const CardProjects = ({ src }) => {
  return (
    <>
      <li className="card-projects__item">
        <img className="card-projects__item-img" src={src} alt="" />
        <a className="card-projects__item-link" href="#">
          Детальніше <MoveRight />
        </a>
      </li>
    </>
  );
};

export default CardProjects;
