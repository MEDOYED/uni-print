import ButtonReadMore from "../../../UI/buttons/button-read-more/button-read-more";

import "./card-projects.scss";

const CardProjects = ({ src, description }) => {
  return (
    <>
      <li className="card-projects__item">
        <img className="card-projects__item-img" src={src} alt="" />
        <div
          className="card-projects__item-link"
          onClick={() => navigate("/projects")}
        >
          <div className="description">{description}</div>
          <ButtonReadMore />
        </div>
      </li>
    </>
  );
};

export default CardProjects;
