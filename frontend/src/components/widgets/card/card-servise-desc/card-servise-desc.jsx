import ButtonDetails from "../../../UI/buttons/button-details/button-details";
import ButtonReadMore from "../../../UI/buttons/button-read-more/button-read-more";

import "./card-servise-desc.scss";

const CardServiseDesc = ({ heading, text, link }) => {
  return (
    <>
      <div className="card-servise-desc">
        <h2 className="card-servise-desc__heading">{heading}</h2>
        <p className="card-servise-desc__text">{text}</p>
        <ButtonDetails link={link} />
        <ButtonReadMore />
      </div>
    </>
  );
};

export default CardServiseDesc;
