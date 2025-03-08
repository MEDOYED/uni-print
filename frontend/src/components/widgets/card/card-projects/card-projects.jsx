import { useNavigate } from "react-router-dom";

import ButtonReadMore from "../../../UI/buttons/button-read-more/button-read-more";

import "./card-projects.scss";

const CardProjects = ({ src, description, link }) => {
  const navigate = useNavigate();
  return (
    <>
      <li className="card-projects__item">
        <img className="card-projects__item-img" src={src} alt="" />
        <div
          className="card-projects__item-link"
          onClick={() => navigate(link)}
        >
          <div className="description">{description}</div>
          <ButtonReadMore link={link} />
        </div>
      </li>
    </>
  );
};

export default CardProjects;
