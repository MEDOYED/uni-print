import ButtonReadMore from "../../../UI/buttons/button-read-more/button-read-more";

import "./card-servise-desc.scss";

const CardServiseDesc = ({ heading, text }) => {
  return (
    <>
      <div className="card-servise-desc">
        <h2 className="card-servise-desc__heading">{heading}</h2>
        <p className="card-servise-desc__text">{text}</p>
        <ButtonReadMore />
      </div>
    </>
  );
};

export default CardServiseDesc;
