import { useState } from "react";

import ButtonDetails from "../../../UI/buttons/button-details/button-details";
import ButtonReadMore from "../../../UI/buttons/button-read-more/button-read-more";

import "./card-servise-desc.scss";

const CardServiseDesc = ({ heading, text, link }) => {
  const [isButtonReadMoreIsActive, setIsButtonReadMoreIsActive] =
    useState(false);

  const handleActive = newIsActive => {
    setIsButtonReadMoreIsActive(newIsActive);
  };

  const textClassName =
    isButtonReadMoreIsActive === true
      ? "card-servise-desc__text--active"
      : "card-servise-desc__text";

  return (
    <>
      <div className="card-servise-desc">
        <h2 className="card-servise-desc__heading">{heading}</h2>
        <p className={textClassName}>{text}</p>
        <ButtonDetails link={link} />
        <ButtonReadMore onToggle={handleActive} />
      </div>
    </>
  );
};

export default CardServiseDesc;
