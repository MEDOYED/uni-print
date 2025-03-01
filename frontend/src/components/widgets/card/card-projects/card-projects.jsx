import ButtonReadMore from "../../../UI/buttons/button-read-more/button-read-more";

import "./card-projects.scss";

const CardProjects = ({ src, description }) => {
  return (
    <>
      <li className="card-projects__item">
        <img className="card-projects__item-img" src={src} alt="" />
        <a className="card-projects__item-link" href="#">
          <div className="description">{description}</div>
          <ButtonReadMore />
        </a>
      </li>
    </>
  );
};

export default CardProjects;
